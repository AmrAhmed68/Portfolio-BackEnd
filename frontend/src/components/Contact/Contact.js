import './Contact.css'
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import  Whatsapp  from '../../assets/img/whatsapp-svgrepo-com.svg'
import Linkedin from '../../assets/img/linkedin-1-svgrepo-com (1).svg'
import Github from '../../assets/img/github-icon-1.svg'
import FaceBook from '../../assets/img/facebook-svgrepo-com.svg'

export const Contact = () => {

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img id="connect" className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div>
                <h2>Get In Touch</h2>
                    <div className="contact22">
                      <div className="AA">
                        <img src = {Whatsapp} alt="Whatsapp" />
                      <a className="Chat" href="https://wa.me/01018324127">Chat my on WhatsApp</a>
                      </div>
                      <div className="AA">
                        <img src = {Github} alt="Whatsapp" />
                      <a className="Chat" href="https://github.com/AmrAhmed68">Discover my github</a>                      
                      </div>
                      <div className="AA">
                        <img src = {Linkedin} alt="Whatsapp" />
                      <a className="Chat" href="https://www.linkedin.com/in/amr-ahmed682003/">Discover my Linkedin</a>                      
                      </div>
                      <div className="AA">
                        <img src = {FaceBook} alt="FaceBook" />
                      <a className="Chat" href="https://www.facebook.com/profile.php?id=100009582705852&mibextid=JRoKGi">Discover my Facebook</a>                      
                      </div>
                    </div>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
