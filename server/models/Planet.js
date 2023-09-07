import mongoose from "mongoose"
const Schema = mongoose.Schema
export const PlanetSchema = new Schema(
  {
    name: { type: String, required: true, minlength: 2, maxlength: 20 },
    biome: { type: String, required: true, maxlength: 50 },
    atmosphere: { type: Boolean, required: true },
    galaxyId: { type: Schema.Types.ObjectId, ref: 'Galaxy' }
  },
  { toJSON: { virtuals: true } }

)

PlanetSchema.virtual('Galaxy', {
  localField: 'galaxyId',
  ref: 'Galaxy',
  foreignField: '_id',
  justOne: true
})