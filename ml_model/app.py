from flask_cors import CORS
from flask import Flask, request, jsonify
import joblib
import numpy as np

app = Flask(__name__)
CORS(app)

model = joblib.load("diabetes_model.pkl")

@app.route("/predict", methods=["POST"])
def predict():
    data = request.json

    values = [
        data["pregnancies"],
        data["glucose"],
        data["bloodPressure"],
        data["skinThickness"],
        data["insulin"],
        data["bmi"],
        data["dpf"],
        data["age"]
    ]

    prediction = model.predict([values])[0]

    result = "High Risk" if prediction == 1 else "Low Risk"

    return jsonify({"prediction": result})

if __name__ == "__main__":
    app.run(port=8000, debug=True)