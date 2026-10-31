import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Hero } from './components/Hero'
import { PersonalMessage } from './components/PersonalMessage'
import { MemorySection } from './components/MemorySection'
import { MakeAWish } from './components/MakeAWish'
import { VideoBreak } from './components/VideoBreak'
import { QuizSection } from './components/QuizSection'
import { BirthdayMessage } from './components/BirthdayMessage'
import { GiftSection } from './components/GiftSection'
import { SurprisePage } from './pages/SurprisePage'

const HomePage: React.FC = () => (
  <main className="w-full min-h-screen bg-[#faf5f0] text-[#2c2423] overflow-x-hidden">
    <Hero />
    <PersonalMessage />
    <MemorySection />
    <MakeAWish />
    <VideoBreak />
    <QuizSection />
    <BirthdayMessage />
    <GiftSection />
  </main>
)

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/surprise" element={<SurprisePage />} />
    </Routes>
  )
}

export default App
