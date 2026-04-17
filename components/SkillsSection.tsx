'use client';

const G='#007744',B='#0055aa',O='#cc4400';
const T1='#08080f',T2='#1a1a2c',T3='#555568';

const glass = {
  background:'rgba(255,255,255,0.82)',
  backdropFilter:'blur(20px)',
  WebkitBackdropFilter:'blur(20px)',
  border:'1px solid rgba(255,255,255,0.92)',
  boxShadow:'0 8px 32px rgba(0,0,40,0.08),0 2px 8px rgba(0,0,0,0.04)',
  borderRadius:'14px',
} as const;

// Seeded pseudo-random for NMR bars — no hydration mismatch
const prand = (seed:number) => { const x=Math.sin(seed*9301+49297)*233280; return x-Math.floor(x); };
const PEAKS=[5,12,18,22,28,35,40,48,55];
const NMR_BARS=Array.from({length:60},(_,i)=>{
  const near=PEAKS.some(p=>Math.abs(i-p)<3);
  return {h:near?Math.max(10,60-Math.min(...PEAKS.map(p=>Math.abs(i-p)))*18):prand(i)*8+2,near};
});

const SKILLS=[
  {name:'NMR\nSampling',      pct:95,col:G},
  {name:'Column\nChrom.',     pct:92,col:G},
  {name:'TLC',                pct:90,col:G},
  {name:'UV-Vis\nSpectrosc.', pct:88,col:B},
  {name:'FT-IR',              pct:88,col:B},
  {name:'TG-DTA\n/ DSC',      pct:80,col:B},
  {name:'UV-DRS',             pct:78,col:O},
  {name:'XRD',                pct:80,col:O},
  {name:'Sonicator',          pct:85,col:O},
  {name:'Rotary\nEvap.',      pct:90,col:G},
  {name:'Org.\nSynthesis',    pct:95,col:G},
  {name:'Stereosel.\nSynth.', pct:85,col:B},
];
const COMPUTER=['MS Word','MS Excel','MS PowerPoint','OriginPro','ChemDraw'];

