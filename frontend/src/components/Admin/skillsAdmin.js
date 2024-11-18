import './Admin.css'
import React, { useState, useEffect } from 'react';
import { getSkills , addSkills } from '../../services/projectCardService';

export const Skills = () => {

    const [skills, setSkills] = useState([]);
    const [newSkills, setNewSkills] = useState({ icon: '', title: ''});

    useEffect(() => {
        fetchSkills();
      }, []);

      const fetchSkills = async () => {
        const data = await getSkills();
        setSkills(data);
      };
    
      const handleAddSkills = async () => {
        const addedProject = await addSkills(newSkills);
        setSkills([...skills, addedProject]);
        setNewSkills({ icon: '', title: '' });
      };

      return(
        <div className='AAAAA'>
            <h2>Projects</h2>
            <div>
                <input style={{ marginTop : "20px" , marginBottom : "20px"}}
                type="text"
                placeholder="Title"
                value={newSkills.title}
                onChange={(e) => setNewSkills({ ...newSkills, title: e.target.value })}
                />
                <input style={{ marginTop : "20px" , marginBottom : "20px"}}
                type="text"
                placeholder="icon"
                value={newSkills.icon}
                onChange={(e) => setNewSkills({ ...newSkills, icon: e.target.value })}
                />
            </div>
            <button  style={{ marginTop : "20px" , marginBottom : "20px"}} className = "pass" onClick={handleAddSkills}>Add Skill</button>
            {
        skills.map((project, card) => (
          <div  key={card}>
              title={project.title}
              icon={project.icon}
            </div>
          ))}
        </div>

      )
    

}