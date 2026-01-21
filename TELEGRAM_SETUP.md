# Telegram Integration Setup Guide

This guide will help you set up Telegram notifications for form submissions.

## Prerequisites

1. A Telegram account
2. A Telegram Bot Token (from @BotFather)
3. Your Telegram Channel/Group Chat ID

## Step 1: Create a Telegram Bot

1. Open Telegram and search for `@BotFather`
2. Start a chat and send `/newbot`
3. Follow the instructions to name your bot
4. You'll receive a **Bot Token** (e.g., `123456789:ABCdefGHIjklMNOpqrsTUVwxyz`)
5. Save this token securely

## Step 2: Get Your Channel/Group Chat ID

### For a Channel:
1. Create a new Telegram channel or use an existing one
2. Add your bot as an administrator to the channel
3. Send a test message to your channel
4. Visit: `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`
5. Look for `"chat":{"id":-1001234567890}` - the negative number is your Chat ID

### For a Group:
1. Add your bot to the group
2. Make it an administrator (optional but recommended)
3. Send a message in the group
4. Visit: `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`
5. Find the `"chat":{"id":-123456789}` - this is your Chat ID

## Step 3: Deploy the Serverless Function

Since your site uses static export, you have a few options:

### Option A: Deploy to Vercel (Recommended - Free)

1. Create a `vercel.json` file (already created)
2. Deploy to Vercel:
   ```bash
   npm install -g vercel
   vercel
   ```
3. Add environment variables in Vercel dashboard:
   - `TELEGRAM_BOT_TOKEN`: Your bot token
   - `TELEGRAM_CHAT_ID`: Your chat ID
4. Update your form to use the Vercel function URL:
   ```env
   NEXT_PUBLIC_TELEGRAM_API_URL=https://your-app.vercel.app/api/telegram/send-message
   ```

### Option B: Use Netlify Functions

1. Create a `netlify.toml` file:
   ```toml
   [build]
     functions = "netlify/functions"

   [[redirects]]
     from = "/api/telegram/send-message"
     to = "/.netlify/functions/telegram"
     status = 200
   ```

2. Move `api/telegram/send-message.js` to `netlify/functions/telegram.js`
3. Update the handler format for Netlify:
   ```javascript
   exports.handler = async (event, context) => {
     // Similar code but adapted for Netlify format
   }
   ```

### Option C: Use a Third-Party Service

You can use services like:
- **Zapier** or **Make.com** (formerly Integromat) - Create a webhook that sends to Telegram
- **Telegram Bot API Proxy** - Use a public proxy service
- **Cloudflare Workers** - Deploy a serverless function

## Step 4: Configure Environment Variables

If using Vercel or another hosting platform, add these environment variables:

```
TELEGRAM_BOT_TOKEN=your_bot_token_here
TELEGRAM_CHAT_ID=your_chat_id_here
```

For local development, create a `.env.local` file:
```
TELEGRAM_BOT_TOKEN=your_bot_token_here
TELEGRAM_CHAT_ID=your_chat_id_here
NEXT_PUBLIC_TELEGRAM_API_URL=http://localhost:3000/api/telegram/send-message
```

## Step 5: Test the Integration

1. Submit a test form on your website
2. Check your Telegram channel/group for the notification
3. Verify the message format is correct

## Troubleshooting

### Bot not receiving messages?
- Make sure the bot is added to your channel/group
- Verify the bot has permission to send messages
- Check that the Chat ID is correct (negative numbers are normal for groups/channels)

### API endpoint not found?
- Verify the serverless function is deployed
- Check the `NEXT_PUBLIC_TELEGRAM_API_URL` environment variable
- Ensure CORS is properly configured

### 401 Unauthorized?
- Verify your Bot Token is correct
- Make sure there are no extra spaces in the token

### 400 Bad Request?
- Check that the Chat ID is correct
- Ensure the bot is a member of the channel/group

## Security Notes

- **Never commit your Bot Token or Chat ID to git**
- Always use environment variables
- The serverless function validates the request, but you can add additional security (API keys, rate limiting, etc.)

## Alternative: Simple Webhook Approach

If you don't want to deploy a serverless function, you can use a service like:
1. **Zapier** - Create a Zap that receives webhooks and sends to Telegram
2. **Make.com** - Similar to Zapier, create a scenario
3. **n8n** - Self-hosted automation tool

Then update the form to send to your webhook URL instead.

