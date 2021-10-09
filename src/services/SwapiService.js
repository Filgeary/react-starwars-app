import Adapter from './Adapter'

const adapter = new Adapter()

export default class SwapiService {
  #baseUrl = 'https://swapi.dev/api'

  #getResource = async endpoint => {
    const res = await fetch(this.#baseUrl + endpoint)

    if (!res.ok) {
      throw new Error(
        `Failed to fetch ${this.#baseUrl + endpoint}, status: ${res.status}`,
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

  // planets
  getAllPlanets = async () => {
    const res = await this.#getResource('/planets')
    return res.results.map(adapter.adaptPlanet)
  }

  getPlanet = async id => {
    const res = await this.#getResource(`/planets/${id}`)
    return adapter.adaptPlanet(res)
  }

  // starships
  getAllStarships = async () => {
    const res = await this.#getResource('/starships')
    return res.results.map(adapter.adaptStarship)
  }

  getStarship = async id => {
    const res = await this.#getResource(`/starships/${id}`)
    return adapter.adaptStarship(res)
  }
}
