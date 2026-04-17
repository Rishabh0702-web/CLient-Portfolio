'use client';
const G='#007744',B='#0055aa',O='#cc4400';
// text palette
const T1='#0a0a12'; // primary
const T2='#2e2e42'; // body
const T3='#606070'; // muted labels
const T4='#909098'; // dim labels
const DATA=[
  {label:'FULL NAME',value:'Naitik Gupta'},{label:'STATUS',value:'M.Sc. Chemistry · Sem III'},
  {label:'INSTITUTION',value:'VNIT Nagpur'},{label:'SPECIALTY',value:'Organic Synthesis · Catalysis'},
  {label:'ORCID / PUB',value:'Angew. Chem. 2026'},{label:'EMAIL',value:'naitikgupta976@gmail.com'},
  {label:'PHONE',value:'+91-7007401684'},{label:'LOCATION',value:'Nagpur, Maharashtra'},
];
export default function AboutSection() {
  return (
    <section id="about" style={{background:'#f0efeb',padding:'7rem 3rem',position:'relative',overflow:'hidden'}}>
      <div style={{position:'absolute',inset:0,backgroundImage:'linear-gradient(rgba(0,0,0,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.04) 1px,transparent 1px)',backgroundSize:'44px 44px',pointerEvents:'none'}}/>
      <div style={{position:'absolute',right:'-60px',top:'50%',transform:'translateY(-50%)',fontSize:'28rem',fontWeight:900,fontFamily:'monospace',color:'rgba(0,0,0,0.03)',lineHeight:1,pointerEvents:'none',userSelect:'none'}}>C</div>
      <div style={{maxWidth:'1380px',margin:'0 auto',position:'relative',zIndex:2}}>
        <div style={{fontFamily:'monospace',fontSize:'11px',letterSpacing:'5px',color:G,marginBottom:'0.5rem'}}>// SECTION 02</div>
        <h2 style={{fontFamily:'"Arial Black",sans-serif',fontSize:'clamp(2.5rem,6vw,5rem)',fontWeight:900,textTransform:'uppercase',letterSpacing:'-2px',lineHeight:0.9,color:'#0e0e14',marginBottom:'4rem'}}>
          ABOUT<br/><span style={{WebkitTextStroke:'2px rgba(0,119,68,0.7)',color:'transparent'}}>THE SCIENTIST</span>
        </h2>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1.2fr',gap:'5rem',alignItems:'start'}}>
          <div>
            <div style={{border:'1px solid rgba(0,0,0,0.1)',borderRadius:'4px',overflow:'hidden',background:'#fff'}}>
              <div style={{background:'rgba(0,119,68,0.06)',borderBottom:'1px solid rgba(0,0,0,0.07)',padding:'12px 20px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <span style={{fontFamily:'monospace',fontSize:'11px',letterSpacing:'3px',color:G,fontWeight:700}}>SPECIMEN RECORD</span>
                <span style={{fontFamily:'monospace',fontSize:'10px',color:T3}}>REF-NG-2024</span>
              </div>
              {DATA.map((d,i)=>(
                <div key={i} style={{display:'grid',gridTemplateColumns:'40% 60%',borderBottom:'1px solid rgba(0,0,0,0.06)',padding:'13px 20px',background:i%2===0?'transparent':'rgba(0,0,0,0.02)'}}>
                  <span style={{fontFamily:'monospace',fontSize:'10px',letterSpacing:'2px',color:T3,fontWeight:600}}>{d.label}</span>
                  <span style={{fontFamily:'monospace',fontSize:'12px',color:T1,fontWeight:500}}>{d.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p style={{fontSize:'17px',lineHeight:1.9,color:T2,fontFamily:'Georgia,serif',marginBottom:'2.5rem'}}>
              I'm a chemistry researcher specializing in <span style={{color:B,fontWeight:600}}>C–H bond functionalization</span> and{' '}
              <span style={{color:G,fontWeight:600}}>covalent organic framework (COF) design</span>. My work bridges homogeneous transition metal catalysis and heterogeneous materials chemistry, with publications in <em>Angewandte Chemie</em>.
            </p>
            <p style={{fontSize:'17px',lineHeight:1.9,color:T2,fontFamily:'Georgia,serif',marginBottom:'3rem'}}>
              From synthesizing strained-ring redox-active compounds at <span style={{color:O,fontWeight:600}}>IIT Bhubaneswar</span> to engineering distal alkynylation at <span style={{color:O,fontWeight:600}}>IIT Bombay</span>, I thrive in environments that demand both creative problem-solving and rigorous experimental discipline.
            </p>
            <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'1px',border:'1px solid rgba(0,0,0,0.1)',borderRadius:'4px',overflow:'hidden'}}>
              {[
                {n:'01',label:'Publication\nAngew. Chem.',col:G},
                {n:'03',label:'Research\nInternships',col:B},
                {n:'02',label:'Prestigious\nFellowships',col:O},
              ].map((s,i)=>(
                <div key={i} style={{padding:'1.5rem',background:'#fff',textAlign:'center',borderRight:i<2?'1px solid rgba(0,0,0,0.07)':'none'}}>
                  <div style={{fontFamily:'"Arial Black",sans-serif',fontSize:'2.5rem',fontWeight:900,color:s.col,lineHeight:1}}>{s.n}</div>
                  <div style={{fontFamily:'monospace',fontSize:'10px',letterSpacing:'1px',color:T3,marginTop:'6px',whiteSpace:'pre-line',fontWeight:600}}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
