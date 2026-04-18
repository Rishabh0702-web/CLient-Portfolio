'use client';
const G='#007744',B='#0055aa',O='#cc4400';
const T1='#08080f',T2='#1a1a2c',T3='#555568';

const glass={
  background:'rgba(255,255,255,0.84)',
  backdropFilter:'blur(20px)',
  WebkitBackdropFilter:'blur(20px)',
  border:'1px solid rgba(255,255,255,0.92)',
  boxShadow:'0 8px 32px rgba(0,0,40,0.07),0 2px 8px rgba(0,0,0,0.04)',
  borderRadius:'14px',
} as const;

const REFS=[
  {
    id:'01',name:'Dr. Umesh R. Pratap',role:'PROJECT SUPERVISOR',
    title:'Associate Professor, Department of Chemistry',
    inst:'Visvesvaraya National Institute of Technology (VNIT), Nagpur, Maharashtra, India – 440010',
    email:'upratap@chm.vnit.ac.in',phone:'+91-0712-2801773',col:G,
  },
  {
    id:'02',name:'Prof. Debabrata Maiti',role:'SUMMER INTERNSHIP SUPERVISOR',
    title:'Professor, Department of Chemistry',
    inst:'Indian Institute of Technology (IIT Bombay), Mumbai, Maharashtra, India – 400076',
    email:'dmaiti@iitb.ac.in',phone:'022-2576-7155',col:B,
  },
  {
    id:'03',name:'Prof. Brijesh Rathi',role:'B.SC. ACADEMIC MENTOR',
    title:'Associate Professor, Department of Chemistry',
    inst:'Hansraj College, University of Delhi, New Delhi, India – 110007',
    email:'brijeshrathi@hrc.du.ac.in',phone:'+91-11-27667458',col:O,
  },
];

