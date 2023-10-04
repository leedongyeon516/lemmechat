const Splash = () => {
  return (
    <div className="splash">
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
          <h1 className="text-white">
            CHAt.
            <br />
            share.
            <br />
            bond.
          </h1>
        </section>
      </main>
    </div>
  )
}

export default Splash
