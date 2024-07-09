from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
import requests
import json
import folium
from folium.plugins import TimestampedGeoJson
from datetime import datetime, timedelta

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes and methods

# Configure the SQLite database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///contacts.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# Define the Contact model
class Contact(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    message = db.Column(db.Text, nullable=False)

# Create the database and tables
with app.app_context():
    db.create_all()

@app.route('/')
def hello():
    return "Hello, Flask!"

@app.route('/api/contact', methods=['POST'])
def contact():
    data = request.get_json()
    print(f"Received data: {data}")  # Log received data
    firstName = data.get('firstName')
    lastName = data.get('lastName')
    email = data.get('email')
    message = data.get('message')

    if not firstName or not lastName or not email or not message:
        return jsonify({'error': 'Please provide all required fields.'}), 400

    # Log the data
    print(f"First Name: {firstName}, Last Name: {lastName}, Email: {email}, Message: {message}")

    # Create a new contact and add it to the database
    new_contact = Contact(first_name=firstName, last_name=lastName, email=email, message=message)
    db.session.add(new_contact)
    db.session.commit()

    return jsonify({'message': 'Message received successfully!'}), 200

@app.route('/get_fire_data')
def get_fire_data():
    print("Fetching fire data...") 
    api_endpoint = "https://firms.modaps.eosdis.nasa.gov/api/viirs-c2"
    headers = {
        'Authorization': 'Bearer YOUR_API_KEY'  # Replace YOUR_API_KEY with your actual API key/token
    }
    params = {
        'country': 'USA',  # You can change this to any country
        'date': (datetime.now() - timedelta(days=1)).strftime('%Y-%m-%d'),
        'output': 'json'
    }

    response = requests.get(api_endpoint, headers=headers, params=params)
    data = response.json()

    features = []
    for fire in data:
        features.append({
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [fire['longitude'], fire['latitude']],
            },
            'properties': {
                'time': fire['acq_date'] + 'T' + fire['acq_time'],
                'popup': f"Brightness: {fire['brightness']}, Confidence: {fire['confidence']}"
            }
        })

    geojson = {
        'type': 'FeatureCollection',
        'features': features
    }

    # Initialize a Folium map
    m = folium.Map(location=[37.0902, -95.7129], zoom_start=5)

    # Add the GeoJSON to the map with a timestamped layer
    TimestampedGeoJson(
        geojson,
        transition_time=200,
        period='PT1H',
        add_last_point=True,
        auto_play=False,
        loop=False
    ).add_to(m)

    # Save the map to an HTML file
    m.save('templates/fires_map.html')

    return jsonify({"message": "Map updated"}), 200

@app.route('/fire_map')
def fire_map():
    return render_template('fires_map.html')

if __name__ == '__main__':
    print("Starting Flask server...")
    app.run(debug=True, host='0.0.0.0', port=5001)
