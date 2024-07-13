import React, { useEffect, useState } from 'react';
import '../../styles/FireInfo.css'; 
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';
import Image from '../../assets/images/FirePic.png';
import FireChart from '../FireChart';
import Accordion from '../Accordion'; // Import the accordion component
import Footer from '../Footer';
import ImageSlider from '../ImageSlider';

import Image1 from '../../assets/images/smoke.webp';
import Image2 from '../../assets/images/fireandsmoke.avif'
import Image3 from '../../assets/images/forestfire.jpg';
import Image4 from '../../assets/images/wildfire-in-Colorado.webp';

const slideData = [
  {
    index: 0,
    headline: 'West Coast WildFire Smoke Stretches To Michigan',
    button: 'Shop now',
    src: Image1
  },
  {
    index: 1,
    headline: 'Satellites Watch WildFires Rage',
    button: 'Book travel',
    src: Image3
  },
  {
    index: 2,
    headline: 'Intensity of WildFires',
    button: 'Listen',
    src: Image2
  },
  {
    index: 3,
    headline: 'Climate Change Making WildFires Worse in Colorado',
    button: 'Get Focused',
    src: Image4
  }
];

function FireInfo() {
    const [hoverActive, setHoverActive] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, []);

    const handleMouseEnter = () => {
        setHoverActive(true);
    };

    return (
        <div>
            <div className="color-container">
                <div className="fire-info-container">
                    <header className="header">
                        <h1>Understanding Wildfires</h1>
                    </header>
                    <section className="section">
                        <h2>What are Wildfires?</h2>
                        <div 
                            className={`hover-container ${hoverActive ? 'hover-active' : ''}`} 
                            onMouseEnter={handleMouseEnter}
                        >
                            <p className="text">
                            Wildfires are a devastating force of nature that can obliterate vast expanses of forests, decimate wildlife populations, and threaten human lives and property. These raging infernos are also a major source of air pollution and greenhouse gas emissions, significantly contributing to climate change and affecting air quality across regions. Wildfires, by definition, are uncontrolled blazes that spread rapidly across vegetation, including dense forests, open grasslands, and other natural areas. They can ignite from natural causes like lightning strikes, or be triggered by human activities such as unattended campfires, carelessly discarded cigarettes, or even deliberate acts of arson. The destruction caused by wildfires is often swift and merciless, leaving behind a charred landscape and a long path to recovery for affected communities and ecosystems.
                            </p>
                            <img className="image" src={Image} alt="Wildfire Image" />
                        </div>
                    </section>
                    <Accordion title="Causes of Wildfires">
                        <ul className="causes-list">
                            <li className="bold-check">Natural Causes:</li>
                            <li>Lightning: Lightning strikes can ignite wildfires, especially in dry areas.</li>
                            <li>Volcanic eruptions: Lava and ash from volcanic eruptions can start fires.</li>
                            <li>Spontaneous combustion: Certain types of vegetation can spontaneously combust under the right conditions.</li>
                            <li className="bold-check">Human Activities:</li>
                            <li>Unattended campfires: Campfires left unattended or not properly extinguished can spread and become wildfires.</li>
                            <li>Discarded cigarettes: Cigarettes that are not disposed of properly can ignite dry vegetation.</li>
                            <li>Burning debris: Burning leaves or other debris can get out of control and start wildfires.</li>
                            <li>Arson: Deliberate acts of setting fires can lead to widespread wildfires.</li>
                            <li className="bold-check">Climate and Environmental Factors:</li>
                            <li>Drought: Prolonged periods of drought create dry conditions that make vegetation more flammable.</li>
                            <li>High Temperatures: Increased temperatures can dry out vegetation, increasing the risk of ignition.</li>
                            <li>Wind: Strong winds can spread flames rapidly and carry embers to ignite new fires.</li>
                            <li>Climate Change: Changes in climate patterns, such as increased frequency and intensity of heatwaves, contribute to higher wildfire risks.</li>
                            <li className="bold-check">Technological Causes:</li>
                            <li>Power lines: Electrical faults or sparks from power lines can ignite nearby vegetation.</li>
                            <li>Equipment Use: Sparks from equipment such as chainsaws, grinders, and mowers can start fires.</li>
                            <li className="bold-check">Additional Human Activities:</li>
                            <li>Equipment Use: Sparks from equipment like chainsaws, lawnmowers, and other machinery can ignite fires, especially in dry conditions.</li>
                            <li>Power Lines: Downed power lines or electrical malfunctions can spark fires, particularly during high winds or storms.</li>
                            <li>Agricultural Practices: Controlled burns used in agriculture can escape control and become wildfires.</li>
                            <li>Vehicle-Related Fires: Hot exhaust systems, brake malfunctions, or accidents can cause fires when vehicles are in contact with dry vegetation.</li>
                            <li>Fireworks: Improper use of fireworks, especially during dry seasons, can lead to unintended wildfires.</li>
                        </ul>
                    </Accordion>
                    <Accordion title="Prevention Tips">
                        <ul className="prevention-tips">
                            <li>Never leave a campfire unattended. Ensure it is completely extinguished before leaving.</li>
                            <li>Follow local regulations when burning debris. Use a burn barrel with a screen on top.</li>
                            <li>Dispose of smoking materials properly. Do not discard cigarettes or matches on the ground.</li>
                            <li>Create a defensible space around your home by clearing flammable vegetation.</li>
                            <li>Stay informed about fire weather conditions and alerts in your area.</li>
                            <li>Maintain your vehicle and avoid parking on dry grass.</li>
                            <li>Install spark arresters on all motorized equipment.</li>
                            <li>Properly store flammable materials away from your home.</li>
                            <li>Use fire-resistant landscaping.</li>
                            <li>Create a buffer zone of at least 30 feet around your home.</li>
                            <li>Regularly clean your roof and gutters.</li>
                            <li>Wet down your lawn, shrubs, and trees during dry periods.</li>
                            <li>Prepare an emergency plan and practice it regularly.</li>
                            <li>Install smoke detectors and ensure they are in working condition.</li>
                            <li>Report suspicious activities to local authorities.</li>
                        </ul>
                    </Accordion>
                    <Accordion title="Emergency Response">
                        <p className="highlight-text">If a wildfire threatens your area, follow these steps:</p>
                        <ul className="prevention-tips">
                            <li>Stay calm and follow evacuation orders from local authorities.</li>
                            <li>Prepare an emergency kit with essential items like water, food, medications, and important documents.</li>
                            <li>Protect your home by removing flammable materials from around the structure and closing all windows and doors.</li>
                            <li>Monitor local news and weather reports for updates on the fire's status.</li>
                        </ul>
                    </Accordion>
                    <section className="section">
                        <h2>Wildfire Statistics</h2>
                        <FireChart />
                    </section>
                    <section className="section">
                        <h2>Wildfire Images</h2>
                        <div id="app">
                            <ImageSlider heading="Wildfire Images" slides={slideData} />
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default FireInfo;
