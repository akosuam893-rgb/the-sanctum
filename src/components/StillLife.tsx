type Variant = 'concierge' | 'journal' | 'edit' | 'dinner' | 'sanctuary' | 'spa'

/**
 * Warm, minimal still-life illustrations rendered as inline SVG so the app
 * stays self-contained (no external image requests). Each variant evokes the
 * soft, sculptural photography of the mockups.
 */
export default function StillLife({
  variant,
  className,
}: {
  variant: Variant
  className?: string
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Still life"
    >
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#d8c7b8" />
          <stop offset="0.55" stopColor="#c9b4a4" />
          <stop offset="1" stopColor="#bda393" />
        </linearGradient>
        <linearGradient id="floor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e7dccd" />
          <stop offset="1" stopColor="#d4c3b1" />
        </linearGradient>
        <radialGradient id="glow" cx="0.5" cy="0.35" r="0.7">
          <stop offset="0" stopColor="#efe6d8" stopOpacity="0.9" />
          <stop offset="1" stopColor="#efe6d8" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="400" height="300" fill="url(#bg)" />
      <ellipse cx="200" cy="90" rx="220" ry="150" fill="url(#glow)" />
      <rect y="196" width="400" height="104" fill="url(#floor)" />

      {variant === 'concierge' && <Concierge />}
      {variant === 'journal' && <Journal />}
      {variant === 'edit' && <Edit />}
      {variant === 'dinner' && <Dinner />}
      {variant === 'sanctuary' && <Sanctuary />}
      {variant === 'spa' && <Spa />}
    </svg>
  )
}

const shadow = 'rgba(120,98,82,0.28)'

function Concierge() {
  return (
    <g>
      <ellipse cx="205" cy="212" rx="120" ry="20" fill={shadow} />
      {/* plate */}
      <ellipse cx="205" cy="205" rx="112" ry="26" fill="#e9ddce" />
      <ellipse cx="205" cy="200" rx="112" ry="26" fill="#f1e8db" />
      {/* vase */}
      <path d="M150 200c-6-16-6-30 12-34 18-4 26 8 22 26-2 8-8 12-16 12s-15-1-18-4Z" fill="#efe7da" />
      {/* flowers */}
      {[[150, 150], [168, 146], [158, 138], [176, 158], [144, 160]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="11" fill="#f4eee4" opacity="0.95" />
      ))}
      <circle cx="158" cy="150" r="7" fill="#e8dccb" />
      {/* card */}
      <rect x="228" y="150" width="76" height="58" rx="4" fill="#f3ebde" />
      <rect x="228" y="150" width="76" height="58" rx="4" fill="none" stroke="#e0d2bf" />
      <text x="266" y="176" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontSize="12" letterSpacing="1.5" fill="#b09a6b">THE</text>
      <text x="266" y="192" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontSize="12" letterSpacing="1.5" fill="#b09a6b">SANCTUM</text>
    </g>
  )
}

function Journal() {
  return (
    <g>
      <ellipse cx="180" cy="228" rx="150" ry="22" fill={shadow} />
      {/* book */}
      <rect x="120" y="70" width="120" height="158" rx="6" fill="#c7a091" />
      <rect x="120" y="70" width="120" height="158" rx="6" fill="none" stroke="#b8917f" />
      <rect x="132" y="70" width="10" height="158" fill="#bd9382" opacity="0.6" />
      <text x="186" y="140" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontSize="15" letterSpacing="2" fill="#efe4d6">THE</text>
      <text x="186" y="162" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontSize="15" letterSpacing="2" fill="#efe4d6">SANCTUM</text>
      <path d="M186 176l3 8 8 3-8 3-3 8-3-8-8-3 8-3 3-8Z" fill="#efe4d6" opacity="0.8" />
      {/* candle */}
      <rect x="266" y="150" width="34" height="78" rx="5" fill="#efe7da" />
      {[270, 278, 286, 294].map((x) => (
        <rect key={x} x={x} y="150" width="3" height="78" fill="#e2d6c6" opacity="0.7" />
      ))}
      <rect x="281" y="132" width="4" height="12" fill="#8a7358" />
      <path d="M283 118c5 6 5 12 0 16-5-4-5-10 0-16Z" fill="#e9b978" />
    </g>
  )
}

function Edit() {
  return (
    <g>
      <ellipse cx="200" cy="230" rx="150" ry="22" fill={shadow} />
      {/* arch niche */}
      <path d="M150 60a55 55 0 0 1 110 0v168H150Z" fill="#e4d7c6" opacity="0.7" />
      {/* book */}
      <rect x="150" y="96" width="104" height="132" rx="6" fill="#c7a091" />
      <rect x="162" y="96" width="9" height="132" fill="#bd9382" opacity="0.6" />
      <text x="205" y="158" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontSize="14" letterSpacing="2" fill="#efe4d6">THE</text>
      <text x="205" y="178" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontSize="14" letterSpacing="2" fill="#efe4d6">SANCTUM</text>
      {/* bowl */}
      <path d="M266 206c0 12 12 22 26 22s26-10 26-22Z" fill="#e7dccd" />
      <ellipse cx="292" cy="206" rx="26" ry="6" fill="#f1e8db" />
    </g>
  )
}

function Dinner() {
  return (
    <g>
      <ellipse cx="200" cy="232" rx="150" ry="20" fill={shadow} />
      {/* arch light */}
      <path d="M250 40a60 60 0 0 1 120 0v190H250Z" fill="#e6d9c8" opacity="0.65" />
      {/* branch vase */}
      <path d="M120 190c-5-14-5-26 10-30 15-4 22 6 19 22-2 8-7 12-14 12s-13-1-15-4Z" fill="#efe7da" />
      <path d="M132 162c-4-16-2-30 4-44M132 162c-6-10-14-16-22-18M132 168c6-8 14-12 24-12" stroke="#c8b49f" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {[110, 158, 138].map((x, i) => (
        <circle key={i} cx={x} cy={i === 0 ? 132 : i === 1 ? 146 : 116} r="4" fill="#efe7da" />
      ))}
    </g>
  )
}

function Sanctuary() {
  return (
    <g>
      <ellipse cx="200" cy="234" rx="150" ry="20" fill={shadow} />
      {/* sculptural vessel */}
      <path d="M164 226c-14 0-26-18-26-46 0-30 20-52 62-52 30 0 44 16 44 40 0 34-18 58-44 58Z" fill="#ece2d3" />
      <path d="M164 226c-14 0-26-18-26-46 0-30 20-52 62-52" fill="none" stroke="#dccbb7" strokeWidth="1.4" opacity="0.7" />
      {/* small bowl */}
      <path d="M250 206c0 12 11 20 24 20s24-8 24-20Z" fill="#e4d8c8" />
      <ellipse cx="274" cy="206" rx="24" ry="6" fill="#efe6d8" />
    </g>
  )
}

function Spa() {
  return (
    <g>
      <ellipse cx="200" cy="232" rx="150" ry="20" fill={shadow} />
      {/* arch */}
      <path d="M250 44a58 58 0 0 1 116 0v186H250Z" fill="#e6d9c8" opacity="0.6" />
      {/* vase + branch */}
      <path d="M150 200c-6-16-4-30 12-34 16-4 24 8 20 26-2 8-8 12-16 12s-13-1-16-4Z" fill="#efe7da" />
      <path d="M162 168c-2-18 0-34 6-50M162 172c-8-8-16-12-26-12" stroke="#c8b49f" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {[[168, 118], [150, 150], [176, 140]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="4.5" fill="#efe7da" />
      ))}
    </g>
  )
}
