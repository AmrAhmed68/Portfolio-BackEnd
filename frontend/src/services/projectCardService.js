import axios from 'axios';

const API_URL = "https://backend-six-gray-30.vercel.app";

axios.defaults.withCredentials = true;

const API_URL_PROJECT = `${API_URL}/api/project`;
const API_URL_PROJECTID = `${API_URL}/api/`;
const API_URL_SKILLS = `${API_URL}/api/skill`;
const API_URL_SKILL = `${API_URL}/api/`;

const handleRequest = async (request, setLoading) => {
  try {
    if (setLoading) setLoading(true); // Start loading
    const response = await request();
    return response.data;
  } catch (error) {
    console.error("API Request Error:", error);
    throw error; // Re-throw for further handling
  } finally {
    if (setLoading) setLoading(false); // Stop loading
  }
};

export const getProject = async (setLoading) => {
  return handleRequest(() =>
    axios.get(API_URL_PROJECT, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    }),
    setLoading
  );
};

export const getProjectById = async (id, setLoading) => {
  return handleRequest(() =>
    axios.get(`${API_URL_PROJECTID}${id}`, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    }),
    setLoading
  );
};

export const addProject = async (project, setLoading) => {
  return handleRequest(() =>
    axios.post(API_URL_PROJECT, project, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    }),
    setLoading
  );
};

export const getSkills = async (setLoading) => {
  return handleRequest(() =>
    axios.get(API_URL_SKILL, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    }),
    setLoading
  );
};

export const addSkills = async (skills, setLoading) => {
  return handleRequest(() =>
    axios.post(API_URL_SKILLS, skills, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    }),
    setLoading
  );
};
