import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css'
import { Link } from 'react-router-dom';
import { Button } from './Button';
import '@fortawesome/fontawesome-free/css/all.min.css';


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    //window.addEventListener('resize', showButton);
    //return () => window.removeEventListener('resize', showButton);
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <> {/* This is a fragment */}
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            BlazeGuard &nbsp; <i className="fas fa-fire" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/map" className="nav-links" onClick={closeMobileMenu}>
                Map
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/fire-info" className="nav-links" onClick={closeMobileMenu}>
                Fire Info
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/meet-the-creators" className="nav-links" onClick={closeMobileMenu}>
                Meet the Creators
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/articles" className="nav-links" onClick={closeMobileMenu}>
                Articles
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
