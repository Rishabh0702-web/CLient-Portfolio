'use client';
const G='#007744',B='#0055aa',O='#cc4400';
const AWARDS=[
  {num:'79',symbol:'Au',name:'IASC FELLOW',sub:'IASC-INSA-NASI Summer Research Fellowship 2025 — Indian Academy of Science, IISC Bangalore',year:'2025',col:G},
  {num:'46',symbol:'Pd',name:'RPWSM-2025',sub:'Refresher & Preparative Winter School Program — IISER Thiruvananthapuram',year:'2025',col:B},
  {num:'26',symbol:'Fe',name:'IIT JAM',sub:'Qualified IIT JAM · Secured M.Sc. admission at VNIT Nagpur (Top NIT)',year:'2024',col:O},
  {num:'44',symbol:'Ru',name:'IISER SHORTLIST',sub:'International Ph.D. Program Interview Shortlisting — IISER Tirupati',year:'2024',col:G},
];
const EDU=[
  {year:'2024–NOW',degree:'M.Sc. Chemistry',inst:'VNIT Nagpur',score:'7.73 CGPA',status:'3rd SEM',col:G},
  {year:'2020–2023',degree:'B.Sc. Life Science',inst:'Hansraj College, Univ. of Delhi',score:'8.18 CGPA · 81.8%',status:'COMPLETED',col:B},
  {year:'2019–2020',degree:'10+2 Mathematics',inst:'The Indian School, Delhi',score:'87.8%',status:'COMPLETED',col:O},
  {year:'2017–2018',degree:'10th Standard',inst:'The Indian School, Delhi',score:'87%',status:'COMPLETED',col:O},
];
export default function AchievementsSection() {
  return (
    <section id="achievements" style={{background:'#f7f6f2',padding:'7rem 3rem',position:'relative',overflow:'hidden'}}>
      <div style={{position:'absolute',inset:0,backgroundImage:'linear-gradient(rgba(0,0,0,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.04) 1px,transparent 1px)',backgroundSize:'44px 44px',pointerEvents:'none'}}/>
      <div style={{maxWidth:'1380px',margin:'0 auto',position:'relative',zIndex:2}}>
        {/* Awards */}
        <div style={{fontFamily:'monospace',fontSize:'11px',letterSpacing:'5px',color:G,marginBottom:'0.5rem'}}>// SECTION 05A</div>
        <h2 style={{fontFamily:'"Arial Black",sans-serif',fontSize:'clamp(2.5rem,6vw,5rem)',fontWeight:900,textTransform:'uppercase',letterSpacing:'-2px',lineHeight:0.9,color:'#0e0e14',marginBottom:'4rem'}}>
          AWARDS &<br/><span style={{WebkitTextStroke:`2px ${G}99`,color:'transparent'}}>FELLOWSHIPS</span>
        </h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'2px',marginBottom:'6rem'}}>
          {AWARDS.map((a,i)=>(
            <div key={i}
              style={{border:`1px solid ${a.col}30`,background:'#ffffff',padding:'1.5rem',cursor:'default',transition:'all 0.3s',position:'relative',overflow:'hidden'}}
              onMouseEnter={e=>{const el=e.currentTarget as HTMLElement;el.style.borderColor=`${a.col}88`;el.style.boxShadow=`0 4px 20px ${a.col}18`;el.style.transform='translateY(-2px)';}}
              onMouseLeave={e=>{const el=e.currentTarget as HTMLElement;el.style.borderColor=`${a.col}30`;el.style.boxShadow='none';el.style.transform='translateY(0)';}}
            >
              <div style={{fontFamily:'monospace',fontSize:'10px',color:`${a.col}88`,marginBottom:'2px'}}>{a.num}</div>
              <div style={{fontFamily:'"Arial Black",sans-serif',fontSize:'2.8rem',fontWeight:900,color:a.col,lineHeight:1,marginBottom:'4px'}}>{a.symbol}</div>
              <div style={{fontFamily:'monospace',fontSize:'9px',letterSpacing:'2px',color:`${a.col}aa`,marginBottom:'1rem'}}>{a.name}</div>
              <div style={{height:'1px',background:`linear-gradient(90deg,${a.col}44,transparent)`,marginBottom:'1rem'}}/>
              <p style={{fontFamily:'monospace',fontSize:'10px',color:'#6a6a80',lineHeight:1.5}}>{a.sub}</p>
              <div style={{position:'absolute',top:'1rem',right:'1rem',fontFamily:'monospace',fontSize:'10px',color:`${a.col}55`}}>{a.year}</div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div style={{fontFamily:'monospace',fontSize:'11px',letterSpacing:'5px',color:G,marginBottom:'0.5rem'}}>// SECTION 05B</div>
        <h2 style={{fontFamily:'"Arial Black",sans-serif',fontSize:'clamp(2rem,5vw,4rem)',fontWeight:900,textTransform:'uppercase',letterSpacing:'-2px',lineHeight:0.9,color:'#0e0e14',marginBottom:'3rem'}}>
          EDUCATION<br/><span style={{WebkitTextStroke:`2px ${B}99`,color:'transparent'}}>TIMELINE</span>
        </h2>
        <div style={{border:'1px solid rgba(0,0,0,0.08)',borderRadius:'4px',overflow:'hidden',background:'#fff'}}>
          <div style={{display:'grid',gridTemplateColumns:'120px 1fr 1fr 120px 100px',background:`${G}08`,borderBottom:'1px solid rgba(0,0,0,0.07)',padding:'10px 20px',gap:'16px'}}>
            {['PERIOD','DEGREE','INSTITUTION','SCORE','STATUS'].map(h=>(
              <span key={h} style={{fontFamily:'monospace',fontSize:'9px',letterSpacing:'3px',color:'#aaaabc'}}>{h}</span>
            ))}
          </div>
          {EDU.map((e,i)=>(
            <div key={i} style={{display:'grid',gridTemplateColumns:'120px 1fr 1fr 120px 100px',padding:'16px 20px',gap:'16px',borderBottom:i<EDU.length-1?'1px solid rgba(0,0,0,0.05)':'none',background:i%2===0?'transparent':'rgba(0,0,0,0.015)',alignItems:'center'}}>
              <span style={{fontFamily:'monospace',fontSize:'10px',color:'#aaaabc'}}>{e.year}</span>
              <span style={{fontFamily:'"Arial Black",sans-serif',fontSize:'13px',fontWeight:900,color:'#0e0e14',textTransform:'uppercase',letterSpacing:'-0.5px'}}>{e.degree}</span>
              <span style={{fontFamily:'monospace',fontSize:'11px',color:'#6a6a80'}}>{e.inst}</span>
              <span style={{fontFamily:'"Arial Black",sans-serif',fontSize:'14px',fontWeight:900,color:e.col}}>{e.score}</span>
              <span style={{fontFamily:'monospace',fontSize:'9px',letterSpacing:'2px',color:e.col,background:`${e.col}12`,padding:'3px 8px',borderRadius:'2px',textAlign:'center'}}>{e.status}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
