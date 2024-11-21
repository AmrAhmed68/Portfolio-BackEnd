import './Contact.css'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';

export const Contact = () => {

  const form = useRef();
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_qsa9y2q', 'template_kkyewd9', form.current, {
        publicKey: '-ggm7jxKj46V1ZRRg',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setSuccessMessage('Message sent successfully!');
          setErrorMessage('');
          form.current.reset(); 
        },
        (error) => {
          setErrorMessage(`Failed to send message: ${error.text}`);
          setSuccessMessage('');        },
      );
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row >
          <Col size={12} md={6}>
            <form ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              <input type="text" name="name" />
              <label>Email</label>
              <input type="email" name="email" />
              <label>Phone</label>
              <input type="phone" name="phone" />
              <label>Message</label>
              <textarea name="message" />
              <input type="submit" value="Send" />
              {errorMessage && <p className="error-message">{errorMessage}</p>}
              {successMessage && <p className="success-message">{successMessage}</p>}
            </form>
          </Col>

          <Col style={{ marginLeft : "40px" }}>
                <div>
                <h2 style={{marginTop : "60px"}}>Get In Touch</h2>
                      <div className="AA">
                        <img src = "https://www.svgrepo.com/show/452133/whatsapp.svg" alt="Whatsapp" />
                      <a className="Chat" href="https://wa.me/01018324127">Chat my on WhatsApp</a>
                      </div>
                      <div className="AA">
                        <img src = "https://www.svgrepo.com/show/361182/github-inverted.svg" alt="GitHub" />
                      <a className="Chat" href="https://github.com/AmrAhmed68">Discover my github</a>                      
                      </div>
                      <div className="AA">
                        <img src = "https://www.svgrepo.com/show/452047/linkedin-1.svg" alt="LinkedIn" />
                      <a className="Chat" href="https://www.linkedin.com/in/amr-ahmed682003/">Discover my Linkedin</a>                      
                      </div>
                      <div className="AA">
                        <img src = "https://www.svgrepo.com/show/452196/facebook-1.svg" alt="FaceBook" />
                      <a className="Chat" href="https://www.facebook.com/profile.php?id=100009582705852&mibextid=JRoKGi">Discover my Facebook</a>                      
                      </div>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
