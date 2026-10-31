import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Gift, Sparkles } from 'lucide-react'
import confetti from 'canvas-confetti'
import { trackGiftClick } from '../utils/analytics'

type GiftClaimState = 'idle' | 'submitting'

export const GiftSection: React.FC = () => {
  const navigate = useNavigate()
  const [claimState, setClaimState] = useState<GiftClaimState>('idle')

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 70,
        spread: 80,
        origin: { y: 0.65 },
        colors: ['#f43f5e', '#ec4899', '#d946ef', '#a855f7', '#fbbf24', '#ffffff'],
        ticks: 240,
        gravity: 0.85,
        scalar: 1,
      })
    } catch (e) {
      console.warn('Confetti effect skipped:', e)
    }
  }

  const handleClaimClick = async () => {
    if (claimState !== 'idle') return

    setClaimState('submitting')

    // Discreetly track interaction via backend analytics (no UI exposure)
    try {
      await trackGiftClick()
    } catch (e) {
      console.warn('Click tracking error:', e)
    }

    // Brief confetti burst, then navigate to the surprise page
    triggerConfetti()
    setTimeout(() => {
      navigate('/surprise')
    }, 600)
  }

  return (
    <section 
      id="gift" 
      className="w-full bg-[#f6eee7] text-[#2c2423] py-28 sm:py-44 px-5 sm:px-8 border-t border-[#ede0d6] relative"
    >
      <div className="max-w-2xl mx-auto text-center">
        {/* Soft Decorative Box Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8 }}
          className="bg-[#fff9f6] rounded-[36px] sm:rounded-[44px] p-8 sm:p-14 md:p-18 shadow-[0_20px_70px_rgba(50,30,20,0.07)] border border-[#ede1d7] relative"
        >
          {/* Section Icon Badge */}
          <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-full bg-[#fde9eb] flex items-center justify-center text-[#9e3a47] mb-6 sm:mb-8 shadow-sm">
            <Gift className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.8]" />
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-[#2e2321] font-normal mb-4 sm:mb-6 leading-tight">
            One last thing...
          </h2>

          <p className="text-base sm:text-2xl text-[#6b5854] font-light mb-10 sm:mb-14 leading-relaxed max-w-lg mx-auto">
            I may have planned a little something for you.
          </p>

          <AnimatePresence mode="wait">
            {claimState === 'idle' && (
              <motion.div
                key="claim-button"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                {/* CLAIM YOUR GIFT 🎁 Button */}
                <button
                  onClick={handleClaimClick}
                  className="w-full sm:w-auto px-10 sm:px-14 py-4 sm:py-5 rounded-full text-xs sm:text-base font-semibold tracking-[0.22em] uppercase text-white bg-[#9e3a47] hover:bg-[#852f3b] shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer inline-flex items-center justify-center gap-3 group"
                >
                  <span className="group-hover:translate-x-0.5 transition-transform">CLAIM YOUR GIFT 🎁</span>
                </button>
              </motion.div>
            )}

            {claimState === 'submitting' && (
              <motion.div
                key="submitting"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="py-4 text-base sm:text-lg text-[#9e3a47] font-medium flex items-center justify-center gap-3"
              >
                <Sparkles className="w-5 h-5 animate-spin text-[#9e3a47]" />
                <span>Preparing your gift...</span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Quiet Romantic Footer */}
        <div className="mt-20 text-center text-sm text-[#9c8985] font-light">
          <p>Handmade with ♡ just for your birthday</p>
        </div>
      </div>
    </section>
  )
}

