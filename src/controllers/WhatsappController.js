import fs from 'fs';
import { type } from 'os';
const myConsole = new console.Console(fs.createWriteStream("./logs.txt"));

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
        var message = messageObject[0]
        var text = getUserText(message);
 

        myConsole.log(text)
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