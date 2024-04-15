export const verifyToken = (req,res) => {
    try {   
        var accessToken = 'GSAFJSAOFJSANOAHNSAKFNSAOKFJSAOK';
        var token = req.query['hub.verify_token'];
        var challenge = req.query['hub.challenge'];
        
        if(challenge != null && token != null && token === accessToken) {
            res.send(challenge)
        }else{
            res.status(400).send('Error, wrong token')
        }
    } catch (e) {
        res.status(400).send(e);
    }



}

export const receivedMessage = (req,res) => {
res.send('Received message')


}