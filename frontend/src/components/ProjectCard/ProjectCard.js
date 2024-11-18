import './ProjectCard.css'
import { Col } from "react-bootstrap";
import { Link } from 'react-router-dom'
import React from 'react';

export const ProjectCard = ({ id , title, details, Hedimage  }) => {

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={Hedimage} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{details}</span>
          <p></p>
          <Link className = "pass" to = {`/details/${id}`} > see more {'>>'}</Link>
        </div>
      </div>
    </Col>
  )
}