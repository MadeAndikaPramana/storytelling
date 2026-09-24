// Ilustrasi dekoratif biji kopi (aria-hidden karena foto hero sudah punya alt text).
function Bean({ x, y, r, s = 1 }: { x: number; y: number; r: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`}>
      <ellipse cx="0" cy="0" rx="34" ry="48" fill="url(#bean)" stroke="#C89B5C" strokeOpacity=".35" strokeWidth="1.2" />
      <path d="M2 -44 C -18 -18, 20 16, -2 44" fill="none" stroke="#17100D" strokeWidth="5" strokeLinecap="round" />
      <path d="M4 -42 C -14 -18, 22 14, 0 42" fill="none" stroke="#C89B5C" strokeOpacity=".3" strokeWidth="1" />
    </g>
  );
}

export default function CoffeeBeans({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 200" className={className} aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id="bean" cx="35%" cy="30%" r="80%">
          <stop offset="0" stopColor="#6B4128" />
          <stop offset=".6" stopColor="#3A2216" />
          <stop offset="1" stopColor="#1E120C" />
        </radialGradient>
      </defs>
      <Bean x={150} y={70} r={28} />
      <Bean x={78} y={120} r={-38} s={0.82} />
      <Bean x={170} y={160} r={70} s={0.6} />
    </svg>
  );
}
