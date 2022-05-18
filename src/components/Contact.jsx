import React from 'react';
import { AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai';
import { SiGmail } from 'react-icons/si';
import ImagesDetails from './ImagesDetails';
import Header from './Header';
import '../css/Contact.css';

function Contact() {
  return (
    <section className="home-page">
      <Header />
      <ImagesDetails />
      <section className="contact">
        <button
          type="button"
          className="button-contact"
          onClick={() => window.location.assign('https://www.linkedin.com/in/barbaraluizasoaresrocha/')}
        >
          <AiFillLinkedin className="icon" />
          <p className="social-midia">LinkedIn</p>
          <p>
            linkedin.com/in/
            <br />
            barbaraluizasoaresrocha/
          </p>
        </button>
        <button
          type="button"
          className="button-contact"
          onClick={() => window.location.assign('mailto:barbaraluizasr@gmail.com')}
        >
          <SiGmail className="icon" />
          <p className="social-midia">Email</p>
          <p>barbaraluizasr@gmail.com</p>
        </button>
        <button
          type="button"
          className="button-contact"
          onClick={() => window.location.assign('https://github.com/barbaralsrocha')}
        >
          <AiOutlineGithub className="icon" />
          <p className="social-midia">GitHub</p>
          <p>github.com/barbaralsrocha</p>
        </button>
      </section>
    </section>
  );
}

export default Contact;
