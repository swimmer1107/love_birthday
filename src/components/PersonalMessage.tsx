import React from 'react'
import { motion } from 'framer-motion'
import { PERSONAL_MESSAGE_DATA, HER_NAME } from '../config/birthday'

export const PersonalMessage: React.FC = () => {
  return (
    <section 
      id="personal-message" 
      className="w-full bg-[#faf5f0] text-[#2c2423] py-24 sm:py-36 px-5 sm:px-8 md:px-12 lg:px-16 relative"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 sm:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8 }}
            className="inline-block"
          >
            <span className="text-xs sm:text-sm tracking-[0.25em] uppercase font-semibold text-[#9e3a47] bg-[#f5e6e1] px-5 py-2 rounded-full">
              A Little Note
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-serif text-[#2d2422] mt-5 font-normal leading-tight"
          >
            A few things I wanted to tell you...
          </motion.h2>
        </div>

        {/* Alternating Text/Photo Items - Full Width & Substantial Presence */}
        <div className="space-y-24 sm:space-y-36">
          {PERSONAL_MESSAGE_DATA.map((item, index) => {
            const isEven = index % 2 === 0

            return (
              <div
                key={item.id}
                className={`flex flex-col ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } items-center gap-12 lg:gap-16 xl:gap-20`}
              >
                {/* Text Content - Larger, prominent typography */}
                <motion.div
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.9, delay: 0.15 }}
                  className="w-full lg:w-1/2 flex flex-col justify-center"
                >
                  {item.tag && (
                    <span className="text-xs sm:text-sm tracking-[0.22em] uppercase font-semibold text-[#a85a52] mb-3">
                      {item.tag}
                    </span>
                  )}
                  {item.heading && (
                    <h3 className="text-2xl sm:text-4xl md:text-5xl font-serif text-[#2e2321] mb-6 font-normal leading-snug">
                      {item.heading}
                    </h3>
                  )}
                  <div className="space-y-5 text-base sm:text-xl lg:text-[21px] leading-relaxed text-[#4e3f3c] font-light">
                    {item.paragraphs.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>
                </motion.div>

                {/* Photo - Large, Meaningful, High Visual Impact */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.96, y: 35 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 1, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                  className="w-full lg:w-1/2"
                >
                  <div className="relative group overflow-hidden rounded-3xl bg-[#ede3dc] shadow-[0_16px_50px_rgba(60,35,25,0.08)] border border-[#ede3dc]/80">
                    <img
                      src={item.photo}
                      alt={item.alt || `${HER_NAME}'s photo`}
                      className="w-full h-[360px] sm:h-[480px] md:h-[540px] lg:h-[580px] object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  </div>
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
