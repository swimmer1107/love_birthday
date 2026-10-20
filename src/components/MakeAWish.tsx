import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'

type WishState = 'idle' | 'glowing' | 'extinguished'

export const MakeAWish: React.FC = () => {
  const [wishState, setWishState] = useState<WishState>('idle')
  const [revealStep, setRevealStep] = useState<number>(0)

  const triggerSparkles = () => {
    // Subtle, elegant golden/rose sparkle burst
    try {
      confetti({
        particleCount: 45,
        spread: 60,
        origin: { y: 0.65 },
        colors: ['#f6c994', '#f1a8b8', '#e8b4b8', '#ffd166', '#ffffff'],
        ticks: 200,
        gravity: 0.8,
        scalar: 0.9,
        shapes: ['circle'],
        disableForReducedMotion: true,
      })
    } catch (e) {
      console.warn('Sparkle effect skipped:', e)
    }
  }

  const handleMakeWish = () => {
    if (wishState !== 'idle') return

    // Step 1: Glowing intensified
    setWishState('glowing')

    // Step 2: Extinguish after 1.2s and emit sparkles
    setTimeout(() => {
      setWishState('extinguished')
      triggerSparkles()

      // Step 3: Reveal "Done?"
      setTimeout(() => {
        setRevealStep(1)

        // Step 4: Reveal "I think you just wished for me in your prayers. 👀"
        setTimeout(() => {
          setRevealStep(2)

          // Step 5: Reveal "Don't deny it."
          setTimeout(() => {
            setRevealStep(3)
          }, 1600)
        }, 1400)
      }, 700)
    }, 1200)
  }

  const isFlamesLit = wishState === 'idle' || wishState === 'glowing'
  const isGlowingBoost = wishState === 'glowing'

  return (
    <section 
      id="make-a-wish" 
      className="w-full bg-[#fdf8f5] text-[#2c2423] py-20 sm:py-32 px-5 sm:px-8 relative overflow-hidden"
    >
      <div className="max-w-xl mx-auto flex flex-col items-center text-center">
        {/* Section Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-3"
        >
          <span className="text-[11px] sm:text-xs tracking-[0.25em] uppercase font-semibold text-[#a8535f] bg-[#f9e5e3] px-4 py-1.5 rounded-full">
            Make A Wish
          </span>
        </motion.div>

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-4xl font-serif text-[#2d2422] font-normal mb-2"
        >
          Okay... make a wish 🎂
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-xs sm:text-sm text-[#7e6d69] font-light mb-10"
        >
          Close your eyes, think of something good, and tap below.
        </motion.p>

        {/* Cake Container with Candles */}
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center mb-8">
          {/* Subtle Ambient Cake Glow */}
          {isFlamesLit && (
            <div 
              className={`absolute top-12 w-44 h-44 rounded-full bg-amber-300/20 blur-2xl transition-all duration-700 pointer-events-none ${
                isGlowingBoost ? 'scale-125 bg-amber-400/35' : 'scale-100'
              }`}
              aria-hidden="true"
            />
          )}

          {/* Elegant Minimalist Cake SVG */}
          <div className="relative z-10 w-full flex flex-col items-center">
            {/* Candles Area */}
            <div className="flex justify-center gap-6 sm:gap-7 mb-0 z-20">
              {[0, 1, 2].map((candleIndex) => (
                <div key={candleIndex} className="relative flex flex-col items-center">
                  {/* Candle Flame / Smoke */}
                  <div className="h-8 flex items-end justify-center mb-0.5">
                    <AnimatePresence mode="wait">
                      {isFlamesLit ? (
                        <motion.div
                          key="flame"
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: isGlowingBoost ? 1.3 : 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className={`w-3.5 h-6 rounded-full bg-gradient-to-t from-[#ff8c42] via-[#ffd166] to-[#ffffff] ${
                            isGlowingBoost ? 'animate-flame-boost' : 'animate-flame'
                          }`}
                          style={{
                            boxShadow: isGlowingBoost
                              ? '0 0 16px rgba(255, 170, 50, 0.95), 0 0 30px rgba(255, 100, 20, 0.7)'
                              : '0 0 8px rgba(255, 180, 50, 0.8), 0 0 16px rgba(255, 120, 30, 0.4)',
                            animationDelay: `${candleIndex * 0.25}s`,
                          }}
                        />
                      ) : (
                        <motion.div
                          key="smoke"
                          initial={{ opacity: 0.8, y: 0, scale: 0.6 }}
                          animate={{ opacity: 0, y: -24, scale: 1.5, x: (candleIndex - 1) * 6 }}
                          transition={{ duration: 1.4, ease: 'easeOut' }}
                          className="w-2 h-3 rounded-full bg-[#baa69f] blur-[1px]"
                        />
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Candle Wick */}
                  <div className="w-0.5 h-1.5 bg-[#4a3a38]" />

                  {/* Candle Body */}
                  <div className="w-2.5 h-10 sm:h-12 bg-gradient-to-b from-[#f9d7dc] to-[#e498a4] rounded-t-sm shadow-inner" />
                </div>
              ))}
            </div>

            {/* Cake Tiers */}
            <div className="w-48 sm:w-56 flex flex-col items-center drop-shadow-md">
              {/* Top Layer */}
              <div className="w-36 sm:w-40 h-14 bg-gradient-to-b from-[#fdf6f0] to-[#f4e4da] rounded-t-2xl relative overflow-hidden border-t-2 border-[#fff7f0]">
                {/* Frosting Scallops */}
                <div className="absolute top-0 inset-x-0 h-3 bg-[#e8a3af]/90 rounded-b-xl flex justify-around">
                  <span className="w-3 h-3 bg-[#e8a3af] rounded-full inline-block -mt-1" />
                  <span className="w-3 h-3 bg-[#e8a3af] rounded-full inline-block -mt-1" />
                  <span className="w-3 h-3 bg-[#e8a3af] rounded-full inline-block -mt-1" />
                  <span className="w-3 h-3 bg-[#e8a3af] rounded-full inline-block -mt-1" />
                </div>
                {/* Sprinkles */}
                <div className="absolute inset-0 flex items-center justify-around px-4 opacity-70">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e87a90]" />
                  <span className="w-2 h-1 rounded-full bg-[#f6bd60] rotate-45" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f4a261]" />
                  <span className="w-2 h-1 rounded-full bg-[#b5838d] -rotate-45" />
                </div>
              </div>

              {/* Bottom Layer */}
              <div className="w-48 sm:w-56 h-18 bg-gradient-to-b from-[#f8e7dc] to-[#ebd2c3] rounded-t-2xl rounded-b-lg relative overflow-hidden shadow-sm border-t border-[#fceddf]">
                {/* Middle Frosting Ribbon */}
                <div className="absolute top-0 inset-x-0 h-3.5 bg-[#df8e9d]/80 rounded-b-xl flex justify-around">
                  <span className="w-3 h-3 bg-[#df8e9d] rounded-full inline-block -mt-1" />
                  <span className="w-3 h-3 bg-[#df8e9d] rounded-full inline-block -mt-1" />
                  <span className="w-3 h-3 bg-[#df8e9d] rounded-full inline-block -mt-1" />
                  <span className="w-3 h-3 bg-[#df8e9d] rounded-full inline-block -mt-1" />
                  <span className="w-3 h-3 bg-[#df8e9d] rounded-full inline-block -mt-1" />
                </div>
                {/* Subtle base decor */}
                <div className="absolute bottom-1 inset-x-0 flex justify-center gap-3 opacity-60">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#df8e9d]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e79a83]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#df8e9d]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e79a83]" />
                </div>
              </div>

              {/* Cake Stand / Plate */}
              <div className="w-56 sm:w-64 h-3 bg-gradient-to-r from-[#e3d7cf] via-[#f7f2ed] to-[#e3d7cf] rounded-full shadow-md" />
              <div className="w-24 h-2 bg-[#d7c9bf] rounded-b-md mx-auto" />
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="mb-6">
          <button
            onClick={handleMakeWish}
            disabled={wishState !== 'idle'}
            className={`px-8 py-3.5 rounded-full text-xs sm:text-sm font-medium tracking-[0.2em] uppercase transition-all duration-300 shadow-md ${
              wishState === 'idle'
                ? 'bg-[#9e3a47] hover:bg-[#852f3b] text-white hover:shadow-lg hover:scale-[1.02] cursor-pointer'
                : 'bg-[#d8c3bd] text-[#7a6561] cursor-not-allowed opacity-80'
            }`}
          >
            {wishState === 'idle' && 'MAKE A WISH'}
            {wishState === 'glowing' && 'Making a wish... ✨'}
            {wishState === 'extinguished' && 'Candles Blown Out 🎂'}
          </button>
        </div>

        {/* Wish Reaction Messages (Revealed sequentially) */}
        <div className="min-h-[140px] flex flex-col items-center justify-start space-y-3 px-4">
          <AnimatePresence>
            {revealStep >= 1 && (
              <motion.p
                key="step-1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-lg sm:text-xl font-serif text-[#3e2e2c]"
              >
                Done?
              </motion.p>
            )}

            {revealStep >= 2 && (
              <motion.p
                key="step-2"
                initial={{ opacity: 0, y: 12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="text-base sm:text-lg text-[#9e3a47] font-medium"
              >
                I think you just wished for me in your prayers. 👀
              </motion.p>
            )}

            {revealStep >= 3 && (
              <motion.p
                key="step-3"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-sm sm:text-base text-[#6d5b57] font-serif italic"
              >
                Don't deny it.
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
