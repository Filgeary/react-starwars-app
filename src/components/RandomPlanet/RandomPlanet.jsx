import React, { Component } from 'react'
import SwapiService from '../../services/SwapiService'
import Spinner from '../Spinner/Spinner'
import './RandomPlanet.css'

const swapiService = new SwapiService()

class RandomPlanet extends Component {
  constructor() {
    super()
    this.updatePlanet()
  }

  state = {
    planet: {},
    isLoading: true,
  }

  handlePlanetLoaded = data => {
    this.setState({ planet: data, isLoading: false })
  }

  updatePlanet = () => {
    this.setState({ isLoading: true })

    // TODO: replace to Math random
    const idx = '7'

    swapiService
      .getPlanet(idx)
      .then(this.handlePlanetLoaded)
      .catch(err => console.error(err))
  }

  render() {
    const { planet, isLoading } = this.state

    return (
      <div className="random-planet jumbotron rounded">
        {isLoading ? <Spinner /> : null}
        {!isLoading ? <RandomPlanetView planet={planet} /> : null}
      </div>
    )
  }
}

const RandomPlanetView = ({ planet }) => {
  const { id, name, population, rotationPeriod, diameter } = planet

  return (
    <React.Fragment>
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
    </React.Fragment>
  )
}

export default RandomPlanet
