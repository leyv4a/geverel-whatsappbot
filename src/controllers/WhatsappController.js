import fs from 'fs';
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
 

        myConsole.log(messageObject)
        res.send('EVENT_RECEIVED');
    } catch (e) {
        myConsole.log(e)
        res.send('EVENT_RECEIVED');
    }

}