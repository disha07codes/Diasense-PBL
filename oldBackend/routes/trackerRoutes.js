console.log("trackerRoutes file loaded");
const express = require("express");
const router = express.Router();
const db = require("../db");
const { exec } = require("child_process");
const path = require("path");

router.get("/test", (req, res) => {
    res.json({ message: "Tracker route working" });
});


// ADD reading
router.post("/add", (req, res) => {
    const {
        user_id,
        reading_date,
        reading_time,
        glucose_value,
        reading_type,
        notes
    } = req.body;

    const sql = `
        INSERT INTO glucose_readings
        (user_id, reading_date, reading_time, glucose_value, reading_type, notes)
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [user_id, reading_date, reading_time, glucose_value, reading_type, notes],
        (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: "Database error" });
            }
            res.json({ message: "Reading added successfully" });
        }
    );
});

// ✅ GET readings
// ✅ GET readings
router.get("/:userId", (req, res) => {

    const userId = req.params.userId;

    const sql = `
        SELECT * FROM glucose_readings
        WHERE user_id = ?
        ORDER BY reading_date DESC, reading_time DESC
    `;

    db.query(sql, [userId], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Database error" });
        }
        res.json(results);
    });
});

router.post("/predict", (req, res) => {

    const {
        pregnancies,
        glucose,
        bp,
        skin,
        insulin,
        bmi,
        dpf,
        age
    } = req.body;

    // Path to predict.py
    const scriptPath = path.join(__dirname, "..", "..", "ml_model", "predict.py");

   const command = `python3 "${scriptPath}" ${pregnancies} ${glucose} ${bp} ${skin} ${insulin} ${bmi} ${dpf} ${age}`;

    exec(command, (error, stdout, stderr) => {

        if (error) {
            console.error("Prediction error:", error);
            return res.status(500).json({ error: "Prediction failed" });
        }

        const risk = stdout.trim();

        let suggestion = "";

        if (risk === "High Risk") {
            suggestion = "Maintain strict diet, reduce sugar intake, exercise daily and consult a doctor.";
        } else {
            suggestion = "Continue healthy lifestyle and monitor glucose regularly.";
        }

        res.json({ risk, suggestion });
    });
});



module.exports = router;
