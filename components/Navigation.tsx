'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const G = '#007744';
const NAV = [
  {id:'home',label:'HOME',href:'#home'},
  {id:'about',label:'ABOUT',href:'#about'},
  {id:'experience',label:'RESEARCH',href:'#experience'},
  {id:'achievements',label:'AWARDS',href:'#achievements'},
  {id:'references',label:'CONTACT',href:'#references'},
];

export default function Navigation({activeSection}:{activeSection:string}) {
  const [scrolled,setScrolled] = useState(false);
  useEffect(()=>{
    const h=()=>setScrolled(window.scrollY>40);
    window.addEventListener('scroll',h); return()=>window.removeEventListener('scroll',h);
  },[]);

  return (
    <nav style={{
      position:'fixed',top:0,left:0,right:0,zIndex:50,
      background: scrolled?'rgba(247,246,242,0.97)':'transparent',
      borderBottom: scrolled?'1px solid rgba(0,0,0,0.08)':'1px solid transparent',
      backdropFilter: scrolled?'blur(20px)':'none',
      transition:'all 0.4s ease',
      padding:'0 3rem',
    }}>
      <div style={{maxWidth:'1380px',margin:'0 auto',display:'flex',justifyContent:'space-between',alignItems:'center',height:'68px'}}>
        <Link href="#home" style={{textDecoration:'none',display:'flex',alignItems:'center',gap:'10px'}}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            {[0,1,2,3,4,5].map(i=>{
              const a=(i*60-90)*Math.PI/180,b=((i+1)*60-90)*Math.PI/180;
              return <line key={i} x1={14+11*Math.cos(a)} y1={14+11*Math.sin(a)} x2={14+11*Math.cos(b)} y2={14+11*Math.sin(b)} stroke={G} strokeWidth="1.5" strokeOpacity="0.8"/>
            })}
            {[0,1,2,3,4,5].map(i=>{const a=(i*60-90)*Math.PI/180;return <circle key={i} cx={14+11*Math.cos(a)} cy={14+11*Math.sin(a)} r="2" fill={G}/>})}
          </svg>
          <span style={{fontFamily:'monospace',fontSize:'13px',fontWeight:700,color:G,letterSpacing:'3px'}}>N·G</span>
        </Link>

        <div style={{display:'flex',gap:'0px',alignItems:'center'}}>
          {NAV.map(item=>(
            <Link key={item.id} href={item.href} style={{textDecoration:'none',position:'relative'}}>
              <span style={{
                fontFamily:'monospace',fontSize:'11px',letterSpacing:'3px',
                fontWeight:activeSection===item.id?700:400,
                color:activeSection===item.id?G:'#888898',
                transition:'all 0.2s',
              }}>
                {item.label}
              </span>
              {activeSection===item.id&&(
                <span style={{position:'absolute',bottom:'-4px',left:0,right:0,height:'1px',background:`linear-gradient(90deg,transparent,${G},transparent)`}}/>
              )}
            </Link>
          ))}
        </div>

        <div style={{display:'flex',alignItems:'center',gap:'6px',fontFamily:'monospace',fontSize:'10px',letterSpacing:'2px',color:'#bbbbcc'}}>
          <span style={{width:'6px',height:'6px',borderRadius:'50%',background:G,display:'inline-block',animation:'blink 2s step-end infinite'}}/>
          ONLINE
        </div>
      </div>
    </nav>
  );
}
