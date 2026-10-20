import React from 'react'
import { motion } from 'framer-motion'
import { BIRTHDAY_MESSAGE, HER_NAME } from '../config/birthday'

export const BirthdayMessage: React.FC = () => {
  return (
    <section 
      id="birthday-message" 
      className="w-full bg-[#faf4f0] text-[#2c2423] py-24 sm:py-36 px-5 sm:px-8 md:px-12 relative overflow-hidden"
    >
      {/* Subtle decorative background watermarks */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-rose-200/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-2xl mx-auto text-center relative z-10">
        {/* Section Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-4"
        >
          <span className="text-[11px] sm:text-xs tracking-[0.25em] uppercase font-semibold text-[#a84453] bg-[#f8e4de] px-4 py-1.5 rounded-full">
            Just For You
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-serif text-[#2e2220] font-normal leading-tight mb-10"
        >
          {BIRTHDAY_MESSAGE.title || `Happy Birthday, ${HER_NAME} ❤️`}
        </motion.h2>

        {/* Paragraphs */}
        <div className="space-y-6 text-base sm:text-lg md:text-[19px] leading-relaxed text-[#564744] font-light">
          {BIRTHDAY_MESSAGE.paragraphs.map((p, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.12 }}
              className={index === BIRTHDAY_MESSAGE.paragraphs.length - 1 ? 'font-medium text-[#7d333f] pt-2' : ''}
            >
              {p}
            </motion.p>
          ))}
        </div>

        {/* Subtle Sign-off */}
        {BIRTHDAY_MESSAGE.signoff && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 text-[#9a6760] font-handwriting text-2xl"
          >
            {BIRTHDAY_MESSAGE.signoff}
          </motion.div>
        )}
      </div>
    </section>
  )
}
