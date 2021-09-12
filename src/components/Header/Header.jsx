import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className="header d-flex">
      <h2 className="header-title">
        <a href="home">StarWars DB</a>
      </h2>

      <ul className="header-list nav">
        <li className="header-list-item nav-item">
          <a href="people" className="nav-link">
            People
          </a>
        </li>
        <li className="header-list-item nav-item">
          <a href="planets" className="nav-link">
            Planets
          </a>
        </li>
        <li className="header-list-item nav-item">
          <a href="starships" className="nav-link">
            Starships
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Header
