import './Projects.css'
import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useState, useEffect } from 'react';
import {getProject} from '../../services/projectCardService'

export const Projects = () => {

  const [error, setError] = useState(null);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjectCards();
  }, []);
  
  const fetchProjectCards = async () => {
    try{
      const data = await getProject();
      setProjects(data);
      if (Array.isArray(data)) {
        setProjects(data); 
      } else {
        console.error("Unexpected API response format", data);
        setError("Unexpected data format from API");
      }
    }  catch (err) {
      console.error("Error fetching project data", err);
      setError("Could not load projects.");
    }
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div>
                <h2>Projects</h2>
                <p>
                  Here are some of my projects that I've worked on. You can
                  click on the image to view more details.
                </p>
                  {error ? (
                    <p>{error}</p>
                      ) : (
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Pane eventKey="first">
                    <Row>
                      {
                        projects.map((project, index) => (
                          <ProjectCard
                            key={project._id || index} 
                            id={project._id} 
                            title={project.title}
                            details={project.details}
                            Hedimage={project.Hedimage}
                          />
                        ))
                      }
                    </Row>
                  </Tab.Pane>
                </Tab.Container>
                )}
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
}
