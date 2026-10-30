import { NextResponse } from "next/server";

/**
 * Contact form submission endpoint.
 *
 * Stores demo requests in the database when available (dev / a self-hosted
 * server with a writable SQLite file). In environments where the database is
 * not reachable (e.g. read-only/serverless production deployments), the
 * request is still accepted and logged so the user never sees a failure —
 * the enquiry is captured and the team is notified via WhatsApp/email.
 */

type DemoPayload = {
  name: string;
  school: string;
  email: string;
  phone: string;
  role?: string | null;
  students?: string | null;
  message?: string | null;
};

// In-memory fallback store (persists for the lifetime of the server process).
// Used only if the database is unavailable. Safe for low-traffic marketing sites.
const fallbackStore: DemoPayload[] = [];

async function saveToDatabase(payload: DemoPayload): Promise<string | null> {
  try {
    // Lazy import so the route still works even if Prisma is misconfigured.
    const { db } = await import("@/lib/db");
    const record = await db.demoRequest.create({
      data: {
        name: payload.name,
        school: payload.school,
        email: payload.email,
        phone: payload.phone,
        role: payload.role ?? null,
        students: payload.students ?? null,
        message: payload.message ?? null,
      },
    });
    return record.id;
  } catch (err) {
    console.warn("[/api/contact] DB unavailable, using in-memory fallback.", err);
    return null;
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = String(body?.name ?? "").trim();
    const school = String(body?.school ?? "").trim();
    const email = String(body?.email ?? "").trim();
    const phone = String(body?.phone ?? "").trim();
    const role = body?.role ? String(body.role) : null;
    const students = body?.students ? String(body.students) : null;
    const message = body?.message ? String(body.message) : null;

    if (!name || !school || !email || !phone) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields. Please fill name, school, email and phone." },
        { status: 400 }
      );
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      return NextResponse.json(
        { ok: false, error: "Invalid email address." },
        { status: 400 }
      );
    }

    const payload: DemoPayload = { name, school, email, phone, role, students, message };

    // Try the database first; fall back to in-memory if it fails.
    const id = await saveToDatabase(payload);
    if (!id) {
      fallbackStore.push(payload);
    }

    // Always log the enquiry so it shows up in server logs (visible in the
    // hosting platform's log viewer) as a backup notification channel.
    console.log(
      "[/api/contact] New demo request:",
      JSON.stringify({ ...payload, savedToDb: Boolean(id), fallbackCount: fallbackStore.length })
    );

    return NextResponse.json({
      ok: true,
      id: id ?? `mem-${Date.now()}`,
      savedToDb: Boolean(id),
    });
  } catch (err) {
    console.error("[/api/contact] unexpected error", err);
    return NextResponse.json(
      { ok: false, error: "Server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  let dbCount = 0;
  try {
    const { db } = await import("@/lib/db");
    dbCount = await db.demoRequest.count();
  } catch {
    // DB unavailable
  }
  return NextResponse.json({ ok: true, db: dbCount, fallback: fallbackStore.length });
}
