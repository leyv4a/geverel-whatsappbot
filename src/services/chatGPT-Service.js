const { OpenAI } = require('openai');
require('dotenv').config();
const fs = require('fs');
const myConsole = new console.Console(fs.createWriteStream("./logs.txt"));

async function getMessageGpt(text) {
   
    const openai = new OpenAI({
        apiKey: process.env.GPT
    });

    try {
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: text }],
        })
        if (response.choices.length > 0) {
            return response.choices[0]?.message.content;
        } else {
            return null;
        }
    } catch (error) {
        if (error.response) {
            myConsole.log(error.response.status);
            myConsole.log(error.response.data);
          } else {
            myConsole.log(error.message);
          }
        return null;
    }
}

module.exports = {
    getMessageGpt
};
