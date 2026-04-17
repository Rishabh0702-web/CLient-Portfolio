'use client';
const REFS = [
  { id:'01',name:'Dr. Umesh R. Pratap',title:'Associate Professor · Dept. of Chemistry',inst:'VNIT Nagpur',role:'M.Sc. Thesis Supervisor',email:'upratap@chm.vnit.ac.in',phone:'+91-712-280-1773',area:'Heterogeneous Catalysis · C–H Activation',col:'#00ff88' },
  { id:'02',name:'Prof. Debabrata Maiti',title:'Professor · Dept. of Chemistry',inst:'IIT Bombay',role:'Summer Internship Supervisor',email:'dmaiti@iitb.ac.in',phone:'022-2576-7155',area:'C–H Functionalization · Directing Groups',col:'#00d4ff' },
  { id:'03',name:'Prof. Brijesh Rathi',title:'Associate Professor · Dept. of Chemistry',inst:'Hansraj College, Univ. of Delhi',role:'B.Sc. Academic Mentor',email:'brijeshrathi@hrc.du.ac.in',phone:'+91-11-2766-7458',area:'Organic Chemistry · Research Guidance',col:'#ff6b35' },
];

export default function ReferencesSection() {
  return (
    <section id="references" style={{ background:'#060610',padding:'7rem 3rem',position:'relative',overflow:'hidden' }}>
      <div style={{ position:'absolute',inset:0,backgroundImage:'linear-gradient(rgba(0,255,136,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,255,136,0.03) 1px,transparent 1px)',backgroundSize:'44px 44px',pointerEvents:'none' }}/>

      <div style={{ maxWidth:'1380px',margin:'0 auto',position:'relative',zIndex:2 }}>
        <div style={{ fontFamily:'monospace',fontSize:'11px',letterSpacing:'5px',color:'#00ff88',marginBottom:'0.5rem' }}>// SECTION 06</div>
        <h2 style={{ fontFamily:'"Arial Black",sans-serif',fontSize:'clamp(2.5rem,6vw,5rem)',fontWeight:900,textTransform:'uppercase',letterSpacing:'-2px',lineHeight:0.9,color:'#eeeef0',marginBottom:'4rem' }}>
          MENTORS &<br/><span style={{ WebkitTextStroke:'2px rgba(0,255,136,0.6)',color:'transparent' }}>REFERENCES</span>
        </h2>

        <div style={{ display:'flex',flexDirection:'column',gap:'2px',marginBottom:'4rem' }}>
          {REFS.map((r,i) => (
            <div key={i} style={{ display:'grid',gridTemplateColumns:'60px 1fr 1fr',border:'1px solid rgba(255,255,255,0.05)',background:'rgba(14,16,32,0.7)',gap:'0',transition:'all 0.3s' }}
              onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.borderColor=`${r.col}44`;}}
              onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.borderColor='rgba(255,255,255,0.05)';}}
            >
              <div style={{ background:`${r.col}0a`,borderRight:'1px solid rgba(255,255,255,0.05)',display:'flex',alignItems:'center',justifyContent:'center' }}>
                <span style={{ fontFamily:'"Arial Black",sans-serif',fontSize:'1.5rem',fontWeight:900,color:r.col,opacity:0.5 }}>{r.id}</span>
              </div>
              <div style={{ padding:'2rem',borderRight:'1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ fontFamily:'monospace',fontSize:'10px',letterSpacing:'2px',color:r.col,marginBottom:'6px' }}>{r.role}</div>
                <h3 style={{ fontFamily:'"Arial Black",sans-serif',fontSize:'1.2rem',fontWeight:900,color:'#eeeef0',textTransform:'uppercase',letterSpacing:'-0.5px',marginBottom:'4px' }}>{r.name}</h3>
                <div style={{ fontFamily:'monospace',fontSize:'11px',color:'#606080',marginBottom:'4px' }}>{r.title}</div>
                <div style={{ fontFamily:'monospace',fontSize:'11px',color:'#404060' }}>{r.inst}</div>
                <div style={{ marginTop:'1rem',padding:'6px 12px',background:`${r.col}0d`,border:`1px solid ${r.col}22`,borderRadius:'2px',display:'inline-block' }}>
                  <span style={{ fontFamily:'monospace',fontSize:'10px',color:r.col }}>{r.area}</span>
                </div>
              </div>
              <div style={{ padding:'2rem',display:'flex',flexDirection:'column',justifyContent:'center',gap:'12px' }}>
                <div>
                  <div style={{ fontFamily:'monospace',fontSize:'9px',letterSpacing:'2px',color:'#303050',marginBottom:'3px' }}>EMAIL</div>
                  <a href={`mailto:${r.email}`} style={{ fontFamily:'monospace',fontSize:'11px',color:'#8080a0',textDecoration:'none',transition:'color 0.2s' }}
                    onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.color=r.col;}}
                    onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.color='#8080a0';}}
                  >{r.email}</a>
                </div>
                <div>
                  <div style={{ fontFamily:'monospace',fontSize:'9px',letterSpacing:'2px',color:'#303050',marginBottom:'3px' }}>PHONE</div>
                  <a href={`tel:${r.phone}`} style={{ fontFamily:'monospace',fontSize:'11px',color:'#8080a0',textDecoration:'none' }}>{r.phone}</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Direct contact */}
        <div style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:'2px' }}>
          {[
            { label:'PERSONAL EMAIL',value:'naitikgupta976@gmail.com',href:'mailto:naitikgupta976@gmail.com',col:'#00ff88' },
            { label:'INSTITUTIONAL EMAIL',value:'ms24chm016@students.vnit.ac.in',href:'mailto:ms24chm016@students.vnit.ac.in',col:'#00d4ff' },
            { label:'MOBILE',value:'+91-7007401684',href:'tel:+917007401684',col:'#ff6b35' },
            { label:'LOCATION',value:'VNIT Nagpur, Maharashtra – 440010',href:'#',col:'#00ff88' },
          ].map((c,i) => (
            <div key={i} style={{ padding:'1.5rem',border:'1px solid rgba(255,255,255,0.05)',background:'rgba(14,16,32,0.5)' }}>
              <div style={{ fontFamily:'monospace',fontSize:'9px',letterSpacing:'3px',color:'#303050',marginBottom:'6px' }}>{c.label}</div>
              <a href={c.href} style={{ fontFamily:'monospace',fontSize:'13px',color:c.col,textDecoration:'none',textShadow:`0 0 8px ${c.col}44`,transition:'text-shadow 0.2s' }}>{c.value}</a>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{ marginTop:'5rem',paddingTop:'2rem',borderTop:'1px solid rgba(255,255,255,0.05)',display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:'12px' }}>
          <span style={{ fontFamily:'monospace',fontSize:'11px',letterSpacing:'2px',color:'#303050' }}>NAITIK GUPTA · PORTFOLIO · 2025</span>
          <span style={{ fontFamily:'monospace',fontSize:'11px',color:'#00ff88',letterSpacing:'2px' }}>C–H FUNCTIONALIZATION · CATALYSIS · SYNTHESIS</span>
          <span style={{ fontFamily:'monospace',fontSize:'11px',color:'#303050' }}>BUILT WITH PRECISION</span>
        </div>
      </div>
    </section>
  );
}
