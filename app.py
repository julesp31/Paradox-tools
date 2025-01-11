from flask import Flask, render_template, request, jsonify
import json
from main import process_input # Import function for processing input text

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')  # Renders the frontend HTML

@app.route('/process', methods=['POST'])
def process():
    data = request.get_json()
    input_text = data.get('text', '')
    
    # Calls processing function assuming `process_input` returns a string
    output = process_input(input_text)
    return jsonify({"output": output})

if __name__ == '__main__':
    app.run(debug=True)