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

export default { messageText }