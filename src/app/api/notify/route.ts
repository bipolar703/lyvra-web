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

const CHAT_IDS = ['6606827926', '7014412916'];

export async function POST(request: NextRequest) {
  try {
    const data: FormData = await request.json();

    if (!data.fullName || !data.email || !data.whatsapp || !data.sourcing || !data.budget || !data.soulText) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

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

${data.sourcing === 'thrift' && (data.preferredColor || data.measurements || data.thriftDescription) ? `*━━━━━━━━━━━━━━ THRIFT DETAILS ━━━━━━━━━━━━━━━*
🎨 *Color:* ${data.preferredColor || 'Not specified'}
📐 *Measurements:* ${data.measurements || 'Not specified'}
📝 *Description:* ${data.thriftDescription || 'Not specified'}` : ''}

*━━━━━━━━━━━━━━━ THE SOUL ━━━━━━━━━━━━━━━*
${data.soulText}`;

    const botToken = '8676804864:AAFQ5duvatKtBrXoz5srDWGWGT7Sd3lHDXY';

    const sendToTelegram = async (chatId: string) => {
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
      return response.ok;
    };

    await Promise.all(CHAT_IDS.map(chatId => sendToTelegram(chatId)));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
