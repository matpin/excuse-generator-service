import { model, Schema } from "mongoose";
import { Excuse } from "../entities";

// Mongoose schema
const excuseSchema = new Schema(
  {
    type: { type: String, required: true },
    text: { type: String, required: true },
  },
  { timestamps: true }
);

// Model export
export const ExcuseModel = model<Excuse>("Parts", excuseSchema);
