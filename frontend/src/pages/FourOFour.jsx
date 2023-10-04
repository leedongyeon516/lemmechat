import { Link } from 'react-router-dom'

const FourOFour = () => {
  return (
    <div className="four-o-four">
      <main className="vh-100 d-flex justify-content-center align-items-center">
        <div className="p-5">
          <div className="spinner-grow text-light mx-1" role="status"></div>
          <div
            className="spinner-grow spinner-grow-sm text-light mx-1"
            role="status"
          ></div>
          <div className="spinner-grow text-light mx-1" role="status"></div>
        </div>
        <section>
          <h1>
            <Link to="/" className="text-white text-decoration-none">
              404
            </Link>
          </h1>
        </section>
      </main>
    </div>
  )
}

export default FourOFour
