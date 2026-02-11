export const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "");

export const postAddProject = async (submitData) => {
  const res = await fetch(`/api/project/postaddproject`, {
    method: "POST",
    body: submitData,
  });
  return res.json();
};

export const getAllProject = async () => {
  try {
    const res = await fetch(`${baseUrl}/api/project/postaddproject`, {
    cache: "no-store",
  });

  if (!res.ok) {
    console.log(await res.text());
    return [];
  }
  const r= await res.json();
  console.log( 'r',r)
  return r
  } catch (error) {
    console.log('error',error)
  }
};

export const deleteProject = async (id) => {
  const res = await fetch(`/api/project/postaddproject/${id}`, {
    method: "DELETE",
  });
  return res.json();
};
