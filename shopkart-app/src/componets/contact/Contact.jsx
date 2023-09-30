import './contact.css';
import backimg from '../../static/images/img/backimg.png';
import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.message) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitForm = () => {
    if (validateForm()) {
      // Form is valid, you can log the data here
      console.log('Name:', formData.name);
      console.log('Email:', formData.email);
      console.log('Message:', formData.message);
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    }
  };

  return (
    <div className="Contacts" id="contact">
      <div className="container">
        <div className="contact-container">
          <div className="contact-left">
            <span>Newslleter</span>
            <p>Get news about articles and updates in your inbox.</p>
          </div>
          <div className="contact-right">
            <div className="contact-form">
              <div className="contact-input-div">
                <input
                  type="text"
                  placeholder="NAME"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <span>{errors.name}</span>
              </div>
              <div className="contact-input-div">
                <input
                  type="text"
                  placeholder="EMAIL"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <span>{errors.email}</span>
              </div>
              <div className="contact-input-div">
                <input
                  type="text"
                  placeholder="MESSAGE"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
                <span>{errors.message}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="contect-us">
          <div className="get-in-touch">
            Get <span>In Touch</span>
          </div>
          <div className="send">
            <div className="send-btn" onClick={submitForm}>
              SEND
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
