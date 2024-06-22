import React, { useRef, useState, useEffect } from 'react'; // using react hooks
import '../../styles/Trailer.css';  // connecting to the formatting page

function Trailer() { // trailer is a functional react component
  // useRef is used to create a reference to the video so that we can directly control it
  // useState is used to keep track of whether the video is playing or is paused
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true); // initially set playing to true, when we go to the trailor page starts playing

  const handleVideoClick = () => {
    if (videoRef.current) { // checks if video element exists
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleKeyPress = (event) => {
    if (event.code === 'Space') {
      event.preventDefault();  // prevent default space bar behavior like scrolling
      handleVideoClick();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [isPlaying]);

  return (
    <div onClick={handleVideoClick}>
      <video ref={videoRef} src="/videos/My Movie 5.mp4" autoPlay></video>
    </div>
  );
}

export default Trailer;
