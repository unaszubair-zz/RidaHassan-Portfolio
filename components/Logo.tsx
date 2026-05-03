export function LogoMark({ size = 40 }: { size?: number }) {
  const s = size;
  return (
    <svg
      width={s}
      height={s}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Left amber filled bar */}
      <rect x="0" y="4" width="13" height="32" rx="2.5" fill="#C98A14" />
      {/* Decorative cut-out lines to suggest form */}
      <rect x="2.5" y="8" width="8" height="2" rx="1" fill="rgba(0,0,0,0.35)" />
      <rect x="2.5" y="13" width="8" height="1.5" rx="0.75" fill="rgba(0,0,0,0.25)" />
      <rect x="2.5" y="20" width="5" height="12" rx="1" fill="rgba(0,0,0,0.3)" />

      {/* Back square (overlapping) */}
      <rect
        x="19"
        y="1"
        width="19"
        height="19"
        rx="2.5"
        fill="rgba(201,138,20,0.08)"
        stroke="rgba(201,138,20,0.4)"
        strokeWidth="1.2"
      />
      {/* Middle square */}
      <rect
        x="15"
        y="10"
        width="19"
        height="19"
        rx="2.5"
        fill="rgba(201,138,20,0.14)"
        stroke="rgba(201,138,20,0.6)"
        strokeWidth="1.2"
      />
      {/* Front square */}
      <rect
        x="11"
        y="19"
        width="19"
        height="19"
        rx="2.5"
        fill="rgba(201,138,20,0.2)"
        stroke="#C98A14"
        strokeWidth="1.4"
      />
    </svg>
  );
}

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark size={40} />
      <div className="leading-tight">
        <div
          className="font-bold text-sm tracking-wide"
          style={{ color: "var(--white)", fontSize: "0.95rem" }}
        >
          Rida Hasan
        </div>
        <div
          style={{ color: "var(--muted)", fontSize: "0.65rem", letterSpacing: "0.03em" }}
        >
          UI UX &amp; Branding Designer
        </div>
      </div>
    </div>
  );
}
