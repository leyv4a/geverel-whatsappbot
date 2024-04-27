function messageText(response, number) {
  const data = JSON.stringify({
      "messaging_product": "whatsapp",
      "to": number,
      "type": "text",
      "text": {
          "body": response
      }
  });
  return data;
}

function optionList(number) {
  const data = JSON.stringify({
      "messaging_product": "whatsapp",
      "to": number,
      "type": "interactive",
      "interactive": {
          "type": "list",
          "header": {
              "type": "text",
              "text": "¿Qué tipo de servicio deseas?"
          },
          "body": {
              "text": "Recuerda que si el servicio no se encuentra listado, también contamos con desarrollos a la medida."
          },
          "footer": {
              "text": "*¡No dudes en preguntar!*"
          },
          "action": {
              "button": "¡Contáctanos!",
              "sections": [
                  {
                      "title": "SERVICIOS",
                      "rows": [
                          {
                              "id": "001",
                              "title": "Página web",
                              "description": "-*-"
                          },
                          {
                              "id": "002",
                              "title": "Aplicación web",
                              "description": "-*-"
                          }
                      ]
                  },
                  {
                      "title": "CENTRO DE ATENCIÓN",
                      "rows": [
                          {
                              "id": "003",
                              "title": "Ubicación",
                              "description": "-*-"
                          },
                          {
                              "id": "004",
                              "title": "Correo",
                              "description": "-*-"
                          }
                      ]
                  }
              ]
          }
      }
  });
  return data;
}

module.exports = {
  messageText,
  optionList
};
