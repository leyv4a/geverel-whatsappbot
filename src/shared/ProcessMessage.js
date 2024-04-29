const WhatsappModel = require('./WhatsappModel.js');
const { sendMessageWhatsapp } = require('../services/WhatsappService.js');
const { getMessageGpt } = require('../services/chatGPT-Service.js');

async function process(textUser, number) {
    textUser = textUser.toLowerCase();
    let models = [];
    const resultChatGpt = await getMessageGpt(textUser);
   
    if (resultChatGpt != null) {
        let model = WhatsappModel.messageText(resultChatGpt, number);
        models.push(model);
    } else {
        let model = WhatsappModel.messageText('Lo siento, algo salió mal...', number);
        models.push(model);
    }

    models.forEach(model => sendMessageWhatsapp(model));
}

module.exports = {
    process
};
