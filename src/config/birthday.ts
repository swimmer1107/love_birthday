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

export const HERO_VIDEO = "/videos/hero.mp4"
export const MEMORY_VIDEO = "/videos/memory-break.mp4"

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
      "There are people who simply exist in a room, and then there's you — the kind of person whose laugh makes everything around them feel just a little warmer.",
      "Every conversation with you somehow turns into a memory I end up replaying on quiet evenings.",
    ],
  },
  {
    id: "msg-2",
    photo: PHOTOS.photo02,
    alt: "Nandini walking in the park",
    tag: "THOUGHTS",
    heading: "Quietly remarkable",
    paragraphs: [
      "I love how effortlessly genuine you are. You don't try to impress anyone, yet you always leave an impression.",
      "Just seeing you smile in your own world has a way of turning an ordinary day into a really good one.",
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
  title: `Happy Birthday, ${HER_NAME}. ♡`,
  paragraphs: [
    "I hope this year gives you a thousand reasons to smile, a few beautiful surprises, and everything you've been wishing for.",
    "And selfishly...",
    "I hope I get to be around for a few of those moments too.",
  ],
  signoff: "Yours,",
}

/**
 * ============================================================
 * BLINKIT / EXTERNAL GIFT LINK CONFIGURATION
 * ============================================================
 * Replace "YOUR_BLINKIT_LINK_HERE" with your Blinkit gift link,
 * custom order link, or surprise destination.
 * You can also set VITE_GIFT_LINK in your .env file.
 */
export const GIFT_LINK =
  import.meta.env.VITE_GIFT_LINK ||
  import.meta.env.VITE_GIFT_URL ||
  "https://open.spotify.com"

// Backward-compatible alias
export const GIFT_URL = GIFT_LINK
