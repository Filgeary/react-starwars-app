class SwapiService {
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

    return res.results
  }
  getPerson = async id => await this.#getResource(`/people/${id}`)

  // planets
  getAllPlanets = async () => {
    const res = await this.#getResource('/planets')

    return res.results
  }
  getPlanet = async id => await this.#getResource(`/planets/${id}`)

  // starships
  getAllStarships = async () => {
    const res = await this.#getResource('/starships')

    return res.results
  }
  getStarship = async id => await this.#getResource(`/starships/${id}`)
}

export default SwapiService
