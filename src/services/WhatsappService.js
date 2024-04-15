import https from 'https';

 export const sendMessageWhatsapp = (textResponse, number ) => {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "text",
        "text": {
            "body": textResponse
        }
    })

    const options = {
        host: "graph.facebook.com",
        path: "/v18.0/199786023226029/messages",
        method: 'POST',
        body: data,
        headers: {
            'Content-Type': 'application/json',
            Authorization : `Bearer ${process.env.BEARER}`
        },
    }

    const req = https.request(options, (res) => {
        // console.log(`statusCode: ${res.statusCode}`)
        // console.log(`headers: ${JSON.stringify(res.headers)}`)
        // res.setEncoding('utf8')
        res.on('data', d => {
            process.stdout.write(d);
        })
    })

    req.on('error', (e) => {
        console.error(e)
    })

    req.write(data)
    req.end()
}