export default function SkillsSection() {
  return (
    <section id="skills" style={{background:'linear-gradient(135deg,#eef3ea 0%,#f4f3ef 60%,#eaeaf5 100%)',padding:'7rem 3rem',position:'relative',overflow:'hidden'}}>
      <div style={{position:'absolute',inset:0,backgroundImage:'linear-gradient(rgba(0,0,80,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,80,0.03) 1px,transparent 1px)',backgroundSize:'44px 44px',pointerEvents:'none'}}/>

      <div style={{maxWidth:'1380px',margin:'0 auto',position:'relative',zIndex:2}}>
        <div style={{fontFamily:'monospace',fontSize:'11px',letterSpacing:'5px',color:G,marginBottom:'0.5rem',fontWeight:700}}>// SECTION 03</div>
        <h2 style={{fontFamily:'"Arial Black",sans-serif',fontSize:'clamp(2.5rem,6vw,5rem)',fontWeight:900,textTransform:'uppercase',letterSpacing:'-2px',lineHeight:0.9,color:T1,marginBottom:'0.8rem'}}>
          TECHNICAL<br/>
          <span style={{WebkitTextStroke:`2.5px ${B}`,color:'transparent'}}>ARSENAL</span>
        </h2>
        <p style={{fontFamily:'monospace',fontSize:'12px',color:T3,letterSpacing:'2px',marginBottom:'4rem',fontWeight:600}}>HOVER OVER CELLS · LAB TECHNIQUES ↓</p>

        {/* Hex skill cells */}
        <div style={{display:'flex',flexWrap:'wrap',gap:'8px',marginBottom:'4rem'}}>
          {SKILLS.map((s,i)=>(
            <div key={i}
              style={{
                clipPath:'polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)',
                width:'120px',height:'138px',
                background:`radial-gradient(circle at 50% 60%,rgba(255,255,255,0.95) 0%,${s.col}14 100%)`,
                backdropFilter:'blur(12px)',WebkitBackdropFilter:'blur(12px)',
                display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',
                cursor:'default',transition:'transform 0.3s,filter 0.3s',position:'relative',
                filter:'drop-shadow(0 4px 12px rgba(0,0,40,0.08))',
              }}
              onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.transform='scale(1.13)';(e.currentTarget as HTMLElement).style.filter='drop-shadow(0 8px 24px rgba(0,0,40,0.14))';}}
              onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.transform='scale(1)';(e.currentTarget as HTMLElement).style.filter='drop-shadow(0 4px 12px rgba(0,0,40,0.08))';}}
            >
              <span style={{fontFamily:'"Arial Black",sans-serif',fontSize:'23px',fontWeight:900,color:s.col,lineHeight:1,position:'relative',zIndex:1}}>{s.pct}</span>
              <span style={{fontFamily:'monospace',fontSize:'10px',color:s.col,fontWeight:700,position:'relative',zIndex:1}}>%</span>
              <span style={{fontFamily:'monospace',fontSize:'9px',color:T2,textAlign:'center',lineHeight:1.3,marginTop:'5px',whiteSpace:'pre-line',position:'relative',zIndex:1,fontWeight:600}}>{s.name}</span>
            </div>
          ))}
        </div>

        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'2rem',marginBottom:'3rem'}}>
          {/* NMR spectrum */}
          <div style={{...glass,padding:'1.8rem'}}>
            <div style={{fontFamily:'monospace',fontSize:'10px',letterSpacing:'3px',color:T3,marginBottom:'1rem',fontWeight:700}}>¹H NMR PROFICIENCY SPECTRUM</div>
            <div style={{display:'flex',alignItems:'flex-end',gap:'3px',height:'56px'}}>
              {NMR_BARS.map(({h,near},i)=>(
                <div key={i} style={{width:'4px',height:`${h}px`,background:near?G:'rgba(0,0,0,0.12)',borderRadius:'2px 2px 0 0',boxShadow:near?`0 0 6px ${G}55`:undefined,flexShrink:0}}/>
              ))}
            </div>
            <div style={{display:'flex',justifyContent:'space-between',marginTop:'8px',fontFamily:'monospace',fontSize:'9px',color:T3,fontWeight:600}}>
              {['δ 10','δ 8','δ 6','δ 4','δ 2','δ 0'].map(l=><span key={l}>{l}</span>)}
            </div>
          </div>

          {/* Computer skills */}
          <div style={{...glass,padding:'1.8rem'}}>
            <div style={{fontFamily:'monospace',fontSize:'10px',letterSpacing:'3px',color:B,marginBottom:'1.2rem',fontWeight:700}}>COMPUTER SKILLS</div>
            {COMPUTER.map((s,i)=>(
              <div key={i} style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:'10px'}}>
                <span style={{fontFamily:'monospace',fontSize:'12px',color:T1,fontWeight:600}}>{s}</span>
                <div style={{width:'100px',height:'4px',background:'rgba(0,0,0,0.07)',borderRadius:'4px',overflow:'hidden'}}>
                  <div style={{height:'100%',background:`linear-gradient(90deg,${B},${G})`,width:[88,85,80,82,90][i]+'%',borderRadius:'4px'}}/>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical skills tags */}
        <div style={{...glass,padding:'1.8rem'}}>
          <div style={{fontFamily:'monospace',fontSize:'10px',letterSpacing:'3px',color:O,marginBottom:'1.2rem',fontWeight:700}}>TECHNICAL SKILLS · LABORATORY INSTRUMENTATION</div>
          <div style={{display:'flex',flexWrap:'wrap',gap:'8px'}}>
            {['NMR Sampling','Column Chromatography','TLC','UV-Visible Spectroscopy (Shimadzu 1800)','FT-IR','TG-DTA','DSC','UV-DRS','XRD','Sonicator','Rotary Evaporator'].map(s=>(
              <span key={s} style={{fontFamily:'monospace',fontSize:'11px',letterSpacing:'1px',padding:'7px 14px',border:`1px solid ${O}55`,color:O,borderRadius:'6px',background:`${O}0c`,fontWeight:600}}>{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
