import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  theme: localStorage.getItem('theme_color') || 'night theme',
  colors: (localStorage.getItem('colors') &&
    localStorage.getItem('colors').split(',')) || [
    'bts',
    'default',
    'sky',
    'land',
    'sunset',
    'night theme'
  ]
}

const themeColorSlice = createSlice({
  name: 'themeColor',
  initialState,
  reducers: {
    setThemeColor: (state, action) => {
      const idx = action.payload
      const themeColor = `${state.colors[idx]} theme`

      state.colors.splice(idx, 1, themeColor)
      state.theme = themeColor

      localStorage.setItem('theme_color', state.colors[idx])
      localStorage.setItem('colors', state.colors)
    },
    resetThemeColor: state => {
      const colors = state.colors.map(color => {
        if (color.includes('theme')) {
          return color.split(/\s/)[0]
        }
        return color
      })

      state.colors = colors
    }
  }
})

export default themeColorSlice.reducer
export const { setThemeColor, resetThemeColor } = themeColorSlice.actions
