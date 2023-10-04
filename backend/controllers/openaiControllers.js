import axios from 'axios'
import asyncHandler from 'express-async-handler'

import { openai } from '../index.js'

const getAiChat = asyncHandler(async (req, res) => {
  const { text, activeChatId } = req.body

  const messages = [
    { role: 'system', content: 'You are a helpful assistant.' },
    { role: 'user', content: text }
  ]
  const aiResponse = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages
  })
  const aiChat = aiResponse.data.choices[0].message.content

  await axios.post(
    `https://api.chatengine.io/chats/${activeChatId}/messages/`,
    { text: aiChat },
    {
      headers: {
        'Project-ID': process.env.PROJECT_ID,
        'User-Name': process.env.AI_USER_NAME,
        'User-Secret': process.env.AI_USER_SECRET
      }
    }
  )

  res.status(200).json({ text: aiChat })
})

const getAiCode = asyncHandler(async (req, res) => {
  const { text, activeChatId } = req.body

  const messages = [
    {
      role: 'system',
      content:
        'You are a excellent coder only responding to code related questions with no explanation.'
    },
    { role: 'user', content: text }
  ]
  const aiResponse = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages
  })
  const aiCode = aiResponse.data.choices[0].message.content

  await axios.post(
    `https://api.chatengine.io/chats/${activeChatId}/messages/`,
    { text: aiChat },
    {
      headers: {
        'Project-ID': process.env.PROJECT_ID,
        'User-Name': process.env.AI_USER_NAME,
        'User-Secret': process.env.AI_USER_SECRET
      }
    }
  )

  res.status(200).json({ text: aiCode })
})

export { getAiChat, getAiCode }
