import React from 'react'
import { motion } from 'framer-motion'
import { PERSONAL_MESSAGE_DATA, HER_NAME } from '../config/birthday'

export const PersonalMessage: React.FC = () => {
  return (
    <section 
      id="personal-message" 
      className="w-full bg-[#faf5f0] text-[#2c2423] py-20 sm:py-32 px-5 sm:px-8 md:px-12 relative"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="inline-block"
          >
            <span className="text-[11px] sm:text-xs tracking-[0.25em] uppercase font-semibold text-[#9e3a47] bg-[#f5e6e1] px-4 py-1.5 rounded-full">
              A Little Note
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-2xl sm:text-4xl font-serif text-[#2d2422] mt-4 font-normal"
          >
            A few things I wanted to tell you...
          </motion.h2>
        </div>

        {/* Alternating Text/Photo Items */}
        <div className="space-y-20 sm:space-y-32">
          {PERSONAL_MESSAGE_DATA.map((item, index) => {
            const isEven = index % 2 === 0

            return (
              <div
                key={item.id}
                className={`flex flex-col ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center gap-10 md:gap-14 lg:gap-20`}
              >
                {/* Text Content */}
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.8, delay: 0.15 }}
                  className="w-full md:w-1/2 flex flex-col justify-center"
                >
                  {item.tag && (
                    <span className="text-[11px] tracking-[0.2em] uppercase font-semibold text-[#a85a52] mb-3">
                      {item.tag}
                    </span>
                  )}
                  {item.heading && (
                    <h3 className="text-xl sm:text-2xl font-serif text-[#2e2321] mb-4 font-normal">
                      {item.heading}
                    </h3>
                  )}
                  <div className="space-y-4 text-[15px] sm:text-[17px] leading-relaxed text-[#594b48] font-light">
                    {item.paragraphs.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>
                </motion.div>

                {/* Photo */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.98, y: 25 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.8, delay: 0.25 }}
                  className="w-full md:w-1/2"
                >
                  <div className="relative group overflow-hidden rounded-2xl sm:rounded-3xl bg-[#ede3dc] shadow-[0_12px_40px_rgba(60,35,25,0.06)] border border-[#ede3dc]/70">
                    <img
                      src={item.photo}
                      alt={item.alt || `${HER_NAME}'s photo`}
                      className="w-full h-[280px] sm:h-[360px] md:h-[400px] object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
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
