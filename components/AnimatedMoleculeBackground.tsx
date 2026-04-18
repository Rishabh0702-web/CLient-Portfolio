'use client';

import React from 'react';

export default function AnimatedMoleculeBackground() {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}
    >
      {/* SVG Canvas for molecule animations */}
      <svg
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <radialGradient id="atomGradient" cx="30%" cy="30%">
            <stop offset="0%" stopColor="#00774488" />
            <stop offset="100%" stopColor="#007744" />
          </radialGradient>

          <radialGradient id="bondGradient">
            <stop offset="0%" stopColor="#0055aa22" />
            <stop offset="100%" stopColor="#0055aa66" />
          </radialGradient>
        </defs>

        {/* Animated Molecules - Top Left */}
        <g className="float-molecule" style={{ animationDelay: '0s' }}>
          {/* Benzene ring structure */}
          <circle cx="150" cy="120" r="4" fill="url(#atomGradient)" opacity="0.8" />
          <circle cx="190" cy="100" r="4" fill="url(#atomGradient)" opacity="0.8" />
          <circle cx="210" cy="150" r="4" fill="url(#atomGradient)" opacity="0.8" />
          <circle cx="170" cy="180" r="4" fill="url(#atomGradient)" opacity="0.8" />
          <circle cx="110" cy="160" r="4" fill="url(#atomGradient)" opacity="0.8" />
          <circle cx="130" cy="110" r="4" fill="url(#atomGradient)" opacity="0.8" />

          {/* Bonds */}
          <line
            x1="150"
            y1="120"
            x2="190"
            y2="100"
            stroke="#007744"
            strokeWidth="1.5"
            opacity="0.4"
          />
          <line
            x1="190"
            y1="100"
            x2="210"
            y2="150"
            stroke="#007744"
            strokeWidth="1.5"
            opacity="0.4"
          />
          <line
            x1="210"
            y1="150"
            x2="170"
            y2="180"
            stroke="#007744"
            strokeWidth="1.5"
            opacity="0.4"
          />
          <line
            x1="170"
            y1="180"
            x2="110"
            y2="160"
            stroke="#007744"
            strokeWidth="1.5"
            opacity="0.4"
          />
          <line
            x1="110"
            y1="160"
            x2="130"
            y2="110"
            stroke="#007744"
            strokeWidth="1.5"
            opacity="0.4"
          />
          <line
            x1="130"
            y1="110"
            x2="150"
            y2="120"
            stroke="#007744"
            strokeWidth="1.5"
            opacity="0.4"
          />
        </g>

        {/* Animated Molecules - Top Right */}
        <g className="float-molecule" style={{ animationDelay: '1s' }}>
          <circle cx="1400" cy="200" r="5" fill="url(#atomGradient)" opacity="0.7" />
          <circle cx="1450" cy="180" r="5" fill="url(#atomGradient)" opacity="0.7" />
          <circle cx="1480" cy="240" r="5" fill="url(#atomGradient)" opacity="0.7" />
          <circle cx="1440" cy="270" r="5" fill="url(#atomGradient)" opacity="0.7" />

          <line
            x1="1400"
            y1="200"
            x2="1450"
            y2="180"
            stroke="#007744"
            strokeWidth="2"
            opacity="0.35"
          />
          <line
            x1="1450"
            y1="180"
            x2="1480"
            y2="240"
            stroke="#007744"
            strokeWidth="2"
            opacity="0.35"
          />
          <line
            x1="1480"
            y1="240"
            x2="1440"
            y2="270"
            stroke="#007744"
            strokeWidth="2"
            opacity="0.35"
          />
        </g>

        {/* Animated Molecules - Bottom Left */}
        <g className="float-molecule" style={{ animationDelay: '2s' }}>
          <circle cx="200" cy="750" r="4" fill="url(#atomGradient)" opacity="0.75" />
          <circle cx="240" cy="780" r="4" fill="url(#atomGradient)" opacity="0.75" />
          <circle cx="280" cy="750" r="4" fill="url(#atomGradient)" opacity="0.75" />
          <circle cx="310" cy="800" r="4" fill="url(#atomGradient)" opacity="0.75" />

          <line
            x1="200"
            y1="750"
            x2="240"
            y2="780"
            stroke="#007744"
            strokeWidth="1.5"
            opacity="0.3"
          />
          <line
            x1="240"
            y1="780"
            x2="280"
            y2="750"
            stroke="#007744"
            strokeWidth="1.5"
            opacity="0.3"
          />
          <line
            x1="280"
            y1="750"
            x2="310"
            y2="800"
            stroke="#007744"
            strokeWidth="1.5"
            opacity="0.3"
          />
        </g>

        {/* Animated Molecules - Bottom Right */}
        <g className="float-molecule" style={{ animationDelay: '1.5s' }}>
          <circle cx="1300" cy="700" r="5" fill="url(#atomGradient)" opacity="0.6" />
          <circle cx="1360" cy="720" r="5" fill="url(#atomGradient)" opacity="0.6" />
          <circle cx="1400" cy="780" r="5" fill="url(#atomGradient)" opacity="0.6" />
          <circle cx="1350" cy="820" r="5" fill="url(#atomGradient)" opacity="0.6" />

          <line
            x1="1300"
            y1="700"
            x2="1360"
            y2="720"
            stroke="#007744"
            strokeWidth="2"
            opacity="0.25"
          />
          <line
            x1="1360"
            y1="720"
            x2="1400"
            y2="780"
            stroke="#007744"
            strokeWidth="2"
            opacity="0.25"
          />
          <line
            x1="1400"
            y1="780"
            x2="1350"
            y2="820"
            stroke="#007744"
            strokeWidth="2"
            opacity="0.25"
          />
        </g>

        {/* Center orbital animation */}
        <g
          style={{
            transformOrigin: '800px 450px',
            animation: 'orbit 40s linear infinite',
          }}
        >
          <circle cx="800" cy="300" r="3" fill="#0055aa" opacity="0.5" />
          <line
            x1="800"
            y1="450"
            x2="800"
            y2="300"
            stroke="#0055aa"
            strokeWidth="1"
            opacity="0.2"
          />
        </g>

        {/* Decorative elements - subtle atoms */}
        {[
          { x: 300, y: 300, r: 2, op: 0.3 },
          { x: 600, y: 150, r: 2.5, op: 0.25 },
          { x: 1100, y: 450, r: 2, op: 0.2 },
          { x: 400, y: 600, r: 2.5, op: 0.28 },
          { x: 1200, y: 600, r: 2, op: 0.22 },
        ].map((atom, i) => (
          <circle
            key={i}
            cx={atom.x}
            cy={atom.y}
            r={atom.r}
            fill="#007744"
            opacity={atom.op}
            className="pulse-atom"
            style={{ animationDelay: `${i * 0.3}s` }}
          />
        ))}
      </svg>
    </div>
  );
}
