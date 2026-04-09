# 🩺 Diasense – Diabetes Monitoring & Prediction System

A full-stack web application designed to help users monitor glucose levels and predict diabetes risk using Machine Learning.

---

## 🚀 Features

- 📊 Add and track daily glucose readings
- 📈 Visualize glucose trends with graphs
- 🧠 Predict diabetes risk using ML model
- 📅 Store readings with date, time, and notes
- 📌 Categorize readings (fasting, post-meal, etc.)
- ⚡ Real-time updates from backend

---

## 🛠️ Tech Stack

### Frontend
- Next.js
- Tailwind CSS
- Chart.js

### Backend
- Node.js
- Express.js
- MySQL

### Machine Learning
- Python
- Flask API
- Scikit-learn

---

## 🔄 Application Flow

### 1️⃣ User Interaction (Frontend)
- User enters glucose reading
- User can add details like date, time, and notes
- User clicks **Add Reading**

---

### 2️⃣ Data Sent to Backend
- Frontend sends request to:
```

POST /add

```
- Backend receives glucose value

---

### 3️⃣ Database Storage
- Backend stores data in MySQL database
- Each record includes:
- Glucose value
- Date & time
- Additional notes

---

### 4️⃣ Fetching Data
- Frontend calls:
```

GET /data

```
- Backend sends stored readings

---

### 5️⃣ Data Visualization
- Frontend displays:
- 📊 Statistics (average, highest, lowest)
- 📈 Line graph using Chart.js
- 📋 Reading history

---

### 6️⃣ Machine Learning Prediction
- User clicks **Predict Risk**
- Frontend sends request to:
```

POST /predict

````

---

### 7️⃣ ML Processing
- Flask API:
- Receives health parameters
- Passes data to trained ML model
- Model predicts risk

---

### 8️⃣ Result Display
- ML returns:
- 🔴 High Risk
- 🟢 Low Risk
- Frontend displays result instantly

---

### 2️⃣ Start Backend


cd Backend
npm install
node server.js




### 3️⃣ Start Frontend


cd frontend
npm install
npm run dev


---

### 4️⃣ Start ML Model


cd ml_model
pip install flask flask-cors scikit-learn joblib
python app.py


---

## 📡 API Endpoints

### Backend

* `GET /data` → Fetch readings
* `POST /add` → Add reading

### ML

* `POST /predict` → Predict diabetes risk

---



## ⭐ Conclusion

Diasense is a complete full-stack + machine learning integrated system that enables real-time health tracking and intelligent prediction for diabetes management.

