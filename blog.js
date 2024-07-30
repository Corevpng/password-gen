const Database = require('./database');
const generatePassword = require('./generatePassword');
const sendToDiscord = require('./sendToDiscord');

const db = new Database('data.json');

async function generateAndStorePassword() {
  const password = generatePassword();
  const timestamp = new Date().toISOString();
  db.set(timestamp, password);
  console.log(`Yeni şifre oluşturuldu ve veritabanına kaydedildi: ${password}`);
  
  await sendToDiscord(password, timestamp);
}
const args = process.argv.slice(2);
if (args.includes('generate-password')) {
  generateAndStorePassword();
} else {
  console.log('Kullanım: node blog.js generate-password');
}