import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

const API_URL_PROJECT = `${API_URL}/api/project`
const API_URL_PROJECTID = `${API_URL}/api/`
const API_URL_SKILLS = `${API_URL}/api/skill`

export const getProject = async () => {
  const token = localStorage.getItem("token"); 
  const response = await axios.get(API_URL_PROJECT , {
    headers: {
      Authorization: `Bearer ${token}`, 
    },
  });
  return response.data;
};

export const getProjectById = async (id) => {
  const token = localStorage.getItem("token");
  const response = await axios.get(API_URL_PROJECTID , {
    headers: {
      Authorization: `Bearer ${token}`,
      },
  });
  return response.data;
};

export const addProject = async (project) => {
  const token = localStorage.getItem("token");
  const response = await axios.post(API_URL_PROJECT, project ,{
    headers: {
      Authorization: `Bearer ${token}`,
      },
  });
  return response.data;
};

export const getSkills = async () => {
  const token = localStorage.getItem("token")
  const response = await axios.get(API_URL_SKILLS , {
    headers: {
      Authorization: `Bearer ${token}`,
      },
  });
  return response.data;
};


export const addSkills = async (skills) => {
  const token = localStorage.getItem("token")
  const response = await axios.post(API_URL_SKILLS, skills , {
    headers: {
      Authorization: `Bearer ${token}`,
      },
  });
  return response.data;
};