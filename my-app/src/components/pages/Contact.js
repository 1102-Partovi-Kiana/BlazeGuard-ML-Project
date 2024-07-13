import React, { useState } from 'react';
import axios from 'axios';
import confetti from 'canvas-confetti';
import '../../styles/Contact.css';
import { Button } from '../Button';
import Footer from '../Footer';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:5001/api/contact', formData)
      .then(response => {
        window.location.href = '/thank-you'; // Redirect to thank you page
      })
      .catch(error => {
        console.error('There was an error!', error);
        setResponseMessage(`Something went wrong: ${error.response ? error.response.data.error : 'Please try again later.'}`);
      });
  };


  return (
    <div>
        <div className="contact-us-container">
        <div className="contact-info">
            <h2>Contact Information</h2>
            <p className="tagline">
                At BlazeGuard, our mission is to leverage advanced technology to enhance safety. Our state-of-the-art fire prediction system helps communities stay ahead of the flame by providing early warnings to prevent wildfires. BlazeGuard: Where Technology Meets Safety.
            </p>
            <p>If you have any comments, concerns, questions, etc, please feel free to fill up the form and then click send and we will get back to you within 24 hours</p>
            <div className="contact-details">
                <p><i className="fas fa-envelope"></i> BlazeGuard@gmail.com</p>
                <p><i className="fas fa-map-marker-alt"></i> 1664 N Virginia St, Reno, NV 89557</p>
            </div>
            <div className="social-media-icons">
                <i className="fab fa-facebook"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-youtube"></i>
            </div>
        </div>
        <div className="form-container">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="email">E-Mail</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone #</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="button-container"> 
                    <button type="submit">Send Message</button>
                </div>
            </form>
            {responseMessage && <p>{responseMessage}</p>}
        </div>
    </div>
    <Footer />
  </div>
  );
}

export default Contact;
