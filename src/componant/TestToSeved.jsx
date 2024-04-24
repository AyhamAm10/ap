import React, { useEffect, useRef, useState } from 'react'
import {hightlightsSlides} from '../contants'
import gsap from 'gsap'
import { pauseImg, playImg, replayImg } from '../../public/utils'
import { useGSAP } from '@gsap/react'
const Videocarsuole = () => {
    const videoRef = useRef([])
    const videoSpanRef = useRef([])
    const videoDivRef = useRef([])

    const [loadedData , setLoadedData] = useState([])
    const [video , setVideo] = useState([
        {
          id: 1,
          videoDuration: 4,
          isPlaying:true ,
          isEnd: false ,
          isLastVideo : true,
          enden: 0,
        },
        {
          id: 2,
          videoDuration: 5,
          isPlaying:false ,
          isEnd: false ,
          isLastVideo : true,
          enden: 0,
        },
        {
          id: 3,
          videoDuration: 2,
          isPlaying:false ,
          isEnd: false ,
          isLastVideo : true,
          enden: 0,
        },
        {
          id: 4,
          videoDuration: 3.63,
          isPlaying:false ,
          isEnd: false ,
          isLastVideo : true,
          enden: 0,
        },
      ])

    const {isEnd , startPlay , videoId , isLastVideo , isPlaying } = video ;
      console.log(video[1].isPlaying)
    useEffect(()=>{
        if(videoRef){
            console.log(videoRef.current[0].currentTime)
            // console.log(videoRef.current[0].duration)
        }
    
    },[videoRef])


    const handelMovedVideo = (index)=>{
        console.log(video)

        if(index < video.length){
            let newdata = video ;
            newdata[index].isPlaying = false;
            newdata[index + 1].isPlaying = true;
            setVideo(newdata)
            console.log(video)
        }
    }

    const handelPlay = ()=>{
        console.log(video)
        const index =  video.filter((ele)=>(ele.isPlaying == true))[0].id ;
        let  newdata = video ;
        newdata[index -1].isPlaying = !newdata[index -1 ].isPlaying ;
        console.log(index)
        setVideo(newdata)
        console.log(video)

    }
    // console.log(videoRef.current[0].currentTime)
    // console.log(videoRef.current[0].duration)


    // useGSAP(()=>{
    //     gsap.to('#video' , {
    //         scrollTrigger: {
    //             trigger: '#video',
    //             toggleActions: 'restart none none none'
    //         },
    //         onComplete: ()=>{
    //             setVideo((pre)=>({
    //                 ...pre,
    //                 startPlay: true,
    //                 isPlaying: true
    //             }))
    //         }
    //     })
    // })

    // useEffect(()=>{
    //     if(loadedData.length > 3){
    //         if(!isPlaying){
    //             videoRef.current[videoId].pause()
    //         }else{
    //             startPlay && videoRef.current[videoId].play()
    //         }
    //     }
    // },[startPlay , videoId , isPlaying, loadedData])

    // useEffect(()=>{
    //     let currentProgress = 0;
    //     let span = videoSpanRef.current;
    //     if(span[videoId]){
    //         let anim = gsap.to(span[videoId], {
    //             onUpdate: ()=>{
    //                 let progress = Math.ceil(anim.progress() * 100)

    //                 if(progress != currentProgress){
    //                     currentProgress = progress ;
                        
    //                     gsap.to(videoDivRef.current[videoId], {
    //                         width: window.innerWidth < 760 ? '10vh' : window.innerWidth < 1200 ? '10vw' : '4vw'
    //                     })

    //                     gsap.to(sapn[videoId],{
    //                         width : `${currentProgress}%`,
    //                         backgroundColor: white
    //                     })
    //                 }
    //             },
    //             onComplete: ()=>{

    //                 if(isPlaying){

    //                     gsap.to(videoDivRef.current[videoId], {
    //                         width: '12px'
    //                     })

    //                     gsap.to(span[videoId],{
    //                         background : '#afafaf'
    //                     })
    //                 }

    //             }
    //         })

    //         if(videoId === 0){
    //             anim.restart();
    //         }

    //         var animUpdate = ()=>{
    //             anim.progress(videoRef.current[videoId] / hightlightsSlides[videoId].videoDuration) 
    //         }

            
    //     }
    //     if(isPlaying){
    //         gsap.ticker.add(animUpdate)
    //     }else{
    //         gsap.ticker.remove(animUpdate)
    //     }

        
    // },[videoId , startPlay])

    // const handleLoadedMetadata = (i ,e)=>setLoadedData((pre)=>[...pre, e])

    // const handleProcess = (type , i)=>{
    //     switch (type){
    //         case 'video-end' :
    //             setVideo((pre)=>({
    //                 ...pre, isEnd: true,videoId: i + 1
    //             }))
    //             break;
    //         case 'video-reset' :
    //             setVideo((pre) =>({ ...pre, isLastVideo: false , videoId: 0}))
    //             break;
            
    //         case 'play' :
    //             setVideo((pre) =>({ ...pre, isPlaying: !pre.isPlaying }))
    //             break;

    //         default:
    //             return video;

    //     }
    // }
  return (
   <>
   <div className='flex items-center'>
      {hightlightsSlides.map((list , i)=>(
        <div key={list.id} id='slider' className='sm:pr-20 pr-10'>
            <div className='video-carousel_container'>
                <div className='w-full h-full flex-center rounded-3xl overflow-hidden bg-black'>
                    <video 
                        id={i + 1}
                        playsInline={true}
                        preload='auto'
                        muted
                        ref={(ele) =>{videoRef.current[i] = ele}}
                        isPlaying={video[i].isPlaying}
                        onEnded={()=>{handelMovedVideo(i)}}
                        
                    >
                        <source src={list.video} type='video/mp4' />
                    </video>
                </div>
                <div className='absolute top-12 left-[5%] z-10'>
                    {list.textLists.map((text)=>(
                        <p key={text} className='md:text-2xl text-xl font-medium'>
                            {text}
                        </p>
                    ))}
                </div>
            </div>
        </div>
      ))}
    </div>
    <div className='relative flex-center mt-10'>
        <div className='flex-center py-5 px-7 bg-gray-300 backdrop-blur rounded-full'>
            {
                hightlightsSlides.map((_, i) =>(
                    <span key={i}
                    ref={(el)=>(videoDivRef.current[i] = el)} 
                    className='mx-2 w-2 h-3  bg-gray-200 rounded-full relative cursor-pointer'
                    >
                        <span className='absolute h-fullnw-full rounded-full'ref={(el)=>(videoSpanRef.current[i] = el)}  >

                        </span>
                    </span>
                ))
            }
        </div>
        <button className='control-btn' >
            <img src={isLastVideo?replayImg : !isPlaying ? playImg : pauseImg}
            onClick={handelPlay}
          />
        </button>
    </div>
   </>
  )
}

export default Videocarsuole
