const chatId = process.env.CHAT_ID;
const BOT_TOKEN = process.env.BOT_TOKEN;

const getRandomIndex = (length) => {
    return Math.floor(Math.random() * length);
};

const send = async (messsage) => {
    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            chat_id: chatId,
            text: messsage,
        }),
    });
}

module.exports = {getRandomIndex, send};