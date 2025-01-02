import './details.css';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProjectById } from '../../services/projectCardService';


export const Pages = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const data = await getProjectById(id , setLoading);
        if (data && data._id === id) {
          setProject(data);
        } else if (Array.isArray(data) && data.length > 0) {
          const matchedProject = data.find((proj) => proj._id === id);
          setProject(matchedProject || null);
        } else {
          setError('No project found with the provided ID.');
        }
      } catch (err) {
        setError('Could not load project details.');
      }
    };
    fetchProject();
  }, [id]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }
  
  if (error) {
    return <p>{error}</p>;
  }

  if (!project) {
    return <p>Loading...</p>;
  }

  return (
  <>
      <button className="pass" onClick={() => (window.location.href = '/')}>
        Home
      </button>
    <div className="banner1">
      <div className="font">
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        {project.imageUrl && (
          <div
            id="projectCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
            >
            <div className="carousel-inner">
              {project.imageUrl.map((src, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? 'active' : ''}`}
                >
                  <img
                    src={src}
                    className="d-block w-100"
                    alt={`Slide ${index + 1}`}
                  />
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#projectCarousel"
              data-bs-slide="prev"
              >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#projectCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        )}
        {project.github && (
          <button
            onClick={() => window.open(project.github, '_blank')}
            className="pass"
            >
            Watch GitHub
          </button>
        )}
        {project.video && (
          <button
            onClick={() => window.open(project.video, '_blank')}
            className="pass"
          >
            Watch Video
          </button>
        )}
        {project.demo && (
          <button
            onClick={() => window.open(project.demo, '_blank')}
            className="pass"
            >
            Live Demo
          </button>
        )}
      </div>
    </div>
        </>
  );
};
