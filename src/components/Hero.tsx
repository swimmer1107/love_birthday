import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { HER_NAME, HERO_VIDEO } from '../config/birthday'

export const Hero: React.FC = () => {
  const scrollToNext = () => {
    const el = document.getElementById('personal-message')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative h-screen min-h-[620px] w-full overflow-hidden flex flex-col justify-end bg-black">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        autoPlay
        muted
        loop
        playsInline
        src={HERO_VIDEO}
      />

      {/* Soft Multi-stop Romantic Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-t from-[#1a1213]/90 via-[#1a1213]/40 to-black/30 pointer-events-none"
        aria-hidden="true"
      />

      {/* Subtle Warm Vignette */}
      <div 
        className="absolute inset-0 bg-radial-[circle_at_center,_transparent_40%,_rgba(0,0,0,0.5)_100%] pointer-events-none"
        aria-hidden="true"
      />

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-10 pb-12 sm:pb-16 text-center flex flex-col items-center">
        {/* Small greeting label */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[#f2ddd4] font-medium mb-3 drop-shadow-sm"
        >
          Hey, {HER_NAME}
        </motion.p>

        {/* Main Birthday Heading */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white tracking-[0.12em] font-normal leading-tight mb-4 drop-shadow-md"
        >
          HAPPY BIRTHDAY <span className="text-[#f7a8b8] font-light">♡</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-sm sm:text-base md:text-lg text-[#ebdcd5] font-light max-w-md mx-auto mb-10 drop-shadow-sm"
        >
          I made a little something for you.
        </motion.p>

        {/* Subtle Scroll Indicator */}
        <motion.button
          onClick={scrollToNext}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="group flex flex-col items-center text-[#ebdcd5]/75 hover:text-white transition-colors cursor-pointer focus:outline-none"
          aria-label="Scroll to personal message"
        >
          <span className="text-[11px] uppercase tracking-[0.2em] mb-1 font-light opacity-80 group-hover:opacity-100 transition-opacity">
            Scroll down
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-5 h-5 stroke-[1.5]" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  )
}
