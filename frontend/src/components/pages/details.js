import './details.css'
import React, { useState , useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getProjectById } from  '../../services/projectCardService'
export const Pages = () => {

    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [error, setError] = useState(null);
    const [zoomedImage, setZoomedImage] = useState(null);
    console.log(id)

    // useEffect(() => {
    //     const fetchProject = async () => {
    //     try {
    //       const data = await getProjectById(id);
    //       console.log("API Response:", data);
    //       if (Array.isArray(data) && data.length > 0) {
    //         setProject(data[0]); 
    //       } else {
    //         console.error("Unexpected API response format", data);
    //         setError("Unexpected data format from API");
    //       }
    //     } catch (err) {
    //         console.error("Error fetching project data", err);
    //       setError("Could not load project details.");
    //     }
    //   };
    //   fetchProject();
    // }, [id]);

    useEffect(() => {
      const fetchProject = async () => {
        try {
          const data = await getProjectById(id);
          console.log("Fetched data:", data);
    
          if (data && data._id === id) {
            setProject(data);
          } else if (Array.isArray(data) && data.length > 0) {
            const matchedProject = data.find((proj) => proj._id === id);
            if (matchedProject) {
              setProject(matchedProject);
            } else {
              setError("No project found with the provided ID.");
            }
          } else {
            setError("Unexpected data format from API.");
          }
        } catch (err) {
          console.error("Error fetching project data:", err);
          setError("Could not load project details.");
        }
      };
      fetchProject();
    }, [id]);
    
    const openZoom = (image) => {
      setZoomedImage(image);
    };
  
    const closeZoom = () => {
      setZoomedImage(null);
    };
  
    const goToHome = () => {
      window.location.href = '/';  
    };

    if (error) {
        return <p>{error}</p>;
      }
    
      if (!project) {
        return <p>Loading...</p>;
      }
      
      console.log('Project:', project);


  
    return (
        <div className="banner1">
        <div className="back-to-home" onClick={goToHome}>
            Home
        </div>
        <div className='font'>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        <div className="horizontal-slider">
        {project.imageUrl && project.imageUrl.map((src, index) => (
        <div className="slider-item" key={index}>
          <img 
            src={src} 
            onClick={() => openZoom(src)}
          />
          </div>
        ))}
      </div>      
      {project.github && (
        <button onClick={() => window.open(project.github, '_blank')}className="pass" >Watch GitHub</button>
      )}
      {project.video && (
        <button onClick={() => window.open(project.video, '_blank')}className="pass" >Watch Video</button>
      )}
      {project.demo && (
        <button onClick={() => window.open(project.demo, '_blank')} className="pass" >Live Demo</button>
      )}
      </div>
        {zoomedImage && (
          <div className="zoom-modal" onClick={closeZoom}>
            <span className="close">&times;</span>
            <img className="zoomed-image" src={zoomedImage.src} alt={zoomedImage.alt} />
          </div>
        )}
      </div>
    );
  };
  
  