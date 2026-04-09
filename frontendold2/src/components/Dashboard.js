import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardContent, CardTitle } from "./Card";
import { Button } from "./Button";
import { Input } from "./Input";
import { StatCard } from "./StatCard";
import { PageWrapper } from "./PageWrapper";

function Dashboard() {

  const [readings, setReadings] = useState([]);
  const [newReading, setNewReading] = useState("");

  // Fetch data
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get("http://localhost:5000/data")
      .then(res => setReadings(res.data))
      .catch(err => console.log(err));
  };

  // Add reading
  const handleAddReading = () => {
    if (!newReading) return;

    axios.post("http://localhost:5000/add", {
      glucose: newReading
    })
    .then(() => {
      fetchData();
      setNewReading("");
    })
    .catch(err => console.log(err));
  };

  // Stats
  const values = readings.map(r => r.glucose_value || r.glucose || 0);

  const average = values.length
    ? Math.round(values.reduce((a, b) => a + b, 0) / values.length)
    : 0;

  const highest = values.length ? Math.max(...values) : 0;
  const lowest = values.length ? Math.min(...values) : 0;

  return (
    <PageWrapper title="Dashboard">

      {/* Add Reading */}
      <Card>
        <CardTitle>Add Glucose Reading</CardTitle>
        <CardContent>
          <div style={{ display: "flex", gap: "10px" }}>
            <Input
              type="number"
              placeholder="Enter glucose"
              value={newReading}
              onChange={(e) => setNewReading(e.target.value)}
            />
            <Button onClick={handleAddReading}>Add</Button>
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <h2 style={{ marginTop: "20px" }}>Statistics</h2>

      <div style={{ display: "flex", gap: "10px" }}>
        <StatCard label="Average" value={average} unit="mg/dL" />
        <StatCard label="Highest" value={highest} unit="mg/dL" />
        <StatCard label="Lowest" value={lowest} unit="mg/dL" />
      </div>

      {/* Chart Placeholder */}
      <Card>
        <CardTitle>Glucose Trend</CardTitle>
        <CardContent>
          <p>📈 Graph will appear here</p>
        </CardContent>
      </Card>

      {/* Recent Readings */}
      <Card>
        <CardTitle>Recent Readings</CardTitle>
        <CardContent>
          {readings.map((reading) => (
            <div key={reading.id} style={{ marginBottom: "10px" }}>
              {reading.glucose_value || reading.glucose} mg/dL
            </div>
          ))}
        </CardContent>
      </Card>

    </PageWrapper>
  );
}

export default Dashboard;