from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import numpy as np
import json

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load the SVM model
with open('svm_model.pkl', 'rb') as f:
    svm_model = pickle.load(f)

# Load the TF-IDF vectorizer
with open('vectorizer.pkl', 'rb') as f:
    vectorizer = pickle.load(f)

class NumpyEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, np.integer):
            return int(obj)
        elif isinstance(obj, np.floating):
            return float(obj)
        elif isinstance(obj, np.ndarray):
            return obj.tolist()
        else:
            return super(NumpyEncoder, self).default(obj)

@app.route('/predictSentiment', methods=['POST'])
def predict_sentiment():
    try:
        # Get the text data from the request
        text_data = request.json.get('text')

        # Preprocess the text data using the loaded vectorizer
        text_data_tfidf = vectorizer.transform([text_data])

        # Convert sparse matrix to dense matrix
        text_data_dense = text_data_tfidf.toarray()

        # Make predictions using the loaded model
        prediction = svm_model.predict(text_data_dense)[0]

        # Map the integer prediction to the corresponding label
        sentiment_label = "positive" if prediction == 1 else "negative"

        # Return the sentiment label as a JSON response
        return jsonify({'sentiment': sentiment_label}), 200, {'Content-Type': 'application/json'}
    except Exception as e:
        return jsonify({'error': str(e)}), 500  # Return error message with status code 500


if __name__ == '__main__':
    app.run(debug=True)
