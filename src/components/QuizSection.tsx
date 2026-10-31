import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'
import { Sparkles, Heart } from 'lucide-react'

interface QuizOption {
  id: string
  label: string
  text: string
  reaction: {
    primary: string
    secondary?: string
  }
  isHighlighted?: boolean
}

interface Question {
  id: number
  lead?: string
  question: string
  correctAnswer: string
  options: QuizOption[]
  layout?: 'standard' | 'important'
}

const QUIZ_QUESTIONS: Question[] = [
  {
    id: 1,
    lead: "Okay birthday girl... let's start easy. 💌",
    question: 'Who do you think is secretly the biggest fan of you?',
    layout: 'standard',
    correctAnswer: '1-c',
    options: [
      {
        id: '1-a',
        label: 'A',
        text: 'Your friends',
        reaction: {
          primary: 'Umm... nope 😂',
          secondary: 'Nice guess, but think a little closer. Try again 👀',
        },
      },
      {
        id: '1-b',
        label: 'B',
        text: 'Your family',
        reaction: {
          primary: 'Wrong answer, birthday girl. 😂',
          secondary: "They love you, but there's someone even more obsessed. Try again 👀",
        },
      },
      {
        id: '1-c',
        label: 'C',
        text: 'Me 👀',
        reaction: {
          primary: 'Correct answer. I knew you were smart. 😌',
          secondary: "Couldn't hide it even if I tried.",
        },
      },
      {
        id: '1-d',
        label: 'D',
        text: 'Obviously everyone',
        reaction: {
          primary: "You're making this harder than it needs to be. 😭",
          secondary: "True, but there's a specific right answer here. Try again 👀",
        },
      },
    ],
  },
  {
    id: 2,
    lead: 'Question two... time to investigate. 🔍',
    question: "What's your most dangerous weapon?",
    layout: 'standard',
    correctAnswer: '2-d',
    options: [
      {
        id: '2-a',
        label: 'A',
        text: 'Your smile',
        reaction: {
          primary: "Close... but that's only part of the problem. 😂",
          secondary: 'Think bigger. Try again 👀',
        },
      },
      {
        id: '2-b',
        label: 'B',
        text: 'Your eyes',
        reaction: {
          primary: 'Umm... nope, not just that 😂',
          secondary: 'You have more weapons in your arsenal. Try again 👀',
        },
      },
      {
        id: '2-c',
        label: 'C',
        text: 'Your attitude',
        reaction: {
          primary: 'Dangerous, yes... but still not the full answer. 😉',
          secondary: 'Try again, birthday girl.',
        },
      },
      {
        id: '2-d',
        label: 'D',
        text: 'All of the above',
        reaction: {
          primary: "Yeah... unfortunately, all of the above. I'm already in trouble. 😭❤️",
          secondary: 'Every single one of them gets me every time.',
        },
      },
    ],
  },
  {
    id: 3,
    lead: 'Hypothetical scenario... purely research. 💭',
    question: 'Be honest... if I randomly asked you to hang out with me, what would you say?',
    layout: 'standard',
    correctAnswer: '3-a',
    options: [
      {
        id: '3-a',
        label: 'A',
        text: 'Of course',
        reaction: {
          primary: 'Okayyy, you got that one. 😌',
          secondary: "Say less. I'm already on my way. 🏃‍♂️✨",
        },
      },
      {
        id: '3-b',
        label: 'B',
        text: 'Maybe 👀',
        reaction: {
          primary: "That 'maybe' is doing a lot of heavy lifting. 😂",
          secondary: 'Try again... you know you want to say yes.',
        },
      },
      {
        id: '3-c',
        label: 'C',
        text: 'Let me think...',
        reaction: {
          primary: "Don't overthink it! 😂",
          secondary: 'You know the right answer. Try again 👀',
        },
      },
      {
        id: '3-d',
        label: 'D',
        text: 'You wish 😂',
        reaction: {
          primary: 'Ouch! The disrespect is real... 😭',
          secondary: 'Wrong answer, birthday girl. Try again 😂',
        },
      },
    ],
  },
  {
    id: 4,
    lead: 'Okay... no escaping this one.',
    question: 'Do you like me too? 👀',
    layout: 'important',
    correctAnswer: '4-yes',
    options: [
      {
        id: '4-yes',
        label: 'YES',
        text: 'YES ❤️',
        reaction: {
          primary: 'I KNEW IT. 😭❤️',
          secondary: "Okay... don't make me blush on your birthday.",
        },
      },
      {
        id: '4-no',
        label: 'NO',
        text: 'NO',
        reaction: {
          primary: "Okay okay... I'll respect that. 😭",
          secondary: 'At least you were honest.',
        },
      },
    ],
  },
  {
    id: 5,
    lead: 'Vital compatibility test. 🍕',
    question: 'If we went on a random late-night food run, who would choose the place?',
    layout: 'standard',
    correctAnswer: '5-c',
    options: [
      {
        id: '5-a',
        label: 'A',
        text: 'You',
        reaction: {
          primary: 'Umm... nope 😂',
          secondary: 'As if I could ever decide that quickly. Try again 👀',
        },
      },
      {
        id: '5-b',
        label: 'B',
        text: 'Me',
        reaction: {
          primary: 'Wrong answer, birthday girl. 😂',
          secondary: "You know you'd say 'I don't know, anything is fine'. Try again 👀",
        },
      },
      {
        id: '5-c',
        label: 'C',
        text: "We'd spend 30 minutes deciding",
        reaction: {
          primary: "100% accurate. We'd starve in the car while scrolling menus. 💀",
          secondary: 'The most relatable struggle in existence.',
        },
      },
      {
        id: '5-d',
        label: 'D',
        text: "We'd just order Blinkit 😂",
        reaction: {
          primary: "You're making this harder than it needs to be. 😭",
          secondary: 'Tempting, but think about what would actually happen first. Try again 👀',
        },
      },
    ],
  },
  {
    id: 6,
    lead: 'Last one... and this one actually matters.',
    question: 'If I told you that making this whole website was my way of saying...',
    layout: 'standard',
    correctAnswer: '6-d',
    options: [
      {
        id: '6-a',
        label: 'A',
        text: 'Happy Birthday ❤️',
        reaction: {
          primary: 'True... but only partly true. 😉',
          secondary: "There's an even bigger answer. Try again 👀",
        },
      },
      {
        id: '6-b',
        label: 'B',
        text: "You're special to me",
        reaction: {
          primary: 'You really are... but there is more. ❤️',
          secondary: 'Look closely at all the options! Try again 👀',
        },
      },
      {
        id: '6-c',
        label: 'C',
        text: 'I like you. You already knew that though. 👀',
        reaction: {
          primary: "Guilty! But don't stop there. 😌",
          secondary: "There's one option that says it all. Try again 👀",
        },
      },
      {
        id: '6-d',
        label: 'D',
        text: 'All of the above',
        isHighlighted: true,
        reaction: {
          primary: 'Every single word of it. Especially that last part. ❤️',
          secondary: 'Now... you survived the quiz.',
        },
      },
    ],
  },
]

