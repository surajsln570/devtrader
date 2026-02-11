import { connectDB } from "@/server/lib/db";
import Project from "@/server/models/project";

export async function DELETE(req, {params}) {
 try {
   console.log('entering into')
    const {id} = await params;
  await connectDB();
  await Project.findByIdAndDelete(id);
  return Response.json({success: true, message:"project deleted successfully"})
 } catch (error) {
  console.log('error in DELETE', error)
  return Response.json({success: false, error})
 }
}