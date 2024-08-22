import React, { useState } from 'react';
import '../../styles/Services.css';
import Footer from '../Footer';
import axios from 'axios';


function Services() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [message, setMessage] = useState('');

  const handleFileChange = (event) => {
      const file = event.target.files[0];
      setFile(file);
      setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (event) => {
      event.preventDefault();

      if (!file) {
          setMessage('Please select a file first!');
          return;
      }

      const formData = new FormData();
      formData.append('file', file);

      {
          const response = await axios.post('http://localhost:5000/upload', formData, {
              headers: {
                  'Content-Type': 'multipart/form-data',
              },
          });
          setMessage(response.data.message);
      } 
  };

  return (
    <div>
      <div className="container">
        <div className="services-container">
          <h2 className="upload-heading">Upload a File</h2>
          <form onSubmit={handleSubmit} className="upload-form">
            <input type="file" onChange={handleFileChange} />
            {preview && <img src={preview} alt="Preview" style={{ maxWidth: '100%', marginTop: '10px' }} />}

            <button
              type="submit"
              className="upload-button"
            >
              Upload
            </button>
          </form>
          {message && <p>{message}</p>}
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