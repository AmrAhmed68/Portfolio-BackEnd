import axios from 'axios';

const API_URL_PROJECT = 'http://localhost:8000/api/project';
const API_URL_SKILLS = 'http://localhost:8000/api/skills';

export const getProject = async () => {
  const response = await axios.get(API_URL_PROJECT);
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

export const updateProject = async (id, updatedProject) => {
  const response = await axios.put(`${API_URL_PROJECT}/${id}`, updatedProject);
  return response.data;
};

export const deleteProject = async (id) => {
  const response = await axios.delete(`${API_URL_PROJECT}/${id}`);
  return response.data;
};

// API To Skills 

export const getSkills = async () => {
  const response = await axios.get(API_URL_SKILLS);
  return response.data;
};

export const addSkills = async (skills) => {
  const response = await axios.post(API_URL_SKILLS, skills);
  return response.data;
};