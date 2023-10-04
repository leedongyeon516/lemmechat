import { useState } from 'react'

export const useInput = initialState => {
  const [state, setState] = useState(initialState)

  const onChangeHandler = e => {
    if (typeof initialState === 'object') {
      setState(prev => ({ ...prev, [e.target.name]: e.target.value }))
    } else {
      setState(e.target.value)
    }
  }

  return [state, setState, onChangeHandler]
}
