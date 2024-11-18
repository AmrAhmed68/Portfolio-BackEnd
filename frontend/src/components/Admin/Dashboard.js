import './Admin.css'
import React from 'react';
import {ProjectCards} from './ProjectCardAdmin'
import { Skills } from './skillsAdmin';
const Dashboard = () => {
  return (
    <div>
      <div className="font">
      <h2>Welcome to the Admin Dashboard</h2>
      <p>This area is only accessible to authorized users.</p>
      </div>
        <ProjectCards/>
        <Skills/>
    </div>
  );
};

export default Dashboard;
