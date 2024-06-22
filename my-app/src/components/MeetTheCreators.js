import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/MeetTheCreators.css';
import KianaImage from '../assets/images/kianapic.jpg'
import JairoImage from '../assets/images/Jairo.jpg'
import Footer from './Footer';


const MeetTheCreators = () => {
  return (
    <div className="wrapper">
      <h1>Our Team</h1>
      <div className="our-team">
        <div className="team-member">
          <div className="member-img">
            <img src={KianaImage} alt="Kiana" />
            <div className="social-media">
                <div className="linkedin item">
                    <a href="www.linkedin.com/in/kianapartovi" target="_blank" class="social-link">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                </div>
                <div className="gmail item">
                    <a href="mailto:kianapartovi04@gmail.com" class="social-link">
                        <i class="fas fa-envelope"></i>
                    </a> 
                </div>
            </div>
          </div>
          <h3>Kiana</h3>
          <span>Developer</span>
          <p>Kiana is an upcoming junior at the University of Nevada, Reno. She is on track to graduate early with a degree in Computer Science and Engineering complemented by two minors, one being in Business Administration and the other being in Mathematics. Her passion for computer science drives her to constantly learn and innovate in the field. She is actively involved in several organizations that nurture her interest and skills, including the Association for Computing Machinery (ACM), Girls Who Code, and TechWise, a program supported by Google. These experiences have allowed Kiana to develop a strong foundation in both technical and leadership skills, preparing her for a successful career in the tech industry.</p>
        </div>

        <div className="team-member">
          <div className="member-img">
            <img src={JairoImage} alt="Jairo" />
            <div className="social-media">
                <div className="linkedin item">
                    <a href="https://www.linkedin.com/in/jairo-cadena-mendez/" target="_blank" class="social-link">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                </div>
                <div className="gmail item">
                    <a href="mailto:your-email@example.com" class="social-link">
                        <i class="fas fa-envelope"></i>
                    </a> 
                </div>
            </div>
          </div>
          <h3>Jairo</h3>
          <span>Developer</span>
          <p>Jairo is a rising senior at the University of Nevada, Reno, majoring in Computer Science and Engineering with minors in Mathematics, Robotics, and Mechanical Engineering. His passion for technology and engineering drives him to continually learn and innovate. Actively involved in various organizations, he is a member of the Association for Computing Machinery (ACM) and participates in TechWise, a program supported by Google. He is also a key member of Nevada Electric Racing and currently works as an Embedded Engineer Intern at Ecoatoms. These experiences have allowed him to build a strong foundation in both technical and leadership skills, preparing him for a successful career in the tech and engineering industries.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MeetTheCreators;
