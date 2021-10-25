import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div className="header d-flex">
      <h2 className="header-title">
        <Link to="/">StarWars DB</Link>
      </h2>

      <ul className="header-list nav">
        <li className="header-list-item nav-item">
          <NavLink
            to="/people/"
            className="nav-link header-list-item-link"
            activeClassName="header-list-item-link--selected"
          >
            People
          </NavLink>
        </li>
        <li className="header-list-item nav-item">
          <NavLink
            to="/planets/"
            className="nav-link header-list-item-link"
            activeClassName="header-list-item-link--selected"
          >
            Planets
          </NavLink>
        </li>
        <li className="header-list-item nav-item">
          <NavLink
            to="/starships/"
            className="nav-link header-list-item-link"
            activeClassName="header-list-item-link--selected"
          >
            Starships
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Header