export default function ReferencesSection() {
  return (
    <section id="references" style={{background:'linear-gradient(135deg,#f0eeea 0%,#edf0f5 55%,#eaf4ee 100%)',padding:'7rem 3rem',position:'relative',overflow:'hidden'}}>
      <div style={{position:'absolute',inset:0,backgroundImage:'linear-gradient(rgba(0,0,80,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,80,0.03) 1px,transparent 1px)',backgroundSize:'44px 44px',pointerEvents:'none'}}/>
      <div style={{maxWidth:'1380px',margin:'0 auto',position:'relative',zIndex:2}}>
        <div style={{fontFamily:'monospace',fontSize:'11px',letterSpacing:'5px',color:G,marginBottom:'0.5rem',fontWeight:700}}>// SECTION 06</div>
        <h2 style={{fontFamily:'"Arial Black",sans-serif',fontSize:'clamp(2.5rem,6vw,5rem)',fontWeight:900,textTransform:'uppercase',letterSpacing:'-2px',lineHeight:0.9,color:T1,marginBottom:'4rem'}}>
          MENTORS &<br/><span style={{WebkitTextStroke:`2.5px ${G}`,color:'transparent'}}>REFERENCES</span>
        </h2>

        <div style={{display:'flex',flexDirection:'column',gap:'1.2rem',marginBottom:'4rem'}} className="section-reveal">
          {REFS.map((r,i)=>(
            <div key={i} style={{...glass,display:'grid',gridTemplateColumns:'64px 1fr 1fr',overflow:'hidden',transition:'all 0.3s'}} className="slide-up-reveal" style={{animationDelay: `${i*0.1}s`}}
              onMouseEnter={e=>{const el=e.currentTarget as HTMLElement;el.style.transform='translateY(-2px)';el.style.boxShadow=`0 16px 40px ${r.col}18,0 4px 12px rgba(0,0,0,0.05)`;}}
              onMouseLeave={e=>{const el=e.currentTarget as HTMLElement;el.style.transform='translateY(0)';el.style.boxShadow='0 8px 32px rgba(0,0,40,0.07),0 2px 8px rgba(0,0,0,0.04)';}}
            >
              <div style={{background:`linear-gradient(180deg,${r.col}18,${r.col}05)`,borderRight:'1px solid rgba(255,255,255,0.7)',display:'flex',alignItems:'center',justifyContent:'center',padding:'1.5rem 0.5rem'}}>
                <span style={{fontFamily:'"Arial Black",sans-serif',fontSize:'1.6rem',fontWeight:900,color:r.col,opacity:0.5}}>{r.id}</span>
              </div>
              <div style={{padding:'2rem',borderRight:'1px solid rgba(0,0,0,0.05)'}}>
                <div style={{fontFamily:'monospace',fontSize:'9px',letterSpacing:'3px',color:r.col,marginBottom:'6px',fontWeight:700}}>{r.role}</div>
                <h3 style={{fontFamily:'"Arial Black",sans-serif',fontSize:'1.15rem',fontWeight:900,color:T1,textTransform:'uppercase',letterSpacing:'-0.5px',marginBottom:'4px'}}>{r.name}</h3>
                <div style={{fontFamily:'Georgia,serif',fontSize:'13px',color:T2,fontStyle:'italic',marginBottom:'4px'}}>{r.title}</div>
                <div style={{fontFamily:'monospace',fontSize:'11px',color:T3,lineHeight:1.5,fontWeight:500}}>{r.inst}</div>
              </div>
              <div style={{padding:'2rem',display:'flex',flexDirection:'column',justifyContent:'center',gap:'14px'}}>
                <div>
                  <div style={{fontFamily:'monospace',fontSize:'9px',letterSpacing:'2px',color:T3,marginBottom:'4px',fontWeight:700}}>EMAIL</div>
                  <a href={`mailto:${r.email}`} style={{fontFamily:'monospace',fontSize:'12px',color:r.col,textDecoration:'none',fontWeight:600,transition:'opacity 0.2s'}}
                    onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.opacity='0.7';}}
                    onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.opacity='1';}}
                  >{r.email}</a>
                </div>
                <div>
                  <div style={{fontFamily:'monospace',fontSize:'9px',letterSpacing:'2px',color:T3,marginBottom:'4px',fontWeight:700}}>PHONE</div>
                  <a href={`tel:${r.phone}`} style={{fontFamily:'monospace',fontSize:'12px',color:T2,textDecoration:'none',fontWeight:600}}>{r.phone}</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact grid */}
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1rem',marginBottom:'4rem'}} className="section-reveal">
          {[
            {label:'PERSONAL EMAIL',value:'naitikgupta976@gmail.com',href:'mailto:naitikgupta976@gmail.com',col:G},
            {label:'INSTITUTIONAL EMAIL',value:'ms24chm016@students.vnit.ac.in',href:'mailto:ms24chm016@students.vnit.ac.in',col:B},
            {label:'MOBILE',value:'+91-7007401684',href:'tel:+917007401684',col:O},
            {label:'LOCATION',value:'VNIT Nagpur, Maharashtra – 440010',href:'#',col:G},
          ].map((c,i)=>(
            <div key={i} style={{...glass,padding:'1.5rem'}}>
              <div style={{fontFamily:'monospace',fontSize:'9px',letterSpacing:'3px',color:T3,marginBottom:'6px',fontWeight:700}}>{c.label}</div>
              <a href={c.href} style={{fontFamily:'monospace',fontSize:'13px',color:c.col,textDecoration:'none',fontWeight:700}}>{c.value}</a>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{paddingTop:'2rem',borderTop:'1px solid rgba(0,0,0,0.07)',display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:'12px'}}>
          <span style={{fontFamily:'monospace',fontSize:'11px',letterSpacing:'2px',color:T3,fontWeight:600}}>NAITIK GUPTA · PORTFOLIO · 2025</span>
          <span style={{fontFamily:'monospace',fontSize:'11px',color:G,letterSpacing:'2px',fontWeight:700}}>C–H FUNCTIONALIZATION · CATALYSIS · SYNTHESIS</span>
          <span style={{fontFamily:'monospace',fontSize:'11px',color:T3,fontWeight:600}}>VNIT NAGPUR</span>
        </div>
      </div>
    </section>
  );
}
