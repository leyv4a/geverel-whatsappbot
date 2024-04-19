const messageText = (response, number) => {
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

const optionList = ( number) => {
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

export default { messageText, optionList }