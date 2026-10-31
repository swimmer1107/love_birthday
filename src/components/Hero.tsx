import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { HER_NAME, HERO_VIDEO } from '../config/birthday'

export const Hero: React.FC = () => {
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

  const scrollToNext = () => {
    const el = document.getElementById('personal-message')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden flex flex-col justify-end bg-black">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        src={HERO_VIDEO}
      >
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>

      {/* Multi-stop cinematic soft gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#140e0f]/95 via-[#140e0f]/45 to-black/30 pointer-events-none"
        aria-hidden="true"
      />

      {/* Subtle Warm Vignette */}
      <div
        className="absolute inset-0 bg-radial-[circle_at_center,_transparent_40%,_rgba(0,0,0,0.55)_100%] pointer-events-none"
        aria-hidden="true"
      />

      {/* Hero Content - Expanded & Prominent */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-10 pb-12 sm:pb-20 text-center flex flex-col items-center">
        {/* Soft greeting label */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xs sm:text-base uppercase tracking-[0.3em] text-[#f5dfd5] font-medium mb-3 sm:mb-4 drop-shadow-sm"
        >
          Hey, My Love
        </motion.p>

        {/* Main Birthday Heading - 25-40% larger, cinematic centerpiece */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mb-4 sm:mb-6"
        >
          <h1 className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-serif text-white tracking-[0.08em] font-normal leading-[1.08] drop-shadow-lg">
            HAPPY BIRTHDAY
          </h1>
          <p className="text-2xl sm:text-5xl md:text-6xl font-serif text-[#f4b6c2] tracking-[0.14em] font-light mt-1 sm:mt-3 drop-shadow-md">
            {HER_NAME.toUpperCase()} <span className="text-[#f7a8b8] font-light">♡</span>
          </p>
        </motion.div>

        {/* Supporting subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="text-base sm:text-xl md:text-2xl text-[#ede0d8] font-light max-w-xl mx-auto mb-10 sm:mb-14 drop-shadow-sm leading-relaxed"
        >
          Made something special for you with love.
        </motion.p>

        {/* Subtle Scroll Indicator */}
        <motion.button
          onClick={scrollToNext}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="group flex flex-col items-center text-[#ebdcd5]/80 hover:text-white transition-colors cursor-pointer focus:outline-none"
          aria-label="Scroll to personal message"
        >
          <span className="text-xs uppercase tracking-[0.25em] mb-1.5 font-light opacity-80 group-hover:opacity-100 transition-opacity">
            Scroll down
          </span>
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.5]" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  )
}
