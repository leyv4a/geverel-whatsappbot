export const sampleText = (response, number) => {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "text",
        "text": {
            "body": response
        }
    })
  return data;
}

export const sampleImage = (number) => {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "image",
        "image": {
            "link": 'https://www.geverel.com/Geverel.png'
        }
    })
  return data;
}

export const sampleAudio = (number) => {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "audio",
        "audio": {
            "link": 'https://file-examples.com/storage/fef545ae0b661d470abe676/2017/11/file_example_MP3_700KB.mp3'
        }
    })
  return data;
}

export const sampleVideo = (number) => {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "video",
        "video": {
            "link": 'url-al-video'
        }
    })
  return data;
}

export const sampleDocument = (number) => {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "document",
        "document": {
            "link": 'url-al-documento'
        }
    })
  return data;
}

export const sampleButtons = (number) => {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "interactive",
        "interactive":{
            "type": "button",
            "header":{
                "type" : "image",
                "image":{
                    "link" : "https://www.geverel.com/Geverel.png"
                }
            },
            "body":{
                "text": "Hola te comunicas con *Gevy* el chatbot de Geverel Software"
            },
            "footer":{
                "text":"*https://www.geverel.com/*"
            },
            "action": {
                "buttons": [
                    {
                        "type": "reply",
                        "reply":{
                            "id":"001",
                            "title":"✅OPCION 1"
                        }
                    },
                    {
                        "type": "reply",
                        "reply":{
                            "id":"002",
                            "title":"❌OPCION 2"
                        }
                    }
                ]
            }
        }
    })
  return data;
}

export const sampleList = (number) => {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "interactive",
        "interactive": {
            "type": "list",
           "header": {
              "type": "text",
              "text": "¿Que tipo de servicio deseas?"
            },
            "body":{
                "text" : "Recuerda que si el servicio no se encuentra listado, tambien contamos con desarrollos a la medida. "
            },
            "footer": {
              "text": "*¡No dudes en preguntar!*"
            },
            "action": {
              "button": "Servicios",
              "sections":[
                {
                  "title":"your-section",
                  "rows": [
                    {
                      "id":"001",
                      "title": "Pagina web",
                      "description": "-*-"          
                    },
                    {
                      "id":"002",
                      "title": "Aplicacion web",
                      "description": "-*-"          
                    }
                  ]
                }
              ]
            }
          }
    })
  return data;
}

export const sampleLocation = (number) => {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type":"location",
        "location":{
            "latitude":"27.883960862657528",
            "longitude":"-110.87130981882959",
            "name":"Serconomar",
            "address":"PARQUE INDUSTRIAL, L3 MB, 85430 Guaymas, Son."
        }
    })
  return data;
}
