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

const DATA=[
  {label:'FULL NAME',   value:'Naitik Gupta'},
  {label:'STATUS',      value:'M.Sc. Chemistry 2nd Year'},
  {label:'INSTITUTION', value:'VNIT Nagpur'},
  {label:'LOCATION',    value:'Nagpur, Maharashtra 440010'},
  {label:'PHONE',       value:'+91-7007401684'},
  {label:'EMAIL',       value:'naitikgupta976@gmail.com'},
  {label:'INST. EMAIL', value:'ms24chm016@students.vnit.ac.in'},
  {label:'PUBLICATION', value:'Angew. Chem. Int. Ed. 2026'},
];

export default function AboutSection() {
  return (
    <section id="about" style={{background:'linear-gradient(135deg,#f0efea 0%,#eaeaf5 55%,#edf3ea 100%)',padding:'7rem 3rem',paddingTop:'128px',paddingBottom:'0px',position:'relative',overflow:'hidden'}}>
      <div style={{position:'absolute',inset:0,backgroundImage:'linear-gradient(rgba(0,0,80,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,80,0.03) 1px,transparent 1px)',backgroundSize:'44px 44px',pointerEvents:'none'}}/>
      <div style={{position:'absolute',right:'-40px',top:'50%',transform:'translateY(-50%)',fontSize:'26rem',fontWeight:900,fontFamily:'monospace',color:'rgba(0,0,80,0.025)',lineHeight:1,pointerEvents:'none',userSelect:'none'}}>C</div>

      <div style={{maxWidth:'1380px',margin:'0 auto',position:'relative',zIndex:2}}>
        <div style={{fontFamily:'monospace',fontSize:'11px',letterSpacing:'5px',color:G,marginBottom:'15px',fontWeight:700}}>// SECTION 02</div>
        <h2 style={{fontFamily:'"Arial Black",sans-serif',fontSize:'clamp(2.5rem,6vw,5rem)',fontWeight:900,textTransform:'uppercase',letterSpacing:'-2px',lineHeight:0.9,color:T1,marginBottom:'32px'}}>
          ABOUT<br/><span style={{WebkitTextStroke:'2.5px rgba(0,119,68,0.8)',color:'transparent'}}></span>
        </h2>

        <div style={{display:'grid',gridTemplateColumns:'1fr 1.3fr',gap:'4rem',alignItems:'start',}} className="section-reveal">
          {/* Specimen card */}
          <div style={{...glass,overflow:'hidden'}} className="slide-left-reveal">
            <div style={{background:`linear-gradient(90deg,${G}18,${B}10)`,borderBottom:'1px solid rgba(255,255,255,0.6)',padding:'14px 22px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <span style={{fontFamily:'monospace',fontSize:'11px',letterSpacing:'3px',color:G,fontWeight:700}}>SPECIMEN RECORD</span>
              <span style={{fontFamily:'monospace',fontSize:'10px',color:T3}}>REF-NG-2024</span>
            </div>
            {DATA.map((d,i)=>(
              <div key={i} style={{display:'grid',gridTemplateColumns:'42% 58%',borderBottom:'1px solid rgba(0,0,0,0.05)',padding:'13px 22px',background:i%2===0?'rgba(255,255,255,0.3)':'rgba(255,255,255,0.6)'}}>
                <span style={{fontFamily:'monospace',fontSize:'10px',letterSpacing:'2px',color:T3,fontWeight:600}}>{d.label}</span>
                <span style={{fontFamily:'monospace',fontSize:'12px',color:T1,fontWeight:600}}>{d.value}</span>
              </div>
            ))}
          </div>

          {/* Bio + skills */}
          <div style={{display:'flex',flexDirection:'column',gap:'2rem'}} className="slide-right-reveal">


            {/* Skills grid */}
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1rem'}}>
              <div style={{...glass,padding:'1.5rem',paddingRight:'20px'}}>
                <div style={{fontFamily:'monospace',fontSize:'10px',letterSpacing:'2px',color:B,marginBottom:'0.8rem',fontWeight:700}}>COMPUTER SKILLS</div>
                {['MS Word','MS Excel','MS PowerPoint','OriginPro','ChemDraw'].map(s=>(
                  <div key={s} style={{display:'flex',alignItems:'center',gap:'8px',marginBottom:'5px'}}>
                    <span style={{width:'5px',height:'5px',borderRadius:'50%',background:B,flexShrink:0,display:'inline-block'}}/>
                    <span style={{fontFamily:'monospace',fontSize:'12px',color:T2,fontWeight:500}}>{s}</span>
                  </div>
                ))}
              </div>
              <div style={{...glass,padding:'1.5rem'}}>
                <div style={{fontFamily:'monospace',fontSize:'10px',letterSpacing:'2px',color:O,marginBottom:'0.8rem',fontWeight:700}}>LANGUAGES</div>
                {['English (Fluent)','Hindi (Native)'].map(s=>(
                  <div key={s} style={{display:'flex',alignItems:'center',gap:'8px',marginBottom:'5px'}}>
                    <span style={{width:'5px',height:'5px',borderRadius:'50%',background:O,flexShrink:0,display:'inline-block'}}/>
                    <span style={{fontFamily:'monospace',fontSize:'12px',color:T2,fontWeight:500}}>{s}</span>
                  </div>
                ))}
                <div style={{fontFamily:'monospace',fontSize:'10px',letterSpacing:'2px',color:G,marginTop:'1rem',marginBottom:'0.8rem',fontWeight:700}}>COURSEWORK</div>
                {['Organic Synthesis','Stereoselective Synthesis','Analytical Chemistry','Spectroscopic Techniques','Physical Chemistry'].map(s=>(
                  <div key={s} style={{display:'flex',alignItems:'center',gap:'8px',marginBottom:'5px'}}>
                    <span style={{width:'5px',height:'5px',borderRadius:'50%',background:G,flexShrink:0,display:'inline-block'}}/>
                    <span style={{fontFamily:'monospace',fontSize:'11px',color:T2,fontWeight:500}}>{s}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'1rem'}}>
              {[
                {n:'01',label:'Publication\nAngew. Chem.',col:G},
                {n:'03',label:'Research\nInternships',col:B},
                {n:'04',label:'Prestigious\nAwards',col:O},
              ].map((s,i)=>(
                <div key={i} style={{...glass,padding:'1.5rem',textAlign:'center'}}>
                  <div style={{fontFamily:'"Arial Black",sans-serif',fontSize:'2.8rem',fontWeight:900,color:s.col,lineHeight:1}}>{s.n}</div>
                  <div style={{fontFamily:'monospace',fontSize:'10px',letterSpacing:'1px',color:T3,marginTop:'6px',whiteSpace:'pre-line',fontWeight:600}}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* Publication callout */}
            <div style={{...glass,padding:'2rem',display:'grid',gridTemplateColumns:'auto 1fr',gap:'2rem',alignItems:'center'}}>
              <div style={{fontFamily:'"Arial Black",sans-serif',fontSize:'3.5rem',fontWeight:900,color:`${G}22`,lineHeight:1,letterSpacing:'-2px'}}>PUB</div>
              <div>
                <div style={{fontFamily:'monospace',fontSize:'10px',letterSpacing:'3px',color:G,marginBottom:'6px',fontWeight:700}}>ANGEWANDTE CHEMIE INTERNATIONAL EDITION · 2026 · 65, e23983</div>
                <p style={{fontFamily:'Georgia,serif',fontSize:'14px',color:T2,lineHeight:1.7,marginBottom:'8px'}}>
                  <em>"Engineering Isoquinoline-derived Directing Template for Distal C5-H Functionalization of Bicyclic Aza-arenes"</em>
                </p>
                <div style={{fontFamily:'monospace',fontSize:'11px',color:T3,fontWeight:500}}>
                  A. Mandal, R. Bano, S. Chattopadhyay, R. Banerjee, D. Borah, <span style={{color:G,fontWeight:700}}>N. Gupta</span>, M. Shanmugam, D. Maiti
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
