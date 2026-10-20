import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Gift, ExternalLink, Sparkles } from 'lucide-react'
import { GIFT_URL } from '../config/birthday'

type GiftClaimState = 'idle' | 'submitting' | 'revealed'

export const GiftSection: React.FC = () => {
  const [claimState, setClaimState] = useState<GiftClaimState>('idle')
  const [showSurpriseLink, setShowSurpriseLink] = useState(false)

  const handleClaimClick = async () => {
    if (claimState !== 'idle') return

    setClaimState('submitting')

    // Generate or retrieve anonymous session id
    let sessionId = 'anonymous'
    try {
      sessionId = localStorage.getItem('bday_session_id') || Math.random().toString(36).substring(2, 12)
      localStorage.setItem('bday_session_id', sessionId)
    } catch {
      // localStorage may fail in private browsing
    }

    try {
      // Send event to backend endpoint
      await fetch('/api/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event: 'birthday_gift_claim_clicked',
          sessionId,
        }),
      })
    } catch (err) {
      console.warn('Backend event notification error:', err)
      // We gracefully continue so the user still gets their surprise!
    }

    // Small delightful transition
    setTimeout(() => {
      setClaimState('revealed')
      setTimeout(() => {
        setShowSurpriseLink(true)
      }, 700)
    }, 600)
  }

  return (
    <section 
      id="gift" 
      className="w-full bg-[#f6eee7] text-[#2c2423] py-24 sm:py-36 px-5 sm:px-8 border-t border-[#ede0d6] relative"
    >
      <div className="max-w-md mx-auto text-center">
        {/* Soft Decorative Box Container */}
        <div className="bg-[#fff9f6] rounded-3xl p-8 sm:p-10 shadow-[0_15px_45px_rgba(50,30,20,0.06)] border border-[#ede1d7]">
          {/* Section Icon Badge */}
          <div className="w-12 h-12 mx-auto rounded-full bg-[#fde9eb] flex items-center justify-center text-[#9e3a47] mb-5 shadow-sm">
            <Gift className="w-6 h-6 stroke-[1.8]" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-serif text-[#2e2321] font-normal mb-3">
            One last thing...
          </h2>

          <p className="text-sm sm:text-base text-[#6f5e5a] font-light mb-8 leading-relaxed">
            I may have planned a little something for you.
          </p>

          <AnimatePresence mode="wait">
            {claimState === 'idle' && (
              <motion.div
                key="claim-button"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
              >
                <button
                  onClick={handleClaimClick}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-[0.15em] uppercase text-white bg-[#9e3a47] hover:bg-[#852f3b] transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 cursor-pointer inline-flex items-center justify-center gap-2"
                >
                  <span>🎁 Claim your Gift</span>
                </button>
              </motion.div>
            )}

            {claimState === 'submitting' && (
              <motion.div
                key="submitting"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="py-3 text-sm text-[#9e3a47] font-medium flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 animate-spin text-[#9e3a47]" />
                <span>Preparing your gift...</span>
              </motion.div>
            )}

            {claimState === 'revealed' && (
              <motion.div
                key="revealed"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-5"
              >
                {/* Transition message */}
                <p className="text-base sm:text-lg font-serif text-[#3e2f2c] italic">
                  Okay... this one's actually for you. ❤️
                </p>

                {/* Surprise Button */}
                {showSurpriseLink && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <a
                      href={GIFT_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-[0.15em] uppercase text-white bg-[#9e3a47] hover:bg-[#852f3b] transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 inline-flex items-center justify-center gap-2 group"
                    >
                      <span>Open your surprise</span>
                      <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    </a>
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Quiet Footer */}
        <div className="mt-16 text-center text-xs text-[#9c8985] font-light">
          <p>Handmade with ♡ just for your birthday</p>
        </div>
      </div>
    </section>
  )
}
