import { NextRequest, NextResponse } from 'next/server';

interface FormData {
  fullName: string;
  email: string;
  whatsapp: string;
  instagram?: string;
  pinterest?: string;
  soundtrack?: string;
  sourcing: string;
  budget: string;
  trustScale: number;
  soulText: string;
  preferredColor?: string;
  measurements?: string;
  thriftDescription?: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: FormData = await request.json();

    // Validate required fields
    if (!data.fullName || !data.email || !data.whatsapp || !data.sourcing || !data.budget || !data.soulText) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Build Telegram message
    const message = `🧵 *LYVRA STUDIO APPLICATION*

*━━━━━━━━━━━━━━━ CONTACT ━━━━━━━━━━━━━━━*
👤 *Name:* ${data.fullName}
📧 *Email:* ${data.email}
📱 *WhatsApp:* ${data.whatsapp}
${data.instagram ? `📸 *Instagram:* ${data.instagram}` : ''}
${data.pinterest ? `📌 *Pinterest:* ${data.pinterest}` : ''}
${data.soundtrack ? `🎵 *Soundtrack:* ${data.soundtrack}` : ''}

*━━━━━━━━━━━━━━━ PROJECT ━━━━━━━━━━━━━━━*
📦 *Sourcing:* ${data.sourcing === 'provide' ? 'Client Provides Base' : 'Thrifting (LYVRA Sourced)'}
💰 *Budget:* $${data.budget}
⭐ *Trust Scale:* ${data.trustScale}/10

${data.sourcing === 'thrift' && (data.preferredColor || data.measurements || data.thriftDescription) ? `*━━━━━━━━━━━━━━ THRIFT DETAILS ━━━━━━━━━━━━━━*
🎨 *Color:* ${data.preferredColor || 'Not specified'}
📐 *Measurements:* ${data.measurements || 'Not specified'}
📝 *Description:* ${data.thriftDescription || 'Not specified'}` : ''}

*━━━━━━━━━━━━━━━ THE SOUL ━━━━━━━━━━━━━━━*
${data.soulText}`;

    // Send to Telegram (requires BOT_TOKEN and CHAT_ID env vars)
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (botToken && chatId) {
      const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
      const response = await fetch(telegramUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: 'Markdown',
        }),
      });

      if (!response.ok) {
        console.error('Telegram API error:', await response.text());
        return NextResponse.json(
          { error: 'Failed to send notification' },
          { status: 500 }
        );
      }
    } else {
      // Log for development when env vars are not set
      console.log('[DEV] Telegram notification (env vars not set):', message);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
