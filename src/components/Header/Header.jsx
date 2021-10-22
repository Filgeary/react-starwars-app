import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div className="header d-flex">
      <h2 className="header-title">
        <Link to="/">StarWars DB</Link>
      </h2>

      <ul className="header-list nav">
        <li className="header-list-item nav-item">
          <Link to="/people" className="nav-link">
            People
          </Link>
        </li>
        <li className="header-list-item nav-item">
          <Link to="/planets" className="nav-link">
            Planets
          </Link>
        </li>
        <li className="header-list-item nav-item">
          <Link to="/starships" className="nav-link">
            Starships
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
