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
    cost_in_credits,
    length,
    crew,
    passengers,
    cargo_capacity,
  }) => {
    return {
      id: url.match(/([0-9]*)\/$/)[1],
      name,
      model,
      manufacturer,
      costInCredits:
        cost_in_credits !== 'unknown'
          ? Number(cost_in_credits).toLocaleString()
          : 'Unknown',
      length,
      crew,
      passengers,
      cargoCapacity:
        cargo_capacity !== 'unknown'
          ? Number(cargo_capacity).toLocaleString()
          : 'Unknown',
    }
  }
}
