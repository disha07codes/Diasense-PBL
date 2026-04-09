'use client'

import { useState } from 'react'
import { PageWrapper } from '@/components/PageWrapper'
import { Card, CardContent, CardTitle } from '@/components/Card'
import { Button } from '@/components/Button'
import { Zap, Clock, Flame } from 'lucide-react'

const exercises = [
  {
    name: 'Walking',
    intensity: 'Low to Moderate',
    duration: '30-45 min',
    calories: '150-200',
    benefits: 'Improves cardiovascular health, easy on joints, helps regulate blood sugar',
    frequency: '5 days/week'
  },
  {
    name: 'Swimming',
    intensity: 'Moderate',
    duration: '30-45 min',
    calories: '250-350',
    benefits: 'Full-body workout, low impact, improves endurance',
    frequency: '3-4 days/week'
  },
  {
    name: 'Cycling',
    intensity: 'Moderate to High',
    duration: '30-60 min',
    calories: '300-400',
    benefits: 'Strengthens legs, improves cardiovascular fitness, outdoor enjoyment',
    frequency: '3-4 days/week'
  },
  {
    name: 'Yoga',
    intensity: 'Low to Moderate',
    duration: '30-60 min',
    calories: '100-150',
    benefits: 'Increases flexibility, reduces stress, improves balance',
    frequency: '3-5 days/week'
  },
  {
    name: 'Weight Training',
    intensity: 'Moderate to High',
    duration: '30-45 min',
    calories: '200-300',
    benefits: 'Builds muscle, increases metabolism, improves strength',
    frequency: '2-3 days/week'
  },
  {
    name: 'Dancing',
    intensity: 'Moderate to High',
    duration: '30-45 min',
    calories: '250-350',
    benefits: 'Fun cardio, improves coordination, social interaction',
    frequency: '2-3 days/week'
  },
  {
    name: 'Running',
    intensity: 'High',
    duration: '20-30 min',
    calories: '300-400',
    benefits: 'Builds endurance, burns calories, strengthens legs',
    frequency: '3 days/week'
  },
  {
    name: 'Gardening',
    intensity: 'Low to Moderate',
    duration: '45-60 min',
    calories: '150-250',
    benefits: 'Gentle activity, stress relief, outdoor exposure',
    frequency: '2-3 days/week'
  },
]

const weeklyPlan = [
  { day: 'Monday', exercise: 'Walking', duration: '30 min', time: 'Morning' },
  { day: 'Tuesday', exercise: 'Weight Training', duration: '45 min', time: 'Evening' },
  { day: 'Wednesday', exercise: 'Yoga', duration: '30 min', time: 'Morning' },
  { day: 'Thursday', exercise: 'Cycling', duration: '45 min', time: 'Evening' },
  { day: 'Friday', exercise: 'Walking', duration: '30 min', time: 'Morning' },
  { day: 'Saturday', exercise: 'Swimming', duration: '45 min', time: 'Afternoon' },
  { day: 'Sunday', exercise: 'Yoga or Rest', duration: '30 min', time: 'Morning' },
]

export default function ExercisePage() {
  const [selectedExercise, setSelectedExercise] = useState<typeof exercises[0] | null>(null)

  return (
    <PageWrapper title="Exercise Planner">
      <div className="space-y-8">
        {/* Benefits Card */}
        <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/20">
          <CardContent>
            <h2 className="text-2xl font-bold text-primary mb-4">Why Exercise Matters for Diabetes</h2>
            <ul className="space-y-2 text-sm text-foreground">
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Helps your muscles use glucose more efficiently</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Improves insulin sensitivity and lowers blood sugar levels</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Aids in weight management and healthy BMI</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Reduces cardiovascular disease risk</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Boosts mood and reduces stress and anxiety</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Exercise Options */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-4">Recommended Exercises</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {exercises.map((exercise, index) => (
              <Card
                key={index}
                className={`cursor-pointer hover:shadow-lg transition-all ${
                  selectedExercise?.name === exercise.name ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => setSelectedExercise(exercise)}
              >
                <CardContent>
                  <h3 className="font-bold text-lg text-foreground mb-3">{exercise.name}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Zap size={16} className="text-primary" />
                      <span className="text-muted-foreground">{exercise.intensity}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-primary" />
                      <span className="text-muted-foreground">{exercise.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Flame size={16} className="text-destructive" />
                      <span className="text-muted-foreground">{exercise.calories} cal</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3 pt-3 border-t border-border">
                    {exercise.frequency}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Selected Exercise Details */}
        {selectedExercise && (
          <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-2 border-secondary/20">
            <CardTitle className="text-secondary">{selectedExercise.name} - Details</CardTitle>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Benefits</h3>
                  <p className="text-sm text-foreground">{selectedExercise.benefits}</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-border">
                  <div>
                    <p className="text-xs text-muted-foreground">Intensity</p>
                    <p className="text-sm font-semibold text-secondary">{selectedExercise.intensity}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Duration</p>
                    <p className="text-sm font-semibold text-secondary">{selectedExercise.duration}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Calories Burned</p>
                    <p className="text-sm font-semibold text-secondary">{selectedExercise.calories}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Frequency</p>
                    <p className="text-sm font-semibold text-secondary">{selectedExercise.frequency}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Weekly Planner */}
        <Card>
          <CardTitle>Sample Weekly Exercise Schedule</CardTitle>
          <CardContent>
            <div className="space-y-3">
              {weeklyPlan.map((plan, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/30 transition-colors"
                >
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{plan.day}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{plan.exercise}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-primary">{plan.duration}</p>
                    <p className="text-xs text-muted-foreground">{plan.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-4 pt-4 border-t border-border">
              Remember to consult with your healthcare provider before starting a new exercise program, especially if you take diabetes medications.
            </p>
          </CardContent>
        </Card>

        {/* Safety Tips */}
        <Card className="bg-gradient-to-br from-accent/10 to-accent/5">
          <CardTitle className="text-accent">Safety Tips During Exercise</CardTitle>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Before Exercise</h3>
                <ul className="space-y-1 text-sm text-foreground">
                  <li>• Check blood sugar levels</li>
                  <li>• Wear proper footwear</li>
                  <li>• Warm up for 5-10 minutes</li>
                  <li>• Carry identification and snacks</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">During & After Exercise</h3>
                <ul className="space-y-1 text-sm text-foreground">
                  <li>• Stay hydrated with water</li>
                  <li>• Cool down for 5-10 minutes</li>
                  <li>• Monitor for hypoglycemia signs</li>
                  <li>• Check blood sugar after 30 min</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageWrapper>
  )
}
