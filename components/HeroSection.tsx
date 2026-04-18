'use client';
import { useEffect, useState, useRef, useCallback } from 'react';

const NAITIK = 'NAITIK'.split('');
const GUPTA  = 'GUPTA'.split('');
const FORMULAS = ['C₆H₆','Pd²⁺','Cu@COF','C–H→C–C','NMR','FT-IR','λmax','Ar–H','ΔG‡','COF','Rh(III)','Pd(II)','NMR','TpPa'];

const G = '#007744';
const B = '#0055aa';
const O = '#cc4400';

// Benzene atom positions (hexagon)
const HEX_ATOMS = Array.from({length:6},(_,i)=>{
  const a = (i*60 - 90)*Math.PI/180;
  return {x: Math.cos(a), y: Math.sin(a)};
});

function FloatingFormulas() {
  const [particles, setParticles] = useState<{id:number;text:string;x:number;dur:number;delay:number;col:string}[]>([]);
  useEffect(()=>{
    const cols = [G, B, O];
    setParticles(
      Array.from({length:14},(_,i)=>({
        id:i,
        text: FORMULAS[i % FORMULAS.length],
        x: 5 + (i*7)%90,
        dur: 8 + (i*3)%10,
        delay: (i*1.3)%12,
        col: cols[i%3],
      }))
    );
  },[]);
  return (
    <>
      {particles.map(p=>(
        <div key={p.id} style={{
          position:'absolute',
          left:`${p.x}%`,
          bottom:'10%',
          fontFamily:'monospace',
          fontSize:'10px',
          fontWeight:700,
          letterSpacing:'1px',
          color:p.col,
          opacity:0.5,
          pointerEvents:'none',
          animation:`formulaFloat ${p.dur}s ${p.delay}s ease-in-out infinite`,
          userSelect:'none',
          zIndex:1,
        }}>
          {p.text}
        </div>
      ))}
    </>
  );
}

