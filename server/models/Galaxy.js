import mongoose from "mongoose";

const Schema = mongoose.Schema

export const GalaxySchema = new Schema(
  {
    name: { type: String, required: true },
    stars: { type: Number, required: true },
    // planetCount: { type: Schema.Types.ObjectId, ref: 'Planets' }
  },
  { timestamps: true, toJSON: { virtuals: true } }

)

GalaxySchema.virtual('planetCount', {
  localField: '_id',
  ref: 'Planet',
  foreignField: 'galaxyId',
  count: true
})