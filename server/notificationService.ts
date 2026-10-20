/**
 * Notification Service Abstraction
 * Supports pluggable providers: Console, Discord Webhook, Telegram Bot, or custom providers.
 */

export interface NotificationPayload {
  title: string
  message: string
  event: string
  timestamp: string
  metadata?: Record<string, unknown>
}

export interface NotificationProvider {
  name: string
  isConfigured(): boolean
  send(payload: NotificationPayload): Promise<boolean>
}

/**
 * Standard console logging provider (always enabled as a fallback/audit log)
 */
export class ConsoleNotificationProvider implements NotificationProvider {
  name = 'Console'

  isConfigured(): boolean {
    return true
  }

  async send(payload: NotificationPayload): Promise<boolean> {
    console.log('\n========================================')
    console.log(`[NOTIFICATION SERVICE] [${payload.timestamp}]`)
    console.log(`${payload.message}`)
    console.log('Event details:', JSON.stringify(payload, null, 2))
    console.log('========================================\n')
    return true
  }
}

/**
 * Discord Webhook Notification Provider
 * Activate by setting DISCORD_WEBHOOK_URL in .env
 */
export class DiscordWebhookProvider implements NotificationProvider {
  name = 'Discord'
  private webhookUrl?: string

  constructor(webhookUrl?: string) {
    this.webhookUrl = webhookUrl || process.env.DISCORD_WEBHOOK_URL
  }

  isConfigured(): boolean {
    return Boolean(this.webhookUrl && this.webhookUrl.startsWith('https://discord.com/api/webhooks/'))
  }

  async send(payload: NotificationPayload): Promise<boolean> {
    if (!this.isConfigured() || !this.webhookUrl) return false

    try {
      const response = await fetch(this.webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          content: `${payload.message}\n> *Time: ${payload.timestamp}*`,
          embeds: [
            {
              title: payload.title,
              description: payload.message,
              color: 0xe056fd,
              timestamp: payload.timestamp,
              footer: { text: `Event: ${payload.event}` },
            },
          ],
        }),
      })
      return response.ok
    } catch (err) {
      console.error('[Discord Notification Error]:', err)
      return false
    }
  }
}

/**
 * Telegram Bot Notification Provider
 * Activate by setting TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID in .env
 */
export class TelegramBotProvider implements NotificationProvider {
  name = 'Telegram'
  private botToken?: string
  private chatId?: string

  constructor(botToken?: string, chatId?: string) {
    this.botToken = botToken || process.env.TELEGRAM_BOT_TOKEN
    this.chatId = chatId || process.env.TELEGRAM_CHAT_ID
  }

  isConfigured(): boolean {
    return Boolean(this.botToken && this.chatId)
  }

  async send(payload: NotificationPayload): Promise<boolean> {
    if (!this.isConfigured() || !this.botToken || !this.chatId) return false

    try {
      const url = `https://api.telegram.org/bot${this.botToken}/sendMessage`
      const text = `${payload.message}\n\n🕒 <b>Time:</b> ${payload.timestamp}\n🏷️ <b>Event:</b> <code>${payload.event}</code>`
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: this.chatId,
          text,
          parse_mode: 'HTML',
        }),
      })
      return response.ok
    } catch (err) {
      console.error('[Telegram Notification Error]:', err)
      return false
    }
  }
}

/**
 * Central Notification Service
 */
export class NotificationService {
  private providers: NotificationProvider[] = []

  constructor() {
    // Register default providers
    this.registerProvider(new ConsoleNotificationProvider())
    this.registerProvider(new DiscordWebhookProvider())
    this.registerProvider(new TelegramBotProvider())
  }

  registerProvider(provider: NotificationProvider) {
    this.providers.push(provider)
  }

  async notify(payload: NotificationPayload): Promise<{ provider: string; success: boolean }[]> {
    const results: { provider: string; success: boolean }[] = []

    for (const provider of this.providers) {
      if (provider.isConfigured()) {
        try {
          const success = await provider.send(payload)
          results.push({ provider: provider.name, success })
        } catch (error) {
          console.error(`Error sending notification via ${provider.name}:`, error)
          results.push({ provider: provider.name, success: false })
        }
      }
    }

    return results
  }
}

export const notificationService = new NotificationService()
