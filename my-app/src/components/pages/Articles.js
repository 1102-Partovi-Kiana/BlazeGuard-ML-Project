import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Articles.css';
import HeaderImage from '../../assets/images/Ekit.png'; // Adjust the path as needed
import r from '../../assets/images/MLrobot.jpeg';
import c from '../../assets/images/climatechange.webp';
import ca from '../../assets/images/camp.jpeg';
import p from '../../assets/images/p.webp'; 
import f from '../../assets/images/firef.webp';
import ff from '../../assets/images/ff.jpeg';

function Articles() {
  const articles = [
    {
      title: 'Essential Guide: Preparing Your Fire Emergency Kit',
      date: '05/28/2024',
      author: 'Author Name',
      description: 'Discover the latest in invisible braces with Inbrace in Las Vegas. Perfect for adults needing a discreet and effective orthodontic solution.',
      imageUrl: HeaderImage
    },
    {
      title: 'The Role of Machine Learning in Disaster Management',
      date: '05/28/2024',
      author: 'Author Name',
      description: 'Discover the latest in invisible braces with Inbrace in Las Vegas. Perfect for adults needing a discreet and effective orthodontic solution.',
      imageUrl: r
    },
    {
      title: 'The Impact of Climate Change on Wildfires',
      date: '05/28/2024',
      author: 'Author Name',
      description: 'Discover the latest in invisible braces with Inbrace in Las Vegas. Perfect for adults needing a discreet and effective orthodontic solution.',
      imageUrl: c
    },
    {
      title: 'How to Create and Manage a Safe Fire When Camping',
      date: '05/28/2024',
      author: 'Author Name',
      description: 'Discover the latest in invisible braces with Inbrace in Las Vegas. Perfect for adults needing a discreet and effective orthodontic solution.',
      imageUrl: ca
    },
    {
      title: 'Understanding Wildfire Hotspots in the United States',
      date: '05/28/2024',
      author: 'Author Name',
      description: 'Discover the latest in invisible braces with Inbrace in Las Vegas. Perfect for adults needing a discreet and effective orthodontic solution.',
      imageUrl: f
    },
    {
      title: 'Everyday Actions to Prevent Wildfire Spread and Start',
      date: '05/28/2024',
      author: 'Author Name',
      description: 'Discover the latest in invisible braces with Inbrace in Las Vegas. Perfect for adults needing a discreet and effective orthodontic solution.',
      imageUrl: p
    },
    {
      title: 'Wildfire Facts You Never Knew',
      date: '05/28/2024',
      author: 'Author Name',
      description: 'Discover the latest in invisible braces with Inbrace in Las Vegas. Perfect for adults needing a discreet and effective orthodontic solution.',
      imageUrl: ff
    },
  ];

  return (
    <div className="articles-container">
      <h1>Articles</h1>
      <div className="articles-list">
        {articles.map((article, index) => (
          <div key={index} className="article-card">
            <img src={article.imageUrl} alt={article.title} className="article-image" />
            <div className="article-content">
              <h2 className="article-title">
                <Link to={`/articles/article${index + 1}`}>{article.title}</Link>
              </h2>
              <p className="article-date">{article.author} | {article.date}</p>
              <p className="article-description">{article.description}</p>
              <div className="button-container">
                <button className="read-button">
                  <Link to={`/articles/article${index + 1}`}>READ ME</Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Articles;
