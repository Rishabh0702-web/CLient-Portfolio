'use client';

const G='#007744',B='#0055aa',O='#cc4400';

// Deterministic pseudo-random (same output server & client — no hydration mismatch)
const prand = (seed: number) => {
  const x = Math.sin(seed * 9301 + 49297) * 233280;
  return x - Math.floor(x);
};

const SKILLS=[
  {name:'Org.\nSynthesis',   pct:95,col:G},
  {name:'C–H\nActivation',   pct:90,col:G},
  {name:'Pd\nCatalysis',     pct:88,col:G},
  {name:'COF\nDesign',       pct:80,col:B},
  {name:'NMR\nSpectroscopy', pct:90,col:B},
  {name:'FT-IR\nAnalysis',   pct:88,col:B},
  {name:'Column\nChrom.',    pct:92,col:O},
  {name:'XRD\nUV-Vis',      pct:80,col:O},
  {name:'DFT\nCalc.',       pct:65,col:O},
  {name:'Stereosel.\nSynth', pct:85,col:G},
  {name:'Metal-Free\nSynth.',pct:80,col:B},
  {name:'Data\nAnalysis',    pct:75,col:O},
];

const SOFT=['Scientific Writing','Literature Review','Lab Safety Protocols','Team Collaboration','Research Methodology','Problem Solving'];

// Pre-compute NMR bar heights with deterministic values
const PEAKS = [5,12,18,22,28,35,40,48,55];
const NMR_BARS = Array.from({length:60},(_,i) => {
  const near = PEAKS.some(p => Math.abs(i-p) < 3);
  const h = near
    ? Math.max(10, 60 - Math.min(...PEAKS.map(p => Math.abs(i-p)))*18)
    : prand(i) * 8 + 2;
  return { h, near };
});

export default function SkillsSection() {
  return (
    <section id="skills" style={{background:'#f7f6f2',padding:'7rem 3rem',position:'relative',overflow:'hidden'}}>
      <div style={{position:'absolute',inset:0,backgroundImage:'linear-gradient(rgba(0,0,0,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.05) 1px,transparent 1px)',backgroundSize:'44px 44px',pointerEvents:'none'}}/>

      <div style={{maxWidth:'1380px',margin:'0 auto',position:'relative',zIndex:2}}>
        {/* Label */}
        <div style={{fontFamily:'monospace',fontSize:'11px',letterSpacing:'5px',color:G,marginBottom:'0.5rem'}}>// SECTION 03</div>

        {/* Title */}
        <h2 style={{fontFamily:'"Arial Black",sans-serif',fontSize:'clamp(2.5rem,6vw,5rem)',fontWeight:900,textTransform:'uppercase',letterSpacing:'-2px',lineHeight:0.9,color:'#0a0a12',marginBottom:'0.8rem'}}>
          TECHNICAL<br/>
          <span style={{WebkitTextStroke:`2px ${B}`,color:'transparent'}}>ARSENAL</span>
        </h2>
        <p style={{fontFamily:'monospace',fontSize:'12px',color:'#606070',letterSpacing:'2px',marginBottom:'4rem'}}>HOVER OVER CELLS ↓</p>

        {/* ── Hex grid ── */}
        <div style={{display:'flex',flexWrap:'wrap',gap:'6px',marginBottom:'5rem'}}>
          {SKILLS.map((s,i) => (
            <div
              key={i}
              style={{
                clipPath:'polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)',
                width:'116px',height:'134px',
                background:`radial-gradient(circle at 50% 70%,${s.col}20 0%,#ffffff 70%)`,
                display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',
                cursor:'default',transition:'transform 0.3s,filter 0.3s',position:'relative',
                border:'none',
              }}
              onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.transform='scale(1.12)';(e.currentTarget as HTMLElement).style.filter='brightness(0.93)';}}
              onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.transform='scale(1)';(e.currentTarget as HTMLElement).style.filter='brightness(1)';}}
            >
              <div style={{position:'absolute',inset:'3px',clipPath:'polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)',background:`${s.col}15`}}/>
              {/* Percentage */}
              <span style={{fontFamily:'"Arial Black",sans-serif',fontSize:'22px',fontWeight:900,color:s.col,lineHeight:1,position:'relative',zIndex:1}}>
                {s.pct}
              </span>
              <span style={{fontFamily:'monospace',fontSize:'9px',color:s.col,marginTop:'1px',position:'relative',zIndex:1,fontWeight:700}}>%</span>
              {/* Name */}
              <span style={{fontFamily:'monospace',fontSize:'9px',color:'#444455',textAlign:'center',lineHeight:1.3,marginTop:'5px',whiteSpace:'pre-line',position:'relative',zIndex:1,fontWeight:600}}>
                {s.name}
              </span>
            </div>
          ))}
        </div>

        {/* ── NMR Spectrum ── */}
        <div style={{marginBottom:'4rem'}}>
          <div style={{fontFamily:'monospace',fontSize:'11px',letterSpacing:'3px',color:'#606070',marginBottom:'1rem',fontWeight:600}}>
            NMR SPECTROSCOPY PROFICIENCY SPECTRUM
          </div>
          <div style={{border:'1px solid rgba(0,0,0,0.1)',borderRadius:'4px',padding:'1.5rem',background:'#fff',position:'relative',overflow:'hidden'}}>
            <div style={{display:'flex',alignItems:'flex-end',gap:'4px',height:'60px'}}>
              {NMR_BARS.map(({h,near},i) => (
                <div key={i} style={{
                  width:'4px',
                  height:`${h}px`,
                  background: near ? G : 'rgba(0,0,0,0.15)',
                  borderRadius:'2px 2px 0 0',
                  boxShadow: near ? `0 0 6px ${G}66` : undefined,
                  flexShrink: 0,
                }}/>
              ))}
            </div>
            <div style={{display:'flex',justifyContent:'space-between',marginTop:'8px',fontFamily:'monospace',fontSize:'9px',color:'#888898',fontWeight:600}}>
              {['δ 10','δ 8','δ 6','δ 4','δ 2','δ 0'].map(l => <span key={l}>{l}</span>)}
            </div>
          </div>
        </div>

        {/* ── Soft skills ── */}
        <div>
          <div style={{fontFamily:'monospace',fontSize:'11px',letterSpacing:'3px',color:'#606070',marginBottom:'1rem',fontWeight:600}}>
            LABORATORY & PROFESSIONAL COMPETENCIES
          </div>
          <div style={{display:'flex',flexWrap:'wrap',gap:'8px'}}>
            {SOFT.map(s => (
              <span key={s} style={{
                fontFamily:'monospace',fontSize:'11px',letterSpacing:'1px',
                padding:'8px 16px',
                border:`1px solid ${O}66`,color:O,
                borderRadius:'2px',background:`${O}0c`,
                fontWeight:600,
              }}>
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
