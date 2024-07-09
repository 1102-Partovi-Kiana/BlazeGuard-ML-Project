import React, { useState } from 'react';
import FireImage1 from '../assets/images/f1.jpg';
import FireImage2 from '../assets/images/f2.jpg';
import FireImage3 from '../assets/images/f3.jpg';
import FireImage4 from '../assets/images/f4.jpg';
import FireImage5 from '../assets/images/f5.jpg';
import FireImage6 from '../assets/images/f6.webp';
import FireImage7 from '../assets/images/f7.jpeg';
import '../styles/ImageCarousel.css';

function ImageCarousel() {
  const [rotation, setRotation] = useState(0);

  const handleMouseDrag = (event) => {
    const newRotation = rotation + event.movementX * 0.1; // Adjust sensitivity as needed
    setRotation(newRotation);
  };

  return (
    <div
      className="carousel-container"
      onMouseMove={handleMouseDrag}
      style={{ cursor: 'grab' }}
    >
      <div
        className="carousel"
        style={{ transform: `rotateY(${rotation}deg)` }}
      >
        <div className="carousel-item">
          <img src={FireImage1} alt="Wildfire 1" />
        </div>
        <div className="carousel-item">
          <img src={FireImage2} alt="Wildfire 2" />
        </div>
        <div className="carousel-item">
          <img src={FireImage3} alt="Wildfire 3" />
        </div>
        <div className="carousel-item">
          <img src={FireImage4} alt="Wildfire 4" />
        </div>
        <div className="carousel-item">
          <img src={FireImage5} alt="Wildfire 5" />
        </div>
        <div className="carousel-item">
          <img src={FireImage6} alt="Wildfire 6" />
        </div>
        <div className="carousel-item">
          <img src={FireImage7} alt="Wildfire 7" />
        </div>
      </div>
    </div>
  );
}

export default ImageCarousel;
