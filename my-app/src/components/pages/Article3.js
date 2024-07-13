import React, { useEffect, useState } from 'react';
import '../../styles/ArticleStyle.css'; // Adjust the path as needed
import HeaderImage from '../../assets/images/climatechange.webp'; // Adjust the path as needed

// Utility function to calculate reading time
const calculateReadingTime = (text) => {
  const wordsPerMinute = 200; // Average reading speed
  const words = text.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return minutes;
};


function Article3() {
  const recentPosts = [
    { title: 'Wildfire Facts you Never Knew', link: 'http://localhost:3000/articles/article7', image: require('../../assets/images/ff.jpeg'), author: 'Kiana Partovi', date: 'June 28, 2024' },
    { title: 'Everyday Actions to Prevent Wildfire Spread and Start', link: 'http://localhost:3000/articles/article6', image: require('../../assets/images/p.webp'), author: 'Kiana Partovi', date: 'June 27, 2024' },
    { title: 'Understanding Wildfire Hotspots in the United States', link: 'http://localhost:3000/articles/article5', image: require('../../assets/images/firef.webp'), author: 'Kiana Partovi', date: 'June 25, 2024'  },
    { title: 'How to Create and Manage a Safe Fire When Camping', link: 'http://localhost:3000/articles/article4', image: require('../../assets/images/camp.jpeg'), author: 'Kiana Partovi', date: 'June 20, 2024'  },
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
            <h1>The Impact of Climate Change on Wildfires</h1>
            <p className="article-meta">By Kiana Partovi | June 15, 2024 | Estimated reading time: {readingTime} {readingTime === 1 ? 'minute' : 'minutes'}</p>
          </div>

          <div className="article-content">
            <p>
              Climate change is increasingly recognized as a critical factor influencing the frequency and intensity of wildfires worldwide. The effects of rising global temperatures, altered precipitation patterns, and increased frequency of extreme weather events are converging to create conditions that are more conducive to wildfires. This article explores the various ways in which climate change is exacerbating wildfires and the implications for ecosystems, human health, and economies.
            </p>

            <h2>Rising Temperatures</h2>
            <p>
              One of the most direct and significant impacts of climate change is the rise in global temperatures. Over the past century, average global temperatures have increased by approximately 1.1°C, with projections indicating continued warming. Higher temperatures contribute to a variety of environmental changes that can lead to more frequent and severe wildfires.
            </p>
            <p>
              Warmer temperatures result in longer and more intense heatwaves, which dry out vegetation and soils. This increased dryness makes forests and grasslands more flammable. The extended fire season—now starting earlier in the spring and ending later in the autumn—provides more opportunities for wildfires to ignite and spread. In regions like California and Australia, record-breaking temperatures have been directly linked to some of the most devastating wildfire seasons on record.
            </p>

            <h2>Changes in Precipitation Patterns</h2>
            <p>
              Climate change is also altering precipitation patterns globally, leading to prolonged droughts in some regions and increased rainfall in others. These shifts can create conditions that both directly and indirectly contribute to wildfires.
            </p>

            <h3>Drought Conditions</h3>
            <p>
              Extended periods of drought are becoming more common in many parts of the world, including the western United States, southern Europe, and parts of Australia. Drought conditions dry out vegetation, reducing its moisture content and making it highly flammable. Forests, grasslands, and scrublands that were once resilient to occasional fires now face the risk of larger, more destructive wildfires.
            </p>
            <p>
              In the western United States, for example, the combination of prolonged drought and high temperatures has led to unprecedented fire activity. The dry conditions not only make ignition more likely but also contribute to the rapid spread and intensity of fires. Vegetation that would normally act as a barrier to fire can become tinder, fueling larger and more uncontrollable blazes.
            </p>

            <h3>Increased Vegetation Growth Followed by Dry Periods</h3>
            <p>
              Conversely, in some regions, climate change has led to increased rainfall during certain seasons, which can promote the growth of vegetation. While this might seem beneficial, it can actually contribute to wildfire risk. When these wet periods are followed by hot and dry conditions, the abundant vegetation dries out and becomes a significant fuel source for fires.
            </p>
            <p>
              This "boom and bust" cycle is particularly evident in Mediterranean climates, where wet winters lead to lush vegetation growth, followed by hot, dry summers that turn the vegetation into kindling. This cycle creates an environment ripe for wildfires, as seen in countries like Greece and Spain, where devastating fires have become more frequent and severe.
            </p>

            <h2>Increased Frequency of Lightning Strikes</h2>
            <p>
              Another factor linked to climate change that is influencing wildfire activity is the increased frequency of lightning strikes. Lightning is a common natural ignition source for wildfires, and research indicates that climate change is making lightning strikes more frequent.
            </p>
            <p>
              A study published in the journal Nature Climate Change found that for every 1°C increase in global temperatures, the frequency of lightning strikes could increase by approximately 12%. This increase in lightning activity raises the probability of wildfires starting naturally, particularly in remote and often inaccessible areas. The combination of drier conditions and more frequent lightning strikes creates a perfect storm for wildfire outbreaks.
            </p>

            <h2>Impact on Ecosystems</h2>
            <p>
              The exacerbation of wildfires due to climate change has profound effects on ecosystems. Wildfires can cause immediate destruction of habitats, killing plants and animals and altering the structure and composition of forests and grasslands. The long-term effects can include changes in species composition, with fire-adapted species becoming more dominant and less fire-resistant species declining.
            </p>
            <p>
              For example, in North American forests, species such as lodgepole pine have adapted to periodic wildfires, with their cones requiring heat to release seeds. However, the increasing frequency and intensity of fires can overwhelm even these adapted species, leading to shifts in forest composition and structure.
            </p>
            <p>
              Additionally, the loss of vegetation due to wildfires can lead to increased soil erosion and sediment runoff into waterways, affecting water quality and aquatic habitats. The recovery of ecosystems after severe wildfires can take decades, and in some cases, ecosystems may not return to their previous state.
            </p>

            <h2>Human Health and Economic Impacts</h2>
            <p>
              The impact of climate change-induced wildfires extends beyond ecosystems to human health and economies. Wildfires produce large amounts of smoke, which contains fine particulate matter (PM2.5) and other harmful pollutants. Exposure to wildfire smoke can cause respiratory and cardiovascular problems, exacerbate existing health conditions, and lead to increased hospital admissions and premature deaths.
            </p>
            <p>
              Communities close to wildfire zones are at risk of direct harm from the fires, including loss of life and property. The economic costs of wildfires are substantial, encompassing firefighting expenses, property damage, and loss of income from disrupted businesses and tourism. In addition, the cost of rebuilding and the long-term economic impact on affected communities can be significant.
            </p>

            <h2>Conclusion</h2>
            <p>
              The impact of climate change on wildfires is undeniable, posing significant challenges to ecosystems, human health, and economies. As global temperatures continue to rise and precipitation patterns shift, the conditions for wildfires will become increasingly favorable. Understanding the link between climate change and wildfires is crucial for developing effective strategies to mitigate their impact and protect vulnerable communities and environments.
            </p>
          </div>
      </div>
      <div className="sidebar">
        <h2>Recent Posts</h2>
          <ul className="articles-list">
            {recentPosts.map((post, index) => (
              <li key={index} className="article-card">
                <a href={post.link}>
                  <img src={post.image} alt={post.title} className="article-image" />
                  <div className="article-content">
                    <p className="article-authordate">By {post.author} | {post.date}</p>
                    <h3 className="article-title"><a href={post.link}>{post.title}</a></h3>
                  </div>
                </a>
              </li>
            ))}
          </ul>
      </div>
    </div>
  );
}

export default Article3;
