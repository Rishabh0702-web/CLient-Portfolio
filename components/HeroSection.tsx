'use client';
import { useEffect, useState } from 'react';

const LETTERS = 'NAITIK GUPTA'.split('');
const FORMULAS = ['C₆H₆','Pd²⁺','Cu@COF','C–H→C–C','NMR: δ 7.42','FT-IR: 1620 cm⁻¹','λmax: 254 nm','Ar–H + [Rh]','ΔG‡ = –RT ln k','COF-TpPa','Ar–Pd–X'];

export default function HeroSection() {
  const [chars, setChars] = useState(0);
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  useEffect(() => {
    if (chars < LETTERS.length) { const t = setTimeout(() => setChars(c=>c+1), 70); return ()=>clearTimeout(t); }
  }, [chars]);

  const ATOMS = [
    { cx:250,cy:250,r:12,col:'#00ff88' },
    { cx:340,cy:170,r:8,col:'#00d4ff' },
    { cx:380,cy:300,r:10,col:'#ff6b35' },
    { cx:260,cy:370,r:7,col:'#00ff88' },
    { cx:160,cy:320,r:9,col:'#00d4ff' },
    { cx:155,cy:195,r:7,col:'#ff6b35' },
    { cx:430,cy:220,r:6,col:'#00ff88' },
    { cx:320,cy:420,r:6,col:'#00d4ff' },
    { cx:110,cy:270,r:5,col:'#ff6b35' },
  ];
  const BONDS = [
    [0,1],[0,2],[0,3],[0,4],[0,5],[1,2],[2,3],[3,4],[4,5],[5,1],[1,6],[2,6],[3,7],[4,8]
  ];

  return (
    <section id="home" style={{ minHeight:'100vh',background:'#060610',position:'relative',overflow:'hidden',display:'flex',flexDirection:'column',justifyContent:'center' }}>
      
      {/* Graph paper */}
      <div style={{ position:'absolute',inset:0,backgroundImage:'linear-gradient(rgba(0,255,136,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,255,136,0.04) 1px,transparent 1px)',backgroundSize:'44px 44px',pointerEvents:'none' }} />

      {/* Scanline */}
      <div style={{ position:'absolute',inset:0,backgroundImage:'linear-gradient(transparent 50%,rgba(0,0,0,0.08) 50%)',backgroundSize:'100% 3px',pointerEvents:'none',zIndex:1 }} />

      {/* Noise vignette */}
      <div style={{ position:'absolute',inset:0,background:'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.7) 100%)',pointerEvents:'none',zIndex:1 }} />

      {/* HEADER BAR */}
      <div style={{ position:'absolute',top:0,left:0,right:0,display:'flex',justifyContent:'space-between',alignItems:'center',padding:'18px 3rem',borderBottom:'1px solid rgba(0,255,136,0.12)',zIndex:5 }}>
        <span style={{ fontFamily:'monospace',fontSize:'11px',letterSpacing:'4px',color:'#00ff88' }}>SPECIMEN // N.GUPTA</span>
        <span style={{ fontFamily:'monospace',fontSize:'11px',letterSpacing:'3px',color:'#606080' }}>C–H FUNCTIONALIZATION RESEARCHER</span>
        <span style={{ fontFamily:'monospace',fontSize:'11px',color:'#00ff88' }}>01 ▸ ACTIVE</span>
      </div>

      {/* MAIN CONTENT */}
      <div style={{ maxWidth:'1380px',margin:'0 auto',padding:'0 3rem',width:'100%',zIndex:3,paddingTop:'80px' }}>
        <div style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:'4rem',alignItems:'center',minHeight:'75vh' }}>
          
          {/* ── LEFT ── */}
          <div>
            <div style={{ fontFamily:'monospace',fontSize:'11px',letterSpacing:'5px',color:'#606080',marginBottom:'1.5rem',opacity: mounted ? 1 : 0,transition:'opacity 0.8s' }}>
              M.SC. CHEMISTRY · VNIT NAGPUR · 2024–PRESENT
            </div>

            {/* Giant name */}
            <h1 style={{ fontFamily:'"Arial Black","Helvetica Neue",sans-serif',fontWeight:900,fontSize:'clamp(3.5rem,8vw,7.5rem)',lineHeight:0.88,textTransform:'uppercase',letterSpacing:'-3px',marginBottom:'2rem',position:'relative' }}>
              {LETTERS.map((ch,i) => (
                <span key={i} style={{
                  display: ch===' ' ? 'inline' : 'inline-block',
                  color: i < chars ? (i >= 7 ? 'transparent' : '#eeeef0') : 'transparent',
                  WebkitTextStroke: i>=7 && i<chars ? '2px #00ff88' : undefined,
                  textShadow: i>=7 && i<chars ? '0 0 40px rgba(0,255,136,0.4)' : undefined,
                  transition:'all 0.12s',
                  whiteSpace: ch===' ' ? 'pre' : undefined,
                }}>
                  {ch}
                </span>
              ))}
              <span style={{ color:'#00ff88',animation:'blink 0.9s step-end infinite' }}>_</span>
            </h1>

            {/* Reaction equation line */}
            <div style={{ display:'flex',alignItems:'center',gap:'10px',marginBottom:'2rem',fontFamily:'monospace',fontSize:'15px' }}>
              <span style={{ color:'#00d4ff' }}>Ar–H</span>
              <span style={{ color:'#ff6b35',fontSize:'24px' }}>⟶</span>
              <span style={{ color:'#00d4ff' }}>Ar–C</span>
              <span style={{ color:'#404060',marginLeft:'8px',fontSize:'12px' }}>Pd(II) / Rh(III) · VNIT</span>
            </div>

            <p style={{ color:'#8080a0',fontSize:'15px',lineHeight:1.8,maxWidth:'480px',marginBottom:'3rem',fontFamily:'Georgia,serif' }}>
              A Journey Through Synthesis and Catalysis — From Distal C–H Functionalization to Engineering Cu@COF for Heterogeneous Catalysis.
            </p>

            {/* Chemical tags */}
            <div style={{ display:'flex',gap:'8px',flexWrap:'wrap',marginBottom:'2.5rem' }}>
              {['C–H Activation','Pd-Catalysis','COF Design','IIT Bombay','IASC Fellow'].map(tag => (
                <span key={tag} style={{ fontFamily:'monospace',fontSize:'11px',letterSpacing:'1px',padding:'5px 12px',border:'1px solid rgba(0,212,255,0.3)',color:'#00d4ff',borderRadius:'2px',background:'rgba(0,212,255,0.05)' }}>{tag}</span>
              ))}
            </div>

            {/* CTA */}
            <div style={{ display:'flex',gap:'12px',flexWrap:'wrap' }}>
              <a href="#experience" style={{ fontFamily:'monospace',fontSize:'12px',fontWeight:700,letterSpacing:'3px',textTransform:'uppercase',padding:'14px 28px',background:'#00ff88',color:'#060610',textDecoration:'none',display:'inline-flex',alignItems:'center',gap:'8px',transition:'all 0.2s' }}>
                → RESEARCH
              </a>
              <a href="mailto:naitikgupta976@gmail.com" style={{ fontFamily:'monospace',fontSize:'12px',fontWeight:700,letterSpacing:'3px',textTransform:'uppercase',padding:'14px 28px',background:'transparent',color:'#00ff88',border:'1px solid rgba(0,255,136,0.5)',textDecoration:'none',display:'inline-flex',alignItems:'center',gap:'8px',transition:'all 0.2s' }}>
                → CONTACT
              </a>
            </div>
          </div>

          {/* ── RIGHT: Molecular art ── */}
          <div style={{ display:'flex',justifyContent:'center',alignItems:'center',position:'relative' }}>
            {/* Outer ring */}
            <div style={{ position:'absolute',width:'440px',height:'440px',borderRadius:'50%',border:'1px solid rgba(0,255,136,0.06)',animation:'float 8s ease-in-out infinite' }} />
            <div style={{ position:'absolute',width:'360px',height:'360px',borderRadius:'50%',border:'1px dashed rgba(0,212,255,0.08)' }} />

            <svg width="460" height="460" viewBox="0 0 500 500" style={{ position:'relative',zIndex:2 }}>
              <defs>
                <filter id="glow-g"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                <filter id="glow-b"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
              </defs>

              {/* Bonds */}
              {BONDS.map(([a,b],i) => (
                <line key={i}
                  x1={ATOMS[a].cx} y1={ATOMS[a].cy}
                  x2={ATOMS[b].cx} y2={ATOMS[b].cy}
                  stroke="rgba(0,255,136,0.25)" strokeWidth="1.5"
                >
                  <animate attributeName="stroke-opacity" values="0.15;0.6;0.15" dur={`${2+i*0.3}s`} repeatCount="indefinite"/>
                </line>
              ))}

              {/* Atoms */}
              {ATOMS.map((a,i) => (
                <g key={i} filter="url(#glow-g)">
                  <circle cx={a.cx} cy={a.cy} r={a.r*2.5} fill={a.col} opacity="0.06">
                    <animate attributeName="r" values={`${a.r*2};${a.r*3.5};${a.r*2}`} dur={`${2+i*0.4}s`} repeatCount="indefinite"/>
                  </circle>
                  <circle cx={a.cx} cy={a.cy} r={a.r} fill={a.col}>
                    <animate attributeName="opacity" values="0.7;1;0.7" dur={`${1.5+i*0.3}s`} repeatCount="indefinite"/>
                  </circle>
                </g>
              ))}

              {/* Benzene ring center decoration */}
              {[0,1,2,3,4,5].map(i => {
                const ang = (i*60-90)*Math.PI/180;
                const nx = 250+52*Math.cos(ang); const ny = 250+52*Math.sin(ang);
                const ang2 = ((i+1)*60-90)*Math.PI/180;
                return <line key={`benz${i}`} x1={nx} y1={ny} x2={250+52*Math.cos(ang2)} y2={250+52*Math.sin(ang2)} stroke="#00ff8833" strokeWidth="1" strokeDasharray="3 2"/>
              })}
              <circle cx="250" cy="250" r="28" fill="none" stroke="#00ff8820" strokeWidth="1" strokeDasharray="4 3"/>

              {/* Orbiting electron */}
              <ellipse cx="250" cy="250" rx="80" ry="30" fill="none" stroke="#00d4ff22" strokeWidth="1" transform="rotate(-30 250 250)"/>
              <circle r="5" fill="#00d4ff" opacity="0.9">
                <animateMotion dur="3s" repeatCount="indefinite" path="M 170,250 a 80,30 0 1,1 160,0 a 80,30 0 1,1 -160,0" rotate="auto"/>
              </circle>

              {/* Floating labels */}
              <text x="345" y="165" fill="#00ff8866" fontSize="11" fontFamily="monospace">C</text>
              <text x="388" y="298" fill="#00d4ff66" fontSize="11" fontFamily="monospace">N</text>
              <text x="268" y="374" fill="#ff6b3566" fontSize="11" fontFamily="monospace">Pd</text>
            </svg>
          </div>
        </div>
      </div>

      {/* ── BOTTOM TICKER ── */}
      <div style={{ position:'absolute',bottom:0,left:0,right:0,overflow:'hidden',borderTop:'1px solid rgba(0,255,136,0.12)',background:'rgba(0,0,0,0.7)',padding:'10px 0',zIndex:4 }}>
        <div style={{ display:'flex',gap:'4rem',animation:'ticker 22s linear infinite',width:'max-content',fontFamily:'monospace',fontSize:'11px',color:'#404060',letterSpacing:'1px' }}>
          {[...FORMULAS,...FORMULAS].map((f,i) => (
            <span key={i} style={{ whiteSpace:'nowrap' }}>▸ {f}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
