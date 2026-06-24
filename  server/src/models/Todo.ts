import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    completed: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.model("Todo", todoSchema);