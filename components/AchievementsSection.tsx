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

const AWARDS=[
  {num:'79',symbol:'Au',name:'IASC FELLOW',sub:'Selected for Summer Research Fellowship 2025 from the Indian Academy of Science, IISC, Bangalore (IASC-INSA-NASI)',year:'2025',col:G},
  {num:'46',symbol:'Pd',name:'RPWSM-2025',sub:'Selected in Refresher & Preparative Winter School Program (RPWSM), IISER Thiruvananthapuram',year:'2025',col:B},
  {num:'26',symbol:'Fe',name:'IIT JAM',sub:'IIT JAM Qualified — Secured admission into National Institute of Technology, Nagpur',year:'2024',col:O},
  {num:'44',symbol:'Ru',name:'IISER SHORTLIST',sub:'Shortlisted for an interview at IISER TIRUPATI for the International PhD program',year:'2024',col:G},
];
const EDU=[
  {year:'2024–NOW', degree:'M.Sc. Chemistry 2nd Yr.',inst:'VNIT Nagpur',score:'7.73 CGPA',status:'3rd SEM',col:G},
  {year:'2020–2023',degree:'B.Sc. Life Science',inst:'Hansraj College, Univ. of Delhi',score:'8.18 CGPA',status:'COMPLETED',col:B},
  {year:'2022–2023',degree:'10+2 Mathematics',inst:'National Inst. of Open Schooling, Delhi',score:'56.0%',status:'COMPLETED',col:O},
  {year:'2018–2020',degree:'10+2 (CBSE)',inst:'Pt. Nagesh Dutt Public School, UP',score:'88.6%',status:'COMPLETED',col:O},
  {year:'2016–2018',degree:'10th (CBSE)',inst:'Geeta Int. Public School, UP',score:'82.0%',status:'COMPLETED',col:O},
];

