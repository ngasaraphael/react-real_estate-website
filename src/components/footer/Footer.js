import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='footer-details'>
          <div className='news-letter'>
            <h3>Be the first to receive info on our best deals</h3>
            <p>subscribe to our news letter</p>
            <form className='footer-form'>
              <input type='text' placeholder='Enter your email' />
              <input
                type='submit'
                value='Subscribe'
                className='footer-submit-btn'
              />
            </form>
          </div>
          <div className='footer-connections'>
            <div className='about-us'>
              <h3>About us</h3>
              <ul>
                <li className='footer-item'>
                  <Link to='/' className='footer-item-link'>
                    Home
                  </Link>
                </li>
                <li className='footer-item'>
                  <Link to='/agents' className='footer-item-link'>
                    Agents
                  </Link>
                </li>
                <li className='footer-item'>
                  <Link to='/contact' className='footer-item-link'>
                    Contact
                  </Link>
                </li>
                <li className='footer-item'>
                  <Link to='#' className='footer-item-link'>
                    Get app
                  </Link>
                </li>
              </ul>
            </div>

            <div className='social-media'>
              <h3>Social media</h3>
              <ul>
                <li className='footer-item'>
                  <Link to='#' className='footer-item-link'>
                    Facebook &nbsp; &nbsp;
                    <i className='fab fa-facebook-square'></i>
                  </Link>
                </li>
                <li className='footer-item'>
                  <Link to='#' className='footer-item-link'>
                    Instagram &nbsp; &nbsp;
                    <i className='fab fa-instagram-square'></i>
                  </Link>
                </li>
                <li className='footer-item'>
                  <Link to='#' className='footer-item-link'>
                    Twitter &nbsp; &nbsp;
                    <i className='fab fa-twitter-square'></i>
                  </Link>
                </li>
                <li className='footer-item'>
                  <Link to='#' className='footer-item-link'>
                    info@ralphsestate.com &nbsp; &nbsp;
                    <i className='fas fa-envelope'></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='copy-write'>
          <p>&copy; 2021 ralph's-estate</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
