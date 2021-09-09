export default class Adapter {
  adaptPlanet = ({ url, name, population, rotation_period, diameter }) => {
    return {
      id: url.match(/([0-9]*)\/$/)[1],
      name,
      population,
      rotationPeriod: rotation_period,
      diameter,
    }
  }

  adaptPerson = ({ url, name, gender, birthYear, eyeColor }) => {
    return {
      id: url.match(/([0-9]*)\/$/)[1],
      name,
      gender,
      birthYear,
      eyeColor,
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
