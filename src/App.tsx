import React from 'react'
import { Hero } from './components/Hero'
import { PersonalMessage } from './components/PersonalMessage'
import { MemorySection } from './components/MemorySection'
import { MakeAWish } from './components/MakeAWish'
import { VideoBreak } from './components/VideoBreak'
import { BirthdayMessage } from './components/BirthdayMessage'
import { GiftSection } from './components/GiftSection'

export const App: React.FC = () => {
  return (
    <main className="w-full min-h-screen bg-[#faf5f0] text-[#2c2423] overflow-x-hidden">
      <Hero />
      <PersonalMessage />
      <MemorySection />
      <MakeAWish />
      <VideoBreak />
      <BirthdayMessage />
      <GiftSection />
    </main>
  )
}

export default App
