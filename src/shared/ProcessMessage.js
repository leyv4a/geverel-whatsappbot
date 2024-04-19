import WhatsappModel from './WhatsappModel.js'
import { sendMessageWhatsapp } from '../services/WhatsappService.js'

const process = (textUser, number) => {
    textUser = textUser.toLowerCase();
    let models = [];

    if (textUser.includes('hola')) {
        //Saludamos
        let model = WhatsappModel.messageText('Hola soy Gevi, un gusto saludarte', number);
        models.push(model);
        var modelList = WhatsappModel.optionList(number);
        models.push(modelList);
        }else if (textUser.includes('gracias')) {
        let model = WhatsappModel.messageText('¡Fue un placer!', number); 
        models.push(model);
    }else if (textUser.includes('adios')
    ||textUser.includes('adiós')
    ||textUser.includes('bye')
    ) {
        let model = WhatsappModel.messageText('¡Nos vemos pronto!', number); 
        models.push(model);
    }else{
        let model = WhatsappModel.messageText('No entendí :(', number); 
        models.push(model);
    }

    models.forEach(model => sendMessageWhatsapp(model))
}

export default {process}

