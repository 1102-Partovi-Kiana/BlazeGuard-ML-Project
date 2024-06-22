import React from 'react';
import { Button } from './Button';
import '../styles/Footer.css';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
  return (
    <div className="footer-container">
        <section className="footer-subscription"> 
            <p className="footer-subscription-heading">
                Join our newsletter to receive our newest updates
            </p>
            <p className="footer-subscription-text"> 
                You can unsubscribe at any time. 
            </p>
            <div className="input-areas">
                <form>
                    <input type="email" name="email" placeholder="Your Email" className='footer-input'/> 
                    <Button buttonStyle="btn--outline"> Subscribe </Button>
                </form>
            </div>
        </section>
        <div className="footer-links">
            <div className="footer-link-wrapper"> 
                <div className="footer-link-items">
                    <h2> About Us</h2>
                    <Link to='/sign-up'> How it works </Link>
                    <Link to='/'> Testimonials </Link>
                    <Link to='/'> Careers </Link>
                    <Link to='/'> Investors </Link>
                    <Link to='/'> Terms of Services </Link>
                </div>
                <div className="footer-link-items">
                    <h2> Contact Us</h2>
                    <Link to='/sign-up'> Contact </Link>
                    <Link to='/'> Support </Link>
                    <Link to='/'> Destinations </Link>
                    <Link to='/'> Sponsorships </Link>
                </div>
            </div>
            <div className="footer-link-wrapper"> 
                <div className="footer-link-items">
                    <h2> Videos </h2>
                    <Link to='/sign-up'> Submit Videos</Link>
                    <Link to='/'> Ambassadors </Link>
                    <Link to='/'> Agency </Link>
                    <Link to='/'> Influencer </Link>
                </div>
                <div className="footer-link-items">
                    <h2> Social Media</h2>
                    <Link to='/sign-up'> Instagram </Link>
                    <Link to='/'> Facebook </Link>
                    <Link to='/'> Youtube </Link>
                    <Link to='/'> Twitter </Link>
                </div>
            </div>
        </div>
        <section className="social-media">
            <div className="social-media-wrap">
                <div className="footer-logo">
                    <Link to="/" className="social-logo"> 
                        BlazeGuard&nbsp;<i className="fas fa-fire"></i>
                    </Link>
                </div>
                <small className="website-rights"> &copy; BlazeGuard 2024 </small>
                <div className="social-icons">
                    <Link to="/" className="social-icon-link facebook" target="_blank"
                        aria-label="Facebook"> 
                        <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link to="/" className="social-icon-link instagram" target="_blank"
                        aria-label="Instagram"> 
                        <i className="fab fa-instagram"></i>
                    </Link>
                    <Link to="/" className="social-icon-link youtube" target="_blank"
                        aria-label="Youtube"> 
                        <i className="fab fa-youtube"></i>
                    </Link>
                    <Link to="/" className="social-icon-link twitter" target="_blank"
                        aria-label="Twitter"> 
                        <i className="fab fa-twitter"></i>
                    </Link>
                    <Link to="/" className="social-icon-link linkedin" target="_blank"
                        aria-label="LinkedIn"> 
                        <i className="fab fa-linkedin"></i>
                    </Link>
                </div>
            </div>
        </section>
    </div>
  );
}

export default Footer;
