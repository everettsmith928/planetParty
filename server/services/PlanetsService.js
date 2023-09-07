import { dbContext } from "../db/DbContext.js"

class PlanetsService {
  async createPlanet(body) {
    const newPlanet = await dbContext.Planets.create(body)
    await newPlanet.populate('Galaxy')
    return newPlanet
  }

  async getPlanets(query) {
    const planets = await dbContext.Planets.find(query)
    return planets
  }

  async getPlanetsById(galaxyId) {
    const planets = await dbContext.Planets.find({ galaxyId })
    return planets
  }
}

export const planetsService = new PlanetsService()