const fs = require('fs');
const ProcessMessage = require('../shared/ProcessMessage.js');

const myConsole = new console.Console(fs.createWriteStream("./logs.txt"));

const verifyToken = (req, res) => {
    try {
        var accessToken = 'GSAFJSAOFJSANOAHNSAKFNSAOKFJSAOK';
        var token = req.query['hub.verify_token'];
        var challenge = req.query['hub.challenge'];

        if (challenge != null && token != null && token === accessToken) {
            res.status(200).send(challenge);
        } else {
            res.status(400).send('Error, wrong token');
        }
    } catch (e) {
        res.status(400).send(e);
    }
};

const receivedMessage = async (req, res) => {
    try {
        var entry = (req.body["entry"])[0];
        var changes = (entry['changes'][0]);
        var value = changes["value"];
        var messageObject = value['messages'];
        if (typeof messageObject != undefined) {
            var message = messageObject[0];
            var number = message['from'];
            number = number.replace('521', '52');
            var text = getUserText(message);
            myConsole.log(text);
            console.log(text);
            console.log(number)
            if (text.trim != '') {
                console.log('El mensaje se recibio, va a Process')
                await ProcessMessage.process(text, number);
            }
        }
        res.send('EVENT_RECEIVED');
    } catch (e) {
        myConsole.log(e);
        res.send('EVENT_RECEIVED');
    }
};

const getUserText = (message) => {
    var text = "";
    var typeMessage = message['type'];
    if (typeMessage === 'text') {
        text = (message['text'])['body'];
    } else if (typeMessage === 'interactive') {
        var interactiveObject = message['interactive'];
        var typeInteractive = interactiveObject['type'];
        if (typeInteractive === 'button_reply') {
            text = (interactiveObject['button_reply'])['title'];
        } else if (typeInteractive === 'list_reply') {
            text = (interactiveObject['list'])['title'];
        } else {
            myConsole.log('Sin mensaje');
        }
    } else {
        myConsole.log('Sin mensaje');
    }

    return text;
};

module.exports = {
    verifyToken,
    receivedMessage
};
