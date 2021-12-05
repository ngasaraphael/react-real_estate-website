import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const menuChange = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => setClick(false);

  return (
    <div className='navigation'>
      <div className='container'>
        <div className={click ? 'navbar mobile' : 'navbar '}>
          <div className='logo'>
            <Link to='/' className='logo-link' onClick={closeMobileMenu}>
              Ralph's-Estate <i className='fas fa-home'></i>
            </Link>
          </div>

          <ul className={click ? 'nav-list' : 'nav-list  mobile'}>
            <li className='nav-item'>
              <Link to='/' className='nav-item-link' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/agents'
                className='nav-item-link'
                onClick={closeMobileMenu}
              >
                Agents
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/contact'
                className='nav-item-link'
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='#'
                className='nav-item-link get-app'
                onClick={closeMobileMenu}
              >
                Get app
              </Link>
            </li>
          </ul>
          <div className='menu-bar' onClick={menuChange}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars '}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
