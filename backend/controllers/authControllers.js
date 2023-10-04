import axios from 'axios'
import asyncHandler from 'express-async-handler'

const register = asyncHandler(async (req, res) => {
  const { username, password, avatar } = req.body

  const { data } = await axios.post(
    'https://api.chatengine.io/users/',
    { username, secret: password, avatar },
    {
      headers: {
        'Private-Key': process.env.PRIVATE_KEY
      }
    }
  )

  res.status(200).json({ isAuthenticated: data.is_authenticated })
})

const login = asyncHandler(async (req, res) => {
  const { username, password } = req.body

  const { data } = await axios.get('https://api.chatengine.io/users/me', {
    headers: {
      'Project-ID': process.env.PROJECT_ID,
      'User-Name': username,
      'User-Secret': password
    }
  })

  res.status(200).json({ isAuthenticated: data.is_authenticated })
})

export { register, login }
