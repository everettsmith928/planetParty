import { planetsService } from "../services/PlanetsService.js";
import BaseController from "../utils/BaseController.js";

export class PlanetsController extends BaseController {
  constructor() {
    super('api/planets')
    this.router
      .post('', this.createPlanet)
      .get('', this.getPlanets)
  }

  async createPlanet(req, res, next) {
    try {
      const body = req.body
      const newPlanet = await planetsService.createPlanet(body)
      res.send(newPlanet)
    } catch (error) {
      next(error)
    }
  }

  async getPlanets(req, res, next) {
    try {
      const planets = await planetsService.getPlanets()
      res.send(planets)
    } catch (error) {
      next(error)
    }
  }
}