from flask import Flask, request, jsonify
from flask_cors import CORS
from werkzeug.utils import secure_filename
import tensorflow as tf
from tensorflow.keras.models import load_model
import numpy as np
import cv2
import os

def classification(image):
  img = cv2.imread(image)
  img_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
  resize = tf.image.resize(img_rgb, (256,256))
  yhat = new_model.predict(np.expand_dims(resize/255, 0))

  if yhat > .5:
      return "This is not a wildfire"
  else:
       return "This is a wildfire"

app = Flask(__name__)
CORS(app)

# Set the upload folder and allowed extensions
UPLOAD_FOLDER = 'uploads/'
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
new_model = load_model('/mnt/c/Users/jairo/OneDrive/Desktop/image_flask_prac/models/imageclassifier.h5')
image_dir = '/mnt/c/Users/jairo/OneDrive/Desktop/image_flask_prac/uploads'

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({'message': 'No file part'}), 400
    file = request.files['file']
    
    if file.filename == '':
        return jsonify({'message': 'No selected file'}), 400
    
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))

        image_path = os.path.join(image_dir, filename)
  
        # #classification the img file
        # print(classification(filename))

        jsonify({'message': 'File uploaded successfully!'}), 200
        message = classification(image_path)
        return jsonify({'message': message})
    else:
        return jsonify({'message': 'File type not allowed'}), 400

if __name__ == '__main__':
    app.run(debug=True)