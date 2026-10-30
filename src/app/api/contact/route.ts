import { NextResponse } from "next/server";
import { db } from "@/lib/db";

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
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      return NextResponse.json(
        { ok: false, error: "Invalid email" },
        { status: 400 }
      );
    }

    const record = await db.demoRequest.create({
      data: {
        name,
        school,
        email,
        phone,
        role,
        students,
        message,
      },
    });

    return NextResponse.json({ ok: true, id: record.id });
  } catch (err) {
    console.error("[/api/contact] error", err);
    return NextResponse.json(
      { ok: false, error: "Server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const count = await db.demoRequest.count();
    return NextResponse.json({ ok: true, total: count });
  } catch (err) {
    console.error("[/api/contact] GET error", err);
    return NextResponse.json({ ok: true, total: 0 });
  }
}
