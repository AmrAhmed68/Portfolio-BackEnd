import './Admin.css'
import React, { useState, useEffect } from 'react';
import { addProject, getProject } from '../../services/projectCardService';
import { ProjectCard } from "../ProjectCard/ProjectCard";

export const ProjectCards = () => {

  const [imageUrlInput, setImageUrlInput] = useState('');
  const [project, setProject] = useState([]);
  const [newProject, setNewProject] = useState({ title: '', description: '', imageUrl: [], Hedimage: '' , demo: '' , video: ''  , github: '' , details: '' });

  useEffect(() => {
    fetchProject();
  }, []);

  const handleAddImageUrl = () => {
    if (imageUrlInput.trim()) {
      setNewProject((prev) => ({
        ...prev,
        imageUrl: [...prev.imageUrl, imageUrlInput],
      }));
      setImageUrlInput(''); // Clear the input field
    }
  };

  const handleRemoveImageUrl = (index) => {
    setNewProject((prev) => ({
      ...prev,
      imageUrl: prev.imageUrl.filter((_, i) => i !== index),
    }));
  };

  const fetchProject = async () => {
    const data = await getProject();
    setProject(data);
  };

  const handleAddProject = async () => {
    const addedProject = await addProject(newProject);
    setProject([...project, addedProject]);
    setNewProject({ title: '', description: '', imageUrl: [], Hedimage: '' , demo: '' , video: ''  , github: '' , details: '' });
  };

  // const handleDeleteCard = async (id) => {
  //   await deleteProject(id);
  //   setProject(project.filter((card) => card._id !== id));
  // };

  return (
    <div className='AAAAA'>
      <h2>Projects</h2>
      <div>
        <input style={{ marginTop : "20px" , marginBottom : "20px"}}
          type="text"
          placeholder="Title"
          value={newProject.title}
          onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
        />
        <input style={{ marginTop : "20px" , marginBottom : "20px"}}
          type="text"
          placeholder="details"
          value={newProject.details}
          onChange={(e) => setNewProject({ ...newProject, details: e.target.value })}
        />
        <input style={{ marginTop : "20px" , marginBottom : "20px"}}
          type="text"
          placeholder="github"
          value={newProject.github}
          onChange={(e) => setNewProject({ ...newProject, github: e.target.value })}
        />
        <input style={{ marginTop : "20px" , marginBottom : "20px"}} 
          type="text"
          placeholder="Description"
          value={newProject.description}
          onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
        />
        <input style={{ marginTop : "20px" , marginBottom : "20px"}}
          type="text"
          placeholder="Hedimage"
          value={newProject.Hedimage}
          onChange={(e) => setNewProject({ ...newProject, Hedimage: e.target.value })}
        />
        <input style={{ marginTop : "20px" , marginBottom : "20px"}}
          type="text"
          placeholder="video"
          value={newProject.video}
          onChange={(e) => setNewProject({ ...newProject, video: e.target.value })}
        />
        <input style={{ marginTop : "20px" , marginBottom : "20px"}}
          type="text"
          placeholder="demo"
          value={newProject.demo}
          onChange={(e) => setNewProject({ ...newProject, demo: e.target.value })}
        />
          <input style={{ marginTop : "20px" , marginBottom : "20px"}}
            type="text"
            placeholder="Add Image URL"
            value={imageUrlInput}
            onChange={(e) => setImageUrlInput(e.target.value)}
          />

          <button className = "pass" onClick={handleAddImageUrl}>Add URL</button>

        <ul>
          {newProject.imageUrl.map((url, index) => (
            <li key={index}>
              {url}
              <button className = "pass" onClick={() => handleRemoveImageUrl(index)}>Remove</button>
            </li>
          ))}
        </ul>

        <button  style={{ marginTop : "20px" , marginBottom : "20px"}} className = "pass" onClick={handleAddProject}>Add Project</button>
      </div>

      {
        project.map((project, card) => (
          <div  key={card._id}>
            <ProjectCard
              title={project.title}
              details={project.details}
              Hedimage={project.Hedimage}
              link={project.link}
            />
            {/* <button style={{ marginTop : "20px" , marginBottom : "20px"}} className = "pass" onClick={() => handleDeleteCard(card._id)}>Delete</button> */}
            </div>
          ))}
          </div>
  );
};

