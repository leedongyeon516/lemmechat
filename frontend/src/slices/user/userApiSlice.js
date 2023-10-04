import baseApi from '../baseApiSlice'

const userApiSlice = baseApi.injectEndpoints({
  endpoints: build => ({
    register: build.mutation({
      query: newUser => ({
        url: '/auth/register',
        method: 'POST',
        body: newUser
      })
    }),
    login: build.mutation({
      query: user => ({
        url: '/auth/login',
        method: 'POST',
        body: user
      })
    })
  })
})

export const { useRegisterMutation, useLoginMutation } = userApiSlice
