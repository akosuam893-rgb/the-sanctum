export default function Logo({ size = 88 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size * 1.25}
      viewBox="0 0 88 110"
      fill="none"
      aria-label="The Sanctum monogram"
      role="img"
    >
      {/* Arch / niche */}
      <path
        d="M12 108V50C12 32.3 26.3 18 44 18C61.7 18 76 32.3 76 50V108"
        stroke="var(--gold)"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.9"
      />
      {/* Top ornament */}
      <path
        d="M44 4L46.2 9.8L52 12L46.2 14.2L44 20L41.8 14.2L36 12L41.8 9.8L44 4Z"
        fill="var(--gold)"
        opacity="0.95"
      />
      {/* S monogram */}
      <text
        x="44"
        y="82"
        textAnchor="middle"
        fontFamily="Cormorant Garamond, serif"
        fontSize="58"
        fontStyle="italic"
        fontWeight="500"
        fill="var(--gold)"
      >
        S
      </text>
    </svg>
  )
}
