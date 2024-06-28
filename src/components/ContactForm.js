import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import emailjs from 'emailjs-com';
import 'bootstrap/dist/css/bootstrap.min.css';
import contactImg from "../assets/img/contact-img.svg";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    companyName:'',
    email: '',
    phone:'',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_andry77', 
      'template_vt7ud9h', 
      formData, 
      'B7BMmdAxfR7eBan8D'
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
    }).catch((err) => {
      console.error('FAILED...', err);
    });

    // Optionally reset the form
    setFormData({
      name: '',
      companyName:'',
      email: '',
      phone:'',
      message: ''
      });
  };

  return (
    <section className="contact" id="connect">
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
      <Container>
      <Row className="align-items-center">
          <Col size={12} md={6}>
                <img src={contactImg} alt="Contact Us"/>
          </Col>
          <Col size={12} md={6}>
          <h2>Get In Touch</h2>
      <Row>
        <Col size={12} sm={6} className="px-1">
          <div className="form-group">
            <label htmlFor="name">Name*:</label>
            <input 
              type="text" 
              className="form-control" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
          </div>
        </Col>
        <Col size={12} sm={6} className="px-1">
          <div className="form-group">
            <label htmlFor="companyName">Company name*:</label>
            <input 
              type="text" 
              className="form-control" 
              id="companyName" 
              name="companyName" 
              value={formData.companyName} 
              onChange={handleChange} 
              required 
            />
          </div>
        </Col>
        <Col size={12} sm={6} className="px-1">
          <div className="form-group">
            <label htmlFor="email">Email*:</label>
            <input 
              type="email" 
              className="form-control" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>
        </Col>
        <Col size={12} sm={6} className="px-1">
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input 
              type="phone" 
              className="form-control" 
              id="phone" 
              name="phone" 
              value={formData.phone} 
              onChange={handleChange}
            />
          </div>
        </Col>
        <Col size={12} className="px-1">
          <div className="form-group">
            <label htmlFor="message">Message*:</label>
            <textarea 
              className="form-control" 
              id="message" 
              name="message" 
              rows="5" 
              value={formData.message} 
              onChange={handleChange} 
              required 
            />
        </div>
        <button type="submit" className="btn btn-primary">Send</button>
        </Col>
        </Row>
        </Col>
      </Row>
      </Container>
      </form>
    </div>
    </section>
  );
};

export default ContactForm;