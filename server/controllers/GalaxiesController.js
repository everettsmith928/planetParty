import { response } from "express";
import { galaxiesService } from "../services/GalaxiesService.js";
import BaseController from "../utils/BaseController.js";
import { planetsService } from "../services/PlanetsService.js";

export class GalaxiesController extends BaseController {
  constructor() {
    super('api/galaxies')
    this.router
      .post('', this.createGalaxy)
      .get('', this.getGalaxies)
      .get('/:galaxyId/planets', this.getPlanetsById)
      .put('/:galaxyId', this.updateGalaxy)
  }
  async createGalaxy(req, res, next) {
    try {
      const body = req.body
      const newGalaxy = await galaxiesService.createGalaxy(body)
      res.send(newGalaxy)
    } catch (error) {
      next(error)
    }
  }

  async getGalaxies(req, res, next) {
    try {
      const query = req.params.query
      const Galaxies = await galaxiesService.getGalaxies(query)
      res.send(Galaxies)
    } catch (error) {
      next(error)
    }
  }

  async updateGalaxy(req, res, next) {
    try {
      const updates = req.body
      const galaxyId = req.params.galaxyId
      const updatedGalaxy = await galaxiesService.updateGalaxy(galaxyId, updates)
      res.send(updatedGalaxy)
    } catch (error) {
      next(error)
    }
  }

  async getPlanetsById(req, res, next) {
    try {
      const planets = await planetsService.getPlanetsById(req.params.galaxyId)
      res.send(planets)
    } catch (error) {
      next(error)
    }
  }

}