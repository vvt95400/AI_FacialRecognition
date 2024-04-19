from flask import Flask, jsonify,request
from flask_cors import CORS
import util

app = Flask(__name__)
CORS(app)

@app.route('/api/data', methods=['GET'])
def get_data():
    data = {"message": "Hello from Flask!"}
    return jsonify(data)

@app.route('/classify_image', methods = ['GET','POST'])
def classify_image():
    image_data = request.form('image_data')
    response = jsonify(util.classify_image(image_data))
    response.headers.add_header('Access-Control-Allow-Origin','*')
    return response

if __name__ == '__main__':
    print("Starting Python Flask Server for Image Classification")
    util.load_saved_artifacts()
    app.run(port = 5000)