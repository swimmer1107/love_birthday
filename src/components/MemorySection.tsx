import React from 'react'
import { motion } from 'framer-motion'
import { MEMORY_CAPTIONS, HER_NAME } from '../config/birthday'

export const MemorySection: React.FC = () => {
  return (
    <section 
      id="memories" 
      className="w-full bg-[#f6eee7] text-[#2c2423] py-24 sm:py-36 px-5 sm:px-8 md:px-12 lg:px-16 relative border-t border-[#ede0d6]"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 sm:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8 }}
            className="inline-block"
          >
            <span className="text-xs sm:text-sm tracking-[0.25em] uppercase font-semibold text-[#8f3e49] bg-[#ebd6d0] px-5 py-2 rounded-full">
              Moments
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-serif text-[#2d2422] mt-5 font-normal leading-tight"
          >
            A few memories I keep coming back to
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-xl text-[#786662] font-light mt-4"
          >
            Just little fragments of time that stayed with me.
          </motion.p>
        </div>

        {/* Vertical Memories Stream - Substantial and Large */}
        <div className="space-y-28 sm:space-y-40">
          {MEMORY_CAPTIONS.map((mem, index) => (
            <motion.div
              key={mem.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9, delay: index * 0.12 }}
              className="flex flex-col items-center text-center"
            >
              {/* Large Meaningful Photo Container */}
              <div className="w-full max-w-4xl mx-auto overflow-hidden rounded-3xl shadow-[0_18px_60px_rgba(50,30,20,0.09)] border border-[#e8ded6] bg-[#ede3dc] mb-8 sm:mb-10">
                <img
                  src={mem.photo}
                  alt={mem.alt || `Memory with ${HER_NAME}`}
                  className="w-full max-h-[640px] sm:max-h-[720px] object-cover object-center transition-transform duration-1000 ease-out hover:scale-[1.025]"
                  loading="lazy"
                />
              </div>

              {/* Optional Date */}
              {mem.date && (
                <span className="text-xs sm:text-sm tracking-[0.25em] uppercase text-[#a06860] font-semibold mb-3">
                  {mem.date}
                </span>
              )}

              {/* Memory Captions - Prominent, Editorial Serif */}
              <div className="space-y-2.5 max-w-2xl px-4">
                <p className="text-xl sm:text-3xl md:text-4xl text-[#362725] font-serif italic leading-snug">
                  "{mem.captionLine1}"
                </p>
                {mem.captionLine2 && (
                  <p className="text-base sm:text-xl md:text-2xl text-[#675450] font-light">
                    {mem.captionLine2}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
