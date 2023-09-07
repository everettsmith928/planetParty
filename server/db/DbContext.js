import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { PlanetSchema } from "../models/Planet.js";
import { GalaxySchema } from "../models/Galaxy.js";

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Planets = mongoose.model('Planet', PlanetSchema);
  // Species = mongoose.model('Species', SpeciesSchema)
  Galaxies = mongoose.model('Galaxy', GalaxySchema);
}

export const dbContext = new DbContext()
