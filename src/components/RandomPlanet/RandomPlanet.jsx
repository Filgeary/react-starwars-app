import React, { Component } from 'react'
import SwapiService from '../../services/SwapiService'
import { randomInt } from '../../utils/utils'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
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
    isError: false,
  }

  handlePlanetLoaded = data => {
    this.setState({ planet: data, isLoading: false, isError: false })
  }

  handleError = err => {
    this.setState({ isError: true, isLoading: false })
    console.error(err)
  }

  updatePlanet = () => {
    this.setState({ isLoading: true })

    const idx = String(randomInt(1, 25))

    swapiService
      .getPlanet(idx)
      .then(this.handlePlanetLoaded)
      .catch(this.handleError)
  }

  render() {
    const { planet, isLoading, isError } = this.state

    return (
      <div className="random-planet jumbotron rounded">
        {isLoading ? <Spinner /> : null}
        {isError ? <ErrorMessage /> : null}
        {!isLoading && !isError ? <RandomPlanetView planet={planet} /> : null}
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
        <h3 className="random-planet-title">
          {name}&nbsp;
          <span className="random-planet-id">#{id}</span>
        </h3>

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
