import fs from 'fs';
const myConsole = new console.Console(fs.createWriteStream("./logs.txt"));
import ProcessMessage from '../shared/ProcessMessage';

export const verifyToken = (req,res) => {
    try {   
        var accessToken = 'GSAFJSAOFJSANOAHNSAKFNSAOKFJSAOK';
        var token = req.query['hub.verify_token'];
        var challenge = req.query['hub.challenge'];
        
        if(challenge != null && token != null && token === accessToken) {
            res.status(200).send(challenge)
        }else{
            res.status(400).send('Error, wrong token')
        }
    } catch (e) {
        res.status(400).send(e);
    }
}

export const receivedMessage = (req,res) => {

    try {
        var entry = (req.body["entry"])[0];
        var changes = (entry['changes'][0]);
        var value = changes["value"];
        var messageObject = value['messages'];
        if (typeof messageObject != undefined) {
            var message = messageObject[0]
            var number = message['from'];
            number = number.replace('521', '52');
            var text = getUserText(message);
            myConsole.log(text)
            if (text.trim != '') {
                ProcessMessage.process(text, number)
            }

            // sendMessageWhatsapp(`El usuario dijo: ${text}`,number )
            // if (text === 'text') {
            //     let model = sampleText(`El usuario dijo: ${text}`, number);
            //     sendMessageWhatsapp(model);
            // }else if (text === 'image') {
            //     let model = sampleImage(number);
            //     sendMessageWhatsapp(model);
            // }else if (text === 'audio') {
            //     let model = sampleAudio(number);
            //     sendMessageWhatsapp(model);
            // }else if (text === 'bonoes') {
            //     let model = sampleButtons(number);
            //     sendMessageWhatsapp(model);
            // }else if (text === 'lista') {
            //     let model = sampleList(number);
            //     sendMessageWhatsapp(model);
            // }else if (text === 'ubi') {
            //     let model = sampleLocation(number);
            //     sendMessageWhatsapp(model);
            // }else {
            //     let model = sampleText('No entiendo',number);
            //     sendMessageWhatsapp(model);
            // }

        }

        res.send('EVENT_RECEIVED');
    } catch (e) {
        myConsole.log(e)
        res.send('EVENT_RECEIVED');
    }

}

const getUserText = (message) => {
    var text =  "";
    var typeMessage = message['type'];
    if (typeMessage === 'text') {
        text = (message['text'])['body'];
    }else if (typeMessage === 'interactive') {
        var interactiveObject = message['interactive']
        var typeInteractive = interactiveObject['type']
        if (typeInteractive === 'button_reply') {
            text = (interactiveObject['button_reply'])['title'];
        }else if (typeInteractive === 'list_reply') {
            text = (interactiveObject['list'])['title'];
        }else {
         myConsole.log('Sin mensaje')
        }
    }else{
    myConsole.log('Sin mensaje')
    }

    return text;
}