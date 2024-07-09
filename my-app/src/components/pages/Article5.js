import React, { useEffect, useState } from 'react';
import '../../styles/ArticleStyle.css'; // Adjust the path as needed
import HeaderImage from '../../assets/images/firef.webp'; // Adjust the path as needed

// Utility function to calculate reading time
const calculateReadingTime = (text) => {
  const wordsPerMinute = 200; // Average reading speed
  const words = text.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return minutes;
};

function Article5() {
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
          <h1>Understanding Wildfire Hotspots in the United States</h1>
          <p className="article-meta">By Kiana Partovi | June 27, 2024 | Estimated reading time: {readingTime} {readingTime === 1 ? 'minute' : 'minutes'}</p>
        </div>

        <div className="article-content">
          <p>
            Wildfires are a natural and recurring phenomenon, but certain states in the United States are more prone to these devastating events due to their unique environmental conditions. Understanding where wildfires are more common can help in preparing and mitigating their impacts. This article explores the states where wildfires are most prevalent and the factors contributing to their frequency.
          </p>

          <h2>California: The Epicenter of Wildfires</h2>
          <p>
            California is notorious for its wildfires, which frequently make headlines due to their scale and destruction. Several factors contribute to California's high wildfire risk:
          </p>
          <ul>
            <li><strong>Climate:</strong> The state experiences a Mediterranean climate characterized by hot, dry summers and mild, wet winters. This climate pattern creates a lengthy dry season, ideal for wildfires.</li>
            <li><strong>Vegetation:</strong> Dense forests, chaparral, and grasslands provide abundant fuel for fires. The state's diverse ecosystems can quickly turn into tinderboxes.</li>
            <li><strong>Weather Patterns:</strong> The infamous Santa Ana winds in Southern California and Diablo winds in the north can spread fires rapidly and increase their intensity.</li>
          </ul>
          <p>
            Recent wildfires, such as the Camp Fire and the Dixie Fire, have underscored the severe impacts of these factors, resulting in significant loss of life, property, and natural resources.
          </p>

          <h2>Texas: A State of Contrasts</h2>
          <p>
            Texas, with its vast and varied landscapes, also sees frequent wildfires:
          </p>
          <ul>
            <li><strong>Climate:</strong> The state has multiple climate zones, including arid and semi-arid regions prone to drought.</li>
            <li><strong>Vegetation:</strong> Grasslands, shrublands, and forests in the eastern part of the state are particularly vulnerable.</li>
            <li><strong>Weather Patterns:</strong> High temperatures and dry conditions during the summer, coupled with strong winds, create perfect conditions for wildfires.</li>
          </ul>
          <p>
            The combination of these elements often leads to large grass fires, especially in the central and western parts of Texas.
          </p>

          <h2>Colorado: Fire in the Rockies</h2>
          <p>
            Colorado's majestic Rocky Mountains are not immune to wildfires:
          </p>
          <ul>
            <li><strong>Climate:</strong> The state experiences a semi-arid and continental climate with low humidity and significant temperature variations.</li>
            <li><strong>Vegetation:</strong> Forested areas, especially those with dense pine and spruce trees, are susceptible.</li>
            <li><strong>Weather Patterns:</strong> Frequent lightning storms and dry conditions, particularly in late summer and early fall, can ignite fires.</li>
          </ul>
          <p>
            The Pine Gulch Fire and the Cameron Peak Fire are examples of recent large-scale wildfires in Colorado, fueled by dry conditions and abundant forested areas.
          </p>

          <h2>Arizona: Desert Fires</h2>
          <p>
            Arizona's arid climate makes it another hotspot for wildfires:
          </p>
          <ul>
            <li><strong>Climate:</strong> The state is predominantly desert with very low humidity.</li>
            <li><strong>Vegetation:</strong> Desert shrubs, grasses, and forests in higher elevations provide the fuel.</li>
            <li><strong>Weather Patterns:</strong> Hot temperatures and frequent lightning storms during the monsoon season are common ignition sources.</li>
          </ul>
          <p>
            Fires like the Bush Fire have shown how quickly wildfires can spread in Arizona's dry, windy conditions.
          </p>

          <h2>Florida: Unexpected Wildfire Zone</h2>
          <p>
            While known for its wetlands, Florida also faces wildfire risks:
          </p>
          <ul>
            <li><strong>Climate:</strong> Subtropical to tropical climate with a distinct dry season.</li>
            <li><strong>Vegetation:</strong> Pine forests, sawgrass, and palmetto scrub are prevalent.</li>
            <li><strong>Weather Patterns:</strong> Lightning strikes during thunderstorms are a common cause of wildfires.</li>
          </ul>
          <p>
            Florida’s fire season typically coincides with the dry spring months before the onset of the wet season.
          </p>

          <h2>Oregon and Washington: Pacific Northwest Fires</h2>
          <p>
            The Pacific Northwest states of Oregon and Washington experience significant wildfire activity:
          </p>
          <ul>
            <li><strong>Climate:</strong> Coastal maritime climate with dry summers in Oregon; semi-arid climate in inland Washington.</li>
            <li><strong>Vegetation:</strong> Dense coniferous forests are highly flammable.</li>
            <li><strong>Weather Patterns:</strong> Dry summers and occasional strong winds contribute to fire risk.</li>
          </ul>
          <p>
            The 2020 wildfire season saw massive fires across these states, driven by dry conditions and heavy fuel loads in the forests.
          </p>

          <h2>Nevada and Idaho: High Desert and Mountain Fires</h2>
          <h3>Nevada:</h3>
          <ul>
            <li><strong>Climate:</strong> Arid desert climate with very low humidity.</li>
            <li><strong>Vegetation:</strong> Sparse desert shrubs and grasses.</li>
            <li><strong>Weather Patterns:</strong> High temperatures and dry conditions in summer.</li>
          </ul>

          <h3>Idaho:</h3>
          <ul>
            <li><strong>Climate:</strong> Semi-arid to continental climate with significant seasonal variations.</li>
            <li><strong>Vegetation:</strong> Forested areas in the mountainous regions.</li>
            <li><strong>Weather Patterns:</strong> Dry conditions during summer and early fall, frequent lightning storms.</li>
          </ul>
          <p>
            Fires in these states often occur in remote, rugged terrain, making them difficult to control.
          </p>

          <h2>Montana: Northern Wildfire Risks</h2>
          <p>
            Montana's vast forests and grasslands are susceptible to wildfires:
          </p>
          <ul>
            <li><strong>Climate:</strong> Continental climate with cold winters and hot, dry summers.</li>
            <li><strong>Vegetation:</strong> Dense forests in mountainous regions.</li>
            <li><strong>Weather Patterns:</strong> Dry conditions and frequent lightning storms during summer.</li>
          </ul>
          <p>
            The 2017 wildfire season in Montana was particularly severe, with numerous large fires burning across the state.
          </p>

          <h2>Conclusion</h2>
          <p>
            Wildfires are a complex natural phenomenon influenced by a variety of environmental factors. States like California, Texas, Colorado, Arizona, Florida, Oregon, Washington, Nevada, Idaho, and Montana are particularly prone to wildfires due to their unique climates, vegetation, and weather patterns. Understanding these factors can help in developing better prevention, preparedness, and response strategies to mitigate the impact of wildfires on communities and ecosystems. By staying informed and proactive, we can better protect our homes, lives, and natural landscapes from the devastating effects of wildfires.
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

export default Article5;
