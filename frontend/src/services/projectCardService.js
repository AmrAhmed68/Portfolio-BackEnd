// import axios from 'axios';

// // const API_URL = process.env.REACT_APP_API_URL;

// // const API_URL_PROJECT = `${API_URL}/api/project`
// // const API_URL_PROJECTID = `${API_URL}/api/`
// // const API_URL_SKILLS = `${API_URL}/api/skill`
// // const API_URL_SKILL = `${API_URL}/api/`
// const API_URL_PROJECT = "https://amrahmed68-8zvpotx0c-amrahmed68s-projects.vercel.app/api/project"
// const API_URL_PROJECTID = "https://amrahmed68-8zvpotx0c-amrahmed68s-projects.vercel.app/api/"
// const API_URL_SKILLS = "https://amrahmed68-8zvpotx0c-amrahmed68s-projects.vercel.app/api/skill"
// const API_URL_SKILL = "https://amrahmed68-8zvpotx0c-amrahmed68s-projects.vercel.app/api/"

// export const getProject = async () => {
//   const response = await axios.get(API_URL_PROJECT);
//   return response.data;
// };

// export const getProjectById = async (id) => {
//   const response = await axios.get(API_URL_PROJECTID);
//   return response.data;
// };

// export const addProject = async (project) => {
//   const response = await axios.post(API_URL_PROJECT, project);
//   return response.data;
// };

// export const getSkills = async () => {
//   const response = await axios.get(API_URL_SKILL);
//   return response.data;
// };

// export const addSkills = async (skills) => {
//   const response = await axios.post(API_URL_SKILLS, skills);
//   return response.data;
// };

import axios from 'axios';

const apiClient = axios.create({
  baseURL: "https://amrahmed68-8cpm1eg6k-amrahmed68s-projects.vercel.app/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getProject = async () => {
  try {
    const response = await apiClient.get("/project");
    return response.data;
  } catch (error) {
    console.error("Error fetching projects:", error.message);
    throw error;
  }
};

export const getProjectById = async (id) => {
  if (!id) {
    throw new Error("Project ID is required");
  }
  try {
    const response = await apiClient.get(`/project/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching project by ID:", error.message);
    throw error;
  }
};

export const addProject = async (project) => {
  try {
    const response = await apiClient.post("/project", project);
    return response.data;
  } catch (error) {
    console.error("Error adding project:", error.message);
    throw error;
  }
};

export const getSkills = async () => {
  try {
    const response = await apiClient.get("/skill");
    return response.data;
  } catch (error) {
    console.error("Error fetching skills:", error.message);
    throw error;
  }
};

export const addSkills = async (skills) => {
  try {
    const response = await apiClient.post("/skill", skills);
    return response.data;
  } catch (error) {
    console.error("Error adding skills:", error.message);
    throw error;
  }
};
