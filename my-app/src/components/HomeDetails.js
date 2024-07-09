import React from 'react';
import '../App.css';
import '../styles/HomeDetails.css';
import { Button } from './Button';

function HomeDetails() {
  return (
    <div className="hero-container">
        <video src="/videos/otherf.mp4" autoPlay loop muted> </video>
        <h1> BLAZE GUARD </h1>
        <p> Our Fire Prediction Model </p>
        <div className="hero-btns"> 
            <Button className="btns" buttonStyle="btn--outline" buttonSize='btn--large'> GET STARTED
            </Button> 
            <Button className="btns" buttonStyle="btn--primary" buttonSize='btn--large' linkTo="/trailer"> WATCH TRAILER <i className='far fa-play-circle' />
            </Button> 
        </div>
      
    </div>
  )
}

export default HomeDetails
