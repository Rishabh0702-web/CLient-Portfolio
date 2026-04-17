'use client';
export default function AboutSection() {
  const DATA = [
    { label:'FULL NAME',value:'Naitik Gupta' },
    { label:'STATUS',value:'M.Sc. Chemistry · Sem III' },
    { label:'INSTITUTION',value:'VNIT Nagpur' },
    { label:'SPECIALTY',value:'Organic Synthesis · Catalysis' },
    { label:'ORCID / PUB',value:'Angew. Chem. 2026' },
    { label:'EMAIL',value:'naitikgupta976@gmail.com' },
    { label:'PHONE',value:'+91-7007401684' },
    { label:'LOCATION',value:'Nagpur, Maharashtra' },
  ];

  return (
    <section id="about" style={{ background:'#060610',padding:'7rem 3rem',position:'relative',overflow:'hidden' }}>
      {/* Background graph paper */}
      <div style={{ position:'absolute',inset:0,backgroundImage:'linear-gradient(rgba(0,255,136,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,255,136,0.03) 1px,transparent 1px)',backgroundSize:'44px 44px',pointerEvents:'none' }}/>
      
      {/* Large watermark */}
      <div style={{ position:'absolute',right:'-60px',top:'50%',transform:'translateY(-50%)',fontSize:'28rem',fontWeight:900,fontFamily:'monospace',color:'rgba(0,255,136,0.02)',lineHeight:1,pointerEvents:'none',userSelect:'none' }}>C</div>

      <div style={{ maxWidth:'1380px',margin:'0 auto',position:'relative',zIndex:2 }}>
        {/* Section label */}
        <div style={{ fontFamily:'monospace',fontSize:'11px',letterSpacing:'5px',color:'#00ff88',marginBottom:'0.5rem' }}>// SECTION 02</div>
        <h2 style={{ fontFamily:'"Arial Black",sans-serif',fontSize:'clamp(2.5rem,6vw,5rem)',fontWeight:900,textTransform:'uppercase',letterSpacing:'-2px',lineHeight:0.9,color:'#eeeef0',marginBottom:'4rem' }}>
          ABOUT<br/><span style={{ WebkitTextStroke:'2px rgba(0,255,136,0.6)',color:'transparent' }}>THE SCIENTIST</span>
        </h2>

        <div style={{ display:'grid',gridTemplateColumns:'1fr 1.2fr',gap:'5rem',alignItems:'start' }}>
          {/* Specimen card */}
          <div>
            <div style={{ border:'1px solid rgba(0,255,136,0.2)',borderRadius:'4px',overflow:'hidden' }}>
              {/* Card header */}
              <div style={{ background:'rgba(0,255,136,0.08)',borderBottom:'1px solid rgba(0,255,136,0.15)',padding:'12px 20px',display:'flex',justifyContent:'space-between',alignItems:'center' }}>
                <span style={{ fontFamily:'monospace',fontSize:'11px',letterSpacing:'3px',color:'#00ff88' }}>SPECIMEN RECORD</span>
                <span style={{ fontFamily:'monospace',fontSize:'10px',color:'#404060' }}>REF-NG-2024</span>
              </div>
              {/* Data rows */}
              {DATA.map((d,i) => (
                <div key={i} style={{ display:'grid',gridTemplateColumns:'40% 60%',borderBottom:'1px solid rgba(255,255,255,0.04)',padding:'12px 20px',background: i%2===0 ? 'transparent' : 'rgba(255,255,255,0.01)' }}>
                  <span style={{ fontFamily:'monospace',fontSize:'10px',letterSpacing:'2px',color:'#404060' }}>{d.label}</span>
                  <span style={{ fontFamily:'monospace',fontSize:'12px',color:'#c0c0d0' }}>{d.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Description + skills snapshot */}
          <div>
            <p style={{ fontSize:'17px',lineHeight:1.9,color:'#8080a0',fontFamily:'Georgia,serif',marginBottom:'2.5rem' }}>
              I'm a chemistry researcher specializing in <span style={{ color:'#00d4ff' }}>C–H bond functionalization</span> and{' '}
              <span style={{ color:'#00ff88' }}>covalent organic framework (COF) design</span>. My work bridges homogeneous transition metal catalysis and heterogeneous materials chemistry, with publications in high-impact journals including <em>Angewandte Chemie</em>.
            </p>
            <p style={{ fontSize:'17px',lineHeight:1.9,color:'#8080a0',fontFamily:'Georgia,serif',marginBottom:'3rem' }}>
              From synthesizing strained-ring redox-active compounds at <span style={{ color:'#ff6b35' }}>IIT Bhubaneswar</span> to engineering distal alkynylation at <span style={{ color:'#ff6b35' }}>IIT Bombay</span>, I thrive in environments that demand both creative problem-solving and rigorous experimental discipline.
            </p>

            {/* Quick stats */}
            <div style={{ display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'1px',border:'1px solid rgba(0,255,136,0.15)',borderRadius:'4px',overflow:'hidden' }}>
              {[
                { n:'01', label:'Publication\nAngew. Chem.', col:'#00ff88' },
                { n:'03', label:'Research\nInternships', col:'#00d4ff' },
                { n:'02', label:'Prestigious\nFellowships', col:'#ff6b35' },
              ].map((s,i) => (
                <div key={i} style={{ padding:'1.5rem',background:'rgba(14,16,32,0.8)',textAlign:'center',borderRight: i<2 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
                  <div style={{ fontFamily:'"Arial Black",sans-serif',fontSize:'2.5rem',fontWeight:900,color:s.col,textShadow:`0 0 20px ${s.col}66`,lineHeight:1 }}>{s.n}</div>
                  <div style={{ fontFamily:'monospace',fontSize:'10px',letterSpacing:'1px',color:'#505070',marginTop:'6px',whiteSpace:'pre-line' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
