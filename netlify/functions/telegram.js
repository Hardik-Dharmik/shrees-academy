// Netlify Serverless Function for Telegram integration
exports.handler = async (event, context) => {
  const timestamp = new Date().toISOString();
  console.log(`[Telegram API - Netlify] ${timestamp} - Request received`);
  console.log(`[Telegram API - Netlify] Method: ${event.httpMethod}`);
  console.log(`[Telegram API - Netlify] Path: ${event.path}`);
  console.log(`[Telegram API - Netlify] Headers:`, JSON.stringify(event.headers, null, 2));
  
  // Handle CORS
  if (event.httpMethod === 'OPTIONS') {
    console.log('[Telegram API - Netlify] OPTIONS request - returning CORS headers');
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
      },
      body: '',
    };
  }

  if (event.httpMethod !== 'POST') {
    console.warn(`[Telegram API - Netlify] Invalid method: ${event.httpMethod}`);
    return {
      statusCode: 405,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    console.log('[Telegram API - Netlify] Parsing request body...');
    const body = JSON.parse(event.body);
    console.log('[Telegram API - Netlify] Request body:', JSON.stringify(body, null, 2));
    const { firstname, lastname, phnumber, classes, Message } = body;

    // Validate required fields
    console.log('[Telegram API - Netlify] Validating fields...');
    console.log('[Telegram API - Netlify] Fields received:', {
      firstname: firstname || 'MISSING',
      lastname: lastname || 'MISSING',
      phnumber: phnumber || 'MISSING',
      classes: classes || 'MISSING',
      Message: Message || 'OPTIONAL',
    });
    
    if (!firstname || !lastname || !phnumber || !classes) {
      console.error('[Telegram API - Netlify] ❌ Validation failed - missing required fields');
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ error: 'Required fields are missing' }),
      };
    }
    console.log('[Telegram API - Netlify] ✅ Field validation passed');

    // Get Telegram credentials from environment variables
    const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    console.log('[Telegram API - Netlify] Checking credentials...');
    console.log('[Telegram API - Netlify] BOT_TOKEN exists:', !!BOT_TOKEN);
    console.log('[Telegram API - Netlify] BOT_TOKEN length:', BOT_TOKEN?.length || 0);
    console.log('[Telegram API - Netlify] CHAT_ID exists:', !!CHAT_ID);
    console.log('[Telegram API - Netlify] CHAT_ID value:', CHAT_ID || 'NOT SET');

    if (!BOT_TOKEN || !CHAT_ID) {
      console.error('[Telegram API - Netlify] ❌ Telegram credentials not configured');
      console.error('[Telegram API - Netlify] Missing:', {
        BOT_TOKEN: !BOT_TOKEN,
        CHAT_ID: !CHAT_ID,
      });
      return {
        statusCode: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ error: 'Telegram service not configured' }),
      };
    }
    console.log('[Telegram API - Netlify] ✅ Credentials found');

    // Format the message for Telegram
    const telegramMessage = `🎓 *New Contact Form Submission*

👤 *Name:* ${firstname} ${lastname}
📱 *Phone:* ${phnumber}
📚 *Class:* ${classes}
💬 *Message:*
${Message || 'No message provided'}

_Submitted from Shree's Academy Website_`;

    console.log('[Telegram API - Netlify] Formatted message:');
    console.log('[Telegram API - Netlify]', telegramMessage);
    console.log('[Telegram API - Netlify] Message length:', telegramMessage.length);

    // Send message to Telegram
    const telegramApiUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
    console.log('[Telegram API - Netlify] Sending to Telegram API:', telegramApiUrl.replace(BOT_TOKEN, 'BOT_TOKEN_HIDDEN'));
    
    const telegramPayload = {
      chat_id: CHAT_ID,
      text: telegramMessage,
      parse_mode: 'Markdown',
    };
    console.log('[Telegram API - Netlify] Telegram payload:', {
      ...telegramPayload,
      text: `[Message length: ${telegramPayload.text.length} chars]`,
    });
    
    console.log('[Telegram API - Netlify] Making fetch request...');
    const startTime = Date.now();
    
    const response = await fetch(telegramApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(telegramPayload),
    });

    const fetchTime = Date.now() - startTime;
    console.log(`[Telegram API - Netlify] Fetch completed in ${fetchTime}ms`);
    console.log('[Telegram API - Netlify] Response status:', response.status, response.statusText);
    console.log('[Telegram API - Netlify] Response ok:', response.ok);
    console.log('[Telegram API - Netlify] Response headers:', Object.fromEntries(response.headers.entries()));

    const data = await response.json();
    console.log('[Telegram API - Netlify] Telegram API response:', JSON.stringify(data, null, 2));

    if (!response.ok || !data.ok) {
      console.error('[Telegram API - Netlify] ❌ Telegram API error');
      console.error('[Telegram API - Netlify] Response status:', response.status);
      console.error('[Telegram API - Netlify] Error code:', data.error_code);
      console.error('[Telegram API - Netlify] Error description:', data.description);
      console.error('[Telegram API - Netlify] Full error:', data);
      return {
        statusCode: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ 
          error: 'Failed to send message to Telegram',
          details: data.description,
          error_code: data.error_code,
        }),
      };
    }

    console.log('[Telegram API - Netlify] ✅ Message sent successfully');
    console.log('[Telegram API - Netlify] Message ID:', data.result?.message_id);
    
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ 
        success: true, 
        message: 'Message sent to Telegram successfully',
        message_id: data.result?.message_id,
      }),
    };

  } catch (error) {
    console.error('[Telegram API - Netlify] ❌ Exception occurred');
    console.error('[Telegram API - Netlify] Error type:', error.constructor.name);
    console.error('[Telegram API - Netlify] Error message:', error.message);
    console.error('[Telegram API - Netlify] Error stack:', error.stack);
    console.error('[Telegram API - Netlify] Full error:', error);
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ 
        error: 'Internal server error',
        message: error.message,
        type: error.constructor.name,
      }),
    };
  }
};

