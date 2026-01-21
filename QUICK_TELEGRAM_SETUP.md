# Quick Telegram Setup Guide

## Step 1: Create Telegram Bot

1. Open Telegram, search for `@BotFather`
2. Send `/newbot` and follow instructions
3. Save the **Bot Token** (looks like: `123456789:ABCdefGHIjklMNOpqrsTUVwxyz`)

## Step 2: Get Channel/Group Chat ID

1. Create a Telegram channel or use existing one
2. Add your bot as administrator
3. Send a test message to the channel
4. Visit: `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`
5. Find `"chat":{"id":-1001234567890}` - this is your **Chat ID**
   - For channels: usually starts with `-100`
   - For groups: usually starts with `-`

## Step 3: Configure Environment Variables

### For Local Development

Create `.env.local` file in your project root:
```env
NEXT_PUBLIC_TELEGRAM_BOT_TOKEN=your_bot_token_here
NEXT_PUBLIC_TELEGRAM_CHAT_ID=your_chat_id_here
```

### For Production

Set these environment variables in your hosting platform:

**Vercel:**
1. Go to your project → Settings → Environment Variables
2. Add:
   - `NEXT_PUBLIC_TELEGRAM_BOT_TOKEN` = your bot token
   - `NEXT_PUBLIC_TELEGRAM_CHAT_ID` = your chat ID
3. Redeploy your application

**Netlify:**
1. Go to Site settings → Environment variables
2. Add:
   - `NEXT_PUBLIC_TELEGRAM_BOT_TOKEN` = your bot token
   - `NEXT_PUBLIC_TELEGRAM_CHAT_ID` = your chat ID
3. Redeploy your site

**Other Platforms:**
- Add the same environment variables in your hosting platform's settings
- Make sure they are prefixed with `NEXT_PUBLIC_` to be accessible in the browser

## Step 4: Test

1. Submit the contact form
2. Check your Telegram channel - you should receive a formatted message!

## Important Security Note

⚠️ **WARNING**: Using bot token directly in client-side code exposes it publicly in the browser. Anyone can view your bot token by inspecting the page source or network requests.

**Security Recommendations:**
- Consider using a bot with limited permissions
- For production, you may want to use the serverless function approach (see `TELEGRAM_SETUP.md`) instead
- Monitor your bot usage regularly
- Rotate your bot token if compromised

## Notes

- Both `NEXT_PUBLIC_TELEGRAM_BOT_TOKEN` and `NEXT_PUBLIC_TELEGRAM_CHAT_ID` are required
- The form will show an error if credentials are not configured
- Message field in the form is optional

