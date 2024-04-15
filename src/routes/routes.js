import express from 'express';
import { receivedMessage,verifyToken} from '../controllers/WhatsappController.js'

const router = express.Router();

router
.get('/',verifyToken)
.post('/', receivedMessage)


export default router