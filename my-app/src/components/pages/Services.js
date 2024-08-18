import React, { useState } from 'react';
import '../../styles/Services.css';
import Footer from '../Footer';

function Services() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (file) {
      // Handle the file upload here, e.g., send it to a server
      console.log('File ready to be uploaded:', file);
    } else {
      console.log('No file selected');
    }
  };

  return (
    <div> 
      <div className="container">
        <div className="services-container">
          <h2 className="upload-heading">Upload a File</h2>
          <form onSubmit={handleSubmit} className="upload-form">
            <input 
              type="file" 
              onChange={handleFileChange} 
              className="file-input"
            />
            <button 
              type="submit" 
              className="upload-button"
            >
              Upload
            </button>
          </form>
          {file && (
            <div className="file-info">
              <h4>Selected File:</h4>
              <p>{file.name}</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Services