'use client';
const G='#007744',B='#0055aa',O='#cc4400';
const EXP=[
  {tag:'01',type:'M.SC. THESIS PROJECT',role:'Lead Researcher',org:'VNIT Nagpur',supervisor:'Dr. Umesh Pratap',period:'AUG 2025 – PRESENT',rxn:'COF + TM → C–H Cat.',rxnColor:G,topic:'Design and Development of Transition Metal@COF as a Robust Heterogeneous Catalyst For C–H Bond Functionalization',points:['Synthesizing advanced Covalent Organic Frameworks (COF) with tunable pore geometry','Doping transition metals (Cu, Pd) within COF scaffolds for recyclable heterogeneous catalysis','Characterizing via XRD, FT-IR, BET surface area and TEM imaging']},
  {tag:'02',type:'SUMMER INTERNSHIP',role:'Research Intern',org:'IIT Bombay',supervisor:'Prof. Debabrata Maiti',period:'MAY – JUL 2025',rxn:'Ar–H → Ar–C≡CR',rxnColor:B,topic:'Distal C–H Alkynylation of Benzo-fused Azines',points:['Developed novel directing-group strategy for C5-selective alkynylation','Optimized Pd(II)/Rh(III) catalytic conditions across 30+ substrates','Contributed to Angew. Chem. publication (e23983, 2026)']},
  {tag:'03',type:'WINTER INTERNSHIP',role:'Research Intern',org:'IIT Bhubaneswar',supervisor:'Dr. Tabrez Khan',period:'DEC 2024 – JAN 2025',rxn:'Strained Ring + hν → Rad.',rxnColor:O,topic:'Synthesis of Strained-Ring-Based Redox-Active Oxime Esters',points:['Synthesized bicyclic & spirocyclic oxime ester scaffolds','Studied photochemical radical generation via strain-release mechanism','Characterized by NMR, HRMS, and X-ray crystallography']},
];
export default function ExperienceSection() {
  return (
    <section id="experience" style={{background:'#f0efeb',padding:'7rem 3rem',position:'relative',overflow:'hidden'}}>
      <div style={{position:'absolute',inset:0,backgroundImage:'linear-gradient(rgba(0,0,0,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.04) 1px,transparent 1px)',backgroundSize:'44px 44px',pointerEvents:'none'}}/>
      <div style={{maxWidth:'1380px',margin:'0 auto',position:'relative',zIndex:2}}>
        <div style={{fontFamily:'monospace',fontSize:'11px',letterSpacing:'5px',color:G,marginBottom:'0.5rem'}}>// SECTION 04</div>
        <h2 style={{fontFamily:'"Arial Black",sans-serif',fontSize:'clamp(2.5rem,6vw,5rem)',fontWeight:900,textTransform:'uppercase',letterSpacing:'-2px',lineHeight:0.9,color:'#0e0e14',marginBottom:'4rem'}}>
          RESEARCH<br/><span style={{WebkitTextStroke:`2px ${O}99`,color:'transparent'}}>EXPERIENCE</span>
        </h2>
        <div style={{display:'flex',flexDirection:'column',gap:'2px'}}>
          {EXP.map((e,i)=>(
            <div key={i} style={{display:'grid',gridTemplateColumns:'80px 1fr',gap:'0',border:'1px solid rgba(0,0,0,0.08)',background:'#ffffff'}}>
              <div style={{background:`${e.rxnColor}0a`,borderRight:'1px solid rgba(0,0,0,0.06)',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',padding:'2rem 1rem',gap:'12px'}}>
                <span style={{fontFamily:'"Arial Black",sans-serif',fontSize:'2.5rem',fontWeight:900,color:e.rxnColor,opacity:0.3,lineHeight:1}}>{e.tag}</span>
                <div style={{width:'1px',flex:1,background:`linear-gradient(${e.rxnColor}44,transparent)`}}/>
              </div>
              <div style={{padding:'2.5rem'}}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',flexWrap:'wrap',gap:'12px',marginBottom:'1.5rem'}}>
                  <div>
                    <span style={{fontFamily:'monospace',fontSize:'10px',letterSpacing:'3px',color:e.rxnColor,display:'block',marginBottom:'4px'}}>{e.type}</span>
                    <h3 style={{fontFamily:'"Arial Black",sans-serif',fontSize:'1.4rem',fontWeight:900,textTransform:'uppercase',color:'#0e0e14',letterSpacing:'-0.5px',lineHeight:1.1}}>{e.role} — {e.org}</h3>
                  </div>
                  <div style={{textAlign:'right'}}>
                    <span style={{fontFamily:'monospace',fontSize:'10px',letterSpacing:'2px',color:'#555565',display:'block'}}>{e.period}</span>
                    <span style={{fontFamily:'monospace',fontSize:'11px',color:e.rxnColor,display:'block',marginTop:'4px',background:`${e.rxnColor}12`,padding:'2px 8px',borderRadius:'2px'}}>{e.rxn}</span>
                  </div>
                </div>
                <div style={{fontFamily:'monospace',fontSize:'11px',color:'#555565',letterSpacing:'1px',marginBottom:'1rem',fontWeight:600}}>⬡ {e.supervisor}</div>
                <p style={{fontFamily:'Georgia,serif',fontSize:'14px',color:'#5a5a72',marginBottom:'1.5rem',lineHeight:1.6,borderLeft:`2px solid ${e.rxnColor}44`,paddingLeft:'12px'}}>{e.topic}</p>
                <div style={{display:'flex',flexDirection:'column',gap:'6px'}}>
                  {e.points.map((pt,j)=>(
                    <div key={j} style={{display:'flex',gap:'10px',alignItems:'flex-start'}}>
                      <span style={{color:e.rxnColor,fontFamily:'monospace',fontSize:'10px',marginTop:'2px',flexShrink:0}}>→</span>
                      <span style={{fontFamily:'monospace',fontSize:'12px',color:'#444455',lineHeight:1.5}}>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Publication callout */}
        <div style={{marginTop:'3rem',border:`1px solid ${G}44`,borderRadius:'4px',padding:'2rem',background:`${G}06`,display:'grid',gridTemplateColumns:'auto 1fr',gap:'2rem',alignItems:'center'}}>
          <div style={{fontFamily:'"Arial Black",sans-serif',fontSize:'4rem',fontWeight:900,color:`${G}22`,lineHeight:1}}>PUB</div>
          <div>
            <div style={{fontFamily:'monospace',fontSize:'10px',letterSpacing:'3px',color:G,marginBottom:'6px'}}>ANGEWANDTE CHEMIE INTERNATIONAL EDITION · 2026 · DOI: e23983</div>
            <p style={{fontFamily:'Georgia,serif',fontSize:'14px',color:'#5a5a72',lineHeight:1.6}}><em>Engineering Isoquinoline-derived Directing Template for Distal C5-H Functionalization of Bicyclic Aza-arenes</em></p>
            <div style={{fontFamily:'monospace',fontSize:'11px',color:'#555565',fontWeight:600}}>Mandal A., Bano R., …, <span style={{color:G}}>Gupta N.</span>, …, Maiti D.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
