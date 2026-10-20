import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'
import { Sparkles, Heart } from 'lucide-react'

type WishState = 'idle' | 'glowing' | 'extinguished'

export const MakeAWish: React.FC = () => {
  const [wishState, setWishState] = useState<WishState>('idle')
  const [step, setStep] = useState<number>(0)

  const triggerSparkles = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 65,
        origin: { y: 0.6 },
        colors: ['#f6c994', '#f1a8b8', '#e8b4b8', '#ffd166', '#ffffff'],
        ticks: 200,
        gravity: 0.8,
        scalar: 0.95,
        shapes: ['circle'],
        disableForReducedMotion: true,
      })
    } catch (e) {
      console.warn('Sparkle effect skipped:', e)
    }
  }

  const handleMakeWish = () => {
    if (wishState !== 'idle') return

    // Step 1: Intense warm candle glow
    setWishState('glowing')

    // Step 2: Blow out after 1.1s + sparkles
    setTimeout(() => {
      setWishState('extinguished')
      triggerSparkles()

      // Progressive reveal sequence
      setTimeout(() => setStep(1), 600)   // "Okay... wish made babe?"
      setTimeout(() => setStep(2), 1800)  // "Wait."
      setTimeout(() => setStep(3), 3000)  // "I think I know what you wished for."
      setTimeout(() => setStep(4), 4400)  // "Something tells me you wished for me. :)"
      setTimeout(() => setStep(5), 6000)  // "Because honestly... why else would you let me like you this much?"
      setTimeout(() => setStep(6), 7600)  // "Don't deny it. It's your birthday, so I'm allowed to be delusional for today. ♡"
      setTimeout(() => setStep(7), 9200)  // "Now make one more wish. Maybe this one comes true. ✨"
    }, 1100)
  }

  const isFlamesLit = wishState === 'idle' || wishState === 'glowing'
  const isGlowingBoost = wishState === 'glowing'

  return (
    <section
      id="make-a-wish"
      className="w-full bg-[#fbf6f2] text-[#2c2423] py-24 sm:py-36 px-5 sm:px-8 relative overflow-hidden"
    >
      {/* Decorative ambient background accents */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-rose-200/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-2xl mx-auto relative z-10">
        {/* Beautiful Centered Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9 }}
          className="bg-[#fff9f6] rounded-[32px] sm:rounded-[44px] p-8 sm:p-14 md:p-16 text-center relative border border-[#f3dfd7] shadow-[0_24px_80px_rgba(70,35,25,0.08)]"
        >
          {/* Subtle Corner Accents */}
          <div className="absolute top-6 left-6 text-[#e8b4b8]/60" aria-hidden="true">
            <Sparkles className="w-5 h-5" />
          </div>
          <div className="absolute top-6 right-6 text-[#e8b4b8]/60" aria-hidden="true">
            <Heart className="w-5 h-5 fill-current" />
          </div>

          {/* Card Badge */}
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="text-xs sm:text-sm tracking-[0.28em] uppercase font-semibold text-[#9e3a47] bg-[#f9e5e3] px-5 py-2 rounded-full shadow-xs">
              ✨ MAKE A WISH ✨
            </span>
          </div>

          {/* Card Heading - Prominent & Large */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-[#2d2422] font-normal leading-tight mb-3">
            Okay, birthday girl...
          </h2>

          <p className="text-lg sm:text-2xl text-[#6b5955] font-light mb-8 sm:mb-10">
            Close your eyes. Make a wish.
          </p>

          {/* Birthday Cake with Candles */}
          <div className="relative w-64 h-60 sm:w-72 sm:h-68 mx-auto flex items-center justify-center mb-8">
            {isFlamesLit && (
              <div
                className={`absolute top-10 w-44 h-44 rounded-full bg-amber-300/25 blur-2xl transition-all duration-700 pointer-events-none ${isGlowingBoost ? 'scale-135 bg-amber-400/40' : 'scale-100'
                  }`}
                aria-hidden="true"
              />
            )}

            <div className="relative z-10 w-full flex flex-col items-center">
              {/* Candles */}
              <div className="flex justify-center gap-6 sm:gap-7 mb-0 z-20">
                {[0, 1, 2].map((candleIndex) => (
                  <div key={candleIndex} className="relative flex flex-col items-center">
                    {/* Flame or smoke */}
                    <div className="h-8 flex items-end justify-center mb-0.5">
                      <AnimatePresence mode="wait">
                        {isFlamesLit ? (
                          <motion.div
                            key="flame"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: isGlowingBoost ? 1.35 : 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className={`w-3.5 h-6 rounded-full bg-gradient-to-t from-[#ff8c42] via-[#ffd166] to-[#ffffff] ${isGlowingBoost ? 'animate-flame-boost' : 'animate-flame'
                              }`}
                            style={{
                              boxShadow: isGlowingBoost
                                ? '0 0 18px rgba(255, 170, 50, 0.95), 0 0 32px rgba(255, 100, 20, 0.7)'
                                : '0 0 9px rgba(255, 180, 50, 0.85), 0 0 18px rgba(255, 120, 30, 0.45)',
                              animationDelay: `${candleIndex * 0.25}s`,
                            }}
                          />
                        ) : (
                          <motion.div
                            key="smoke"
                            initial={{ opacity: 0.8, y: 0, scale: 0.6 }}
                            animate={{ opacity: 0, y: -26, scale: 1.6, x: (candleIndex - 1) * 7 }}
                            transition={{ duration: 1.4, ease: 'easeOut' }}
                            className="w-2.5 h-3.5 rounded-full bg-[#baa69f] blur-[1px]"
                          />
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Wick */}
                    <div className="w-0.5 h-1.5 bg-[#4a3a38]" />

                    {/* Candle Body */}
                    <div className="w-2.5 h-10 sm:h-12 bg-gradient-to-b from-[#f9d7dc] to-[#e498a4] rounded-t-sm shadow-inner" />
                  </div>
                ))}
              </div>

              {/* Cake Layers */}
              <div className="w-48 sm:w-56 flex flex-col items-center drop-shadow-md">
                <div className="w-36 sm:w-40 h-14 bg-gradient-to-b from-[#fdf6f0] to-[#f4e4da] rounded-t-2xl relative overflow-hidden border-t-2 border-[#fff7f0]">
                  <div className="absolute top-0 inset-x-0 h-3 bg-[#e8a3af]/90 rounded-b-xl flex justify-around">
                    <span className="w-3 h-3 bg-[#e8a3af] rounded-full inline-block -mt-1" />
                    <span className="w-3 h-3 bg-[#e8a3af] rounded-full inline-block -mt-1" />
                    <span className="w-3 h-3 bg-[#e8a3af] rounded-full inline-block -mt-1" />
                    <span className="w-3 h-3 bg-[#e8a3af] rounded-full inline-block -mt-1" />
                  </div>
                </div>

                <div className="w-48 sm:w-56 h-18 bg-gradient-to-b from-[#f8e7dc] to-[#ebd2c3] rounded-t-2xl rounded-b-lg relative overflow-hidden shadow-sm border-t border-[#fceddf]">
                  <div className="absolute top-0 inset-x-0 h-3.5 bg-[#df8e9d]/80 rounded-b-xl flex justify-around">
                    <span className="w-3 h-3 bg-[#df8e9d] rounded-full inline-block -mt-1" />
                    <span className="w-3 h-3 bg-[#df8e9d] rounded-full inline-block -mt-1" />
                    <span className="w-3 h-3 bg-[#df8e9d] rounded-full inline-block -mt-1" />
                    <span className="w-3 h-3 bg-[#df8e9d] rounded-full inline-block -mt-1" />
                    <span className="w-3 h-3 bg-[#df8e9d] rounded-full inline-block -mt-1" />
                  </div>
                </div>

                {/* Cake Stand */}
                <div className="w-56 sm:w-64 h-3 bg-gradient-to-r from-[#e3d7cf] via-[#f7f2ed] to-[#e3d7cf] rounded-full shadow-md" />
                <div className="w-24 h-2 bg-[#d7c9bf] rounded-b-md mx-auto" />
              </div>
            </div>
          </div>

          {/* Interactive Wish Trigger */}
          {wishState === 'idle' && (
            <div className="mb-4">
              <button
                onClick={handleMakeWish}
                className="px-10 py-4 rounded-full text-xs sm:text-sm font-semibold tracking-[0.22em] uppercase bg-[#9e3a47] hover:bg-[#852f3b] text-white shadow-lg hover:shadow-xl hover:scale-[1.03] active:scale-95 transition-all duration-300 cursor-pointer"
              >
                MAKE A WISH 🎂
              </button>
            </div>
          )}

          {wishState === 'glowing' && (
            <p className="text-sm sm:text-base text-[#9e3a47] font-medium animate-pulse py-3">
              Closing your eyes & making a wish... ✨
            </p>
          )}

          {/* Flirty Progressive Messages Area */}
          <div className="min-h-[200px] flex flex-col items-center justify-center space-y-4 pt-4">
            <AnimatePresence>
              {step >= 1 && (
                <motion.p
                  key="step-1"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-xl sm:text-2xl font-serif text-[#3e2e2c]"
                >
                  Okay... wish maded babe?
                </motion.p>
              )}

              {step >= 2 && (
                <motion.p
                  key="step-2"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-lg sm:text-xl font-light text-[#755f5b]"
                >
                  Wait.
                </motion.p>
              )}

              {step >= 3 && (
                <motion.p
                  key="step-3"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-lg sm:text-xl text-[#5e4b47] font-light"
                >
                  I think I know what you wished for.
                </motion.p>
              )}

              {step >= 4 && (
                <motion.p
                  key="step-4"
                  initial={{ opacity: 0, scale: 0.96, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  className="text-xl sm:text-3xl font-serif italic text-[#9e3a47] font-normal leading-snug"
                >
                  "Something tells me you wished for :)"
                </motion.p>
              )}

              {step >= 5 && (
                <motion.p
                  key="step-5"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-base sm:text-lg text-[#6d5955] font-light"
                >
                  Because honestly... why else would you let me like you this much?
                </motion.p>
              )}

              {step >= 6 && (
                <motion.div
                  key="step-6"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  className="pt-2"
                >
                  <p className="text-base sm:text-lg text-[#883642] font-medium leading-relaxed">
                    Don't deny it. It's your birthday, so I'm allowed to be delusional for today. ♡
                  </p>
                </motion.div>
              )}

              {step >= 7 && (
                <motion.div
                  key="step-7"
                  initial={{ opacity: 0, scale: 0.98, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="pt-4 border-t border-[#f4dfd7] mt-3 w-full max-w-md"
                >
                  <p className="text-sm sm:text-base text-[#916760] font-serif italic">
                    Now make one more wish. Maybe this one comes true. ✨
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
