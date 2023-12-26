import type { Project } from "../../types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/projects`;

const getProject = async (id: string): Promise<Project> => {
  const res = await fetch(`${URL}/${id}`);

  return res.json() as Promise<Project>;
};

export default getProject;
