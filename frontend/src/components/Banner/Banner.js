import './Banner.css'
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';

export const Banner = () => {
  
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/Amr_AboBakr.pdf`;
    link.download = 'My_CV.pdf';
    link.click();
  };

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "software engineering" , "Web Developer", "mobile app development", "UI/UX Designer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={5}>
            <div className="animate__animated animate__zoomIn">
              <img src="https://i.ibb.co/f0PfyDM/cropped-image.png" alt="Header Img" />
            </div>
          </Col>
          <Col xs={12} md={6} xl={7}>
                <div >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>{`Hi! I'm Amr`} 
                    <p className="Amr">
                      <span className="txt-rotate" dataPeriod="100" data-rotate='[ "software engineering" , "Web Developer", "mobile app development", "UI/UX Designer" ]'><span className="wrap">{text}</span></span>
                    </p>  
                  </h1>
                  <p>Hello! I'm Amr Ahmed AboBakr, a 21-year old computer science student at Cairo University, in the Computer Science Department. I specialize in programming, software engineering, web development, and mobile app development.</p>
                  <button onClick={downloadCV}>
                        DOWNLOAD MY CV <ArrowRightCircle size={25} />
                      </button>                
                      </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}