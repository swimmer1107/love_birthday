import React from 'react'
import { motion } from 'framer-motion'
import { BIRTHDAY_MESSAGE, HER_NAME } from '../config/birthday'

export const BirthdayMessage: React.FC = () => {
  return (
    <section 
      id="birthday-message" 
      className="w-full bg-[#faf4f0] text-[#2c2423] py-28 sm:py-44 px-5 sm:px-8 md:px-12 lg:px-16 relative overflow-hidden"
    >
      {/* Soft romantic ambient background warmth */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-200/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Section Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8 }}
          className="inline-block mb-6 sm:mb-8"
        >
          <span className="text-xs sm:text-sm tracking-[0.28em] uppercase font-semibold text-[#a84453] bg-[#f8e4de] px-5 py-2 rounded-full">
            Just For You
          </span>
        </motion.div>

        {/* Large Cinematic Title */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-[#2e2220] font-normal leading-[1.1] mb-12 sm:mb-16"
        >
          {BIRTHDAY_MESSAGE.title || `Happy Birthday, ${HER_NAME}. ♡`}
        </motion.h2>

        {/* Emotional and Flirty Paragraphs - Large, Visually Dominant */}
        <div className="space-y-8 sm:space-y-12">
          {BIRTHDAY_MESSAGE.paragraphs.map((p, index) => {
            const isSelfishLine = p.toLowerCase().includes('selfishly')
            const isLastLine = index === BIRTHDAY_MESSAGE.paragraphs.length - 1

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.15 }}
              >
                {isSelfishLine ? (
                  <p className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-[#9e3a47] font-normal">
                    {p}
                  </p>
                ) : isLastLine ? (
                  <p className="text-2xl sm:text-4xl md:text-5xl font-serif text-[#2a1e1d] font-normal leading-snug">
                    {p}
                  </p>
                ) : (
                  <p className="text-xl sm:text-3xl md:text-4xl font-light text-[#4a3b38] leading-relaxed max-w-3xl mx-auto">
                    {p}
                  </p>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Subtle Sign-off */}
        {BIRTHDAY_MESSAGE.signoff && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.8 }}
            className="mt-14 sm:mt-18 text-[#9a6760] font-handwriting text-3xl sm:text-4xl"
          >
            {BIRTHDAY_MESSAGE.signoff}
          </motion.div>
        )}
      </div>
    </section>
  )
}
