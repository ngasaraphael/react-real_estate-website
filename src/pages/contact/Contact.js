import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className='contact-section'>
      <div className='contact-container'>
        <div className='email-section'>
          <h1>Get in touch</h1>
          <form className='contact-form'>
            <div className='form-group'>
              <label htmlFor='name'>Name</label>
              <input type='text' id='name' placeholder='Enter your Name' />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <input type='temail' id='email' placeholder='Enter your email' />
            </div>
            <div className='form-group'>
              <label htmlFor='message'>Message</label>
              <textarea placeholder='Message'></textarea>
            </div>
            <input type='submit' value='Send' className='contact-send-btn' />
          </form>
        </div>
        <div className='location-section'>
          <h1>Location</h1>
          <div className='address'>
            <h3>
              <i className='fas fa-map-marker-alt'></i> Address
            </h3>
            <p>Eiserfelder Street 463, 57894 Siegen, Germany</p>
          </div>
          <br />
          <br />
          <div className='address'>
            <h3>
              <i className='fas fa-phone-volume'></i> Number
            </h3>
            <p>+49 1521 9451838</p>
          </div>
          <br />
          <br />
          <div className='address'>
            <h3>
              <i className='fas fa-envelope'></i> Email
            </h3>
            <p>info@ralphsestate.com</p>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Contact;
