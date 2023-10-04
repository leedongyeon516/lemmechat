import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import { Configuration, OpenAIApi } from 'openai'

import authRoutes from './routes/authRoutes.js'
import openaiRoutes from './routes/openaiRoutes.js'

const app = express()
dotenv.config()

// Application Configs
app.use(express.json({ limit: '35mb', extended: true }))
app.use(express.urlencoded({ limit: '35mb', extended: true }))
app.use(cors())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }))
app.use(morgan('common'))

// OpenAI Configs
const config = new Configuration({ apiKey: process.env.OPEN_AI_API_KEY })
export const openai = new OpenAIApi(config)

app.use('/auth', authRoutes)
app.use('/openai', openaiRoutes)

const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log(`api is running on:${PORT}`))
