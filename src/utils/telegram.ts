// Telegram Bot API для отправки заявок
//
// НАСТРОЙКА:
// 1. Создайте бота через @BotFather и получите токен
// 2. Пользователь @smaksimm должен написать боту /start
// 3. Получите chat_id через: https://api.telegram.org/bot<TOKEN>/getUpdates
// 4. Добавьте NEXT_PUBLIC_TELEGRAM_BOT_TOKEN и NEXT_PUBLIC_TELEGRAM_CHAT_ID в .env.local
//
// Для группы: добавьте бота в группу, сделайте админом, получите chat_id

const TELEGRAM_BOT_TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN || "";
const TELEGRAM_CHAT_ID = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID || "";

interface FormData {
  problem?: string;
  name?: string;
  phone?: string;
  brand?: string;
  address?: string;
}

export async function sendToTelegram(data: FormData, formSource: string = "Форма на сайте"): Promise<boolean> {
  const message = `
🔧 *Новая заявка с сайта*
━━━━━━━━━━━━━━━
📋 *Источник:* ${formSource}
${data.problem ? `❓ *Проблема:* ${data.problem}` : ""}
${data.name ? `👤 *Имя:* ${data.name}` : ""}
${data.phone ? `📞 *Телефон:* ${data.phone}` : ""}
${data.brand ? `🏭 *Марка:* ${data.brand}` : ""}
${data.address ? `📍 *Адрес:* ${data.address}` : ""}
━━━━━━━━━━━━━━━
🕐 ${new Date().toLocaleString("ru-RU", { timeZone: "Europe/Moscow" })}
`.trim();

  try {
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: "Markdown",
      }),
    });

    const result = await response.json();
    return result.ok === true;
  } catch (error) {
    console.error("Telegram send error:", error);
    return false;
  }
}