const NO_DODGE_REACTIONS = [
  { primary: 'Nice try. 👀', secondary: 'That button seems a little slippery.' },
  { primary: 'Are you really sure? 😂', secondary: 'Think about this very carefully...' },
  { primary: 'That button seems a little shy.', secondary: "It doesn't really want to be clicked. 🙈" },
  { primary: 'Okay, I get it... 😭', secondary: 'Fine... if you really want to say no.' },
]

const NO_OFFSETS = [
  { x: 0, y: 0 },
  { x: 28, y: -16 },
  { x: -28, y: 14 },
  { x: 22, y: 18 },
  { x: 0, y: 0 },
]

const NO_BUTTON_TEXTS = [
  'NO',
  'Wait... 👀',
  'Are you sure? 😂',
  'Shy button 🙈',
  'NO',
]

export const QuizSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null)
  const [isWrongSelection, setIsWrongSelection] = useState<boolean>(false)
  const [activeReaction, setActiveReaction] = useState<{ primary: string; secondary?: string } | null>(null)
  const [isAnswering, setIsAnswering] = useState<boolean>(false)
  const [isQuizCompleted, setIsQuizCompleted] = useState<boolean>(false)

  // Question 4 playful "NO" button behavior
  const [noDodgeCount, setNoDodgeCount] = useState<number>(0)
  const transitionTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const currentQuestion = QUIZ_QUESTIONS[currentIndex]
  const totalQuestions = QUIZ_QUESTIONS.length

  const triggerCuteSparkles = () => {
    try {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.65 },
        colors: ['#f6c994', '#f1a8b8', '#e8b4b8', '#ffd166', '#ffffff'],
        ticks: 180,
        gravity: 0.85,
        scalar: 0.9,
        shapes: ['circle'],
        disableForReducedMotion: true,
      })
    } catch (e) {
      console.warn('Sparkle effect skipped:', e)
    }
  }

  const handleSelectOption = (option: QuizOption) => {
    if (isAnswering) return

    const isCorrect =
      option.id === currentQuestion.correctAnswer ||
      (currentQuestion.id === 4 && option.id === '4-no')

    setIsAnswering(true)
    setSelectedOptionId(option.id)
    setActiveReaction(option.reaction)

    if (isCorrect) {
      setIsWrongSelection(false)

      // Sparkles on correct answers or highlighted answers
      if (
        option.id === '1-c' ||
        option.id === '4-yes' ||
        option.id === '6-d' ||
        option.isHighlighted
      ) {
        triggerCuteSparkles()
      }

      const waitDuration = option.reaction.secondary ? 1500 : 1200

      if (transitionTimeoutRef.current) clearTimeout(transitionTimeoutRef.current)
      transitionTimeoutRef.current = setTimeout(() => {
        if (currentIndex + 1 < totalQuestions) {
          setCurrentIndex((prev) => prev + 1)
          setSelectedOptionId(null)
          setActiveReaction(null)
          setIsAnswering(false)
          setIsWrongSelection(false)
        } else {
          setIsQuizCompleted(true)
          setSelectedOptionId(null)
          setActiveReaction(null)
          setIsAnswering(false)
          setIsWrongSelection(false)
          triggerCuteSparkles()
        }
      }, waitDuration)
    } else {
      // WRONG ANSWER BEHAVIOR: Do NOT advance. Stay on the same question.
      setIsWrongSelection(true)

      if (transitionTimeoutRef.current) clearTimeout(transitionTimeoutRef.current)
      transitionTimeoutRef.current = setTimeout(() => {
        // Clear wrong highlight so user can choose again
        setSelectedOptionId(null)
        setIsWrongSelection(false)
        setIsAnswering(false)
        // Keep activeReaction visible so she can read the playful message while trying again
      }, 1300)
    }
  }

  const handleNoInteraction = () => {
    if (isAnswering) return

    if (noDodgeCount < 4) {
      const nextCount = noDodgeCount + 1
      setNoDodgeCount(nextCount)
      const reaction = NO_DODGE_REACTIONS[noDodgeCount] || NO_DODGE_REACTIONS[0]
      setActiveReaction(reaction)
    } else {
      // After several attempts, allow NO to be clicked normally and proceed
      const noOpt = currentQuestion.options.find((o) => o.id === '4-no')
      if (noOpt) {
        handleSelectOption(noOpt)
      }
    }
  }

  return (
    <section
      id="quiz"
      className="w-full bg-[#faf5f0] text-[#2c2423] py-24 sm:py-36 px-5 sm:px-8 md:px-12 relative overflow-hidden border-t border-[#ede0d6]"
    >
      {/* Decorative ambient background glows */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-rose-200/25 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-20 right-10 w-80 h-80 bg-amber-200/20 rounded-full blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-2xl mx-auto relative z-10">
        {/* Section Header Tag */}
        <div className="text-center mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8 }}
            className="inline-block"
          >
            <span className="text-xs sm:text-sm tracking-[0.25em] uppercase font-semibold text-[#9e3a47] bg-[#f9e5e3] px-5 py-2 rounded-full shadow-xs">
              A LITTLE QUIZ FOR YOU 💌
            </span>
          </motion.div>
        </div>

        {/* Main Quiz Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9 }}
          className="bg-[#fff9f6] rounded-[32px] sm:rounded-[44px] p-6 sm:p-12 md:p-14 relative border border-[#f3dfd7] shadow-[0_24px_80px_rgba(70,35,25,0.08)] min-h-[460px] flex flex-col justify-between"
        >
          {/* Subtle Decorative Corner Accents */}
          <div className="absolute top-6 left-6 text-[#e8b4b8]/70" aria-hidden="true">
            <Sparkles className="w-5 h-5" />
          </div>
          <div className="absolute top-6 right-6 text-[#e8b4b8]/70" aria-hidden="true">
            <Heart className="w-5 h-5 fill-current" />
          </div>

          <AnimatePresence mode="wait">
            {!isQuizCompleted ? (
              <motion.div
                key={`question-${currentQuestion.id}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="w-full flex flex-col justify-between h-full"
              >
                <div>
                  {/* Subtle Editorial Progress Indicator */}
                  <div className="flex items-center justify-between mb-8 sm:mb-10 pt-1">
                    <span className="text-xs sm:text-sm font-semibold tracking-[0.22em] text-[#a85a52] uppercase">
                      Question 0{currentQuestion.id} / 0{totalQuestions}
                    </span>

                    {/* Subtle dot steps */}
                    <div className="flex items-center gap-1.5" aria-hidden="true">
                      {QUIZ_QUESTIONS.map((q, idx) => (
                        <div
                          key={q.id}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            idx === currentIndex
                              ? 'w-6 bg-[#9e3a47]'
                              : idx < currentIndex
                              ? 'w-2 bg-[#d79a9e]'
                              : 'w-1.5 bg-[#ebd9d2]'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Question Lead / Subtitle */}
                  {currentQuestion.lead && (
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      className="text-sm sm:text-base text-[#8f6d67] font-medium tracking-wide mb-2"
                    >
                      {currentQuestion.lead}
                    </motion.p>
                  )}

                  {/* Question Heading */}
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.15 }}
                    className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#2d2422] font-normal leading-snug mb-8 sm:mb-10"
                  >
                    {currentQuestion.question}
                  </motion.h3>

                  {/* Options Render Area */}
                  {currentQuestion.layout === 'important' ? (
                    /* QUESTION 4: ONLY TWO OPTIONS (YES ❤️ and NO) */
                    (() => {
                      const yesOpt = currentQuestion.options.find((o) => o.id === '4-yes')!
                      const noOpt = currentQuestion.options.find((o) => o.id === '4-no')!
                      const isYesSelected = selectedOptionId === yesOpt.id
                      const isNoSelected = selectedOptionId === noOpt.id
                      const offset = NO_OFFSETS[noDodgeCount] || { x: 0, y: 0 }
                      const buttonLabel = NO_BUTTON_TEXTS[noDodgeCount] || 'NO'

                      return (
                        <div className="my-6 max-w-lg mx-auto w-full">
                          <div className="grid grid-cols-2 gap-4 sm:gap-6 items-center">
                            {/* YES BUTTON */}
                            <button
                              onClick={() => handleSelectOption(yesOpt)}
                              disabled={isAnswering}
                              className={`w-full h-16 sm:h-20 px-4 sm:px-6 rounded-2xl sm:rounded-3xl font-medium text-base sm:text-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer border ${
                                isYesSelected
                                  ? 'bg-[#9e3a47] text-white border-[#9e3a47] shadow-lg scale-[1.02]'
                                  : 'bg-[#fff5f2] hover:bg-[#faeae5] text-[#362725] border-[#f0dad2] hover:border-[#e2b7ab] shadow-xs hover:shadow-md hover:scale-[1.01]'
                              }`}
                            >
                              <span>{yesOpt.text}</span>
                            </button>

                            {/* NO BUTTON (Playful limited dodge, then clickable normally) */}
                            <div className="relative w-full flex items-center justify-center">
                              <motion.button
                                onClick={handleNoInteraction}
                                onMouseEnter={noDodgeCount < 4 ? handleNoInteraction : undefined}
                                onTouchStart={noDodgeCount < 4 ? handleNoInteraction : undefined}
                                disabled={isAnswering}
                                animate={{ x: offset.x, y: offset.y }}
                                transition={{ type: 'spring', stiffness: 350, damping: 24 }}
                                className={`w-full h-16 sm:h-20 px-3 sm:px-6 rounded-2xl sm:rounded-3xl font-medium text-xs sm:text-base md:text-lg transition-colors duration-200 flex items-center justify-center text-center cursor-pointer border leading-snug select-none ${
                                  isNoSelected
                                    ? 'bg-[#9e3a47] text-white border-[#9e3a47] shadow-lg scale-[1.02]'
                                    : 'bg-[#fff5f2] hover:bg-[#faeae5] text-[#362725] border-[#f0dad2] hover:border-[#e2b7ab] shadow-xs hover:shadow-md'
                                }`}
                              >
                                <span>{buttonLabel}</span>
                              </motion.button>
                            </div>
                          </div>
                        </div>
                      )
                    })()
                  ) : (
                    /* STANDARD OPTIONS (Questions 1, 2, 3, 5, 6) */
                    <div className="space-y-3.5 my-2">
                      {currentQuestion.options.map((opt) => {
                        const isSelected = selectedOptionId === opt.id
                        const isHighlight = opt.isHighlighted
                        const isThisWrong = isSelected && isWrongSelection

                        return (
                          <motion.button
                            key={opt.id}
                            onClick={() => handleSelectOption(opt)}
                            disabled={isAnswering && !isThisWrong}
                            animate={isThisWrong ? { x: [-3, 3, -3, 3, 0] } : {}}
                            transition={{ duration: 0.3 }}
                            className={`w-full text-left p-4 sm:p-5 rounded-2xl sm:rounded-3xl transition-all duration-300 flex items-center justify-between cursor-pointer border ${
                              isSelected
                                ? isThisWrong
                                  ? 'bg-[#fcedef] text-[#7a2331] border-[#e28b9a] shadow-md scale-[1.01]'
                                  : 'bg-[#9e3a47] text-white border-[#9e3a47] shadow-lg scale-[1.015]'
                                : isHighlight
                                ? 'bg-gradient-to-r from-[#fdf2f4] via-[#fde9eb] to-[#fce4e8] text-[#2e2321] border-[#e8a3af] hover:border-[#d97c8d] shadow-[0_4px_20px_rgba(200,80,100,0.12)] hover:shadow-[0_8px_25px_rgba(200,80,100,0.18)] hover:scale-[1.01]'
                                : 'bg-[#fff5f2] hover:bg-[#faeae5] text-[#362725] border-[#f0dad2] hover:border-[#e2b7ab] shadow-xs hover:shadow-md'
                            }`}
                          >
                            <div className="flex items-center gap-3.5 sm:gap-4">
                              <span
                                className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-xs sm:text-sm font-semibold transition-colors ${
                                  isSelected
                                    ? isThisWrong
                                      ? 'bg-[#e28b9a] text-white'
                                      : 'bg-white/20 text-white'
                                    : isHighlight
                                    ? 'bg-[#9e3a47] text-white'
                                    : 'bg-[#ede0d7] text-[#765d57]'
                                }`}
                              >
                                {opt.label}
                              </span>
                              <span
                                className={`text-base sm:text-lg ${
                                  isHighlight ? 'font-semibold text-[#8a333f]' : 'font-normal'
                                }`}
                              >
                                {opt.text}
                              </span>
                            </div>

                            {isHighlight && !isSelected && (
                              <span className="text-xs sm:text-sm uppercase tracking-wider font-semibold text-[#9e3a47] bg-white/70 px-3 py-1 rounded-full hidden sm:inline-block">
                                ✨ Recommended
                              </span>
                            )}
                          </motion.button>
                        )
                      })}
                    </div>
                  )}
                </div>

                {/* Animated Reaction Feedback Area */}
                <div className="min-h-[85px] mt-6 flex flex-col items-center justify-center text-center">
                  <AnimatePresence mode="wait">
                    {activeReaction && (
                      <motion.div
                        key={activeReaction.primary}
                        initial={{ opacity: 0, y: 12, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.35, ease: 'easeOut' }}
                        className={`p-3.5 sm:p-4 rounded-2xl border w-full ${
                          isWrongSelection
                            ? 'bg-[#fff0f2] border-[#f5cbd1]'
                            : 'bg-[#faf0eb] border-[#ebd8d0]'
                        }`}
                      >
                        <p className="text-base sm:text-lg font-serif italic text-[#9e3a47]">
                          "{activeReaction.primary}"
                        </p>
                        {activeReaction.secondary && (
                          <p className="text-sm sm:text-base text-[#6b5854] font-light mt-1">
                            {activeReaction.secondary}
                          </p>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ) : (
              /* CHANGE 1: DEDICATED QR REVEAL SECTION / CARD (NO MAKE A WISH BUTTON) */
              <motion.div
                key="quiz-qr-reveal"
                initial={{ opacity: 0, scale: 0.96, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.55, ease: 'easeOut' }}
                className="w-full text-center py-6 sm:py-8 flex flex-col items-center justify-center space-y-6"
              >
                <div className="space-y-2.5">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#2d2422] font-normal leading-snug pt-1">
                    One last little surprise 👀
                  </h3>
                  <p className="text-base sm:text-lg text-[#78635f] font-light max-w-md mx-auto">
                    Scan this. Then come back. ❤️
                  </p>
                </div>

                {/* Dedicated QR Card Frame with whitespace */}
                <div className="bg-white p-5 sm:p-6 rounded-3xl border border-[#f0dad2] shadow-[0_12px_40px_rgba(70,35,25,0.08)] flex items-center justify-center relative">
                  <div className="absolute -top-2.5 -right-2.5 text-[#e8a3af]">
                    <Heart className="w-5 h-5 fill-current" />
                  </div>
                  <img
                    src="/assets/qr-code.jpeg"
                    alt="One last little surprise - Scan this"
                    className="w-56 h-56 sm:w-64 sm:h-64 object-contain rounded-2xl"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

export default QuizSection
