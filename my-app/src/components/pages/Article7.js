import React, { useEffect, useState } from 'react';
import '../../styles/ArticleStyle.css'; // Adjust the path as needed
import HeaderImage from '../../assets/images/ff.jpeg';

// Utility function to calculate reading time
const calculateReadingTime = (text) => {
    const wordsPerMinute = 200; // Average reading speed
    const words = text.split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return minutes;
  };

const facts = [
  "Wildfires can move faster uphill than downhill due to preheating and increased wind speeds.",
  "Some wildfires can generate their own weather, including fire tornadoes and pyrocumulus clouds.",
  "The largest wildfire recorded in modern history occurred in Australia in 2019-2020, burning over 46 million acres.",
  "Certain trees, like the eucalyptus, are highly flammable due to their oil content.",
  "Wildfires can burn underground for weeks or even months, reigniting surface fires.",
  "Wildfires release large amounts of carbon dioxide and other greenhouse gases, contributing to climate change.",
  "Firefighters use fire retardant chemicals and backburning techniques to control wildfires.",
];



function Article7() {
        const recentPosts = [
          { title: 'Post 1', link: '#' },
          { title: 'Post 2', link: '#' },
          { title: 'Post 3', link: '#' },
          { title: 'Post 4', link: '#' },
        ];
      
        const [readingTime, setReadingTime] = useState(0);
      
        useEffect(() => {
          const content = document.querySelector('.article-content').innerText;
          const time = calculateReadingTime(content);
          setReadingTime(time);
        }, []);

  return (
    <div className="main-container">
      <div className="article-container">
        <img src={HeaderImage} alt="Wildfire Facts" className="header-image" />
        <div className="article-header">
          <h1>Wildfire Facts You Never Knew</h1>
          <p className="article-meta">By Kiana Partovi | June 27, 2024 | Estimated reading time: {readingTime} {readingTime === 1 ? 'minute' : 'minutes'}</p>
        </div>

        <div className="article-content">
          <p>Wildfires are not just a destructive force of nature; they are also full of surprising facts and phenomena. Here are some lesser-known wildfire facts:</p>
          <br></br>
          <ul>
            {facts.map((fact, index) => (
              <li key={index}>{fact}</li>
            ))}
          </ul>
          <p>These facts illustrate the complexity and impact of wildfires on our environment and communities.</p>
        </div>
      </div>

      <div className="sidebar">
        <h2>Related Articles</h2>
        <ul>
          <li><a href="#">Understanding Wildfire Hotspots in the United States</a></li>
          <li><a href="#">Everyday Actions to Prevent Wildfire Spread and Start</a></li>
          <li><a href="#">The Impact of Climate Change on Wildfires</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Article7;
