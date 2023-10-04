import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import themeColorReducer from './slices/themeColor/themeColorSlice'
import mobileNavReducer from './slices/mobileNav/mobileNavSlice'
import baseApi from './slices/baseApiSlice'

const store = configureStore({
  reducer: {
    themeColor: themeColorReducer,
    mobileNav: mobileNavReducer,
    [baseApi.reducerPath]: baseApi.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(baseApi.middleware)
})

setupListeners(store.dispatch)

export default store
