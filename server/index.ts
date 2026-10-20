import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { notificationService } from './notificationService'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

// Health check endpoint
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// Event tracking endpoint
app.post('/api/events', async (req, res) => {
  try {
    const { event, sessionId } = req.body

    if (!event || typeof event !== 'string') {
      res.status(400).json({ error: 'Missing or invalid event name' })
      return
    }

    const timestamp = new Date().toISOString()

    // Formatted message according to specifications
    let notificationText = `Event received: ${event}`
    if (event === 'birthday_gift_claim_clicked') {
      notificationText = "🎁 She just clicked 'Claim your Gift'."
    }

    console.log(`[Event Received] ${event} at ${timestamp}`)

    const results = await notificationService.notify({
      title: 'Birthday Website Alert 🎁',
      message: notificationText,
      event,
      timestamp,
      metadata: {
        sessionId: sessionId || 'anonymous',
        userAgent: req.headers['user-agent'],
      },
    })

    res.status(200).json({
      success: true,
      event,
      timestamp,
      notificationsSent: results,
    })
  } catch (error) {
    console.error('Error handling event:', error)
    res.status(500).json({ error: 'Internal server error processing event' })
  }
})

app.listen(PORT, () => {
  console.log(`✨ Birthday backend server running on http://localhost:${PORT}`)
  console.log(`📡 Event endpoint ready at POST http://localhost:${PORT}/api/events`)
})
