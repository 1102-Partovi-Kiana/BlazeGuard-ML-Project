// ImageCarousel.js
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from 'react-responsive-carousel';
import FireImage1 from '../../assets/images/FireImage1.jpg';
import FireImage2 from '../../assets/images/FireImage2.jpg';
import FireImage3 from '../../assets/images/FireImage3.jpg';

function ImageCarousel() {
  return (
    <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
      <div>
        <img src={FireImage1} alt="Wildfire 1" />
        <p className="legend">Wildfire in Forest</p>
      </div>
      <div>
        <img src={FireImage2} alt="Firefighting Effort" />
        <p className="legend">Firefighting Efforts</p>
      </div>
      <div>
        <img src={FireImage3} alt="Nature Recovery" />
        <p className="legend">Nature Recovery After Fire</p>
      </div>
    </Carousel>
  );
}

export default ImageCarousel;
