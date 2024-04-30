'use client'

import React, {useEffect, useState} from "react"
import style from "./styles/video.module.css"
import ReactPlayer from "react-player/lazy"

const Video = () => {
  const [url, setUrl] = useState()
  const [mute, setMute] = useState(true)
  const [fetchedUrl, setFetchedUrl] = useState("")
  const [isWindow, setIsWindow] = useState(false)

  useEffect(()=> {
    setIsWindow(true)
  },[])

  const onMouseEnter = () => {
    setMute(false)
  }
  const onMouseLeave = () => {
    setMute(true)
  }

  return (
    <div className={style.container} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {/* <iframe class={style.video} frameborder="0" allowfullscreen="true" src="https://www.youtube.com/embed/Js--VXw57GQ?showinfo=0" /> */}
        {isWindow && 
        <ReactPlayer
          url="https://www.youtube.com/watch?v=vQu_koHLklE"    // 플레이어 url
          className={style.video}
          // width='inherit'         // 플레이어 크기 (가로)
          // height='500px'        // 플레이어 크기 (세로)
          playing={true}        // 자동 재생 on
          muted={mute}          // 자동 재생 on
          controls={true}       // 플레이어 컨트롤 노출 여부
          light={false}         // 플레이어 모드
          pip={false}            // pip 모드 설정 여부
          loop
        />
}
    </div>
  )
}
export default Video;