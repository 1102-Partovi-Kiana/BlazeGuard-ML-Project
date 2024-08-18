import React from 'react';
import CardItem from './CardItem';
import '../styles/Cards.css';
import ImageCarousel from './ImageCarousel';
import EmergencyKitImage from '../assets/images/Ekit.png';
import Robot from '../assets/images/MLrobot.jpeg';
import image from '../assets/images/climatechange.webp'
import camp from '../assets/images/camp.jpeg'
import firef from '../assets/images/firef.webp'

function Cards() {
  return (
    <div className="cards">
        <h1 style={{ fontSize: '2.5rem', color: '#333', textAlign: 'center', marginBottom: '20px' }}>Check out these FEATURED Articles</h1>
        <div className="cards_container">  
            <div className= "cards_wrapper">
                <ul className="cards_items">
                    <CardItem  src={EmergencyKitImage} text ="Explore how to make the perfect emergency kit for you and your loved ones" label='Adventure' 
                    path="/articles/article1" />
                    <CardItem src={Robot} text ="See Machine Learning's Aid in Disaster Management" label='Luxury' 
                    path="/articles/article2" />
                </ul>
                <ul className="cards_items">
                    <CardItem src={image}  text ="Discover Climate Change's Impact on Wildfires" label='Mystery' 
                    path="/articles/article3" />
                    <CardItem src={camp} text ="Creating and Managing a Safe Fire while Camping" label='Adventure' 
                    path="/articles/article4" />
                     <CardItem src={firef} text ="Take a Look at Wildfire Hotspots in the US" label='Adrenalinee' 
                    path="/articles/article5" />
                </ul>
                
            </div>
        </div>
        <h1 style={{ fontSize: '2.5rem', color: '#333', marginBottom: '20px' }}>Here's a Look at Some Wildfires</h1>
        <ImageCarousel/>
           
      
    </div>
  )
}

export default Cards

