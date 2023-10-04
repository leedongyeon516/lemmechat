import { useState, useEffect } from 'react'
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate
} from 'react-router-dom'

import Home from './pages/Home'
import Login from './components/login'
import Register from './components/register'
import Chat from './pages/Chat'
import FourOFour from './pages/FourOFour'

const App = () => {
  const [isSplashOn, setIsSplashOn] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsSplashOn(false)
    }, 1500)

    return () => clearTimeout(timeout)
  }, [])

  const [user, setUser] = useState(null)
  const [secret, setSecret] = useState(null)
  const isAuthorized = user && secret

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path="/"
          element={
            isAuthorized ? (
              <Chat user={user} secret={secret} />
            ) : (
              <Login setUser={setUser} setSecret={setSecret} />
            )
          }
        />
        <Route
          path="/chat"
          element={
            isAuthorized ? (
              <Chat user={user} secret={secret} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/register"
          element={
            isAuthorized ? (
              <Chat user={user} secret={secret} />
            ) : (
              <Register setUser={setUser} setSecret={setSecret} />
            )
          }
        />
        <Route path="*" element={<FourOFour />} />
      </>
    )
  )

  return isSplashOn ? <Home /> : <RouterProvider router={router} />
}

export default App
