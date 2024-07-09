import React, { useEffect } from 'react'

function MapHelper() {
    useEffect(() => {
        fetch('/get_fire_data')
          .then(response => response.json())
          .then(data => {
            console.log(data.message);
          })
          .catch(error => {
            console.error('Error fetching fire data:', error);
          });
      }, []);
    
      return (
        <div>
        </div>
      );
}

export default MapHelper
