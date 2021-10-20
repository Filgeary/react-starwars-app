import React, { useCallback, useEffect, useState } from 'react'
import SwapiService from '../../services/SwapiService'
import { randomInt } from '../../utils/utils'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import Spinner from '../Spinner/Spinner'
import './RandomPlanet.css'

const { getPlanet, getPlanetImageUrl } = new SwapiService()

const RandomPlanet = () => {
  const [planet, setPlanet] = useState({})
  const [imageUrl, setImageUrl] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  const handlePlanetLoaded = data => {
    setPlanet(data)
    setImageUrl(getPlanetImageUrl(data))
    setIsLoading(false)
    setIsError(false)
  }

  const handleError = err => {
    setIsError(true)
    setIsLoading(false)
    console.error(err)
  }

  const updatePlanet = useCallback(() => {
    setIsLoading(true)
    const idx = String(randomInt(2, 19))

    // prettier-ignore
    getPlanet(idx)
      .then(handlePlanetLoaded)
      .catch(handleError)
  }, [])

  useEffect(() => {
    updatePlanet()

    let timerId = setInterval(() => {
      updatePlanet()
    }, 15000)

    return () => clearInterval(timerId)
  }, [updatePlanet])

  const { id, name, population, rotationPeriod, diameter } = planet

  return (
    <div className="random-planet jumbotron rounded col-md-8 offset-2">
      {isLoading && Object.keys(planet).length === 0 ? <Spinner /> : null}
      {isError ? <ErrorMessage /> : null}

      {!isError && Object.keys(planet).length > 0 ? (
        <>
          <div className="random-planet-image-wrapper">
            <img className="random-planet-image" src={imageUrl} alt={name} />
          </div>

          <div className="random-planet-content">
            <h3 className="random-planet-title">
              {name}&nbsp;
              <span className="random-planet-id">#{id}</span>
            </h3>

            <ul className="list-group list-group-flush">
              <li className="random-planet-list-item list-group-item">
                <span className="term">Population</span>
                <span>{population}</span>
              </li>
              <li className="random-planet-list-item list-group-item">
                <span className="term">Rotation Period</span>
                <span>{rotationPeriod}</span>
              </li>
              <li className="random-planet-list-item list-group-item">
                <span className="term">Diameter</span>
                <span>{diameter}</span>
              </li>
            </ul>
          </div>
        </>
      ) : null}
    </div>
  )
}

export default RandomPlanet
