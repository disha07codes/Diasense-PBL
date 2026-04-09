import joblib
import sys
import numpy as np

# Load trained model
model = joblib.load("diabetes_model.pkl")

# Get input values from command line
# Order must match dataset:
# Pregnancies, Glucose, BloodPressure, SkinThickness,
# Insulin, BMI, DiabetesPedigreeFunction, Age

values = list(map(float, sys.argv[1:]))

prediction = model.predict([values])[0]

if prediction == 1:
    print("High Risk")
else:
    print("Low Risk")