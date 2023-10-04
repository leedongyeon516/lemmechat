import baseApi from '../baseApiSlice'

const aiApiSlice = baseApi.injectEndpoints({
  endpoints: build => ({
    aiChat: build.mutation({
      query: data => ({
        url: '/openai/chat',
        method: 'POST',
        body: data
      })
    }),
    aiCode: build.mutation({
      query: data => ({
        url: '/openai/code',
        method: 'POST',
        body: data
      })
    })
  })
})

export const { useAiChatMutation, useAiCodeMutation } = aiApiSlice
