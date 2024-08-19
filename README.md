# BlazeGuard-ML-Project

Make sure to download the dataset before you run this program and to have all the directories matching with what the code has.

Dataset Link: https://www.kaggle.com/datasets/abdelghaniaaba/wildfire-prediction-dataset/

To Run The whole operation:

1. train model
2. run main.py
    - python3 main.py
3. Create react app
    - npx create-react-app my-app
    - cd my-app
    - cd src
    - touch ImageUpload.js
    - In ImageUpload.js Paste the code below
```
import React, { useState } from 'react';
import axios from 'axios';

function ImageUpload() {
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
            <h1>Image Upload</h1>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileChange} />
                {preview && <img src={preview} alt="Preview" style={{ maxWidth: '100%', marginTop: '10px' }} />}
                <button type="submit" style={{ marginTop: '10px' }}>Upload</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default ImageUpload;
```
    
    - In App.js paste the code below
```
import React from 'react';
import './App.css';
import ImageUpload from './ImageUpload';

function App() {
    return (
        <div className="App">
            <ImageUpload />
        </div>
    );
}

export default App;
```
    - npm start

This makes a simple react program that will allow you to upload an image and have it detect if it is a wildfire or not

4. react page should pop up to your screen and it'll allow you to incert an image