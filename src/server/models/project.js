import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  projectType: {
    type: String,
    enum: ["Civil Construction", "Architectural", "Interior"],
    required: true
  },
  projectImage: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true }
}, { timestamps: true });

const Project =
  mongoose.models.Project ||
  mongoose.model("Project", projectSchema);

export default Project;
