
export const baseUrl =process.env.NEXT_PUBLIC_BASE_URL


export const postAddProject = async (submitData) => {
    const res = await fetch(`/api/project/postaddproject`, {
        method: "POST",
        body: submitData
    })
    const result = await res.json();
    return result;
}
export const getAllProject = async () => {
   try {
     const res = await fetch(`/api/project/postaddproject`, {
        method: "GET",
    })
    const result = await res.json();
    return result;
   } catch (error) {
    console.log(error)
   }
}
export const deleteProject = async (id) => {
    const res = await fetch(`/api/project/postaddproject/${id}`, {
        method: "DELETE",
    })
    const result = await res.json();
    return result;
}