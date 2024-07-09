import React, { useEffect, useState } from 'react';
import '../../styles/ArticleStyle.css'; // Adjust the path as needed
import HeaderImage from '../../assets/images/camp.jpeg'; // Adjust the path as needed

// Utility function to calculate reading time
const calculateReadingTime = (text) => {
  const wordsPerMinute = 200; // Average reading speed
  const words = text.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return minutes;
};

function Article4() {
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
        <img src={HeaderImage} alt="Fire Emergency Kit" className="header-image" />
        <div className="article-header">
          <h1>How to Create and Manage a Safe Fire When Camping</h1>
          <p className="article-meta">By Kiana Partovi | June 27, 2024 | Estimated reading time: {readingTime} {readingTime === 1 ? 'minute' : 'minutes'}</p>
        </div>

        <div className="article-content">
          <p>
            Camping is a wonderful way to connect with nature, relax, and enjoy the great outdoors. One of the most iconic aspects of camping is building a campfire. A campfire can provide warmth, a place to cook, and a cozy gathering spot. However, creating and managing a campfire safely is crucial to prevent wildfires and ensure the safety of your camping experience. This comprehensive guide will take you through the steps of building, maintaining, and extinguishing a campfire responsibly.
          </p>

          <h2>Selecting a Safe Location</h2>
          <h3>Use Designated Fire Pits</h3>
          <p>
            Whenever possible, use designated fire pits or rings provided at your campsite. These are specifically designed to contain the fire and minimize the risk of it spreading. If a designated fire pit is not available, follow these guidelines to select a safe location:
          </p>
          <ul>
            <li><strong>Clear Area:</strong> Choose a location at least 15 feet away from tents, trees, shrubs, and any flammable materials. Ensure there are no overhanging branches or dry grass nearby.</li>
            <li><strong>Wind Direction:</strong> Consider the wind direction. Avoid building a fire in a windy area, as strong winds can carry embers and ignite surrounding areas.</li>
            <li><strong>Soil and Surface:</strong> Select a spot with a non-flammable surface, such as bare soil or gravel. Avoid building a fire on dry leaves, grass, or peat.</li>
          </ul>

          <h2>Creating a Fire Pit</h2>
          <p>
            If a designated fire pit is not available, you can create your own by following these steps:
          </p>
          <ul>
            <li><strong>Clear the Area:</strong> Remove any debris, such as leaves, twigs, and grass, from a 10-foot diameter area around your chosen spot.</li>
            <li><strong>Dig a Pit:</strong> Dig a shallow pit about one foot deep and two feet in diameter. This helps contain the fire and prevent it from spreading.</li>
            <li><strong>Surround with Rocks:</strong> Place a ring of rocks around the pit. This acts as a barrier to keep the fire contained and provides a windbreak.</li>
          </ul>

          <h2>Gathering Firewood</h2>
          <h3>Types of Firewood</h3>
          <p>
            Selecting the right type of firewood is essential for building a safe and efficient fire. Firewood can be categorized into three types:
          </p>
          <ul>
            <li><strong>Tinder:</strong> Small, easily ignitable materials used to start the fire. Examples include dry leaves, grass, pine needles, and small twigs.</li>
            <li><strong>Kindling:</strong> Slightly larger sticks and branches that catch fire quickly and help ignite larger pieces of wood. Kindling should be about the thickness of a pencil or your thumb.</li>
            <li><strong>Fuelwood:</strong> Larger logs that burn for a longer period. These provide the main source of heat and should be dry and seasoned to minimize smoke and ensure a clean burn.</li>
          </ul>

          <h3>Collecting Firewood</h3>
          <p>
            When collecting firewood, follow these guidelines to ensure sustainability and minimize environmental impact:
          </p>
          <ul>
            <li><strong>Use Dead Wood:</strong> Collect only dead and fallen branches. Avoid cutting live trees or branches, as this can harm the environment and is often prohibited in many camping areas.</li>
            <li><strong>Keep It Local:</strong> Use firewood from the area where you are camping to prevent the spread of pests and diseases. Many parks and campgrounds provide firewood for purchase to help control this issue.</li>
            <li><strong>Collect Adequate Amounts:</strong> Gather enough tinder, kindling, and fuelwood before starting your fire to avoid having to leave the fire unattended.</li>
          </ul>

          <h2>Building the Fire</h2>
          <h3>Types of Fire Structures</h3>
          <p>
            There are several ways to build a campfire, each with its advantages. Here are three common fire structures:
          </p>
          <h4>Teepee Fire</h4>
          <ul>
            <li><strong>Start with Tinder:</strong> Place a small bundle of tinder in the center of your fire pit.</li>
            <li><strong>Add Kindling:</strong> Arrange small pieces of kindling around the tinder in a teepee shape, leaving a small opening for airflow.</li>
            <li><strong>Add Fuelwood:</strong> Gradually add larger pieces of fuelwood around the kindling teepee as the fire grows.</li>
          </ul>

          <h4>Log Cabin Fire</h4>
          <ul>
            <li><strong>Base Layer:</strong> Lay two large pieces of fuelwood parallel to each other on the ground.</li>
            <li><strong>Tinder and Kindling:</strong> Place tinder and kindling in the center between the logs.</li>
            <li><strong>Build the Cabin:</strong> Add additional layers of logs perpendicular to the previous layer, forming a square structure with a hollow center for the tinder and kindling.</li>
          </ul>

          <h4>Platform Fire</h4>
          <ul>
            <li><strong>Base Platform:</strong> Lay a platform of large logs on the ground.</li>
            <li><strong>Tinder and Kindling:</strong> Place tinder and kindling on top of the platform.</li>
            <li><strong>Add More Logs:</strong> Stack additional logs on top, creating a stable platform that allows for good airflow.</li>
          </ul>

          <h2>Lighting the Fire</h2>
          <p>
            To light the fire safely and effectively, follow these steps:
          </p>
          <ul>
            <li><strong>Matches or Lighter:</strong> Use a long match or lighter to ignite the tinder. Light the tinder in multiple places to ensure even ignition.</li>
            <li><strong>Fire Starters:</strong> Consider using commercial fire starters or natural alternatives like cotton balls soaked in petroleum jelly to help get the fire going.</li>
            <li><strong>Blow Gently:</strong> Once the tinder ignites, blow gently at the base of the fire to provide additional oxygen and help the flames spread to the kindling.</li>
          </ul>

          <h2>Managing the Fire</h2>
          <h3>Maintaining the Fire</h3>
          <p>
            Once your fire is burning, it’s important to maintain it safely:
          </p>
          <ul>
            <li><strong>Add Wood Gradually:</strong> Add wood gradually to avoid smothering the flames. Ensure that the fire has a good mix of tinder, kindling, and fuelwood to keep it burning steadily.</li>
            <li><strong>Avoid Overloading:</strong> Do not overload the fire with too much wood at once. This can cause the fire to spread uncontrollably or produce excessive smoke.</li>
            <li><strong>Keep a Safe Distance:</strong> Ensure everyone maintains a safe distance from the fire, especially children and pets. Use a designated cooking area if you plan to cook over the fire.</li>
          </ul>

          <h3>Fire Safety Tips</h3>
          <p>
            Follow these fire safety tips to ensure a safe camping experience:
          </p>
          <ul>
            <li><strong>Never Leave Unattended:</strong> Never leave the fire unattended. Always have someone present to monitor the fire and ensure it remains contained.</li>
            <li><strong>Keep Water and Shovel Nearby:</strong> Always have a bucket of water and a shovel nearby to extinguish the fire or control it if it starts to spread.</li>
            <li><strong>Be Mindful of Conditions:</strong> Be aware of weather conditions, such as wind and dry spells, which can increase the risk of wildfires. If conditions are unsafe, consider not starting a fire.</li>
          </ul>

          <h2>Extinguishing the Fire</h2>
          <h3>Proper Extinguishing Techniques</h3>
          <p>
            Properly extinguishing your fire is crucial to prevent wildfires. Follow these steps to ensure your fire is completely out:
          </p>
          <ul>
            <li><strong>Spread the Coals:</strong> Use a stick or shovel to spread out the coals and remaining wood. This helps them cool faster.</li>
            <li><strong>Douse with Water:</strong> Pour water over the fire, ensuring that all embers, coals, and logs are thoroughly soaked. Listen for hissing sounds, which indicate that the fire is still hot.</li>
            <li><strong>Stir and Repeat:</strong> Stir the wet ashes with a stick or shovel, then pour more water over the fire. Repeat this process until the fire pit is cool to the touch.</li>
            <li><strong>Check for Heat:</strong> Place the back of your hand near the fire pit to check for any remaining heat. If you feel warmth, continue dousing and stirring until the fire is completely cold.</li>
          </ul>

          <h2>Leave No Trace</h2>
          <p>
            Follow Leave No Trace principles to minimize your impact on the environment:
          </p>
          <ul>
            <li><strong>Pack Out Ashes:</strong> If possible, pack out cooled ashes in a sealed container to dispose of them properly. This helps keep the campsite clean and reduces the risk of wildfires.</li>
            <li><strong>Restore the Site:</strong> If you created a fire pit, restore the site to its natural condition by filling in the pit and scattering any rocks used.</li>
          </ul>

          <h2>Conclusion</h2>
          <p>
            Creating and managing a safe fire when camping is essential for enjoying the experience while protecting the environment and ensuring the safety of everyone involved. By selecting a safe location, gathering appropriate firewood, building and maintaining the fire responsibly, and extinguishing it thoroughly, you can minimize the risk of wildfires and have a memorable camping trip. Always follow local regulations and guidelines, and practice Leave No Trace principles to preserve the beauty of nature for future generations.
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

export default Article4;
