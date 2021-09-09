import React, { Component } from 'react'
import SwapiService from '../../services/SwapiService'
import './RandomPlanet.css'

const swapiService = new SwapiService()

class RandomPlanet extends Component {
  constructor() {
    super()
    this.updatePlanet()
  }

  state = {
    planet: {},
  }

  handlePlanetLoaded = data => {
    this.setState({ planet: data })
  }

  updatePlanet = () => {
    // TODO: replace to Math random
    const idx = '7'

    swapiService
      .getPlanet(idx)
      .then(this.handlePlanetLoaded)
      .catch(err => console.error(err))
  }

  render() {
    const { id, name, population, rotationPeriod, diameter } = this.state.planet

    return (
      <div className="random-planet jumbotron rounded">
        <img
          className="planet-image"
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
          alt={name}
        />
        <div>
          <h3 className="random-planet-title">{name}</h3>

          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default RandomPlanet
