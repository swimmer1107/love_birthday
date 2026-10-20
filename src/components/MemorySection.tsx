import React from 'react'
import { motion } from 'framer-motion'
import { MEMORY_CAPTIONS, HER_NAME } from '../config/birthday'

export const MemorySection: React.FC = () => {
  return (
    <section 
      id="memories" 
      className="w-full bg-[#f6eee7] text-[#2c2423] py-20 sm:py-32 px-5 sm:px-8 md:px-12 relative border-t border-[#ede0d6]"
    >
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="inline-block"
          >
            <span className="text-[11px] sm:text-xs tracking-[0.25em] uppercase font-semibold text-[#8f3e49] bg-[#ebd6d0] px-4 py-1.5 rounded-full">
              Moments
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-2xl sm:text-4xl font-serif text-[#2d2422] mt-4 font-normal"
          >
            A few memories I keep coming back to
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm text-[#7d6c68] font-light mt-3"
          >
            Just little fragments of time that stayed with me.
          </motion.p>
        </div>

        {/* Vertical Memories Stream */}
        <div className="space-y-20 sm:space-y-28">
          {MEMORY_CAPTIONS.map((mem, index) => (
            <motion.div
              key={mem.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              {/* Photo Container */}
              <div className="w-full max-w-xl mx-auto overflow-hidden rounded-2xl sm:rounded-3xl shadow-[0_12px_45px_rgba(50,30,20,0.07)] border border-[#e8ded6] bg-[#ede3dc] mb-6 sm:mb-8">
                <img
                  src={mem.photo}
                  alt={mem.alt || `Memory with ${HER_NAME}`}
                  className="w-full max-h-[540px] object-cover object-center transition-transform duration-700 ease-out hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>

              {/* Optional Date */}
              {mem.date && (
                <span className="text-xs tracking-[0.2em] uppercase text-[#a06860] font-medium mb-2">
                  {mem.date}
                </span>
              )}

              {/* Memory Captions */}
              <div className="space-y-1.5 max-w-md">
                <p className="text-base sm:text-lg text-[#3f3230] font-serif italic">
                  "{mem.captionLine1}"
                </p>
                {mem.captionLine2 && (
                  <p className="text-sm sm:text-base text-[#6b5854] font-light">
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
