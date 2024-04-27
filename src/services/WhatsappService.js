const https = require('https');
require('dotenv').config();

const sendMessageWhatsapp = (data) => {
    console.log('Se recibio un mensaje para mandar a whatsapp')
    const options = {
        host: "graph.facebook.com",
        path: "/v19.0/199786023226029/messages",
        method: 'POST',
        body: data,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
        },
    };

    const req = https.request(options, (res) => {
        res.on('data', d => {
            process.stdout.write(d);
        });
    });

    req.on('error', (e) => {
        console.error(e);
    });
    req.write(data);
    req.end();
};

module.exports = {
    sendMessageWhatsapp
};
