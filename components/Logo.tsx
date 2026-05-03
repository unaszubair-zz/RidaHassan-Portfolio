export function LogoMark({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Back square */}
      <rect
        x="12"
        y="2"
        width="26"
        height="26"
        rx="3"
        fill="rgba(201,138,20,0.08)"
        stroke="rgba(201,138,20,0.45)"
        strokeWidth="1.2"
      />
      {/* Middle square */}
      <rect
        x="6"
        y="8"
        width="26"
        height="26"
        rx="3"
        fill="rgba(201,138,20,0.12)"
        stroke="rgba(201,138,20,0.6)"
        strokeWidth="1.2"
      />
      {/* Front square */}
      <rect
        x="0"
        y="14"
        width="26"
        height="26"
        rx="3"
        fill="rgba(201,138,20,0.18)"
        stroke="#C98A14"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark size={36} />
      <div className="leading-tight">
        <div className="font-semibold text-sm text-white tracking-wide">
          Rida Hasan
        </div>
        <div className="text-xs" style={{ color: "var(--muted)", fontSize: "0.68rem" }}>
          UI/UX &amp; Branding Designer
        </div>
      </div>
    </div>
  );
}
