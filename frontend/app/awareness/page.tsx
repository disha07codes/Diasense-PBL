'use client'

import { PageWrapper } from '@/components/PageWrapper'
import { Card, CardContent, CardTitle } from '@/components/Card'
import { AlertCircle, Heart, Droplet, TrendingUp } from 'lucide-react'

const symptoms = [
  { icon: Droplet, label: 'Increased Thirst', description: 'Feeling abnormally thirsty more often' },
  { icon: TrendingUp, label: 'Frequent Urination', description: 'Need to urinate more often, especially at night' },
  { icon: Heart, label: 'Fatigue', description: 'Unusual tiredness or weakness' },
  { icon: AlertCircle, label: 'Blurred Vision', description: 'Difficulty focusing or seeing clearly' },
]

const causes = [
  {
    title: 'Type 1 Diabetes',
    description: 'Autoimmune condition where the body cannot produce insulin. Usually develops in children and young adults.'
  },
  {
    title: 'Type 2 Diabetes',
    description: 'The most common type where the body cannot use insulin effectively. Often related to lifestyle and genetics.'
  },
  {
    title: 'Gestational Diabetes',
    description: 'Develops during pregnancy. May increase risk of type 2 diabetes later in life.'
  },
  {
    title: 'Prediabetes',
    description: 'Blood sugar is higher than normal but not yet diabetic. Can often be managed with lifestyle changes.'
  },
]

const prevention = [
  'Maintain a healthy weight through balanced diet and exercise',
  'Eat foods with low glycemic index (whole grains, vegetables, lean proteins)',
  'Exercise regularly - aim for at least 150 minutes per week',
  'Reduce sugar and processed food consumption',
  'Stay hydrated - drink plenty of water',
  'Get enough sleep - 7-9 hours per night',
  'Manage stress through meditation, yoga, or other relaxation techniques',
  'Monitor blood sugar levels regularly if at risk',
  'Quit smoking and limit alcohol consumption',
  'Schedule regular check-ups with your healthcare provider',
]

export default function AwarenessPage() {
  return (
    <PageWrapper title="Diabetes Awareness">
      <div className="space-y-8">
        {/* Overview Card */}
        <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/20">
          <CardContent>
            <h2 className="text-2xl font-bold text-primary mb-4">What is Diabetes?</h2>
            <p className="text-foreground leading-relaxed">
              Diabetes is a chronic condition that affects how your body processes blood glucose. When you eat, your body breaks down food into glucose, which enters the bloodstream. The pancreas produces insulin, a hormone that helps glucose enter cells for energy. When this process fails, blood sugar accumulates, causing diabetes.
            </p>
          </CardContent>
        </Card>

        {/* Symptoms Section */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-4">Common Symptoms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {symptoms.map((item, index) => {
              const Icon = item.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent>
                    <div className="flex gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg h-fit">
                        <Icon size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{item.label}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Types of Diabetes */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-4">Types of Diabetes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {causes.map((cause, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardTitle className="text-lg">{cause.title}</CardTitle>
                <CardContent>
                  <p className="text-sm text-foreground">{cause.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Prevention & Management */}
        <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5">
          <CardTitle className="text-secondary">Prevention & Management Tips</CardTitle>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {prevention.map((tip, index) => (
                <div key={index} className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-xs font-bold text-secondary">✓</span>
                  </div>
                  <p className="text-sm text-foreground leading-relaxed">{tip}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Key Metrics */}
        <Card>
          <CardTitle>Important Health Metrics</CardTitle>
          <CardContent>
            <div className="space-y-4">
              <div className="border-b border-border pb-4">
                <h3 className="font-semibold text-foreground mb-2">Normal Blood Sugar Levels (mg/dL)</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Fasting</p>
                    <p className="text-lg font-bold text-secondary">70-100</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">2 hrs after meal</p>
                    <p className="text-lg font-bold text-secondary">Less than 140</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">A1C Test</p>
                    <p className="text-lg font-bold text-secondary">Below 5.7%</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Prediabetic Range (mg/dL)</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Fasting</p>
                    <p className="text-lg font-bold text-accent">100-125</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">2 hrs after meal</p>
                    <p className="text-lg font-bold text-accent">140-199</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">A1C Test</p>
                    <p className="text-lg font-bold text-accent">5.7-6.4%</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageWrapper>
  )
}