function Molecule3D() {
  const R = 90; // ring radius
  const [tick, setTick] = useState(0);
  useEffect(()=>{
    const id = setInterval(()=>setTick(t=>t+1), 50);
    return ()=>clearInterval(id);
  },[]);

  // Slow rotation angles
  const rotY = (tick*0.6) % 360;
  const rotX = 20 + Math.sin(tick*0.015)*15;

  return (
    <div style={{
      position:'relative', width:'420px', height:'420px',
      display:'flex', alignItems:'center', justifyContent:'center',
    }}>
      {/* Outer glow rings */}
      <div style={{position:'absolute',width:'400px',height:'400px',borderRadius:'50%',border:`1px solid ${G}20`,animation:'float 9s ease-in-out infinite'}}/>
      <div style={{position:'absolute',width:'340px',height:'340px',borderRadius:'50%',border:`1px dashed ${B}18`}}/>

      {/* 3D Orbital shells */}
      <div style={{position:'absolute',width:'280px',height:'280px',borderRadius:'50%',
        border:`1px solid ${G}30`,
        animation:'orbitalSpin 8s linear infinite',
        transformStyle:'preserve-3d',
        transform:`rotateX(70deg)`,
      }}/>
      <div style={{position:'absolute',width:'260px',height:'260px',borderRadius:'50%',
        border:`1px solid ${B}25`,
        animation:'orbitalSpin 12s linear infinite reverse',
        transformStyle:'preserve-3d',
        transform:`rotateX(70deg) rotateZ(60deg)`,
      }}/>
      <div style={{position:'absolute',width:'240px',height:'240px',borderRadius:'50%',
        border:`1px solid ${O}20`,
        animation:'orbitalSpin 16s linear infinite',
        transformStyle:'preserve-3d',
        transform:`rotateX(70deg) rotateZ(120deg)`,
      }}/>

      {/* Central glow */}
      <div style={{
        position:'absolute',width:'60px',height:'60px',borderRadius:'50%',
        background:`radial-gradient(circle, ${G}40, ${B}20, transparent)`,
        animation:'glowPulse 3s ease-in-out infinite',
        filter:'blur(8px)',
      }}/>

      {/* SVG molecule */}
      <svg width="380" height="380" viewBox="0 0 380 380" style={{position:'relative',zIndex:2}}>
        <defs>
          <filter id="atomGlow">
            <feGaussianBlur stdDeviation="4" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="bondGlow">
            <feGaussianBlur stdDeviation="2" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <radialGradient id="coreGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={G} stopOpacity="0.6"/>
            <stop offset="100%" stopColor={B} stopOpacity="0.1"/>
          </radialGradient>
        </defs>

        {/* Benzene bonds */}
        {HEX_ATOMS.map((a,i)=>{
          const b = HEX_ATOMS[(i+1)%6];
          const cx=190+a.x*R, cy=190+a.y*R, dx=190+b.x*R, dy=190+b.y*R;
          const iDouble = i%2===0;
          return <g key={i}>
            <line x1={cx} y1={cy} x2={dx} y2={dy}
              stroke={iDouble?`${G}cc`:`${B}99`} strokeWidth={iDouble?2.5:1.5}
              filter="url(#bondGlow)">
              <animate attributeName="stroke-opacity" values="0.4;1;0.4" dur={`${2+i*0.3}s`} repeatCount="indefinite"/>
            </line>
            {iDouble && <line x1={cx+(dy-cy)*0.08} y1={cy-(dx-cx)*0.08} x2={dx+(dy-cy)*0.08} y2={dy-(dx-cx)*0.08}
              stroke={`${G}55`} strokeWidth="1" strokeDasharray="4 2"/>}
          </g>;
        })}

        {/* Benzene atoms */}
        {HEX_ATOMS.map((a,i)=>{
          const cols=[G,B,O,G,B,O];
          const cx=190+a.x*R, cy=190+a.y*R;
          return <g key={i} filter="url(#atomGlow)">
            <circle cx={cx} cy={cy} r={14} fill={cols[i]} opacity="0.12">
              <animate attributeName="r" values="12;18;12" dur={`${2+i*0.4}s`} repeatCount="indefinite"/>
            </circle>
            <circle cx={cx} cy={cy} r={7} fill={cols[i]}>
              <animate attributeName="opacity" values="0.7;1;0.7" dur={`${1.5+i*0.3}s`} repeatCount="indefinite"/>
            </circle>
            <text x={cx} y={cy-12} textAnchor="middle" fill={cols[i]} fontSize="9" fontFamily="monospace" opacity="0.8">
              {['C','C','C','C','C','C'][i]}
            </text>
          </g>;
        })}

        {/* Orbiting electrons */}
        <circle r="5" fill={G} opacity="0.9" filter="url(#atomGlow)">
          <animateMotion dur="3s" repeatCount="indefinite"
            path={`M ${190+R},190 a ${R},${R*0.35} 0 1,1 ${-2*R},0 a ${R},${R*0.35} 0 1,1 ${2*R},0`}/>
        </circle>
        <circle r="4" fill={B} opacity="0.85" filter="url(#atomGlow)">
          <animateMotion dur="5s" repeatCount="indefinite"
            path={`M ${190+R*0.6},${190-R*0.9} a ${R*0.7},${R*1.1} 0 1,0 ${-R*1.2},${R*1.8} a ${R*0.7},${R*1.1} 0 1,0 ${R*1.2},${-R*1.8}`}/>
        </circle>
        <circle r="3" fill={O} opacity="0.8">
          <animateMotion dur="7s" repeatCount="indefinite" rotate="auto"
            path={`M 190,${190-R*1.1} a ${R*1.1},${R*0.4} 0 1,1 0,0.1`}/>
        </circle>

        {/* Central Pd label */}
        <circle cx="190" cy="190" r="22" fill="url(#coreGrad)">
          <animate attributeName="r" values="20;25;20" dur="4s" repeatCount="indefinite"/>
        </circle>
        <text x="190" y="194" textAnchor="middle" fill={G} fontSize="12" fontFamily="monospace" fontWeight="700">Pd</text>

        {/* Floating annotation labels */}
        <text x="310" y="90" fill={`${G}99`} fontSize="10" fontFamily="monospace">C–H</text>
        <text x="320" y="300" fill={`${B}88`} fontSize="10" fontFamily="monospace">NMR</text>
        <text x="55" y="110" fill={`${O}88`} fontSize="10" fontFamily="monospace">COF</text>
        <text x="40" y="290" fill={`${G}77`} fontSize="10" fontFamily="monospace">δ 7.42</text>
      </svg>

      {/* 3D transform wrapper overlay */}
      <div style={{
        position:'absolute',inset:0,
        background:`radial-gradient(ellipse at 60% 40%, ${G}08, transparent 70%)`,
        pointerEvents:'none',borderRadius:'50%',
      }}/>
    </div>
  );
}