export default function AchievementsSection() {
  return (
    <section id="achievements" style={{background:'linear-gradient(135deg,#eaf0f4 0%,#f4f3ef 55%,#ede8f2 100%)',padding:'0px 3rem 48px 3rem',position:'relative',overflow:'hidden'}}>
      <div style={{position:'absolute',inset:0,backgroundImage:'linear-gradient(rgba(0,0,80,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,80,0.03) 1px,transparent 1px)',backgroundSize:'44px 44px',pointerEvents:'none'}}/>
      <div style={{maxWidth:'1380px',margin:'0 auto',position:'relative',zIndex:2}}>
        <div style={{fontFamily:'monospace',fontSize:'11px',letterSpacing:'5px',color:G,marginBottom:'0.5rem',fontWeight:700}}></div>
        <h2 style={{fontFamily:'"Arial Black",sans-serif',fontSize:'clamp(2.5rem,6vw,5rem)',fontWeight:900,textTransform:'uppercase',letterSpacing:'-2px',lineHeight:0.9,color:T1,marginBottom:'57px'}}>
          AWARDS &<br/><span style={{WebkitTextStroke:`2.5px ${G}`,color:'transparent'}}>ACHIEVEMENTS</span>
        </h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'1rem',marginBottom:'5rem'}} className="section-reveal">
          {AWARDS.map((a,i)=>(
            <div key={i} style={{...glass,padding:'1.5rem',cursor:'default',transition:'all 0.3s',position:'relative',overflow:'hidden'}} className="scale-reveal" style={{animationDelay: `${i*0.08}s`}}
              onMouseEnter={e=>{const el=e.currentTarget as HTMLElement;el.style.transform='translateY(-4px)';el.style.boxShadow=`0 16px 40px ${a.col}25,0 4px 12px rgba(0,0,0,0.06)`;}}
              onMouseLeave={e=>{const el=e.currentTarget as HTMLElement;el.style.transform='translateY(0)';el.style.boxShadow='0 8px 32px rgba(0,0,40,0.07),0 2px 8px rgba(0,0,0,0.04)';}}
            >
              <div style={{fontFamily:'monospace',fontSize:'10px',color:`${a.col}99`,marginBottom:'2px',fontWeight:700}}>{a.num}</div>
              <div style={{fontFamily:'"Arial Black",sans-serif',fontSize:'2.8rem',fontWeight:900,color:a.col,lineHeight:1,marginBottom:'4px'}}>{a.symbol}</div>
              <div style={{fontFamily:'monospace',fontSize:'9px',letterSpacing:'2px',color:a.col,marginBottom:'1rem',fontWeight:700}}>{a.name}</div>
              <div style={{height:'2px',background:`linear-gradient(90deg,${a.col}66,transparent)`,marginBottom:'1rem',borderRadius:'2px'}}/>
              <p style={{fontFamily:'monospace',fontSize:'10.5px',color:T2,lineHeight:1.6,fontWeight:500}}>{a.sub}</p>
              <div style={{position:'absolute',top:'1rem',right:'1rem',fontFamily:'monospace',fontSize:'11px',color:a.col,fontWeight:700}}>{a.year}</div>
            </div>
          ))}
        </div>

        {/* Area of Interest */}
        <div style={{fontFamily:'monospace',fontSize:'11px',letterSpacing:'5px',color:B,marginBottom:'37px',fontWeight:700}}></div>
        <h2 style={{fontFamily:'"Arial Black",sans-serif',fontSize:'clamp(2rem,5vw,4rem)',fontWeight:900,textTransform:'uppercase',letterSpacing:'-2px',lineHeight:0.9,color:T1,marginBottom:'3rem'}}>
          AREA OF<br/><span style={{WebkitTextStroke:`2px ${B}`,color:'transparent'}}>INTEREST</span>
        </h2>
        <div style={{...glass,padding:'2.5rem',marginBottom:'5rem'}} className="section-reveal">
          <div style={{display:'flex',flexDirection:'column',gap:'1.2rem'}}>
            {[
              'Transition Metal Catalysed Selective C–H Activation',
              'Covalent Organic Framework',
              'Asymmetric Synthesis & Catalysis',
              'Organometallic Catalysis',
              'Total Synthesis of Complex Natural Product',
            ].map((item,i)=>(
              <div key={i} style={{display:'flex',gap:'12px',alignItems:'flex-start'}}>
                <span style={{color:i%2===0?G:B,fontFamily:'monospace',fontSize:'12px',marginTop:'2px',flexShrink:0,fontWeight:700}}>▪</span>
                <span style={{fontFamily:'monospace',fontSize:'12px',color:T2,lineHeight:1.6,fontWeight:500}}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div style={{fontFamily:'monospace',fontSize:'11px',letterSpacing:'5px',color:G,marginBottom:'0.5rem',fontWeight:700}}></div>
        <h2 style={{fontFamily:'"Arial Black",sans-serif',fontSize:'clamp(2rem,5vw,4rem)',fontWeight:900,textTransform:'uppercase',letterSpacing:'-2px',lineHeight:0.9,color:T1,marginBottom:'3rem'}}>
          EDUCATION<br/><span style={{WebkitTextStroke:`2px ${B}`,color:'transparent'}}>TIMELINE</span>
        </h2>
        <div style={{...glass,overflow:'hidden'}} className="section-reveal">
          <div style={{display:'grid',gridTemplateColumns:'110px 1.2fr 1.6fr 90px 100px',background:`${G}0a`,borderBottom:'1px solid rgba(255,255,255,0.7)',padding:'12px 22px',gap:'14px'}}>
            {['PERIOD','DEGREE','INSTITUTION','SCORE','STATUS'].map(h=>(
              <span key={h} style={{fontFamily:'monospace',fontSize:'9px',letterSpacing:'3px',color:T3,fontWeight:700}}>{h}</span>
            ))}
          </div>
          {EDU.map((e,i)=>(
            <div key={i} style={{display:'grid',gridTemplateColumns:'110px 1.2fr 1.6fr 90px 100px',padding:'15px 22px',gap:'14px',borderBottom:i<EDU.length-1?'1px solid rgba(0,0,0,0.05)':'none',background:i%2===0?'rgba(255,255,255,0.4)':'rgba(255,255,255,0.65)',alignItems:'center'}}
              onMouseEnter={e2=>{(e2.currentTarget as HTMLElement).style.background='rgba(255,255,255,0.9)';}}
              onMouseLeave={e2=>{(e2.currentTarget as HTMLElement).style.background=i%2===0?'rgba(255,255,255,0.4)':'rgba(255,255,255,0.65)';}}
            >
              <span style={{fontFamily:'monospace',fontSize:'10px',color:T3,fontWeight:600}}>{e.year}</span>
              <span style={{fontFamily:'"Arial Black",sans-serif',fontSize:'12px',fontWeight:900,color:T1,textTransform:'uppercase',letterSpacing:'-0.5px'}}>{e.degree}</span>
              <span style={{fontFamily:'monospace',fontSize:'11px',color:T2,fontWeight:500}}>{e.inst}</span>
              <span style={{fontFamily:'"Arial Black",sans-serif',fontSize:'13px',fontWeight:900,color:e.col}}>{e.score}</span>
              <span style={{fontFamily:'monospace',fontSize:'9px',letterSpacing:'2px',color:e.col,background:`${e.col}15`,padding:'4px 8px',borderRadius:'6px',textAlign:'center',fontWeight:700}}>{e.status}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
