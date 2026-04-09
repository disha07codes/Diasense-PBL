'use client'

import { useState, useEffect } from 'react'
import { PageWrapper } from '@/components/PageWrapper'
import { Card, CardContent, CardTitle } from '@/components/Card'
import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { Droplet } from 'lucide-react'

export default function TrackerPage() {

  const [readings, setReadings] = useState<any[]>([])

  const [formData, setFormData] = useState({
    value: '',
    date: new Date().toISOString().split('T')[0],
    time: new Date().toLocaleTimeString('en-US', { hour12: false }).slice(0, 5),
    notes: ''
  })

  const [showForm, setShowForm] = useState(false)

  // ✅ FETCH DATA
  const fetchData = () => {
    fetch("http://localhost:5000/data")
      .then(res => res.json())
      .then(res => setReadings(res))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchData()
  }, [])

  // ✅ ADD DATA
  const handleSubmit = (e: any) => {
    e.preventDefault()

    if (formData.value && !isNaN(Number(formData.value))) {
      fetch("http://localhost:5000/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          glucose: formData.value
        }),
      })
      .then(() => {
        fetchData() // 🔥 refresh data
        setShowForm(false)
        setFormData({
          value: '',
          date: new Date().toISOString().split('T')[0],
          time: new Date().toLocaleTimeString('en-US', { hour12: false }).slice(0, 5),
          notes: ''
        })
      })
      .catch(err => console.log(err))
    }
  }

  return (
    <PageWrapper title="Glucose Tracker">
      <div className="space-y-6">

        {/* Add Reading */}
        <Card className="bg-gradient-to-br from-primary/10 to-primary/5">
          <CardTitle>New Reading</CardTitle>
          <CardContent>
            {!showForm ? (
              <Button onClick={() => setShowForm(true)}>
                + Add Glucose Reading
              </Button>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">

                <Input
                  label="Glucose Value (mg/dL)"
                  type="number"
                  value={formData.value}
                  onChange={(e: any) =>
                    setFormData({ ...formData, value: e.target.value })
                  }
                  required
                />

                <div className="flex gap-3">
                  <Button type="submit">Save Reading</Button>
                  <Button type="button" onClick={() => setShowForm(false)}>
                    Cancel
                  </Button>
                </div>

              </form>
            )}
          </CardContent>
        </Card>

        {/* HISTORY */}
        <Card>
          <CardTitle>Reading History</CardTitle>
          <CardContent>
            <div className="space-y-3">
              {readings.length > 0 ? (
                readings.map((reading) => {

                  const value = reading.glucose_value || reading.glucose

                  // ✅ fallback values (IMPORTANT FIX)
                  const date = reading.date || new Date().toISOString().split('T')[0]
                  const time = reading.time || new Date().toLocaleTimeString('en-US', { hour12: false }).slice(0, 5)
                  const notes = reading.notes || "No notes"

                  const status =
                    value > 130 ? 'high' :
                    value < 70 ? 'low' : 'normal'

                  return (
                    <div key={reading.id}
                      className="flex items-center justify-between p-4 rounded-xl border">

                      <div className="flex items-center gap-4">
                        <Droplet size={20} />
                        <div>
                          <p className="text-xl font-bold">{value} mg/dL</p>
                          <p className="text-xs text-muted-foreground">
                            {date} • {time} • {notes}
                          </p>
                        </div>
                      </div>

                      <span className="text-xs px-3 py-1 rounded-full">
                        {status}
                      </span>

                    </div>
                  )
                })
              ) : (
                <p>No readings yet</p>
              )}
            </div>
          </CardContent>
        </Card>

      </div>
    </PageWrapper>
  )
}