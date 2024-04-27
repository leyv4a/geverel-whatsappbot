const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();

async function getMessageGpt(text) {
    const configuration = new Configuration({
        apiKey: process.env.GPT
    });
    const openai = new OpenAIApi(configuration);

    try {
        const response = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: text,
            maxTokens: 100
        });

        console.log('Se creo la completition');

        if (response.status == 200 && response.data.choices.length > 0) {
            console.log('La respuesta de GPT va al whatsapp');
            return response.data.choices[0]?.text;
        }else{
            return null;
        }
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}

module.exports = {
    getMessageGpt
};
