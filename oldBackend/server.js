const db = require("./db");

const express = require("express");
const cors = require("cors");

const trackerRoutes = require("./routes/trackerRoutes");
console.log("Tracker routes loaded");

const app = express();



app.use(cors());
app.use(express.json());



app.use("/api/tracker", trackerRoutes);


app.get("/", (req, res) => {
    res.send("Diasense backend running");
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
