import React from 'react'
import { motion } from 'framer-motion'
import { BIRTHDAY_MESSAGE } from '../config/birthday'

export const BirthdayMessage: React.FC = () => {
  return (
    <section
      id="birthday-message"
      className="w-full bg-[#faf4f0] text-[#2c2423] py-28 sm:py-44 px-5 sm:px-8 md:px-12 lg:px-16 relative overflow-hidden"
    >
      {/* Soft romantic ambient background warmth */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-200/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* SMALL LABEL */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8 }}
          className="inline-block mb-6 sm:mb-8"
        >
          <span className="text-xs sm:text-sm tracking-[0.28em] uppercase font-semibold text-[#a84453] bg-[#f8e4de] px-5 py-2 rounded-full shadow-xs">
            {BIRTHDAY_MESSAGE.tag}
          </span>
        </motion.div>

        {/* MAIN HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-[#2e2220] font-normal leading-[1.1] mb-16 sm:mb-24"
        >
          {BIRTHDAY_MESSAGE.titleLine1}
          <br />
          {BIRTHDAY_MESSAGE.titleLine2}
        </motion.h2>

        {/* Expansive, Genuine, Romantic Birthday Content */}
        <div className="space-y-12 sm:space-y-16 max-w-3xl mx-auto">
          {/* Section 1: Meaningful Birthday Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8"
          >

            <p className="text-lg sm:text-2xl font-light text-[#4a3b38] leading-relaxed">
              I honestly didn't want to give you one of those simple
              'Happy Birthday, have a great day' messages and call it a day.
            </p>
            <p className="text-lg sm:text-2xl font-light text-[#4a3b38] leading-relaxed">
              You deserve a little more than that.
            </p>
            <p className="text-lg sm:text-2xl font-light text-[#4a3b38] leading-relaxed">
              I hope this year brings you the kind of happiness that stays even after the birthday candles are gone.
              I hope you get more reasons to laugh until your stomach hurts,
              more random moments that become your favourite memories,
              more people who make you feel appreciated,
              and more moments where you look around and realize that life is actually pretty beautiful.
            </p>
            <p className="text-lg sm:text-2xl font-light text-[#4a3b38] leading-relaxed">
              And most importantly, I hope you never forget how special you are to the one who genuinely cares about you.
            </p>
          </motion.div>

          {/* Section 2: Personal Transition & Flirty Confession */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8 }}
            className="pt-6 sm:pt-10 border-t border-[#ede0d6]/60 space-y-6 sm:space-y-8"
          >
            <p className="text-base sm:text-xl font-serif italic text-[#82605a]">
              And since this is my little corner of the internet where I get to be honest for a minute...
            </p>
            <p className="text-xl sm:text-2xl font-serif text-[#2e2220]">
              I'll admit something.
            </p>
            <p className="text-lg sm:text-2xl font-light text-[#4a3b38] leading-relaxed">
              Somewhere between all the random conversations,
              the stupid jokes, the little moments,
              and simply getting used to having you around...
            </p>
            <p className="text-xl sm:text-2xl font-serif text-[#2e2220] italic">
              you became someone I started looking forward to.
            </p>
            <p className="text-lg sm:text-2xl font-light text-[#4a3b38] leading-relaxed">
              Your messages became a little more exciting.
              Your smile became a little harder to ignore.
              And somehow, talking to you started becoming
              one of those things I never really wanted to end.
            </p>
            <p className="text-base sm:text-xl text-[#745f5b] font-light">
              So yes...
            </p>
            <p className="text-lg sm:text-2xl font-light text-[#4a3b38]">
              maybe I do have a tiny bit of a problem.
            </p>
            <p className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-[#9e3a47] font-normal">
              I like you.
              <br />
              Probably more than I should.
            </p>
            <p className="text-base sm:text-xl text-[#6b5854] font-normal">
              But you already knew that, didn't you? 👀
            </p>
          </motion.div>

          {/* Section 3: Softer Personal Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8 }}
            className="pt-6 sm:pt-10 border-t border-[#ede0d6]/60 space-y-6 sm:space-y-8"
          >
            <p className="text-xl sm:text-2xl font-serif text-[#2e2220]">
              There's just something about you.
            </p>
            <p className="text-lg sm:text-2xl font-light text-[#4a3b38] leading-relaxed">
              Maybe it's the way you laugh.
              <br />
              Maybe it's the way you make ordinary conversations feel like something worth remembering.
              <br />
              Maybe it's just you being you.
            </p>
            <p className="text-base sm:text-xl text-[#745f5b] font-light">
              I don't really know.
            </p>
            <p className="text-lg sm:text-2xl font-light text-[#4a3b38] leading-relaxed">
              I just know that having you in my life has made some ordinary days feel a little less ordinary.
            </p>
          </motion.div>

          {/* Section 4: Playful / Flirty Line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8 }}
            className="py-4 sm:py-6"
          >
            <p className="text-base sm:text-xl text-[#745f5b] font-light mb-3">
              And honestly...
            </p>
            <p className="text-xl sm:text-3xl md:text-4xl font-serif italic text-[#9e3a47] font-normal leading-snug max-w-2xl mx-auto">
              if being around you is a bad idea,
              I'm starting to think I don't really want good ideas anymore. :)
            </p>
          </motion.div>

          {/* Section 5: Bring Focus Back to Her Birthday */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8 }}
            className="pt-6 sm:pt-10 border-t border-[#ede0d6]/60 space-y-6 sm:space-y-8"
          >
            <p className="text-xl sm:text-2xl font-serif text-[#2e2220]">
              But today isn't about me.
            </p>
            <p className="text-2xl sm:text-3xl font-serif text-[#9e3a47] font-normal">
              Today is about you.
            </p>
            <p className="text-lg sm:text-2xl font-light text-[#4a3b38] leading-relaxed">
              So I hope you eat your favourite food,
              laugh way too much,
              take too many pictures,
              get spoiled a little,
              and enjoy every tiny moment of your day.
            </p>
            <p className="text-lg sm:text-2xl font-light text-[#4a3b38] leading-relaxed">
              You deserve to be celebrated — not just today, but on all the ordinary days too.
            </p>
          </motion.div>

          {/* Section 6: Romantic-but-not-too-heavy Ending */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8 }}
            className="pt-6 sm:pt-10 border-t border-[#ede0d6]/60 space-y-6 sm:space-y-8"
          >
            <p className="text-2xl sm:text-3xl font-serif italic text-[#9e3a47] font-normal">
              And selfishly...
            </p>
            <p className="text-lg sm:text-2xl font-light text-[#4a3b38] leading-relaxed">
              I hope I get to be around for some of those moments.
            </p>
            <p className="text-lg sm:text-2xl font-light text-[#4a3b38] leading-relaxed">
              Maybe for the random conversations.
              <br />
              Maybe for the stupid jokes.
              <br />
              Maybe for the late replies.
              <br />
              Maybe for the little memories we don't realize are becoming memories.
            </p>
            <p className="text-base sm:text-xl text-[#745f5b] font-light">
              And maybe...
              <br />
              just maybe...
            </p>
            <p className="text-2xl sm:text-4xl md:text-5xl font-serif text-[#2a1e1d] font-normal leading-snug pt-2">
              I get to be a small part of your favourite ones. ♡
            </p>
          </motion.div>

          {/* Section 7: Final Short Closing & Signoff */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.9 }}
            className="bg-[#fff9f6] p-8 sm:p-12 md:p-14 rounded-[32px] sm:rounded-[40px] border border-[#f0dad2] shadow-[0_16px_50px_rgba(70,35,25,0.06)] max-w-2xl mx-auto mt-16 sm:mt-20 space-y-4 text-center"
          >
            <p className="text-2xl sm:text-3xl font-serif text-[#2e2220]">
              {BIRTHDAY_MESSAGE.closing.greeting}
            </p>
            <p className="text-base sm:text-xl text-[#6b5854] font-light">
              {BIRTHDAY_MESSAGE.closing.note}
            </p>
            <p className="text-base sm:text-xl text-[#9e3a47] font-medium italic">
              {BIRTHDAY_MESSAGE.closing.crush}
            </p>

            <div className="pt-8 space-y-1.5">
              <p className="text-3xl sm:text-4xl font-handwriting text-[#9a6760]">
                {BIRTHDAY_MESSAGE.closing.signoff}
              </p>
              <p className="text-sm sm:text-base font-light text-[#7a5853]">
                {BIRTHDAY_MESSAGE.closing.author}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default BirthdayMessage
