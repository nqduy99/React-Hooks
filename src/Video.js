import { forwardRef, useImperativeHandle, useRef } from 'react'
import loverukk from './videos/loverukk.mp4'

function Video(props, ref) {
    const videoRef = useRef()

    useImperativeHandle(ref, ()=>({
        play(){
            videoRef.current.play()
        }, 
        pause(){
            videoRef.current.pause()
        }

    }))

    return(
        <video 
            ref={videoRef}
            src={loverukk}
            width={280}
        />
    )
}

export default forwardRef(Video)