'use client'

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

import { useState, useEffect } from 'react'
import { Card, CardContent, CardTitle } from './Card'
import { Button } from './Button'
import { Input } from './Input'
import { StatCard } from './StatCard'

export function Dashboard() {

  const [readings, setReadings] = useState<any[]>([])
  const [newReading, setNewReading] = useState('')
  const [prediction, setPrediction] = useState("")

  // FETCH
  const fetchData = () => {
    fetch("http://localhost:5000/data")
      .then(res => res.json())
      .then(res => setReadings(res))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchData()
  }, [])

  // ADD
  const handleAddReading = () => {
    if (!newReading) return

    fetch("http://localhost:5000/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ glucose: newReading }),
    })
    .then(() => {
      setNewReading('')
      fetchData()
    })
    .catch(err => console.log(err))
  }

  // 🔥 ML PREDICTION
  const handlePredict = async () => {
    try {
      const res = await fetch("http://localhost:8000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pregnancies: 2,
          glucose: newReading || 120,
          bloodPressure: 70,
          skinThickness: 20,
          insulin: 85,
          bmi: 25,
          dpf: 0.5,
          age: 25
        }),
      });

      const data = await res.json();
      setPrediction(data.prediction);
    } catch (err) {
      console.log(err);
      alert("Error connecting to ML model");
    }
  };

  // VALUES
  const values = readings.map(r => r.glucose_value || r.glucose || 0)

  const average = values.length
    ? Math.round(values.reduce((a, b) => a + b, 0) / values.length)
    : 0

  const highest = values.length ? Math.max(...values) : 0
  const lowest = values.length ? Math.min(...values) : 0

  // GRAPH
  const chartData = {
    labels: readings.map((_, i) => `#${i + 1}`),
    datasets: [
      {
        label: "Glucose Levels",
        data: values,
        borderColor: "#4f46e5",
        backgroundColor: "#4f46e533",
        tension: 0.4,
        fill: true,
      }
    ]
  }

  return (
    <div className="space-y-8">

      {/* Add Reading + ML */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-gradient-to-br from-primary/10 to-primary/5">
          <CardContent>
            <CardTitle className="text-primary mb-4">Add Glucose Reading</CardTitle>
            <div className="flex gap-3">
              <Input
                type="number"
                placeholder="Enter glucose value (mg/dL)"
                value={newReading}
                onChange={(e: any) => setNewReading(e.target.value)}
                className="flex-1"
              />
              <Button onClick={handleAddReading}>
                Add
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* ML */}
        <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5">
          <CardContent>
            <CardTitle className="text-secondary mb-4">Risk Prediction</CardTitle>
            <p className="text-sm text-muted-foreground mb-4">
              Get AI-powered predictions based on your readings
            </p>
            <Button className="w-full" onClick={handlePredict}>
              Predict Risk
            </Button>

            {/* ✅ SHOW RESULT */}
            {prediction && (
              <p className={`mt-4 text-center font-semibold ${
                prediction === "High Risk" ? "text-red-500" : "text-green-500"
              }`}>
                {prediction}
              </p>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Stats */}
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-4">Your Statistics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard label="Average" value={average} unit="mg/dL" />
          <StatCard label="Highest" value={highest} unit="mg/dL" />
          <StatCard label="Lowest" value={lowest} unit="mg/dL" />
        </div>
      </div>

      {/* Graph */}
      <Card>
        <CardTitle>Glucose Trend</CardTitle>
        <CardContent>
          <Line data={chartData} />
        </CardContent>
      </Card>

      {/* Readings */}
      <Card>
        <CardTitle>Recent Readings</CardTitle>
        <CardContent>
          <div className="space-y-3">
            {readings.map((reading) => {
              const value = reading.glucose_value || reading.glucose
              const status =
                value > 130 ? 'high' :
                value < 70 ? 'low' : 'normal'

              return (
                <div key={reading.id}
                  className="flex items-center justify-between p-3 rounded-lg bg-muted/30">

                  <div>
                    <p className="font-semibold">{value} mg/dL</p>
                  </div>

                  <span className="text-xs px-3 py-1 rounded-full">
                    {status}
                  </span>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

    </div>
  )
}