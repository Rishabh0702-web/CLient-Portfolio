'use client';

import { useEffect, useRef } from 'react';

interface ChemistryMoleculeProps {
  type?: 'benzene' | 'water' | 'methane' | 'co2';
  size?: number;
  className?: string;
  animated?: boolean;
  color?: string;
}

export default function ChemistryMolecule({
  type = 'benzene',
  size = 120,
  className = '',
  animated = true,
  color = '#dc2626',
}: ChemistryMoleculeProps) {
  if (type === 'benzene') {
    const cx = size / 2;
    const cy = size / 2;
    const r = size * 0.35;
    const atomR = size * 0.07;
    const atoms = Array.from({ length: 6 }, (_, i) => {
      const angle = (i * 60 - 90) * (Math.PI / 180);
      return { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) };
    });

    return (
      <svg width={size} height={size} className={`${animated ? 'animate-molecule-spin' : ''} ${className}`} viewBox={`0 0 ${size} ${size}`}>
        {/* Bonds */}
        {atoms.map((atom, i) => {
          const next = atoms[(i + 1) % 6];
          return (
            <line
              key={`bond-${i}`}
              x1={atom.x} y1={atom.y} x2={next.x} y2={next.y}
              stroke={color} strokeWidth={size * 0.025} strokeOpacity={0.7}
              className={animated ? 'animate-bond-glow' : ''}
            />
          );
        })}
        {/* Inner ring (alternating double bonds) */}
        <circle cx={cx} cy={cy} r={r * 0.6} fill="none" stroke={color} strokeWidth={size * 0.015} strokeOpacity={0.4} strokeDasharray="8 4" />
        {/* Atoms */}
        {atoms.map((atom, i) => (
          <circle
            key={`atom-${i}`}
            cx={atom.x} cy={atom.y} r={atomR}
            fill={color} fillOpacity={0.85}
            className={animated ? 'animate-atom-pulse' : ''}
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
        {/* Center glow */}
        <circle cx={cx} cy={cy} r={size * 0.1} fill={color} fillOpacity={0.08} />
      </svg>
    );
  }

  if (type === 'water') {
    const cx = size / 2;
    const cy = size / 2 + size * 0.05;
    const ox = cx, oy = cy - size * 0.2;
    const h1x = cx - size * 0.22, h1y = cy + size * 0.1;
    const h2x = cx + size * 0.22, h2y = cy + size * 0.1;

    return (
      <svg width={size} height={size} className={`${animated ? 'animate-float' : ''} ${className}`} viewBox={`0 0 ${size} ${size}`}>
        <line x1={ox} y1={oy} x2={h1x} y2={h1y} stroke={color} strokeWidth={size * 0.03} strokeOpacity={0.7} />
        <line x1={ox} y1={oy} x2={h2x} y2={h2y} stroke={color} strokeWidth={size * 0.03} strokeOpacity={0.7} />
        <circle cx={ox} cy={oy} r={size * 0.12} fill="#3b82f6" fillOpacity={0.8} />
        <text x={ox} y={oy + size * 0.04} textAnchor="middle" fill="white" fontSize={size * 0.1} fontWeight="bold" fontFamily="Times New Roman, serif">O</text>
        <circle cx={h1x} cy={h1y} r={size * 0.09} fill="#dc2626" fillOpacity={0.8} />
        <text x={h1x} y={h1y + size * 0.03} textAnchor="middle" fill="white" fontSize={size * 0.08} fontWeight="bold" fontFamily="Times New Roman, serif">H</text>
        <circle cx={h2x} cy={h2y} r={size * 0.09} fill="#dc2626" fillOpacity={0.8} />
        <text x={h2x} y={h2y + size * 0.03} textAnchor="middle" fill="white" fontSize={size * 0.08} fontWeight="bold" fontFamily="Times New Roman, serif">H</text>
      </svg>
    );
  }

  if (type === 'co2') {
    const cx = size / 2;
    const cy = size / 2;
    return (
      <svg width={size} height={size} className={`${animated ? 'animate-float' : ''} ${className}`} viewBox={`0 0 ${size} ${size}`}>
        {/* Double bond lines */}
        <line x1={cx - size * 0.35} y1={cy - size * 0.03} x2={cx - size * 0.14} y2={cy - size * 0.03} stroke={color} strokeWidth={size * 0.02} strokeOpacity={0.7} />
        <line x1={cx - size * 0.35} y1={cy + size * 0.03} x2={cx - size * 0.14} y2={cy + size * 0.03} stroke={color} strokeWidth={size * 0.02} strokeOpacity={0.7} />
        <line x1={cx + size * 0.14} y1={cy - size * 0.03} x2={cx + size * 0.35} y2={cy - size * 0.03} stroke={color} strokeWidth={size * 0.02} strokeOpacity={0.7} />
        <line x1={cx + size * 0.14} y1={cy + size * 0.03} x2={cx + size * 0.35} y2={cy + size * 0.03} stroke={color} strokeWidth={size * 0.02} strokeOpacity={0.7} />
        {/* O atoms */}
        <circle cx={cx - size * 0.38} cy={cy} r={size * 0.12} fill="#3b82f6" fillOpacity={0.85} />
        <text x={cx - size * 0.38} y={cy + size * 0.04} textAnchor="middle" fill="white" fontSize={size * 0.1} fontWeight="bold" fontFamily="Times New Roman, serif">O</text>
        <circle cx={cx + size * 0.38} cy={cy} r={size * 0.12} fill="#3b82f6" fillOpacity={0.85} />
        <text x={cx + size * 0.38} y={cy + size * 0.04} textAnchor="middle" fill="white" fontSize={size * 0.1} fontWeight="bold" fontFamily="Times New Roman, serif">O</text>
        {/* C atom */}
        <circle cx={cx} cy={cy} r={size * 0.14} fill="#1a1a1a" fillOpacity={0.85} />
        <text x={cx} y={cy + size * 0.04} textAnchor="middle" fill="white" fontSize={size * 0.1} fontWeight="bold" fontFamily="Times New Roman, serif">C</text>
      </svg>
    );
  }

  // methane default
  const cx = size / 2;
  const cy = size / 2;
  const hPositions = [
    { x: cx, y: cy - size * 0.32 },
    { x: cx + size * 0.3, y: cy + size * 0.18 },
    { x: cx - size * 0.3, y: cy + size * 0.18 },
    { x: cx, y: cy + size * 0.32 },
  ];
  return (
    <svg width={size} height={size} className={`${animated ? 'animate-float' : ''} ${className}`} viewBox={`0 0 ${size} ${size}`}>
      {hPositions.map((h, i) => (
        <line key={i} x1={cx} y1={cy} x2={h.x} y2={h.y} stroke={color} strokeWidth={size * 0.025} strokeOpacity={0.7} />
      ))}
      {hPositions.map((h, i) => (
        <circle key={`h-${i}`} cx={h.x} cy={h.y} r={size * 0.09} fill="#dc2626" fillOpacity={0.8} />
      ))}
      {hPositions.map((h, i) => (
        <text key={`ht-${i}`} x={h.x} y={h.y + size * 0.03} textAnchor="middle" fill="white" fontSize={size * 0.08} fontWeight="bold" fontFamily="Times New Roman, serif">H</text>
      ))}
      <circle cx={cx} cy={cy} r={size * 0.14} fill="#1a1a1a" fillOpacity={0.85} />
      <text x={cx} y={cy + size * 0.04} textAnchor="middle" fill="white" fontSize={size * 0.1} fontWeight="bold" fontFamily="Times New Roman, serif">C</text>
    </svg>
  );
}
