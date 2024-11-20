import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

const API_URL_PROJECTs = `${API_URL}/project`
const API_URL_PROJECT = `${API_URL}/:id`
const API_URL_SKILLS = `${API_URL}/`

export const getProject = async () => {
  const response = await axios.get(API_URL_PROJECTs);
  return response.data;
};

export const getProjectById = async (id) => {
  const response = await axios.get(API_URL_PROJECT);
  return response.data;
};

export const addProject = async (project) => {
  const response = await axios.post(API_URL_PROJECT, project);
  return response.data;
};

// export const deleteProject = async (id) => {
//   const response = await axios.delete(`${API_URL_PROJECT}/${id}`);
//   return response.data;
// };

// API To Skills 

export const getSkills = async () => {
  const response = await axios.get(API_URL_SKILLS);
  return response.data;
};

export const addSkills = async (skills) => {
  const response = await axios.post(API_URL_SKILLS, skills);
  return response.data;
};