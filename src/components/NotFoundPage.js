import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
// import styles from './NotFoundPage.module.css'

// Note that create-react-navi-app will always show an error screen when this
// is rendered. This is because the underlying react-scripts package shows
// the error screen when a NotFoundError is thrown, even though it's caught
// by <NotFoundBoundary>. To see the error rendered by this function,
// you'll just need to close the error overlay with the "x" at the top right.
function NotFoundPage() {
  return (
    <>
    <Navbar/>
    <section className="hero is-fullheight is-full-fullhd ">
      <div className="hero-body">
          <div className="container has-text-centered">
              <h1 className="title">
                  404
              </h1>
              <h2 className="subtitle">
                  Page not found
              </h2>
              <p>Sorry the page you are looking for doesn&#39;t exist. <br/><br/><strong className="sad-icon">:(</strong></p><br/>
              <a href="/" className="button is-small is-light">Back</a>
          </div>
      </div>
  </section>
  <Footer/>
  </>
  )
}

export default NotFoundPage