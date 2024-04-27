const express = require('express');
const WhatsappController = require('../controllers/WhatsappController.js');

const router = express.Router();

router
    .get('/', WhatsappController.verifyToken)
    .post('/', WhatsappController.receivedMessage);

module.exports = router;
