// Standalone serverless function for Telegram integration
// Can be deployed to Vercel, Netlify, Cloudflare Workers, or any Node.js serverless platform

export default async function handler(req, res) {
  const timestamp = new Date().toISOString();
  console.log(`[Telegram API] ${timestamp} - Request received`);
  console.log(`[Telegram API] Method: ${req.method}`);
  console.log(`[Telegram API] Headers:`, JSON.stringify(req.headers, null, 2));
  
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    console.log('[Telegram API] OPTIONS request - returning CORS headers');
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    console.warn(`[Telegram API] Invalid method: ${req.method}`);
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    console.log('[Telegram API] Request body:', JSON.stringify(req.body, null, 2));
    const { firstname, lastname, phnumber, classes, Message } = req.body;

    // Validate required fields
    console.log('[Telegram API] Validating fields...');
    console.log('[Telegram API] Fields received:', {
      firstname: firstname || 'MISSING',
      lastname: lastname || 'MISSING',
      phnumber: phnumber || 'MISSING',
      classes: classes || 'MISSING',
      Message: Message || 'OPTIONAL',
    });
    
    if (!firstname || !lastname || !phnumber || !classes) {
      console.error('[Telegram API] ❌ Validation failed - missing required fields');
      return res.status(400).json({ error: 'Required fields are missing' });
    }
    console.log('[Telegram API] ✅ Field validation passed');

    // Get Telegram credentials from environment variables
    const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    console.log('[Telegram API] Checking credentials...');
    console.log('[Telegram API] BOT_TOKEN exists:', !!BOT_TOKEN);
    console.log('[Telegram API] BOT_TOKEN length:', BOT_TOKEN?.length || 0);
    console.log('[Telegram API] CHAT_ID exists:', !!CHAT_ID);
    console.log('[Telegram API] CHAT_ID value:', CHAT_ID || 'NOT SET');

    if (!BOT_TOKEN || !CHAT_ID) {
      console.error('[Telegram API] ❌ Telegram credentials not configured');
      console.error('[Telegram API] Missing:', {
        BOT_TOKEN: !BOT_TOKEN,
        CHAT_ID: !CHAT_ID,
      });
      return res.status(500).json({ error: 'Telegram service not configured' });
    }
    console.log('[Telegram API] ✅ Credentials found');

    // Format the message for Telegram
    const telegramMessage = `🎓 *New Contact Form Submission*

👤 *Name:* ${firstname} ${lastname}
📱 *Phone:* ${phnumber}
📚 *Class:* ${classes}
💬 *Message:*
${Message || 'No message provided'}

_Submitted from Shree's Academy Website_`;

    console.log('[Telegram API] Formatted message:');
    console.log('[Telegram API]', telegramMessage);
    console.log('[Telegram API] Message length:', telegramMessage.length);

    // Send message to Telegram
    const telegramApiUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
    console.log('[Telegram API] Sending to Telegram API:', telegramApiUrl.replace(BOT_TOKEN, 'BOT_TOKEN_HIDDEN'));
    
    const telegramPayload = {
      chat_id: CHAT_ID,
      text: telegramMessage,
      parse_mode: 'Markdown',
    };
    console.log('[Telegram API] Telegram payload:', {
      ...telegramPayload,
      text: `[Message length: ${telegramPayload.text.length} chars]`,
    });
    
    console.log('[Telegram API] Making fetch request...');
    const startTime = Date.now();
    
    const response = await fetch(telegramApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(telegramPayload),
    });

    const fetchTime = Date.now() - startTime;
    console.log(`[Telegram API] Fetch completed in ${fetchTime}ms`);
    console.log('[Telegram API] Response status:', response.status, response.statusText);
    console.log('[Telegram API] Response ok:', response.ok);
    console.log('[Telegram API] Response headers:', Object.fromEntries(response.headers.entries()));

    const data = await response.json();
    console.log('[Telegram API] Telegram API response:', JSON.stringify(data, null, 2));

    if (!response.ok || !data.ok) {
      console.error('[Telegram API] ❌ Telegram API error');
      console.error('[Telegram API] Response status:', response.status);
      console.error('[Telegram API] Error code:', data.error_code);
      console.error('[Telegram API] Error description:', data.description);
      console.error('[Telegram API] Full error:', data);
      return res.status(500).json({ 
        error: 'Failed to send message to Telegram',
        details: data.description,
        error_code: data.error_code,
      });
    }

    console.log('[Telegram API] ✅ Message sent successfully');
    console.log('[Telegram API] Message ID:', data.result?.message_id);
    
    return res.status(200).json({ 
      success: true, 
      message: 'Message sent to Telegram successfully',
      message_id: data.result?.message_id,
    });

  } catch (error) {
    console.error('[Telegram API] ❌ Exception occurred');
    console.error('[Telegram API] Error type:', error.constructor.name);
    console.error('[Telegram API] Error message:', error.message);
    console.error('[Telegram API] Error stack:', error.stack);
    console.error('[Telegram API] Full error:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      message: error.message,
      type: error.constructor.name,
    });
  }
}

