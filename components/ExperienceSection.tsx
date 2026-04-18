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

const EXP=[
  {
    tag:'01',type:'M.SC. THESIS PROJECT',role:'Lead Researcher',org:'VNIT Nagpur',
    supervisor:'Dr. Umesh Pratap',supervisorTitle:'Associate Professor, Dept. of Chemistry, VNIT, Nagpur, India',
    period:'AUG 2025 – TILL DATE',rxn:'COF + TM → C–H Cat.',rxnColor:G,
    topic:'Design and Development of Transition Metal@COF as a Robust Heterogeneous Catalyst For C–H Bond Functionalization',
    points:[
      'Synthesizing advanced Covalent Organic Frameworks (COF) with tunable pore geometry',
      'Doping transition metals (Cu, Pd) within COF scaffolds for recyclable heterogeneous catalysis',
      'Characterizing via XRD, FT-IR, BET surface area, TG-DTA, DSC, UV-DRS and TEM imaging',
    ],
  },
  {
    tag:'02',type:'SUMMER INTERNSHIP',role:'Research Intern',org:'IIT Bombay',
    supervisor:'Prof. Debabrata Maiti',supervisorTitle:'Associate Professor, Dept. of Chemistry, Indian Institute of Technology (IIT) Bombay',
    period:'MAY 2025 – JULY 2025',rxn:'Ar–H → Ar–C≡CR',rxnColor:B,
    topic:'Distal C–H Alkynylation of Benzo-fused Azines',
    points:[
      'Developed novel directing-group strategy for C5-selective alkynylation of bicyclic aza-arenes',
      'Optimized Pd(II)/Rh(III) catalytic conditions across 30+ substrates',
      'Contributed to Angew. Chem. Int. Ed. publication (e23983, 2026)',
    ],
  },
  {
    tag:'03',type:'WINTER INTERNSHIP',role:'Research Intern',org:'IIT Bhubaneswar',
    supervisor:'Dr. Tabrez Khan',supervisorTitle:'Associate Professor, Dept. of Chemistry, School of Basic Sciences, IIT Bhubaneswar',
    period:'DEC 2024 – JAN 2025',rxn:'Strained Ring + hν → Rad.',rxnColor:O,
    topic:'Synthesis of Strained-Ring-Based Redox-Active Oxime Esters',
    points:[
      'Synthesized bicyclic & spirocyclic oxime ester scaffolds via strained-ring methodology',
      'Studied photochemical radical generation via strain-release mechanism',
      'Characterized products by NMR, HRMS, FT-IR and X-ray crystallography',
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" style={{background:'linear-gradient(135deg,#f0efea 0%,#f4f0ee 50%,#f0eef4 100%)',padding:'7rem 3rem',position:'relative',overflow:'hidden'}}>
      <div style={{position:'absolute',inset:0,backgroundImage:'linear-gradient(rgba(0,0,80,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,80,0.03) 1px,transparent 1px)',backgroundSize:'44px 44px',pointerEvents:'none'}}/>
      <div style={{maxWidth:'1380px',margin:'0 auto',position:'relative',zIndex:2}}>
        <div style={{fontFamily:'monospace',fontSize:'11px',letterSpacing:'5px',color:G,marginBottom:'0.5rem',fontWeight:700}}>// SECTION 04</div>
        <h2 style={{fontFamily:'"Arial Black",sans-serif',fontSize:'clamp(2.5rem,6vw,5rem)',fontWeight:900,textTransform:'uppercase',letterSpacing:'-2px',lineHeight:0.9,color:T1,marginBottom:'4rem'}}>
          WORK<br/><span style={{WebkitTextStroke:`2.5px ${O}`,color:'transparent'}}>EXPERIENCE</span>
        </h2>

        <div style={{display:'flex',flexDirection:'column',gap:'1.5rem',marginBottom:'3rem'}} className="section-reveal">
          {EXP.map((e,i)=>(
            <div key={i} style={{...glass,display:'grid',gridTemplateColumns:'70px 1fr',overflow:'hidden'}} className="slide-up-reveal" style={{animationDelay: `${i*0.1}s`}}>
              <div style={{background:`linear-gradient(180deg,${e.rxnColor}18,${e.rxnColor}06)`,borderRight:'1px solid rgba(255,255,255,0.7)',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',padding:'2rem 0.5rem',gap:'12px'}}>
                <span style={{fontFamily:'"Arial Black",sans-serif',fontSize:'2.2rem',fontWeight:900,color:e.rxnColor,opacity:0.4,lineHeight:1}}>{e.tag}</span>
                <div style={{width:'1px',flex:1,background:`linear-gradient(${e.rxnColor}55,transparent)`}}/>
              </div>
              <div style={{padding:'2.5rem'}}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',flexWrap:'wrap',gap:'12px',marginBottom:'1.2rem'}}>
                  <div>
                    <span style={{fontFamily:'monospace',fontSize:'10px',letterSpacing:'3px',color:e.rxnColor,display:'block',marginBottom:'5px',fontWeight:700}}>{e.type}</span>
                    <h3 style={{fontFamily:'"Arial Black",sans-serif',fontSize:'1.3rem',fontWeight:900,textTransform:'uppercase',color:T1,letterSpacing:'-0.5px',lineHeight:1.1}}>{e.role} — {e.org}</h3>
                  </div>
                  <div style={{textAlign:'right'}}>
                    <span style={{fontFamily:'monospace',fontSize:'10px',letterSpacing:'2px',color:T3,display:'block',fontWeight:600}}>{e.period}</span>
                    <span style={{fontFamily:'monospace',fontSize:'11px',color:e.rxnColor,display:'block',marginTop:'5px',background:`${e.rxnColor}14`,padding:'3px 10px',borderRadius:'6px',fontWeight:700}}>{e.rxn}</span>
                  </div>
                </div>
                <div style={{fontFamily:'Georgia,serif',fontSize:'12.5px',color:T3,letterSpacing:'0.3px',marginBottom:'1rem',fontStyle:'italic'}}>
                  {e.supervisor} · <span style={{fontStyle:'normal',color:T3}}>{e.supervisorTitle}</span>
                </div>
                <p style={{fontFamily:'Georgia,serif',fontSize:'14px',color:T2,lineHeight:1.6,borderLeft:`2.5px solid ${e.rxnColor}55`,paddingLeft:'14px',fontWeight:500}}>{e.topic}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
