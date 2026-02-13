console.log("trackerRoutes file loaded");
const express = require("express");
const router = express.Router();
const db = require("../db");

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



module.exports = router;
