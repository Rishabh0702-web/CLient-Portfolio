'use client';
const G='#007744',B='#0055aa',O='#cc4400';
const REFS=[
  {id:'01',name:'Dr. Umesh R. Pratap',title:'Associate Professor · Dept. of Chemistry',inst:'VNIT Nagpur',role:'M.Sc. Thesis Supervisor',email:'upratap@chm.vnit.ac.in',phone:'+91-712-280-1773',area:'Heterogeneous Catalysis · C–H Activation',col:G},
  {id:'02',name:'Prof. Debabrata Maiti',title:'Professor · Dept. of Chemistry',inst:'IIT Bombay',role:'Summer Internship Supervisor',email:'dmaiti@iitb.ac.in',phone:'022-2576-7155',area:'C–H Functionalization · Directing Groups',col:B},
  {id:'03',name:'Prof. Brijesh Rathi',title:'Associate Professor · Dept. of Chemistry',inst:'Hansraj College, Univ. of Delhi',role:'B.Sc. Academic Mentor',email:'brijeshrathi@hrc.du.ac.in',phone:'+91-11-2766-7458',area:'Organic Chemistry · Research Guidance',col:O},
];
export default function ReferencesSection() {
  return (
    <section id="references" style={{background:'#f0efeb',padding:'7rem 3rem',position:'relative',overflow:'hidden'}}>
      <div style={{position:'absolute',inset:0,backgroundImage:'linear-gradient(rgba(0,0,0,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.04) 1px,transparent 1px)',backgroundSize:'44px 44px',pointerEvents:'none'}}/>
      <div style={{maxWidth:'1380px',margin:'0 auto',position:'relative',zIndex:2}}>
        <div style={{fontFamily:'monospace',fontSize:'11px',letterSpacing:'5px',color:G,marginBottom:'0.5rem'}}>// SECTION 06</div>
        <h2 style={{fontFamily:'"Arial Black",sans-serif',fontSize:'clamp(2.5rem,6vw,5rem)',fontWeight:900,textTransform:'uppercase',letterSpacing:'-2px',lineHeight:0.9,color:'#0e0e14',marginBottom:'4rem'}}>
          MENTORS &<br/><span style={{WebkitTextStroke:`2px ${G}99`,color:'transparent'}}>REFERENCES</span>
        </h2>

        <div style={{display:'flex',flexDirection:'column',gap:'2px',marginBottom:'4rem'}}>
          {REFS.map((r,i)=>(
            <div key={i}
              style={{display:'grid',gridTemplateColumns:'60px 1fr 1fr',border:'1px solid rgba(0,0,0,0.08)',background:'#ffffff',transition:'all 0.3s'}}
              onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.borderColor=`${r.col}44`;(e.currentTarget as HTMLElement).style.boxShadow=`0 2px 12px ${r.col}10`;}}
              onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.borderColor='rgba(0,0,0,0.08)';(e.currentTarget as HTMLElement).style.boxShadow='none';}}
            >
              <div style={{background:`${r.col}0a`,borderRight:'1px solid rgba(0,0,0,0.06)',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <span style={{fontFamily:'"Arial Black",sans-serif',fontSize:'1.5rem',fontWeight:900,color:r.col,opacity:0.4}}>{r.id}</span>
              </div>
              <div style={{padding:'2rem',borderRight:'1px solid rgba(0,0,0,0.06)'}}>
                <div style={{fontFamily:'monospace',fontSize:'10px',letterSpacing:'2px',color:r.col,marginBottom:'6px'}}>{r.role}</div>
                <h3 style={{fontFamily:'"Arial Black",sans-serif',fontSize:'1.2rem',fontWeight:900,color:'#0e0e14',textTransform:'uppercase',letterSpacing:'-0.5px',marginBottom:'4px'}}>{r.name}</h3>
                <div style={{fontFamily:'monospace',fontSize:'11px',color:'#888898',marginBottom:'4px'}}>{r.title}</div>
                <div style={{fontFamily:'monospace',fontSize:'11px',color:'#aaaabc'}}>{r.inst}</div>
                <div style={{marginTop:'1rem',padding:'6px 12px',background:`${r.col}0d`,border:`1px solid ${r.col}22`,borderRadius:'2px',display:'inline-block'}}>
                  <span style={{fontFamily:'monospace',fontSize:'10px',color:r.col}}>{r.area}</span>
                </div>
              </div>
              <div style={{padding:'2rem',display:'flex',flexDirection:'column',justifyContent:'center',gap:'12px'}}>
                <div>
                  <div style={{fontFamily:'monospace',fontSize:'9px',letterSpacing:'2px',color:'#ccccda',marginBottom:'3px'}}>EMAIL</div>
                  <a href={`mailto:${r.email}`} style={{fontFamily:'monospace',fontSize:'11px',color:'#6a6a80',textDecoration:'none',transition:'color 0.2s'}}
                    onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.color=r.col;}}
                    onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.color='#6a6a80';}}
                  >{r.email}</a>
                </div>
                <div>
                  <div style={{fontFamily:'monospace',fontSize:'9px',letterSpacing:'2px',color:'#ccccda',marginBottom:'3px'}}>PHONE</div>
                  <a href={`tel:${r.phone}`} style={{fontFamily:'monospace',fontSize:'11px',color:'#6a6a80',textDecoration:'none'}}>{r.phone}</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact grid */}
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'2px'}}>
          {[
            {label:'PERSONAL EMAIL',value:'naitikgupta976@gmail.com',href:'mailto:naitikgupta976@gmail.com',col:G},
            {label:'INSTITUTIONAL EMAIL',value:'ms24chm016@students.vnit.ac.in',href:'mailto:ms24chm016@students.vnit.ac.in',col:B},
            {label:'MOBILE',value:'+91-7007401684',href:'tel:+917007401684',col:O},
            {label:'LOCATION',value:'VNIT Nagpur, Maharashtra – 440010',href:'#',col:G},
          ].map((c,i)=>(
            <div key={i} style={{padding:'1.5rem',border:'1px solid rgba(0,0,0,0.07)',background:'#ffffff'}}>
              <div style={{fontFamily:'monospace',fontSize:'9px',letterSpacing:'3px',color:'#ccccda',marginBottom:'6px'}}>{c.label}</div>
              <a href={c.href} style={{fontFamily:'monospace',fontSize:'13px',color:c.col,textDecoration:'none',transition:'opacity 0.2s'}}>{c.value}</a>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{marginTop:'5rem',paddingTop:'2rem',borderTop:'1px solid rgba(0,0,0,0.07)',display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:'12px'}}>
          <span style={{fontFamily:'monospace',fontSize:'11px',letterSpacing:'2px',color:'#ccccda'}}>NAITIK GUPTA · PORTFOLIO · 2025</span>
          <span style={{fontFamily:'monospace',fontSize:'11px',color:G,letterSpacing:'2px'}}>C–H FUNCTIONALIZATION · CATALYSIS · SYNTHESIS</span>
          <span style={{fontFamily:'monospace',fontSize:'11px',color:'#ccccda'}}>BUILT WITH PRECISION</span>
        </div>
      </div>
    </section>
  );
}
