import React from 'react'
import { MEMORY_VIDEO } from '../config/birthday'

export const VideoBreak: React.FC = () => {
  return (
    <section className="relative w-full h-screen min-h-[500px] overflow-hidden bg-black">
      <video
        className="w-full h-full object-cover object-center pointer-events-none"
        autoPlay
        muted
        loop
        playsInline
        src={MEMORY_VIDEO}
      />
    </section>
  )
}
