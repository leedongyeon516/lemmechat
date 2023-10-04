import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL })

const baseApiSlice = createApi({
  baseQuery,
  tagTypes: [],
  endpoints: () => ({})
})

export default baseApiSlice
