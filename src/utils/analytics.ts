/**
 * Client-Side Analytics & Interaction Tracking
 * Discreetly records user interaction events without exposing backend tokens or credentials.
 */

export interface EventResponse {
  success: boolean
  event: string
  timestamp: string
}

/**
 * Tracks the "Claim your Gift" button click.
 * Sends event: "gift_claim_clicked" with timestamp to /api/events.
 */
export async function trackGiftClick(): Promise<EventResponse | null> {
  const timestamp = new Date().toISOString()

  let sessionId = 'anonymous'
  try {
    sessionId = localStorage.getItem('bday_session_id') || Math.random().toString(36).substring(2, 12)
    localStorage.setItem('bday_session_id', sessionId)
  } catch {
    // Graceful fallback for restricted browser storage
  }

  try {
    const res = await fetch('/api/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        event: 'gift_claim_clicked',
        timestamp,
        sessionId,
      }),
    })

    if (!res.ok) {
      console.warn(`[Analytics] Event delivery returned status ${res.status}`)
      return null
    }

    const data = await res.json()
    return data as EventResponse
  } catch (error) {
    console.warn('[Analytics] Failed to send interaction event:', error)
    return null
  }
}
