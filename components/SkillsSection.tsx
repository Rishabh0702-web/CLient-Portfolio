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

const COMPUTER=['MS Word','MS Excel','MS PowerPoint','OriginPro','ChemDraw'];

export default function SkillsSection() {
  return (
    <section id="skills" style={{background:'linear-gradient(135deg,#eef3ea 0%,#f4f3ef 60%,#eaeaf5 100%)',padding:'7rem 3rem 0px 3rem',position:'relative',overflow:'hidden'}}>
      <div style={{position:'absolute',inset:0,backgroundImage:'linear-gradient(rgba(0,0,80,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,80,0.03) 1px,transparent 1px)',backgroundSize:'44px 44px',pointerEvents:'none'}}/>

      <div style={{maxWidth:'1380px',margin:'0 auto',position:'relative',zIndex:2}}>
        <div style={{fontFamily:'monospace',fontSize:'11px',letterSpacing:'5px',color:G,marginBottom:'0.5rem',fontWeight:700}}></div>
        <h2 style={{fontFamily:'"Arial Black",sans-serif',fontSize:'clamp(2.5rem,6vw,5rem)',fontWeight:900,textTransform:'uppercase',letterSpacing:'-2px',lineHeight:0.9,color:T1,marginBottom:'0.8rem'}}>
          TECHNICAL<br/>
          <span style={{WebkitTextStroke:`2.5px ${B}`,color:'transparent'}}>ARSENAL</span>
        </h2>


        <div style={{marginBottom:'3rem'}} className="section-reveal">
          {/* Computer skills */}
          <div style={{...glass,padding:'1.8rem'}} className="slide-right-reveal">
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
        <div style={{...glass,padding:'1.8rem'}} className="section-reveal">
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
