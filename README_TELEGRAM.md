# Telegram Form Integration - Quick Setup

## Option 1: Using Serverless Functions (Vercel/Netlify)

### For Vercel:
1. Deploy your site to Vercel
2. Add environment variables in Vercel dashboard:
   - `TELEGRAM_BOT_TOKEN` - Your bot token
   - `TELEGRAM_CHAT_ID` - Your channel/group chat ID
3. The function at `api/telegram/send-message.js` will automatically work
4. Set `NEXT_PUBLIC_TELEGRAM_API_URL` to your Vercel URL: `https://your-app.vercel.app/api/telegram/send-message`

### For Netlify:
1. Deploy your site to Netlify
2. Add environment variables in Netlify dashboard:
   - `TELEGRAM_BOT_TOKEN` - Your bot token
   - `TELEGRAM_CHAT_ID` - Your channel/group chat ID
3. The function at `netlify/functions/telegram.js` will automatically work
4. Set `NEXT_PUBLIC_TELEGRAM_API_URL` to your Netlify URL: `https://your-app.netlify.app/api/telegram/send-message`

## Option 2: Using Zapier/Make.com (Easiest for Static Sites)

If you're hosting on GitHub Pages or another static host, use a webhook service:

1. **Create a Zapier Zap:**
   - Trigger: Webhook (Catch Hook)
   - Action: Send Telegram Message
   - Copy the webhook URL

2. **Update the form** to use the webhook URL:
   ```env
   NEXT_PUBLIC_TELEGRAM_API_URL=https://hooks.zapier.com/hooks/catch/YOUR_WEBHOOK_ID/
   ```

## Quick Telegram Setup:

1. **Get Bot Token:**
   - Message @BotFather on Telegram
   - Send `/newbot` and follow instructions
   - Save the token (e.g., `123456789:ABCdefGHIjklMNOpqrsTUVwxyz`)

2. **Get Chat ID:**
   - Add bot to your channel/group
   - Make bot admin (for channels)
   - Visit: `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`
   - Find the `chat.id` (negative numbers are normal for groups/channels)

3. **Set Environment Variables:**
   ```
   TELEGRAM_BOT_TOKEN=your_token_here
   TELEGRAM_CHAT_ID=your_chat_id_here
   ```

## Testing:

1. Submit the form on your website
2. Check your Telegram channel/group
3. You should receive a formatted message with all form data

