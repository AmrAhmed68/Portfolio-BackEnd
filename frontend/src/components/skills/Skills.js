import './skills.css'
import 'react-multi-carousel/lib/styles.css';
import React, { useState, useEffect } from 'react';
import { getSkills  } from '../../services/projectCardService';

export const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    const data = await getSkills();
    setSkills(data);
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>Here are some of the technologies I work with:</p>
              {
                  skills.map((project, card) => (
                  <div className="skills-grid">
                  <div className="skill-item">
                    <img src={project.icon} alt={project.title} />
                    <h5>{project.title}</h5>
                  </div>
                  </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
