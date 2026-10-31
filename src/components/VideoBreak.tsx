import React, { useEffect, useRef } from 'react'
import { MEMORY_VIDEO } from '../config/birthday'

export const VideoBreak: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true
      videoRef.current.muted = true
      videoRef.current.play().catch(() => {
        // Autoplay handled silently
      })
    }
  }, [])

  return (
    <section className="relative w-full h-screen min-h-[500px] overflow-hidden bg-black">
      <video
        ref={videoRef}
        className="w-full h-full object-cover object-center pointer-events-none"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        src={MEMORY_VIDEO}
      >
        <source src={MEMORY_VIDEO} type="video/mp4" />
      </video>
      {/* Very subtle dark cinematic vignette overlay */}
      <div className="absolute inset-0 bg-black/15 pointer-events-none" aria-hidden="true" />
    </section>
  )
}
