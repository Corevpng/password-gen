const axios = require('axios');

const WEBHOOK_URL = ''; // WebHook URL

async function sendToDiscord(password, timestamp) {
  const embed = {
    title: 'Yeni Şifre Oluşturuldu',
    color: 0x2b2d31,
    fields: [
      {
        name: 'Şifre',
        value: `||**${password}**||`,
        inline: true,
      },
      {
        name: 'Oluşturulma Tarihi',
        value: timestamp,
        inline: true,
      },
    ],
    footer: {
      text: 'CodeBlog Şifre Yönetimi',
    },
  };

  try {
    await axios.post(WEBHOOK_URL, {
      embeds: [embed],
    });
    console.log('Mesaj Discord kanalına gönderildi!');
  } catch (error) {
    console.error('Discord kanalına mesaj gönderme hatası:', error);
  }
}

module.exports = sendToDiscord;