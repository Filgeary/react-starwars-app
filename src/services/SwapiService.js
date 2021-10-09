import Adapter from './Adapter'

const adapter = new Adapter()

export default class SwapiService {
  #apiBase = 'https://swapi.dev/api'
  #imageBase = 'https://starwars-visualguide.com/assets/img'

  #getResource = async endpoint => {
    const res = await fetch(this.#apiBase + endpoint)

    if (!res.ok) {
      throw new Error(
        `Failed to fetch ${this.#apiBase + endpoint}, status: ${res.status}`,
      )
    }
    return await res.json()
  }

  // people
  getAllPeople = async () => {
    const res = await this.#getResource('/people')
    return res.results.map(adapter.adaptPerson)
  }

  getPerson = async id => {
    const res = await this.#getResource(`/people/${id}`)
    return adapter.adaptPerson(res)
  }

  getPersonImageUrl = ({ id }) => `${this.#imageBase}/characters/${id}.jpg`

  // planets
  getAllPlanets = async () => {
    const res = await this.#getResource('/planets')
    return res.results.map(adapter.adaptPlanet)
  }

  getPlanet = async id => {
    const res = await this.#getResource(`/planets/${id}`)
    return adapter.adaptPlanet(res)
  }

  getPlanetImageUrl = ({ id }) => `${this.#imageBase}/planets/${id}.jpg`

  // starships
  getAllStarships = async () => {
    const res = await this.#getResource('/starships')
    return res.results.map(adapter.adaptStarship)
  }

  getStarship = async id => {
    const res = await this.#getResource(`/starships/${id}`)
    return adapter.adaptStarship(res)
  }

  getStarshipImageUrl = ({ id }) => `${this.#imageBase}/starships/${id}.jpg`
}
