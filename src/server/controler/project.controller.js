import Project from "@/server/models/project";

export const addProject = async (formData) =>{
    try {
        const project = await Project.create(formData);
        return {success: true, message:'Project added successfully', project}
    } catch (error) {
        console.log('error in addProject', error)
        return {success: false, message:'error in postProject', error}       
    }
}