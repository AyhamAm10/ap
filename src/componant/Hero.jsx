import React, { useEffect, useState } from 'react'
import { heroVideo, smallHeroVideo } from '../../public/utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
const Hero = () => {
  const [videoSrc , setvideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)

  const handelvidewsrcset =()=>{
    if(window.innerWidth < 760 ){
      setvideoSrc(smallHeroVideo)
    }else{
      setvideoSrc(heroVideo)
    }
  }
  
  useEffect(()=>{
    window.addEventListener('resize' ,handelvidewsrcset )

    return window.removeEventListener('resize',handelvidewsrcset)
  },[])

  useGSAP(()=>{
    gsap.to('#hero' , {opacity:1 , delay: 2})
    gsap.to('#cta' , {opacity:1 , y:-50 , delay: 2})
  })


  return (
    <section className='w-full nav-height bg-black relative'>
      <div className='h-5/6 w-full flex-center flex-col'>
        <p id="hero" className='hero-title'> iphone 15 pro</p>
        <div className='md:w-10/12 w-9/12'>
          <video className='pointer-event-none' autoPlay muted playsInline={true} key={videoSrc} >
            <source src={videoSrc} />
          </video>
        </div>
      </div>
      <div id='cta' className="flex flex-col items-center opacity-0 translate-y-20">
        <a href="#hieghlight" className='btn'>buy</a>
        <p className='font-normal text-xl'>from $199/month or $999</p>
      </div>
    </section>
  )
}

export default Hero
