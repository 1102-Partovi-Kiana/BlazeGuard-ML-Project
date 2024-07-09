import React, { useEffect, useState } from 'react';
import '../../styles/ArticleStyle.css'; // Adjust the path as needed
import HeaderImage from '../../assets/images/p.webp'; // Adjust the path as needed

// Utility function to calculate reading time
const calculateReadingTime = (text) => {
  const wordsPerMinute = 200; // Average reading speed
  const words = text.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return minutes;
};

function Article6() {
  const recentPosts = [
    { title: 'How Climate Change Affects Wildlife Habitats', link: '#' },
    { title: 'Wildfire Prevention Tips for Every Season', link: '#' },
    { title: 'The Role of Technology in Early Wildfire Detection', link: '#' },
    { title: 'Interview with a Firefighter: Insights from the Frontline', link: '#' },
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
        <img src={HeaderImage} alt="Fire Emergency Kit" className="header-image" />
        <div className="article-header">
          <h1>Everyday Actions to Prevent Wildfire Spread and Start</h1>
          <p className="article-meta">By Kiana Partovi | June 27, 2024 | Estimated reading time: {readingTime} {readingTime === 1 ? 'minute' : 'minutes'}</p>
        </div>

        <div className="article-content">
          <p>
            Wildfires are becoming an increasingly frequent and severe threat, causing devastating impacts on communities and natural landscapes. While large-scale efforts to manage wildfires are essential, individual actions play a critical role in prevention. Understanding the risks and taking proactive measures can significantly reduce the likelihood of wildfires starting or spreading.
          </p>

          <h2>Understanding Fire Risks</h2>
          <p>
            Wildfires are influenced by various factors, including weather, vegetation, and human activity. Human negligence or carelessness is often a primary cause of wildfires, making it vital for everyone to understand fire risks and take responsibility. Simple everyday actions can greatly mitigate these risks and prevent potential disasters.
          </p>

          <h2>Home and Yard Maintenance</h2>
          <p>
            Maintaining a defensible space around your property is one of the most effective ways to prevent wildfires. This involves clearing flammable vegetation within a 30-foot perimeter, trimming trees, and removing dead plants. Regularly cleaning gutters to remove leaves and debris prevents embers from igniting homes. Choose fire-resistant plants for landscaping and maintain proper spacing to reduce fire risk. Store firewood and other combustibles at least 30 feet away from your home.
          </p>

          <h2>Safe Outdoor Practices</h2>
          <p>
            Outdoor activities such as camping and barbecuing can pose fire hazards if not handled properly. When building a campfire, use designated fire pits away from flammable materials, and never leave fires unattended. Fully extinguish campfires by dousing them with water and stirring the ashes until cold. For barbecuing, use grills safely and dispose of hot coals in a metal container with a tight-fitting lid. Avoid using equipment like lawnmowers and chainsaws during hot, dry, and windy conditions.
          </p>

          <h2>Vehicle Safety</h2>
          <p>
            Vehicles can also ignite wildfires. Avoid parking on dry grass, as heat from exhaust systems can ignite it. Ensure trailer chains do not drag on the ground, causing sparks. Regularly maintain vehicles to prevent mechanical issues that could start fires. These simple habits significantly reduce the risk of accidentally starting wildfires while on the road.
          </p>

          <h2>Disposal of Flammable Materials</h2>
          <p>
            Proper disposal of flammable materials is critical for wildfire prevention. Dispose of yard waste such as leaves and branches through community green waste programs rather than burning. Dispose of household waste, particularly flammable items like paint, solvents, and chemicals, at designated sites to prevent accidental ignition.
          </p>

          <h2>Fire-Safe Habits</h2>
          <p>
            Adopting fire-safe habits in daily routines can make a significant difference. Dispose of cigarette butts in proper containers and avoid smoking in high-risk areas. Store matches and fireworks in safe, dry places, using them responsibly, especially during dry conditions. Choose fire-resistant materials when decorating for holidays to minimize the risk of accidental fires.
          </p>

          <h2>Community Involvement</h2>
          <p>
            Engaging with the community enhances wildfire prevention efforts. Share fire safety information with neighbors and participate in local fire preparedness programs. Volunteer for community clean-up efforts to reduce fire hazards. Report potential fire hazards promptly to local authorities for timely resolution.
          </p>

          <h2>Emergency Preparedness</h2>
          <p>
            While prevention is crucial, preparedness for wildfire emergencies is equally important. Develop and practice evacuation plans with family, ensuring everyone knows actions and locations during emergencies. Prepare emergency kits with essentials like water, food, medications, and important documents. Establish communication plans to keep in touch with family and neighbors during wildfires.
          </p>

          <h2>Conclusion</h2>
          <p>
            Preventing wildfires requires collective effort, where everyday actions significantly impact outcomes. By maintaining homes and yards, practicing safe outdoor habits, ensuring vehicle safety, disposing of flammable materials correctly, adopting fire-safe habits, engaging in community efforts, and preparing for emergencies, individuals mitigate wildfire risks. Proactive measures protect homes, communities, and the environment from wildfire devastation. Stay alert, stay safe, and contribute to wildfire prevention efforts.
          </p>
        </div>
      </div>
      
      <div className="sidebar">
        <h2>Recent Posts</h2>
        <ul>
          {recentPosts.map((post, index) => (
            <li key={index}><a href={post.link}>{post.title}</a></li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Article6;
