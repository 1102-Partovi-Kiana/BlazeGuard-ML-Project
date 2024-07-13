import React, { useState, useRef } from 'react';
import '../styles/ImageSlider.css';

const slideData = [
  {
    index: 0,
    headline: 'New Fashion Apparel',
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg'
  },
  {
    index: 1,
    headline: 'In The Wilderness',
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/forest.jpg'
  },
  {
    index: 2,
    headline: 'For Your Current Mood',
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/guitar.jpg'
  },
  {
    index: 3,
    headline: 'Focus On The Writing',
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/typewriter.jpg'
  }
];

const Slide = ({ slide, current, handleSlideClick }) => {
  const slideRef = useRef(null);

  const handleMouseMove = (event) => {
    const el = slideRef.current;
    const r = el.getBoundingClientRect();

    el.style.setProperty('--x', event.clientX - (r.left + Math.floor(r.width / 2)));
    el.style.setProperty('--y', event.clientY - (r.top + Math.floor(r.height / 2)));
  };

  const handleMouseLeave = () => {
    slideRef.current.style.setProperty('--x', 0);
    slideRef.current.style.setProperty('--y', 0);
  };

  const handleImageLoaded = (event) => {
    event.target.style.opacity = 1;
  };

  const classNames = [
    'slide',
    current === slide.index ? 'slide--current' : '',
    current - 1 === slide.index ? 'slide--previous' : '',
    current + 1 === slide.index ? 'slide--next' : ''
  ].join(' ');

  return (
    <li
      ref={slideRef}
      className={classNames}
      onClick={() => handleSlideClick(slide.index)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="slide__image-wrapper">
        <img
          className="slide__image"
          alt={slide.headline}
          src={slide.src}
          onLoad={handleImageLoaded}
        />
      </div>
      <article className="slide__content">
        <h2 className="slide__headline">{slide.headline}</h2>
      </article>
    </li>
  );
};

const SliderControl = ({ type, title, handleClick }) => (
  <button className={`btn btn--${type}`} title={title} onClick={handleClick}>
    <svg className="icon" viewBox="0 0 24 24">
      <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
    </svg>
  </button>
);

const ImageSlider = ({ heading = 'Default Heading', slides }) => {
  const [current, setCurrent] = useState(0);

  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? slides.length - 1 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === slides.length ? 0 : next);
  };

  const handleSlideClick = (index) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  const headingId = `slider-heading__${heading.replace(/\s+/g, '-').toLowerCase()}`;
  const wrapperTransform = {
    transform: `translateX(-${current * (100 / slides.length)}%)`
  };

  return (
    <div className='slider' aria-labelledby={headingId}>
      <ul className="slider__wrapper" style={wrapperTransform}>
        <h3 id={headingId} className="visuallyhidden">{heading}</h3>
        {slides.map(slide => (
          <Slide
            key={slide.index}
            slide={slide}
            current={current}
            handleSlideClick={handleSlideClick}
          />
        ))}
      </ul>
      <div className="slider__controls">
        <SliderControl
          type="previous"
          title="Go to previous slide"
          handleClick={handlePreviousClick}
        />
        <SliderControl
          type="next"
          title="Go to next slide"
          handleClick={handleNextClick}
        />
      </div>
    </div>
  );
};

export default ImageSlider;
