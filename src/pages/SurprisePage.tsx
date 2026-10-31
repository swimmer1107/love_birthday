import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'

export const SurprisePage: React.FC = () => {
  const navigate = useNavigate()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen w-full bg-white flex flex-col items-center justify-center px-4 py-10"
    >
      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="fixed top-5 left-5 flex items-center gap-2 text-sm text-[#9e3a47] font-medium hover:opacity-70 transition-opacity z-10"
        aria-label="Go back"
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </button>

      {/* Surprise image — full, unmodified, contained */}
      <div className="flex items-center justify-center w-full max-w-sm sm:max-w-md md:max-w-lg">
        <img
          src="/images/your-gift-is-me.jpg"
          alt="Your Gift is Me"
          className="w-full h-auto object-contain"
          draggable={false}
        />
      </div>
    </motion.div>
  )
}

export default SurprisePage

