/**
 * Birthday Website Configuration
 *
 * Customize all content, images, videos, texts, and links here
 * without modifying UI components.
 */

export interface PersonalMessageItem {
  id: string
  photo: string
  alt: string
  tag?: string
  heading?: string
  paragraphs: string[]
}

export interface MemoryItem {
  id: string
  photo: string
  alt: string
  date?: string
  captionLine1: string
  captionLine2?: string
}

export const HER_NAME = "Nandini"

export const HERO_VIDEO = "/videos/love.mp4"
export const MEMORY_VIDEO = "/videos/web_love.mp4"

export const PHOTOS = {
  photo01: "/images/photo-01.jpg",
  photo02: "/images/photo-02.jpg",
  photo03: "/images/photo-03.jpg",
  photo04: "/images/photo-04.jpg",
}

export const PERSONAL_MESSAGE_DATA: PersonalMessageItem[] = [
  {
    id: "msg-1",
    photo: PHOTOS.photo01,
    alt: "Nandini laughing at cafe",
    tag: "A LITTLE NOTE",
    heading: "Hey you...",
    paragraphs: [
      "First of all, you really don't realize how easy you are to appreciate.",
      "There's something about the way you carry yourself. You don't have to try too hard to stand out, and somehow you still do.",
      "I really like your smile. Not just because it's pretty, but because it completely changes your face when you're genuinely happy.",
      "And your laugh... yeah, that's definitely one of my favorite things about you. Especially when you laugh at something completely stupid.",
      "Also, I'm pretty sure you don't realize how cute you look when you're excited about something. It's honestly unfair. :)",
    ],
  },
  {
    id: "msg-2",
    photo: PHOTOS.photo02,
    alt: "Nandini walking in the park",
    tag: "THOUGHTS",
    heading: "Quietly remarkable",
    paragraphs: [
      "I like how you're yourself without constantly worrying about whether everyone else approves.",
      "You have this really nice balance of being sweet without trying to be, and confident without needing to prove anything.",
      "Even the little things about you somehow make you memorable — the way you talk, the expressions you make, the random things you get excited about.",
      "And maybe you don't notice these things about yourself...",
      "But someone definitely does. 👀",
      "Consider this your birthday reminder that you're a lot more amazing than you give yourself credit for. ❤️",
    ],
  },
]

export const MEMORY_CAPTIONS: MemoryItem[] = [
  {
    id: "mem-1",
    photo: PHOTOS.photo03,
    alt: "In the record store",
    date: "A quiet afternoon",
    captionLine1: "you probably don't remember this one.",
    captionLine2: "but I do.",
  },
  {
    id: "mem-2",
    photo: PHOTOS.photo04,
    alt: "Warm fairy lights and sparkler",
    date: "Golden hours",
    captionLine1: "Every time you laugh like this...",
    captionLine2: "the whole world just pauses for a second.",
  },
]

export const BIRTHDAY_MESSAGE = {
  tag: "JUST FOR YOU, MY LOVE ♡",
  titleLine1: "Happy Birthday,",
  titleLine2: `${HER_NAME}. ♡`,
  closing: {
    greeting: `Happy Birthday, ${HER_NAME}.`,
    note: "Stay exactly as you are. You're pretty wonderful that way.",
    crush: "And yes... There is someone who is completely yours. ;)",
    signoff: "Yours,",
    author: "Swimmer. ❤️",
  },
}

/**
 * ============================================================
 * GIFT LINK & QR CODE CONFIGURATION
 * ============================================================
 * Link and QR code for the birthday surprise gift.
 * You can also set VITE_GIFT_LINK in your .env file.
 */
export const GIFT_QR_IMAGE = "/images/gift-qr.jpg"

export const GIFT_LINK =
  import.meta.env.VITE_GIFT_LINK ||
  import.meta.env.VITE_GIFT_URL ||
  "https://moonlinky.com/asotv"

// Backward-compatible alias
export const GIFT_URL = GIFT_LINK
