import React from 'react'
import { Link } from 'react-router-dom'
import './NotFoundPage.css'

const NotFoundPage = () => {
  return (
    <section className="not-found-page">
      <div className="not-found-page__desc-wrap">
        <p className="not-found-page__desc">Join to Dark Side</p>
      </div>

      <Link
        to="/"
        className="not-found-page__control--home btn btn-secondary btn-lg"
        title="Go to Home Screen"
      >
        Yes, my Lord !
      </Link>
    </section>
  )
}

export default NotFoundPage
