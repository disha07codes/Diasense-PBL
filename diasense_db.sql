create database diasense_db;
use diasense_db;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE glucose_readings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    reading_date DATE,
    reading_time TIME,
    glucose_value INT,
    reading_type VARCHAR(50),
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
show tables;
INSERT INTO users (name, email, password)
VALUES ('Test User', 'test@diasense.com', 'test123');
SELECT * FROM users;
SELECT * FROM glucose_readings;

describe glucose_readings;

SELECT * FROM glucose_readings;
SELECT * FROM users;
INSERT INTO glucose_readings 
(user_id, reading_date, reading_time, glucose_value, reading_type, notes)
VALUES
(1,'2026-02-01','08:00',95,'Fasting','Normal'),
(1,'2026-02-02','08:10',110,'Fasting',''),
(1,'2026-02-03','14:00',180,'Post Lunch',''),
(1,'2026-02-04','20:00',150,'Post Dinner','');






