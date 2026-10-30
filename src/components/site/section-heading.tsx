import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
  className,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
  light?: boolean;
}) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center mx-auto max-w-3xl" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em]",
            light
              ? "bg-white/10 text-white/80 ring-1 ring-white/15"
              : "bg-brand-blue/10 text-brand-blue ring-1 ring-brand-blue/15"
          )}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-current" />
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "font-display text-3xl font-extrabold leading-[1.12] tracking-tight sm:text-4xl md:text-[2.85rem]",
          light ? "text-white" : "text-brand-navy"
        )}
      >
        {title}{" "}
        {highlight && <span className="text-gradient-brand">{highlight}</span>}
      </h2>
      {description && (
        <p
          className={cn(
            "text-base leading-relaxed sm:text-lg",
            light ? "text-white/75" : "text-muted-foreground",
            align === "center" ? "max-w-2xl" : "max-w-2xl"
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