export default function HeroSection() {
  const [chars, setChars] = useState(0);
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const moleculeRef = useRef<HTMLDivElement>(null);

  useEffect(()=>{ setMounted(true); },[]);
  useEffect(()=>{
    const total = NAITIK.length + 1 + GUPTA.length;
    if(chars < total){ const t = setTimeout(()=>setChars(c=>c+1), 80); return ()=>clearTimeout(t); }
  },[chars]);

  // Mouse parallax on molecule
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>)=>{
    if(!moleculeRef.current) return;
    const rect = sectionRef.current!.getBoundingClientRect();
    const cx = rect.left + rect.width/2;
    const cy = rect.top  + rect.height/2;
    const rx = ((e.clientY - cy) / (rect.height/2)) * -12;
    const ry = ((e.clientX - cx) / (rect.width/2))  *  14;
    moleculeRef.current.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
  },[]);
  const handleMouseLeave = useCallback(()=>{
    if(moleculeRef.current) moleculeRef.current.style.transform = 'rotateX(0deg) rotateY(0deg)';
  },[]);

  return (
    <section
      id="home"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{minHeight:'100vh',background:'#f7f6f2',position:'relative',overflow:'hidden',display:'flex',flexDirection:'column',justifyContent:'center'}}
    >
      {/* Graph paper */}
      <div style={{position:'absolute',inset:0,backgroundImage:'linear-gradient(rgba(0,0,0,0.045) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.045) 1px,transparent 1px)',backgroundSize:'44px 44px',pointerEvents:'none'}}/>

      {/* Radial gradient glow */}
      <div style={{position:'absolute',inset:0,background:`radial-gradient(ellipse 60% 55% at 72% 50%, ${G}09 0%, ${B}05 40%, transparent 70%)`,pointerEvents:'none'}}/>

      {/* Scanline effect */}
      <div style={{position:'absolute',inset:0,background:'repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,0,0,0.008) 3px,rgba(0,0,0,0.008) 4px)',pointerEvents:'none',zIndex:1}}/>

      {/* Floating formula particles */}
      <FloatingFormulas/>

      {/* HEADER BAR */}
      <div style={{position:'absolute',top:0,left:0,right:0,display:'flex',justifyContent:'space-between',alignItems:'center',padding:'18px 3rem',borderBottom:'1px solid rgba(0,0,0,0.08)',zIndex:5,background:'rgba(247,246,242,0.92)',backdropFilter:'blur(12px)'}}>
        <span style={{fontFamily:'monospace',fontSize:'11px',letterSpacing:'4px',color:G,animation:'borderGlow 4s ease-in-out infinite'}}>SPECIMEN // N.GUPTA</span>
        <span style={{fontFamily:'monospace',fontSize:'11px',letterSpacing:'3px',color:'#aaaabc'}}>C–H FUNCTIONALIZATION RESEARCHER</span>
        <span style={{fontFamily:'monospace',fontSize:'11px',color:G}}>01 ▸ ACTIVE</span>
      </div>

      {/* MAIN CONTENT */}
      <div style={{maxWidth:'1380px',margin:'0 auto',padding:'0 3rem',width:'100%',zIndex:3,paddingTop:'80px'}}>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'4rem',alignItems:'center',minHeight:'75vh'}} className="section-reveal">

          {/* LEFT */}
          <div className="slide-left-reveal">
            <div style={{fontFamily:'monospace',fontSize:'11px',letterSpacing:'5px',color:'#555565',marginBottom:'1.5rem',opacity:mounted?1:0,transition:'opacity 1s',fontWeight:600}}>
              M.SC. CHEMISTRY · VNIT NAGPUR · 2024–PRESENT
            </div>

            <h1 style={{fontFamily:'"Arial Black","Helvetica Neue",sans-serif',fontWeight:900,fontSize:'clamp(3.5rem,8vw,7.5rem)',lineHeight:0.9,textTransform:'uppercase',letterSpacing:'-3px',marginBottom:'2rem',perspective:'600px'}}>
              {/* NAITIK — each char flips in */}
              <div style={{display:'block'}}>
                {NAITIK.map((ch,i)=>(
                  <span key={`n${i}`} style={{
                    display:'inline-block',
                    color: i < chars ? '#0e0e14' : 'transparent',
                    animation: i < chars ? `charFlip 0.3s ${i*0.05}s ease-out both` : 'none',
                    textShadow: i < chars ? `0 0 30px ${G}22` : 'none',
                    transition:'color 0.1s',
                  }}>{ch}</span>
                ))}
              </div>
              {/* GUPTA — outline style */}
              <div style={{display:'block'}}>
                {GUPTA.map((ch,i)=>(
                  <span key={`g${i}`} style={{
                    display:'inline-block',
                    color:'transparent',
                    WebkitTextStroke: (i+7) < chars ? `2.5px ${G}` : '2.5px transparent',
                    filter: (i+7) < chars ? `drop-shadow(0 0 8px ${G}44)` : 'none',
                    animation: (i+7) < chars ? `charFlip 0.3s ${i*0.06}s ease-out both` : 'none',
                    transition:'all 0.12s',
                  }}>{ch}</span>
                ))}
                <span style={{color:G,WebkitTextStroke:'0px',animation:'blink 0.9s step-end infinite',filter:`drop-shadow(0 0 6px ${G})`}}>_</span>
              </div>
            </h1>

            {/* Reaction equation */}
            <div style={{display:'flex',alignItems:'center',gap:'10px',marginBottom:'2rem',fontFamily:'monospace',fontSize:'15px',padding:'10px 16px',background:`${G}08`,borderLeft:`3px solid ${G}`,borderRadius:'0 6px 6px 0'}}>
              <span style={{color:B,fontWeight:700,textShadow:`0 0 12px ${B}44`}}>Ar–H</span>
              <span style={{color:O,fontSize:'22px',fontWeight:700,animation:'blink 2s step-end infinite'}}>⟶</span>
              <span style={{color:B,fontWeight:700,textShadow:`0 0 12px ${B}44`}}>Ar–C</span>
              <span style={{color:'#606070',marginLeft:'8px',fontSize:'11px',fontWeight:600}}>Pd(II) / Rh(III) · VNIT</span>
            </div>

            <p style={{color:'#2e2e42',fontSize:'15px',lineHeight:1.85,maxWidth:'480px',marginBottom:'3rem',fontFamily:'Georgia,serif'}}>
              A Journey Through Synthesis and Catalysis — From Distal C–H Functionalization to Engineering Cu@COF for Heterogeneous Catalysis.
            </p>

            {/* Tags with hover glow */}
            <div style={{display:'flex',gap:'8px',flexWrap:'wrap',marginBottom:'2.5rem'}}>
              {['C–H Activation','Pd-Catalysis','COF Design','IIT Bombay','IASC Fellow'].map((tag,i)=>(
                <span key={tag} style={{
                  fontFamily:'monospace',fontSize:'11px',letterSpacing:'1px',
                  padding:'6px 13px',
                  border:`1px solid ${[B,G,O,B,G][i%5]}66`,
                  color:[B,G,O,B,G][i%5],
                  borderRadius:'3px',
                  background:`${[B,G,O,B,G][i%5]}0d`,
                  fontWeight:700,
                  transition:'all 0.25s',
                  cursor:'default',
                  animationDelay:`${i*0.8}s`,
                }}>{tag}</span>
              ))}
            </div>

            {/* CTAs */}
            <div style={{display:'flex',gap:'12px',flexWrap:'wrap'}}>
              <a href="#experience" style={{fontFamily:'monospace',fontSize:'12px',fontWeight:700,letterSpacing:'3px',textTransform:'uppercase',padding:'14px 28px',background:G,color:'#fff',textDecoration:'none',display:'inline-flex',alignItems:'center',gap:'8px',transition:'all 0.25s',boxShadow:`0 4px 20px ${G}44`,borderRadius:'2px'}}>
                → RESEARCH
              </a>
              <a href="/Naitik_CV.pdf" target="_blank" rel="noopener noreferrer" style={{fontFamily:'monospace',fontSize:'12px',fontWeight:700,letterSpacing:'3px',textTransform:'uppercase',padding:'14px 28px',background:B,color:'#fff',textDecoration:'none',display:'inline-flex',alignItems:'center',gap:'8px',transition:'all 0.25s',boxShadow:`0 4px 20px ${B}44`,borderRadius:'2px'}}>
                → RESUME
              </a>
              <a href="mailto:naitikgupta976@gmail.com" style={{fontFamily:'monospace',fontSize:'12px',fontWeight:700,letterSpacing:'3px',textTransform:'uppercase',padding:'14px 28px',background:'transparent',color:G,border:`1px solid ${G}88`,textDecoration:'none',display:'inline-flex',alignItems:'center',gap:'8px',transition:'all 0.25s',borderRadius:'2px'}}>
                → CONTACT
              </a>
            </div>
          </div>

          {/* RIGHT: 3D Molecule */}
          <div
            style={{display:'flex',justifyContent:'center',alignItems:'center',position:'relative'}}
            className="slide-right-reveal"
          >
            <div
              ref={moleculeRef}
              style={{
                transformStyle:'preserve-3d',
                transition:'transform 0.2s ease-out',
                perspective:'800px',
              }}
            >
              <Molecule3D/>
            </div>
          </div>
        </div>
      </div>

      {/* TICKER */}
      <div style={{position:'absolute',bottom:0,left:0,right:0,overflow:'hidden',borderTop:'1px solid rgba(0,0,0,0.08)',background:'rgba(0,0,0,0.02)',paddingBottom:'65px',zIndex:4,pointerEvents:'none'}}>
        <div style={{display:'flex',gap:'4rem',animation:'ticker 22s linear infinite',width:'max-content',fontFamily:'monospace',fontSize:'11px',color:'#aaaabb',letterSpacing:'1px',pointerEvents:'none'}}>
          {[...FORMULAS,...FORMULAS].map((f,i)=>(
            <span key={i} style={{whiteSpace:'nowrap'}}>▸ {f}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
