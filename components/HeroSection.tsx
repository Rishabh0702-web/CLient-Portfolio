'use client';
import { useEffect, useState } from 'react';

const NAITIK = 'NAITIK'.split('');
const GUPTA  = 'GUPTA'.split('');
const FORMULAS = ['C₆H₆','Pd²⁺','Cu@COF','C–H→C–C','NMR: δ 7.42','FT-IR: 1620 cm⁻¹','λmax: 254 nm','Ar–H + [Rh]','ΔG‡ = –RT ln k','COF-TpPa','Ar–Pd–X'];

const G = '#007744'; // primary green
const B = '#0055aa'; // accent blue
const O = '#cc4400'; // secondary orange

const ATOMS = [
  {cx:250,cy:250,r:12,col:G},{cx:340,cy:170,r:8,col:B},{cx:380,cy:300,r:10,col:O},
  {cx:260,cy:370,r:7,col:G},{cx:160,cy:320,r:9,col:B},{cx:155,cy:195,r:7,col:O},
  {cx:430,cy:220,r:6,col:G},{cx:320,cy:420,r:6,col:B},{cx:110,cy:270,r:5,col:O},
];
const BONDS = [[0,1],[0,2],[0,3],[0,4],[0,5],[1,2],[2,3],[3,4],[4,5],[5,1],[1,6],[2,6],[3,7],[4,8]];

