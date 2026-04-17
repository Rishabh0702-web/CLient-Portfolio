'use client';

interface ChemistryAtomProps {
  size?: number;
  orbits?: number;
  color?: string;
  elementColor?: string;
  symbol?: string;
}

export default function ChemistryAtom({
  size = 100,
  orbits = 2,
  color = '#c41a1a',
  elementColor = '#d4520a',
  symbol = '',
}: ChemistryAtomProps) {
  const cx = size / 2;
  const cy = size / 2;
  const nucleusR = size * 0.1;
  const orbitRadiusX = size * 0.38;
  const orbitRadiusY = size * 0.15;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      aria-hidden="true"
    >
      {/* Nucleus */}
      <circle cx={cx} cy={cy} r={nucleusR} fill={color} opacity="0.85">
        <animate attributeName="r" values={`${nucleusR};${nucleusR * 1.3};${nucleusR}`} dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.85;1;0.85" dur="2s" repeatCount="indefinite" />
      </circle>

      {/* Nucleus glow */}
      <circle cx={cx} cy={cy} r={nucleusR * 1.8} fill={color} opacity="0.15">
        <animate attributeName="r" values={`${nucleusR * 1.8};${nucleusR * 2.2};${nucleusR * 1.8}`} dur="2s" repeatCount="indefinite" />
      </circle>

      {symbol && (
        <text x={cx} y={cy + 1} textAnchor="middle" dominantBaseline="middle" fill="white" fontSize={nucleusR * 1.1} fontWeight="bold">
          {symbol}
        </text>
      )}

      {/* Orbit paths */}
      {Array.from({ length: orbits }).map((_, i) => {
        const rotateAngle = (i * 180) / orbits;
        const duration = 3 + i * 1.5;
        const electronId = `e-${i}-${size}`;

        return (
          <g key={i} transform={`rotate(${rotateAngle} ${cx} ${cy})`}>
            {/* Orbit ellipse */}
            <ellipse
              cx={cx} cy={cy}
              rx={orbitRadiusX} ry={orbitRadiusY}
              stroke={color} strokeWidth="0.8" strokeOpacity="0.35"
              strokeDasharray="3 2"
            />

            {/* Electron */}
            <circle r={nucleusR * 0.45} fill={elementColor}>
              <animateMotion
                dur={`${duration}s`}
                repeatCount="indefinite"
                path={`M ${cx - orbitRadiusX},${cy} a ${orbitRadiusX},${orbitRadiusY} 0 1,1 ${orbitRadiusX * 2},0 a ${orbitRadiusX},${orbitRadiusY} 0 1,1 ${-orbitRadiusX * 2},0`}
              />
              <animate attributeName="opacity" values="0.8;1;0.8" dur={`${duration * 0.5}s`} repeatCount="indefinite" />
            </circle>
          </g>
        );
      })}
    </svg>
  );
}
