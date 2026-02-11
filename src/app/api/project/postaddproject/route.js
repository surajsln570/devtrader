import { addProject } from "@/server/controler/project.controller";
import { connectDB } from "@/server/lib/db";
import cloudinary from "@/server/config/cloudinary.js";
import Project from "@/server/models/project";

export async function POST(req) {
  await connectDB();

  const data = await req.formData();

  const projectType = data.get("projectType");
  const city = data.get("city");
  const state = data.get("state");
  const file = data.get("projectImage");

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const uploadRes = await new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream(
      { folder: "projects" },
      (err, result) => {
        if (err) reject(err);
        else resolve(result);
      }
    ).end(buffer);
  });

  const project = await addProject({
    projectType,
    projectImage: uploadRes.secure_url,
    state,
    city
  });

  return Response.json(project);
}

export async function GET(req) {
  await connectDB();
  const projects = await Project.find();
  return Response.json(projects)
}

