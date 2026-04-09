const express = require("express");
const cors = require("cors");
const db = require("./db/db");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});


app.listen(5000, () => {
  console.log("Server running on port 5000");
});

app.get("/data", (req, res) => {
  const sql = "SELECT * FROM glucose_readings ORDER BY created_at DESC";

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error fetching data");
    } else {
      res.json(result);
    }
  });
});