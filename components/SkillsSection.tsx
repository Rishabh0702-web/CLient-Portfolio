'use client';

const SKILLS = [
  { name:'Org.\nSynthesis',   pct:95, col:'#00ff88' },
  { name:'C–H\nActivation',   pct:90, col:'#00ff88' },
  { name:'Pd\nCatalysis',     pct:88, col:'#00ff88' },
  { name:'COF\nDesign',       pct:80, col:'#00d4ff' },
  { name:'NMR\nSpectroscopy', pct:90, col:'#00d4ff' },
  { name:'FT-IR\nAnalysis',   pct:88, col:'#00d4ff' },
  { name:'Column\nChrom.',    pct:92, col:'#ff6b35' },
  { name:'XRD\nUV-Vis',      pct:80, col:'#ff6b35' },
  { name:'DFT\nCalc.',       pct:65, col:'#ff6b35' },
  { name:'Stereosel.\nSynth', pct:85, col:'#00ff88' },
  { name:'Metal-Free\nSynth.',pct:80, col:'#00d4ff' },
  { name:'Data\nAnalysis',    pct:75, col:'#ff6b35' },
];

const SOFT = ['Scientific Writing','Literature Review','Lab Safety Protocols','Team Collaboration','Research Methodology','Problem Solving'];

export default function SkillsSection() {
  return (
    <section id="skills" style={{ background:'#08090f',padding:'7rem 3rem',position:'relative',overflow:'hidden' }}>
      <div style={{ position:'absolute',inset:0,backgroundImage:'linear-gradient(rgba(0,255,136,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(0,255,136,0.02) 1px,transparent 1px)',backgroundSize:'44px 44px',pointerEvents:'none' }}/>

      <div style={{ maxWidth:'1380px',margin:'0 auto',position:'relative',zIndex:2 }}>
        <div style={{ fontFamily:'monospace',fontSize:'11px',letterSpacing:'5px',color:'#00ff88',marginBottom:'0.5rem' }}>// SECTION 03</div>
        <h2 style={{ fontFamily:'"Arial Black",sans-serif',fontSize:'clamp(2.5rem,6vw,5rem)',fontWeight:900,textTransform:'uppercase',letterSpacing:'-2px',lineHeight:0.9,color:'#eeeef0',marginBottom:'1.5rem' }}>
          TECHNICAL<br/><span style={{ WebkitTextStroke:'2px rgba(0,212,255,0.6)',color:'transparent' }}>ARSENAL</span>
        </h2>
        <p style={{ fontFamily:'monospace',fontSize:'12px',color:'#404060',letterSpacing:'2px',marginBottom:'4rem' }}>HOVER OVER CELLS ↓</p>

        {/* Hex grid */}
        <div style={{ display:'flex',flexWrap:'wrap',gap:'6px',marginBottom:'5rem' }}>
          {SKILLS.map((s,i) => (
            <div
              key={i}
              style={{
                position:'relative',
                clipPath:'polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)',
                width:'116px',height:'134px',
                background:`radial-gradient(circle at 50% 70%, ${s.col}15 0%, rgba(14,16,32,0.98) 70%)`,
                display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',
                cursor:'default',
                transition:'transform 0.3s,filter 0.3s',
                animationDelay:`${i*0.05}s`,
              }}
              onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.transform='scale(1.15)';(e.currentTarget as HTMLElement).style.filter='brightness(1.4)';}}
              onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.transform='scale(1)';(e.currentTarget as HTMLElement).style.filter='brightness(1)';}}
            >
              {/* Inner hex border */}
              <div style={{ position:'absolute',inset:'3px',clipPath:'polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)',border:`1px solid ${s.col}30`,borderRadius:'0' }}/>
              <span style={{ fontFamily:'"Arial Black",sans-serif',fontSize:'22px',fontWeight:900,color:s.col,textShadow:`0 0 16px ${s.col}88`,lineHeight:1 }}>{s.pct}</span>
              <span style={{ fontFamily:'monospace',fontSize:'9px',color:`${s.col}aa`,marginTop:'2px',letterSpacing:'0.5px' }}>%</span>
              <span style={{ fontFamily:'monospace',fontSize:'8px',color:'#606080',textAlign:'center',lineHeight:1.3,marginTop:'4px',whiteSpace:'pre-line' }}>{s.name}</span>
            </div>
          ))}
        </div>

        {/* NMR Spectrum visualization */}
        <div style={{ marginBottom:'4rem' }}>
          <div style={{ fontFamily:'monospace',fontSize:'11px',letterSpacing:'3px',color:'#404060',marginBottom:'1rem' }}>NMR SPECTROSCOPY PROFICIENCY SPECTRUM</div>
          <div style={{ border:'1px solid rgba(0,255,136,0.12)',borderRadius:'4px',padding:'1.5rem',background:'rgba(14,16,32,0.8)',position:'relative',overflow:'hidden' }}>
            <div style={{ display:'flex',alignItems:'flex-end',gap:'4px',height:'60px' }}>
              {Array.from({length:60},(_,i) => {
                const peaks = [5,12,18,22,28,35,40,48,55];
                const near = peaks.some(p => Math.abs(i-p) < 3);
                const h = near ? Math.max(10, 60 - Math.min(...peaks.map(p=>Math.abs(i-p)))*18) : Math.random()*8+2;
                return (
                  <div key={i} style={{
                    width:'4px',height:`${h}px`,
                    background:`rgba(0,255,136,${near?0.8:0.2})`,
                    borderRadius:'2px 2px 0 0',
                    boxShadow: near?'0 0 6px #00ff8866':undefined,
                    animation:`spectrumPeak ${1+Math.random()*1}s ease-in-out infinite`,
                    animationDelay:`${i*0.05}s`,
                  }}/>
                );
              })}
            </div>
            <div style={{ display:'flex',justifyContent:'space-between',marginTop:'8px',fontFamily:'monospace',fontSize:'9px',color:'#303050' }}>
              {['δ 10','δ 8','δ 6','δ 4','δ 2','δ 0'].map(l=><span key={l}>{l}</span>)}
            </div>
          </div>
        </div>

        {/* Soft skills */}
        <div>
          <div style={{ fontFamily:'monospace',fontSize:'11px',letterSpacing:'3px',color:'#404060',marginBottom:'1rem' }}>LABORATORY & PROFESSIONAL COMPETENCIES</div>
          <div style={{ display:'flex',flexWrap:'wrap',gap:'8px' }}>
            {SOFT.map(s=>(
              <span key={s} style={{ fontFamily:'monospace',fontSize:'11px',letterSpacing:'1px',padding:'7px 14px',border:'1px solid rgba(255,107,53,0.3)',color:'#ff6b35',borderRadius:'2px',background:'rgba(255,107,53,0.05)' }}>{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
