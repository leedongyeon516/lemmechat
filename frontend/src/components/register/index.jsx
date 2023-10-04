import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useInput } from '../../hooks/useInput'
import { useRegisterMutation } from '../../slices/user/userApiSlice'
import Dropzone from 'react-dropzone'
import { PaperClipIcon } from '@heroicons/react/20/solid'

const Register = ({ setUser, setSecret }) => {
  const [state, setState, onChangeHandler] = useInput({
    name: '',
    password: '',
    confirmedPassword: '',
    attached: '',
    preview: ''
  })
  const [isAuthenticated, setIsAuthenticated] = useState('pending')
  const [hasError, setHasError] = useState(false)

  const { name, password, confirmedPassword, attached } = state

  const [register] = useRegisterMutation()

  useEffect(() => setIsAuthenticated('pending'), [name])

  useEffect(() => {
    password && password !== confirmedPassword
      ? setHasError(true)
      : setHasError(false)
  }, [password, confirmedPassword])

  const registerHandler = async e => {
    e.preventDefault()

    //revisit
    const avatar = null

    if (name.length < 3 || hasError) return

    const formData = { username: name, password, avatar }

    const { data } = await register(formData)

    if (!data) {
      setIsAuthenticated(false)
      return
    }

    setIsAuthenticated(data.isAuthenticated)

    if (isAuthenticated) {
      setUser(name)
      setSecret(password)
    }
  }

  return (
    <div className="register">
      <header className="p-4 fixed-top">
        <nav className="container navbar">
          <a className="navbar-brand text-light">LemmeCHAt</a>
        </nav>
      </header>

      <main className="row vw-100 vh-100 d-flex justify-content-center align-items-center">
        <div className="col-lg-6 col-md-6 p-5 d-flex justify-content-center align-items-center">
          <form className="d-flex flex-column align-items-center">
            <div
              className={`text-white py-2 ${!state.attached &&
                'd-none'} user-avatar`}
            >
              <img src={state.preview} alt="jpg_jpeg_only" />
            </div>
            <div className="position-relative d-flex">
              <br />
              <input
                type="text"
                name="name"
                value={state.name}
                placeholder="name"
                onChange={onChangeHandler}
                className={`p-2 border-0 error-${!isAuthenticated}`}
              />
              <div className="px-3 position-absolute end-0">
                <Dropzone
                  acceptedFiles=".jpg,.jpeg"
                  multiple={false}
                  noClick={true}
                  onDrop={acceptedFiles =>
                    setState(state => ({
                      ...state,
                      attached: acceptedFiles[0],
                      preview: URL.createObjectURL(acceptedFiles[0])
                    }))
                  }
                >
                  {({ getRootProps, getInputProps, open }) => (
                    <div {...getRootProps()}>
                      <input {...getInputProps()} />
                      <PaperClipIcon className="px-3" onClick={open} />
                    </div>
                  )}
                </Dropzone>
              </div>
            </div>
            <div>
              <br />
              <input
                type="password"
                name="password"
                value={state.passowrd}
                placeholder="password"
                onChange={onChangeHandler}
                className="p-2 border-0"
              />
            </div>
            <div>
              <br />
              <input
                type="password"
                name="confirmedPassword"
                value={state.confirmedPassword}
                placeholder="confirm password"
                onChange={onChangeHandler}
                className={`p-2 border-0 error-${hasError}`}
              />
            </div>
            <h5 className="text-white py-3">
              have an{' '}
              <Link to="/" className="text-white">
                <u>account</u>
              </Link>{' '}
              already?
            </h5>
            <div className="my-2">
              <button
                type="submit"
                onClick={registerHandler}
                className="bg-white px-4 py-3 border-0 mx-2 rounded-pill"
              >
                Register
              </button>
            </div>
          </form>
        </div>

        <div className="col-lg-6 col-md-6 p-5">
          <h2 className="text-white">
            Create a new room to CHAt about things with ChatGPT AI.
          </h2>
        </div>
      </main>
    </div>
  )
}

export default Register
