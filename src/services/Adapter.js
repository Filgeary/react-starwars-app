export default class Adapter {
  adaptPlanet = ({ url, name, population, rotation_period, diameter }) => {
    return {
      id: url.match(/([0-9]*)\/$/)[1],
      name,
      population:
        population !== 'unknown'
          ? Number(population).toLocaleString()
          : 'Unknown',
      rotationPeriod: rotation_period,
      diameter: Number(diameter).toLocaleString(),
    }
  }

  adaptPerson = ({ url, name, gender, birth_year, eye_color }) => {
    return {
      id: url.match(/([0-9]*)\/$/)[1],
      name,
      gender,
      birthYear: birth_year,
      eyeColor: eye_color,
    }
  }

  adaptStarship = ({
    url,
    name,
    model,
    manufacturer,
    costInCredits,
    length,
    crew,
    passengers,
    cargoCapacity,
  }) => {
    return {
      id: url.match(/([0-9]*)\/$/)[1],
      name,
      model,
      manufacturer,
      costInCredits,
      length,
      crew,
      passengers,
      cargoCapacity,
    }
  }
}
