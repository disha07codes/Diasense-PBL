'use client'

import { PageWrapper } from '@/components/PageWrapper'
import { Card, CardContent, CardTitle } from '@/components/Card'
import { Apple, Utensils, Wine } from 'lucide-react'

const mealPlans = [
  {
    time: 'Breakfast',
    icon: Apple,
    meals: [
      { name: 'Oatmeal with Berries', calories: '250 cal', carbs: '35g' },
      { name: 'Egg White Scramble', calories: '150 cal', carbs: '2g' },
      { name: 'Greek Yogurt Parfait', calories: '200 cal', carbs: '25g' },
      { name: 'Whole Wheat Toast', calories: '180 cal', carbs: '28g' },
    ]
  },
  {
    time: 'Lunch',
    icon: Utensils,
    meals: [
      { name: 'Grilled Chicken Salad', calories: '320 cal', carbs: '15g' },
      { name: 'Quinoa Buddha Bowl', calories: '380 cal', carbs: '45g' },
      { name: 'Lean Turkey Sandwich', calories: '290 cal', carbs: '32g' },
      { name: 'Baked Salmon with Veggies', calories: '420 cal', carbs: '20g' },
    ]
  },
  {
    time: 'Dinner',
    icon: Wine,
    meals: [
      { name: 'Grilled Fish with Broccoli', calories: '380 cal', carbs: '18g' },
      { name: 'Lean Beef Stir-Fry', calories: '420 cal', carbs: '22g' },
      { name: 'Chicken Breast with Sweet Potato', calories: '450 cal', carbs: '38g' },
      { name: 'Turkey Meatballs with Zucchini', calories: '340 cal', carbs: '16g' },
    ]
  },
]

const foods = {
  good: [
    'Leafy greens (spinach, kale, lettuce)',
    'Non-starchy vegetables (broccoli, peppers, cucumber)',
    'Whole grains (brown rice, oats, quinoa)',
    'Lean proteins (chicken, fish, turkey)',
    'Low-fat dairy (yogurt, milk, cheese)',
    'Nuts and seeds (almonds, walnuts, chia)',
    'Legumes (beans, lentils, chickpeas)',
    'Berries and citrus fruits (strawberries, blueberries, oranges)',
  ],
  avoid: [
    'Sugary drinks (soda, juice, energy drinks)',
    'Refined carbs (white bread, white rice, pasta)',
    'Processed foods (chips, cakes, cookies)',
    'High-fat meats (bacon, sausage, fatty beef)',
    'Full-fat dairy (whole milk, ice cream)',
    'Fried foods and fast food',
    'Dried fruits with added sugar',
    'Alcohol (especially sugary drinks)',
  ]
}

export default function DietPage() {
  return (
    <PageWrapper title="Diet Plan">
      <div className="space-y-8">
        {/* Meal Plans */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-4">Sample Meal Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mealPlans.map((plan, index) => {
              const Icon = plan.icon
              return (
                <Card key={index} className="bg-gradient-to-br from-card to-card/50">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon size={24} className="text-primary" />
                    </div>
                    <CardTitle className="!mb-0">{plan.time}</CardTitle>
                  </div>
                  <CardContent>
                    <ul className="space-y-3">
                      {plan.meals.map((meal, idx) => (
                        <li key={idx} className="border-b border-border pb-3 last:border-b-0 last:pb-0">
                          <p className="font-semibold text-foreground text-sm">{meal.name}</p>
                          <p className="text-xs text-muted-foreground mt-1">
                            {meal.calories} • {meal.carbs} carbs
                          </p>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Foods to Eat & Avoid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Foods to Eat */}
          <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-2 border-secondary/20">
            <CardTitle className="text-secondary">✓ Foods to Eat</CardTitle>
            <CardContent>
              <ul className="space-y-2">
                {foods.good.map((food, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-secondary font-bold mt-0.5">+</span>
                    <span className="text-sm text-foreground">{food}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Foods to Avoid */}
          <Card className="bg-gradient-to-br from-destructive/10 to-destructive/5 border-2 border-destructive/20">
            <CardTitle className="text-destructive">✗ Foods to Avoid</CardTitle>
            <CardContent>
              <ul className="space-y-2">
                {foods.avoid.map((food, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-destructive font-bold mt-0.5">−</span>
                    <span className="text-sm text-foreground">{food}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Nutrition Tips */}
        <Card className="bg-gradient-to-br from-primary/10 to-secondary/10">
          <CardTitle>Nutrition Tips for Diabetes Management</CardTitle>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Carbohydrate Control</h3>
                <p className="text-sm text-foreground">Choose complex carbohydrates that digest slowly. Count carbs and distribute them throughout the day for stable blood sugar.</p>
              </div>
              <div className="border-t border-border pt-4">
                <h3 className="font-semibold text-foreground mb-2">Portion Control</h3>
                <p className="text-sm text-foreground">Use the plate method: half plate vegetables, quarter plate lean protein, quarter plate whole grains.</p>
              </div>
              <div className="border-t border-border pt-4">
                <h3 className="font-semibold text-foreground mb-2">Meal Timing</h3>
                <p className="text-sm text-foreground">Eat at regular times and don&apos;t skip meals. Space meals 4-5 hours apart and have small snacks as needed.</p>
              </div>
              <div className="border-t border-border pt-4">
                <h3 className="font-semibold text-foreground mb-2">Hydration</h3>
                <p className="text-sm text-foreground">Drink plenty of water throughout the day. Avoid sugary beverages and limit caffeine intake.</p>
              </div>
              <div className="border-t border-border pt-4">
                <h3 className="font-semibold text-foreground mb-2">Label Reading</h3>
                <p className="text-sm text-foreground">Check nutritional labels for sugar, carbohydrates, and serving sizes. Be aware of hidden sugars in packaged foods.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Weekly Planner */}
        <Card>
          <CardTitle>Weekly Meal Planner Template</CardTitle>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 px-2 font-semibold text-foreground">Day</th>
                    <th className="text-left py-2 px-2 font-semibold text-foreground">Breakfast</th>
                    <th className="text-left py-2 px-2 font-semibold text-foreground">Lunch</th>
                    <th className="text-left py-2 px-2 font-semibold text-foreground">Dinner</th>
                  </tr>
                </thead>
                <tbody>
                  {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                    <tr key={day} className="border-b border-border/50 hover:bg-muted/30">
                      <td className="py-3 px-2 font-medium text-foreground">{day}</td>
                      <td className="py-3 px-2 text-muted-foreground text-xs">-</td>
                      <td className="py-3 px-2 text-muted-foreground text-xs">-</td>
                      <td className="py-3 px-2 text-muted-foreground text-xs">-</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-xs text-muted-foreground mt-3">Fill in your meal plans for each day to stay organized and manage your diet effectively.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageWrapper>
  )
}
