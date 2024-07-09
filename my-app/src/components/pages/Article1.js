import React, { useEffect, useState } from 'react';
import '../../styles/ArticleStyle.css';
import HeaderImage from '../../assets/images/Ekit.png'; // Adjust the path as needed

// Utility function to calculate reading time
const calculateReadingTime = (text) => {
  const wordsPerMinute = 200; // Average reading speed
  const words = text.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return minutes;
};

function Article1() {
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
          <h1>Essential Guide: Preparing Your Fire Emergency Kit</h1>
          <p className="article-meta">By Kiana Partovi | June 1, 2024 | Estimated reading time: {readingTime} {readingTime == 1 ? 'minute': 'minutes'} </p>
        </div>

        <div className="article-content">
          <p>
            When facing the threat of a wildfire, being prepared can make all the difference. A well-stocked emergency kit is crucial for ensuring the safety and well-being of you, your family, and your pets. This guide will help you assemble a comprehensive fire emergency kit, tailored to your specific needs, so you can be ready to evacuate at a moment’s notice.
          </p>

          <h2>Determining the Size of Your Emergency Kit</h2>
          <p>
            The size of your emergency kit depends on the number of people and pets in your household. For a family of four, a large backpack or a small duffel bag may suffice. If you have a larger family or pets, consider using multiple bags or a larger container with wheels for easy transport. Each family member should have their own small bag containing personal items and essentials.
          </p>

          <h2>Essential Items to Include</h2>

          <h3>Water</h3>
          <p>
            Water is one of the most critical components of any emergency kit. In the event of a wildfire, access to clean water may be limited or cut off entirely, making it essential to have a sufficient supply on hand. Hydration is crucial for maintaining bodily functions, and water is also necessary for basic hygiene and sanitation needs.
          </p>
          <p>
            <strong>Amount</strong>: It is recommended to have at least one gallon of water per person per day for three days. This amount accounts for both drinking and basic hygiene needs. For instance, a family of four should have at least 12 gallons of water stored. In simple terms, at least one gallon per person per day for three days.
          </p>
          <p>
            <strong>Purpose</strong>: The primary purpose of the stored water is twofold: hydration and sanitation. Staying hydrated is vital to keep your body functioning correctly, especially during stressful situations like evacuations. Additionally, water is necessary for basic hygiene practices such as washing hands and brushing teeth, which help prevent the spread of germs and illness.
          </p>
          <p>
            <strong>Storage Tips</strong>:
            <ul>
              <li>
                <strong>Containers</strong>: Use sturdy, non-leaking containers to store water. These containers should be specifically designed for water storage, as they will prevent contamination and ensure the water remains safe to drink.
              </li>
              <li>
                <strong>Location</strong>: Store your water in a cool, dark place to prevent the growth of bacteria and algae. Avoid areas that experience temperature fluctuations, as these can compromise the integrity of the containers.
              </li>
              <li>
                <strong>Rotation</strong>: Regularly rotate your water supply every six months. This ensures that the water remains fresh and safe to use. Mark your containers with the date they were filled to help keep track.
              </li>
              <li>
                <strong>Treatment</strong>: If you need to purify water on the go, consider including water purification tablets or a portable water filter in your emergency kit. These tools can be invaluable if you need to supplement your stored water supply with water from natural sources.
              </li>
            </ul>
          </p>
          <p>
            By following these guidelines, you can ensure that you have a reliable and safe water supply to meet your family’s needs during a wildfire emergency. Remember, water is not just for drinking; it's a vital resource for maintaining overall health and hygiene in challenging conditions.
          </p>

          <h3>Food</h3>
          <p>Food is an essential part of your emergency kit, ensuring that you and your family have the energy and nutrients needed to stay healthy during an evacuation. In a wildfire scenario, access to grocery stores and restaurants may be disrupted, making it crucial to have a stockpile of non-perishable food items that can sustain you for at least 72 hours.</p>
          <p>
            <strong>Types</strong>: It’s important to choose non-perishable food items that are easy to store, require no refrigeration, and have a long shelf life. Some good options include canned goods (such as vegetables, beans, and soups), protein bars, dried fruits, nuts, and ready-to-eat meals (like MREs or freeze-dried options). These items are not only convenient but also provide a balance of carbohydrates, proteins, and fats to keep your energy levels up.
            <br />
            <strong>Amount</strong>: Each person should have enough food to last for at least three days. This typically means having three meals per day per person, plus a few snacks. For a family of four, this translates to 36 meals in total. Consider the dietary needs and preferences of your family members when selecting food items, including any specific requirements for infants, elderly members, or those with food allergies.
            <br />
          </p>
          <p>
            <strong>Storage Tips</strong>:
            <ul>
              <li>
                <strong>Packaging</strong>: Store food in airtight containers or vacuum-sealed bags to prevent spoilage and protect against pests. Make sure to label each container with the date of storage to track expiration dates.
              </li>
              <li>
                <strong>Rotation</strong>: Rotate your food supplies regularly, ideally every six months, to ensure freshness. Use the “first in, first out” method to keep your stockpile updated.
              </li>
              <li>
                <strong>Opener and Utensils</strong>: Include a manual can opener, as electric ones will be useless if the power is out. Also, pack utensils, paper plates, and napkins for convenience.
              </li>
              <li>
                <strong>Location</strong>: Keep your food supplies in a cool, dry place away from direct sunlight. Avoid storing food in areas with extreme temperature fluctuations, as this can affect the quality and shelf life of the items.
              </li>
            </ul>
          </p>
          <p>By carefully selecting and storing non-perishable food items, you can ensure that your family has access to nutritious meals during an emergency. Remember, maintaining a varied diet helps keep spirits up and provides the necessary nutrients to cope with stressful situations.</p>

          <h3>Medications</h3>
          <p>Ensuring you have an adequate supply of medications in your emergency kit is crucial, especially if you or your family members rely on prescription drugs for chronic conditions. In the chaos of a wildfire, accessing pharmacies may be challenging, so it’s essential to be well-prepared.</p>
          <p>
            <strong>Personal Prescriptions</strong>: Make sure to include at least a week’s supply of any prescription medications that you or your family members take regularly. This is particularly important for medications that are life-sustaining or critical to maintaining health, such as insulin for diabetes, inhalers for asthma, or heart medications. Be mindful of expiration dates and rotate these supplies regularly to ensure they remain effective.
            <br />
            <strong>Over-the-Counter</strong>: Besides prescription medications, include a variety of over-the-counter (OTC) medications that can address common health issues during an emergency. Pain relievers like ibuprofen or acetaminophen can help manage headaches, muscle aches, or fever. Antacids can provide relief from indigestion, and anti-diarrheal medications can be crucial if someone in your family experiences gastrointestinal distress. Vitamins are also a good addition to help maintain overall health when dietary intake might be compromised.
          </p>
          <p>
            <strong>Storage Tips</strong>:
            <ul>
              <li>
                <strong>Original Packaging</strong>: Keep medications in their original bottles or packaging with clear labels. This helps in identifying the medication, dosage, and expiration dates, and provides essential information for emergency responders or healthcare providers if needed.
              </li>
              <li>
                <strong>Waterproof Container</strong>: Store medications in a waterproof container or ziplock bag to protect them from moisture. This is particularly important in an evacuation scenario where items might get exposed to the elements.
              </li>
              <li>
                <strong>Accessibility</strong>: Ensure medications are easily accessible within your emergency kit. In an emergency, you might need to grab them quickly without having to search through the entire kit.
              </li>
              <li>
                <strong>Documentation</strong>: Include a list of all medications, dosages, and prescribing doctors in your emergency kit. This can be invaluable if you need to obtain refills or if someone else needs to help manage your medications.
              </li>
            </ul>
          </p>
          <p>By taking these precautions, you can ensure that you and your family have the necessary medications to manage health conditions during a wildfire emergency. Proper preparation can alleviate a significant amount of stress and contribute to better health outcomes in challenging situations.</p>

          <h3>Important Documents</h3>
          <p>In the event of an emergency, having quick access to important documents can be crucial for recovery and maintaining essential services. These documents can prove your identity, ownership, and eligibility for various benefits and services. Ensuring these are part of your emergency kit is a smart precaution.</p>
          <p>
            <strong>Copies</strong>: Include photocopies or digital scans of vital documents such as:
            <ul>
              <li>
                 Birth certificates
              </li>
              <li>
                 Passports
              </li>
              <li>
                 Medical records and prescriptions
              </li>
              <li>
                Insurance policies (health, home, auto, etc.) 
              </li>
              <li>
                Bank account numbers and financial records
              </li>
              <li>
                Mortgage or lease agreements
              </li>
              <li>
                Social Security cards
              </li>
              <li>
                Driver’s licenses or state IDs
              </li>
              <li>
                Wills, power of attorney documents, and other legal papers
              </li>
            </ul>
          </p>
          <p>Having these documents on hand can facilitate quicker access to services, support, and financial resources following an evacuation.</p>
          <p>
            <strong>Storage Tips</strong>:
            <ul>
              <li>
                <strong>Waterproof and Fireproof Container</strong>: Store your documents in a waterproof and fireproof container to protect them from the elements. These containers are designed to withstand extreme conditions and keep your documents safe.
              </li>
              <li>
                <strong>Ziplock Bags</strong>: As an added layer of protection, place each document in a ziplock bag before placing them in the waterproof and fireproof container. This helps keep documents dry even if the container is opened in a wet environment.
              </li>
              <li>
                <strong>Digital Copies</strong>: In addition to physical copies, store digital copies of these documents on a USB drive or secure cloud storage. This provides an additional backup and can be accessed remotely if necessary.
              </li>
              <li>
                <strong>Accessibility</strong>: Keep the document container in an easily accessible part of your emergency kit, so you can quickly grab it if you need to evacuate. Inform all family members where the documents are stored.
              </li>
            </ul>
          </p>
          <p>By following these guidelines, you ensure that you have all necessary documentation to prove identity, secure resources, and manage affairs during an emergency. These precautions can significantly reduce stress and streamline the recovery process in the aftermath of a disaster.</p>

          <h3>First Aid Kit</h3>
          <p>A well-stocked first aid kit is an essential component of your emergency preparedness plan. It can help you manage minor injuries and illnesses during a wildfire evacuation until professional medical help is available. Here’s what to include and how to customize it to meet your family’s specific needs:</p>
          <p>
            <strong>Contents</strong>: Your first aid kit should include a variety of supplies to address different types of injuries and medical situations. Essential items include: bandages, gauze, adhesive tape, antiseptic wipes, scissors, tweezers, a thermometer, and a first aid manual.
            <br />
            <strong>Customization Tips</strong>: Include any special items needed by your family members, such as allergy medications or inhalers.
          </p>
          <p>
            <strong>Storage Tips</strong>:
            <ul>
              <li>
                <strong> Container</strong>: Use a durable, waterproof container to keep your first aid supplies organized and protected from the elements. A clear, plastic container or a dedicated first aid box with compartments works well.
              </li>
              <li>
                <strong>Labeling</strong>: Clearly label the container and all individual items to make it easy to find what you need in an emergency.
              </li>
              <li>
                <strong>Accessibility</strong>: Store the first aid kit in an easily accessible part of your emergency kit. Make sure all family members know where it is and how to use the contents.
              </li>
              <li>
                <strong>Regular Checks</strong>: Periodically check the kit to replace expired items and restock supplies that have been used. Aim to do this every six months to ensure everything is up to date.
              </li>
            </ul>
          </p>
          <p>By following these guidelines, you can create a comprehensive first aid kit that equips you to handle minor medical emergencies during a wildfire evacuation. Being prepared with the right supplies can provide peace of mind and help you care for your family effectively in challenging situations.</p>

          <h3>Clothing and Bedding</h3>
          <p> Having appropriate clothing and bedding in your emergency kit is vital for ensuring comfort and protection during an evacuation. Wildfires can create unpredictable and harsh conditions, making it essential to be prepared with suitable attire and sleeping arrangements.</p>
          <p>
            <strong>Clothing</strong>: Pack one change of clothes per person. This should include:
            <ul>
              <li>
                <strong> Sturdy Shoes</strong>: Comfortable and durable shoes are crucial for walking long distances and navigating through debris.
              </li>
              <li>
                <strong>Hats and Gloves</strong>: Hats can protect you from the sun and falling ash, while gloves can protect your hands from cuts and burns.
              </li>
              <li>
                <strong>Layers</strong>: Include layers such as t-shirts, long-sleeved shirts, and a lightweight jacket. Layers allow you to adjust to varying temperatures.
              </li>
              <li>
                <strong>Underwear and Socks</strong>: Include an extra pair of underwear and socks to maintain hygiene and comfort.
              </li>
              <li>
                <strong>Weather-Appropriate Gear</strong>: Depending on the season, pack additional items like rain gear, thermal wear, or sun protection.
              </li>
            </ul>
          </p>
          <p>
            <strong>Bedding</strong>: Ensure each person has adequate bedding to stay warm and comfortable:
            <ul>
              <li>
                <strong>Sleeping Bags</strong>: Lightweight, compact sleeping bags that are easy to carry and provide sufficient warmth.
              </li>
              <li>
                <strong>Blankets</strong>: Fleece or thermal blankets can be added for extra warmth or used as ground cover.
              </li>
              <li>
                <strong>Inflatable Mattresses or Sleeping Pads</strong>: These can provide added comfort by insulating you from the cold ground and offering a more comfortable sleeping surface.
              </li>
            </ul>
          </p>
          <p>
            <strong>Storage Tips</strong>:
            <ul>
              <li>
                <strong>Waterproof Bag</strong>: Pack clothing and bedding items in a waterproof bag to protect them from moisture and damage. This is especially important in an evacuation where you might encounter wet conditions.
              </li>
              <li>
                <strong>Compression Bags</strong>: Use compression bags to save space and keep items organized. These bags can also help protect your clothes and bedding from dirt and dust.
              </li>
              <li>
                <strong>Accessibility</strong>: Store these items in a part of your emergency kit that is easy to reach. Quick access to dry clothes and bedding can make a significant difference in comfort and morale during an evacuation.
              </li>
            </ul>
          </p>
          <p>By including appropriate clothing and bedding in your emergency kit, you can ensure that your family stays comfortable and protected in the face of a wildfire evacuation. Proper preparation can significantly enhance your ability to cope with the physical and emotional challenges of such an event.</p>

          <h3>Personal Hygiene Items</h3>
          <p>Maintaining personal hygiene during an emergency is crucial for both comfort and health. Here’s a detailed list of items to include in your emergency kit:</p>
          <p>
            <strong>Basics</strong>: Toothbrushes, toothpaste, soap, deodorant, feminine hygiene products, and toilet paper.
            <br />
            <strong>Sanitation</strong>: Hand sanitizer and moist towelettes.
            <br />
            <strong>Additional Hygiene Items</strong>: Hairbrush or Comb, Shampoo and Conditioner, Razors, Nail Clippers, Lip Balm, Face Masks. 
            <br />
          </p>
          <p>
            <strong>Storage Tips</strong>:
            <ul>
              <li>
                <strong>Travel-Sized Items</strong>: Opt for travel-sized versions of hygiene products to save space in your emergency kit.
              </li>
              <li>
                <strong>Waterproof Bags</strong>: Store all hygiene items in waterproof bags to protect them from moisture and spills.
              </li>
              <li>
                <strong>Organization</strong>: Use small pouches or ziplock bags to organize hygiene items, making them easy to find and access quickly.
              </li>
            </ul>
          </p>
          <p> By ensuring that your emergency kit includes essential personal hygiene items, you can help maintain cleanliness and health during an evacuation. Proper hygiene can also boost morale and provide a sense of normalcy in challenging situations.</p>

          <h3>Tools and Supplies</h3>
          <p> Having the right tools and supplies in your emergency kit can make a significant difference in your ability to respond to unexpected challenges during a wildfire evacuation. Here’s an expanded list of essential items to include: </p>
          <p>
            <strong>Multipurpose Tool</strong>: A <strong>Swiss Army knife</strong> or a <strong>multi-tool</strong> is invaluable due to its versatility. These tools typically come with various attachments such as blades, screwdrivers, bottle openers, scissors, and pliers. They can be used for a wide range of tasks, from opening cans and cutting materials to making quick repairs.
            <br />
            <strong>Flashlight</strong>: A reliable <strong>flashlight</strong> is crucial for visibility in low-light or dark conditions. Choose a durable, weather-resistant flashlight with a long battery life. LED flashlights are a good choice due to their brightness and efficiency. Include <strong>extra batteries</strong> to ensure the flashlight remains operational. Consider storing the batteries separately to prevent them from draining while in storage.
            <br />
            <strong>Radio</strong>: A <strong>battery-powered</strong> or <strong>hand-crank radio</strong> is essential for staying updated on emergency information, weather alerts, and evacuation orders. In areas affected by wildfires, communication networks can be disrupted, making a radio a reliable source of information.
            <br />
            <strong>Other Supplies</strong>: Duct tape, plastic sheeting, and a whistle.
          </p>
          <p>
  <strong>Additional Items to Consider</strong>:
  <ul>
    <li>
      <strong>Paracord</strong>: This strong, lightweight cord can be used for securing items, setting up shelters, or even as an emergency rope.
    </li>
    <li>
      <strong>Firestarter</strong>: Waterproof matches, a lighter, or a fire-starting kit can be invaluable if you need to start a fire for warmth or cooking.
    </li>
    <li>
      <strong>Compass</strong>: A basic compass can help with navigation if you are in an unfamiliar area or if visibility is low due to smoke.
    </li>
    <li>
      <strong>Safety Goggles and Masks</strong>: These can protect your eyes and respiratory system from smoke, ash, and debris.
    </li>
  </ul>
</p>

          <p>By including these tools and supplies in your emergency kit, you’ll be better prepared to handle a range of situations and ensure the safety and well-being of your family during a wildfire evacuation. Proper preparation with the right equipment can significantly enhance your resilience and ability to respond effectively in an emergency.</p>
          <h2>Special Considerations for Pets</h2>
          <p>
            <strong>Food and Water</strong>: Three days’ worth of food and water for each pet.
            <br />
            <strong>Medication</strong>: Any necessary medications for your pets.
            <br />
            <strong>Identification</strong>: Copies of pet identification, registration, vaccination records, and a photo of you with your pet.
            <br />
            <strong>Other Supplies</strong>: A leash, harness, carrier, litter box, and waste bags.
          </p>

          <h2>Additional Tips for Your Emergency Kit</h2>
          <p>
            <strong>Regular Updates</strong>: Check and update your emergency kit every six months to replace expired items and adjust for any changes in your family’s needs.
            <br />
            <strong>Accessibility</strong>: Store your emergency kit in an easily accessible location, known to all family members.
            <br />
            <strong>Individual Kits</strong>: Encourage each family member to have their own small bag with personal items, especially important for children and pets.
          </p>

          <h2>Conclusion</h2>
          <p>
            Preparing a comprehensive fire emergency kit is a vital step in ensuring the safety and well-being of your family and pets during a wildfire. By including essential items like water, food, medications, and important documents, and tailoring the kit to meet your specific needs, you can be ready to evacuate quickly and confidently. Remember, the key to effective emergency preparedness is regular updates and making sure everyone in your household knows where the kit is located and what it contains. Stay safe and be prepared!
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

export default Article1;
