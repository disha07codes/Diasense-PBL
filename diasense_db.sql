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




