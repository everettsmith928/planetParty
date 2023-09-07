import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"

class GalaxiesService {
  async createGalaxy(body) {
    const newGalaxy = await dbContext.Galaxies.create(body)
    return newGalaxy
  }

  async getGalaxies(query) {
    const galaxies = await dbContext.Galaxies.find(query).populate('planetCount')
    return galaxies
  }

  async updateGalaxy(galaxyId, updates) {
    const originalGalaxy = await dbContext.Galaxies.findById(galaxyId)
    if (!originalGalaxy) {
      new BadRequest('Unfound!')
    }
    originalGalaxy.name = updates.name
    await originalGalaxy.save()
    return originalGalaxy
  }
}

export const galaxiesService = new GalaxiesService()