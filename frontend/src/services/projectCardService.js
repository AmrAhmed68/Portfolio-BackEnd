import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

const API_URL_PROJECT = `${API_URL}/api/project`
const API_URL_PROJECTID = `${API_URL}/api/`
const API_URL_SKILLS = `${API_URL}/api/skill`
const API_URL_SKILL = `${API_URL}/api/`

export const getProject = async () => {
  const response = await axios.get(API_URL_PROJECT);
  return response.data;
};

export const getProjectById = async (id) => {
  const response = await axios.get(API_URL_PROJECTID);
  return response.data;
};

export const addProject = async (project) => {
  const response = await axios.post(API_URL_PROJECT, project);
  return response.data;
};

export const getSkills = async () => {
  const response = await axios.get(API_URL_SKILL);
  return response.data;
};

export const addSkills = async (skills) => {
  const response = await axios.post(API_URL_SKILLS, skills);
  return response.data;
};