export default function HeroSection() {
  const [chars,setChars] = useState(0);
  const [mounted,setMounted] = useState(false);
  useEffect(()=>{setMounted(true);},[]);
  useEffect(()=>{
    const total = NAITIK.length + 1 + GUPTA.length; // 6 + 1 gap + 5 = 12
    if(chars<total){const t=setTimeout(()=>setChars(c=>c+1),70);return()=>clearTimeout(t);}
  },[chars]);

  return (
    <section id="home" style={{minHeight:'100vh',background:'#f7f6f2',position:'relative',overflow:'hidden',display:'flex',flexDirection:'column',justifyContent:'center'}}>
      {/* Graph paper — dark ink on light */}
      <div style={{position:'absolute',inset:0,backgroundImage:'linear-gradient(rgba(0,0,0,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.05) 1px,transparent 1px)',backgroundSize:'44px 44px',pointerEvents:'none'}}/>
      {/* Vignette */}
      <div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse at center,transparent 50%,rgba(0,0,0,0.04) 100%)',pointerEvents:'none'}}/>

      {/* HEADER BAR */}
      <div style={{position:'absolute',top:0,left:0,right:0,display:'flex',justifyContent:'space-between',alignItems:'center',padding:'18px 3rem',borderBottom:'1px solid rgba(0,0,0,0.08)',zIndex:5,background:'rgba(247,246,242,0.9)',backdropFilter:'blur(8px)'}}>
        <span style={{fontFamily:'monospace',fontSize:'11px',letterSpacing:'4px',color:G}}>SPECIMEN // N.GUPTA</span>
        <span style={{fontFamily:'monospace',fontSize:'11px',letterSpacing:'3px',color:'#aaaabc'}}>C–H FUNCTIONALIZATION RESEARCHER</span>
        <span style={{fontFamily:'monospace',fontSize:'11px',color:G}}>01 ▸ ACTIVE</span>
      </div>

      {/* MAIN */}
      <div style={{maxWidth:'1380px',margin:'0 auto',padding:'0 3rem',width:'100%',zIndex:3,paddingTop:'80px'}}>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'4rem',alignItems:'center',minHeight:'75vh'}}>

          {/* LEFT */}
          <div>
            <div style={{fontFamily:'monospace',fontSize:'11px',letterSpacing:'5px',color:'#555565',marginBottom:'1.5rem',opacity:mounted?1:0,transition:'opacity 0.8s',fontWeight:600}}>
              M.SC. CHEMISTRY · VNIT NAGPUR · 2024–PRESENT
            </div>

            <h1 style={{fontFamily:'"Arial Black","Helvetica Neue",sans-serif',fontWeight:900,fontSize:'clamp(3.5rem,8vw,7.5rem)',lineHeight:0.9,textTransform:'uppercase',letterSpacing:'-3px',marginBottom:'2rem'}}>
              {/* Row 1 — NAITIK solid dark ink */}
              <div style={{display:'block'}}>
                {NAITIK.map((ch,i)=>(
                  <span key={`n${i}`} style={{
                    display:'inline-block',
                    color: i<chars ? '#0e0e14' : 'transparent',
                    transition:'color 0.12s',
                  }}>{ch}</span>
                ))}
              </div>
              {/* Row 2 — GUPTA outline green */}
              <div style={{display:'block'}}>
                {GUPTA.map((ch,i)=>(
                  <span key={`g${i}`} style={{
                    display:'inline-block',
                    color:'transparent',
                    WebkitTextStroke: (i+7)<chars ? `2.5px ${G}` : '2.5px transparent',
                    transition:'all 0.12s',
                  }}>{ch}</span>
                ))}
                <span style={{color:G,WebkitTextStroke:'0px',animation:'blink 0.9s step-end infinite'}}>_</span>
              </div>
            </h1>

            {/* Reaction equation */}
            <div style={{display:'flex',alignItems:'center',gap:'10px',marginBottom:'2rem',fontFamily:'monospace',fontSize:'15px'}}>
              <span style={{color:B,fontWeight:700}}>Ar–H</span>
              <span style={{color:O,fontSize:'24px',fontWeight:700}}>⟶</span>
              <span style={{color:B,fontWeight:700}}>Ar–C</span>
              <span style={{color:'#606070',marginLeft:'8px',fontSize:'12px',fontWeight:600}}>Pd(II) / Rh(III) · VNIT</span>
            </div>

            <p style={{color:'#2e2e42',fontSize:'15px',lineHeight:1.8,maxWidth:'480px',marginBottom:'3rem',fontFamily:'Georgia,serif'}}>
              A Journey Through Synthesis and Catalysis — From Distal C–H Functionalization to Engineering Cu@COF for Heterogeneous Catalysis.
            </p>

            {/* Tags */}
            <div style={{display:'flex',gap:'8px',flexWrap:'wrap',marginBottom:'2.5rem'}}>
              {['C–H Activation','Pd-Catalysis','COF Design','IIT Bombay','IASC Fellow'].map(tag=>(
                <span key={tag} style={{fontFamily:'monospace',fontSize:'11px',letterSpacing:'1px',padding:'6px 13px',border:`1px solid ${B}66`,color:B,borderRadius:'2px',background:`${B}0d`,fontWeight:700}}>{tag}</span>
              ))}
            </div>

            {/* CTAs */}
            <div style={{display:'flex',gap:'12px',flexWrap:'wrap'}}>
              <a href="#experience" style={{fontFamily:'monospace',fontSize:'12px',fontWeight:700,letterSpacing:'3px',textTransform:'uppercase',padding:'14px 28px',background:G,color:'#fff',textDecoration:'none',display:'inline-flex',alignItems:'center',gap:'8px',transition:'all 0.2s'}}>
                → RESEARCH
              </a>
              <a href="mailto:naitikgupta976@gmail.com" style={{fontFamily:'monospace',fontSize:'12px',fontWeight:700,letterSpacing:'3px',textTransform:'uppercase',padding:'14px 28px',background:'transparent',color:G,border:`1px solid ${G}88`,textDecoration:'none',display:'inline-flex',alignItems:'center',gap:'8px',transition:'all 0.2s'}}>
                → CONTACT
              </a>
            </div>
          </div>

          {/* RIGHT: Molecular art */}
          <div style={{display:'flex',justifyContent:'center',alignItems:'center',position:'relative'}}>
            <div style={{position:'absolute',width:'440px',height:'440px',borderRadius:'50%',border:'1px solid rgba(0,100,60,0.1)',animation:'float 8s ease-in-out infinite'}}/>
            <div style={{position:'absolute',width:'360px',height:'360px',borderRadius:'50%',border:'1px dashed rgba(0,85,170,0.1)'}}/>
            <svg width="460" height="460" viewBox="0 0 500 500" style={{position:'relative',zIndex:2}}>
              <defs>
                <filter id="glow-l"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
              </defs>
              {BONDS.map(([a,bb],i)=>(
                <line key={i} x1={ATOMS[a].cx} y1={ATOMS[a].cy} x2={ATOMS[bb].cx} y2={ATOMS[bb].cy} stroke="rgba(0,0,0,0.15)" strokeWidth="1.5">
                  <animate attributeName="stroke-opacity" values="0.08;0.3;0.08" dur={`${2+i*0.3}s`} repeatCount="indefinite"/>
                </line>
              ))}
              {ATOMS.map((a,i)=>(
                <g key={i} filter="url(#glow-l)">
                  <circle cx={a.cx} cy={a.cy} r={a.r*2.5} fill={a.col} opacity="0.10">
                    <animate attributeName="r" values={`${a.r*2};${a.r*3.5};${a.r*2}`} dur={`${2+i*0.4}s`} repeatCount="indefinite"/>
                  </circle>
                  <circle cx={a.cx} cy={a.cy} r={a.r} fill={a.col}>
                    <animate attributeName="opacity" values="0.7;1;0.7" dur={`${1.5+i*0.3}s`} repeatCount="indefinite"/>
                  </circle>
                </g>
              ))}
              {[0,1,2,3,4,5].map(i=>{
                const ang=(i*60-90)*Math.PI/180;const ang2=((i+1)*60-90)*Math.PI/180;
                return <line key={`benz${i}`} x1={250+52*Math.cos(ang)} y1={250+52*Math.sin(ang)} x2={250+52*Math.cos(ang2)} y2={250+52*Math.sin(ang2)} stroke={`${G}44`} strokeWidth="1" strokeDasharray="3 2"/>
              })}
              <circle cx="250" cy="250" r="28" fill="none" stroke={`${G}30`} strokeWidth="1" strokeDasharray="4 3"/>
              <ellipse cx="250" cy="250" rx="80" ry="30" fill="none" stroke={`${B}33`} strokeWidth="1" transform="rotate(-30 250 250)"/>
              <circle r="5" fill={B} opacity="0.85">
                <animateMotion dur="3s" repeatCount="indefinite" path="M 170,250 a 80,30 0 1,1 160,0 a 80,30 0 1,1 -160,0" rotate="auto"/>
              </circle>
              <text x="345" y="165" fill={`${G}99`} fontSize="11" fontFamily="monospace">C</text>
              <text x="388" y="298" fill={`${B}99`} fontSize="11" fontFamily="monospace">N</text>
              <text x="268" y="374" fill={`${O}99`} fontSize="11" fontFamily="monospace">Pd</text>
            </svg>
          </div>
        </div>
      </div>

      {/* TICKER */}
      <div style={{position:'absolute',bottom:0,left:0,right:0,overflow:'hidden',borderTop:'1px solid rgba(0,0,0,0.08)',background:'rgba(0,0,0,0.03)',padding:'10px 0',zIndex:4}}>
        <div style={{display:'flex',gap:'4rem',animation:'ticker 22s linear infinite',width:'max-content',fontFamily:'monospace',fontSize:'11px',color:'#aaaabb',letterSpacing:'1px'}}>
          {[...FORMULAS,...FORMULAS].map((f,i)=>(
            <span key={i} style={{whiteSpace:'nowrap'}}>▸ {f}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
