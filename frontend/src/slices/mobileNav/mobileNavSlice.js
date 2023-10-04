import { createSlice } from '@reduxjs/toolkit'

const initialState = { left: false, right: false }

const mobileNavSlice = createSlice({
  name: 'mobileNav',
  initialState,
  reducers: {
    activateMobileNavLeft: state => {
      state.left = !state.left
      state.right = false
    },
    activateMobileNavRight: state => {
      state.right = !state.right
      state.left = false
    }
  }
})

export default mobileNavSlice.reducer
export const {
  activateMobileNavLeft,
  activateMobileNavRight
} = mobileNavSlice.actions
