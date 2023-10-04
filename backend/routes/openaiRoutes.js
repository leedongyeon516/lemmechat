import express from 'express'
import { getAiChat, getAiCode } from '../controllers/openaiControllers.js'

const router = express.Router()

router.route('/chat').post(getAiChat)
router.route('/code').post(getAiCode)

export default router
