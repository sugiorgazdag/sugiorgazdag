"use client";

import { useEffect, useMemo, useState } from "react";


export default function ParticleBackground() {

  const [mounted,setMounted] = useState(false);


  useEffect(()=>{

    setMounted(true);

  },[]);



  const particles = useMemo(()=>{

    return Array.from({
      length:50
    }).map((_,index)=>({

      id:index,

      left:`${Math.random()*100}%`,

      top:`${Math.random()*100}%`,

      duration:`${8 + Math.random()*12}s`,

      delay:`${Math.random()*5}s`

    }));

  },[]);



  if(!mounted) return null;



  return (

    <div
      className="
        fixed
        inset-0
        -z-10
        overflow-hidden
        pointer-events-none
      "
    >


      {
        particles.map((particle)=>(

          <span

            key={particle.id}

            className="
              absolute
              h-1
              w-1
              rounded-full
              bg-sky-500/30
              animate-pulse
            "

            style={{

              left:particle.left,

              top:particle.top,

              animationDuration:
              particle.duration,

              animationDelay:
              particle.delay

            }}

          />

        ))
      }




      <div

        className="
          absolute

          top-0
          left-1/2

          h-[500px]
          w-[500px]

          -translate-x-1/2

          rounded-full

          bg-sky-500/20

          blur-3xl
        "

      />




      <div

        className="
          absolute

          bottom-0
          right-0

          h-[400px]
          w-[400px]

          rounded-full

          bg-emerald-500/20

          blur-3xl
        "

      />




      <div

        className="
          absolute

          left-0
          bottom-20

          h-[350px]
          w-[350px]

          rounded-full

          bg-pink-500/20

          blur-3xl
        "

      />


    </div>

  );

}