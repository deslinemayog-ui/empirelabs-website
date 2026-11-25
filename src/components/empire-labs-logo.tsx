import { cn } from "@/lib/utils";

interface EmpireLabsMarkProps {
  className?: string;
}

export function EmpireLabsMark({ className }: EmpireLabsMarkProps) {
  return (
    <span
      className={cn(
        "relative inline-flex size-9 shrink-0 overflow-hidden rounded-xl border border-primary/30 bg-[#0B0F19] shadow-sm",
        className,
      )}
    >
      <img
        src="/logo-mark.png"
        alt="Empire Labs crown emblem"
        className="size-full object-cover"
        width={64}
        height={64}
      />
    </span>
  );
}

interface EmpireLabsLogoProps {
  className?: string;
  markClassName?: string;
  showLocationTag?: boolean;
}

export function EmpireLabsLogo({
  className,
  markClassName,
  showLocationTag = false,
}: EmpireLabsLogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <EmpireLabsMark className={markClassName} />
      <span className="flex items-baseline gap-2.5">
        <span className="font-display text-base font-bold tracking-tight text-foreground">
          Empire<span className="text-primary">Labs</span>
        </span>
        {showLocationTag && (
          <span className="hidden font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground sm:inline">
            JHB // ZA
          </span>
        )}
      </span>
    </span>
  );
}
