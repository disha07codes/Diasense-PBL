'use client'

import { PageWrapper } from '@/components/PageWrapper'
import { Card, CardContent, CardTitle } from '@/components/Card'
import { AlertCircle, Eye, Zap, Droplet, Heart, Headphones } from 'lucide-react'

const symptomCategories = [
  {
    title: 'Immediate Symptoms',
    icon: AlertCircle,
    color: 'destructive',
    symptoms: [
      {
        name: 'Increased Thirst',
        icon: Droplet,
        description: 'Feeling abnormally thirsty and drinking more water than usual'
      },
      {
        name: 'Frequent Urination',
        icon: Droplet,
        description: 'Need to urinate more often, especially at night (nocturia)'
      },
      {
        name: 'Increased Hunger',
        icon: Heart,
        description: 'Feeling hungry even after eating, especially for carbohydrates'
      },
      {
        name: 'Fatigue',
        icon: Zap,
        description: 'Unusual tiredness, weakness, or lack of energy throughout the day'
      },
    ]
  },
  {
    title: 'Vision & Neurological',
    icon: Eye,
    color: 'secondary',
    symptoms: [
      {
        name: 'Blurred Vision',
        icon: Eye,
        description: 'Difficulty focusing or seeing clearly, especially at a distance'
      },
      {
        name: 'Tingling or Numbness',
        icon: Zap,
        description: 'Pins and needles sensation in hands, feet, or legs (neuropathy)'
      },
      {
        name: 'Difficulty Concentrating',
        icon: Headphones,
        description: 'Brain fog, difficulty focusing on tasks, memory issues'
      },
      {
        name: 'Headaches',
        icon: Headphones,
        description: 'Frequent or persistent headaches, especially related to blood sugar'
      },
    ]
  },
  {
    title: 'Physical Symptoms',
    icon: Heart,
    color: 'accent',
    symptoms: [
      {
        name: 'Skin Issues',
        icon: Heart,
        description: 'Slow-healing sores, dry skin, or frequent infections'
      },
      {
        name: 'Unexplained Weight Loss',
        icon: Zap,
        description: 'Losing weight without trying (more common in Type 1)'
      },
      {
        name: 'Yeast Infections',
        icon: AlertCircle,
        description: 'Recurring yeast infections or fungal infections'
      },
      {
        name: 'Joint or Muscle Pain',
        icon: Heart,
        description: 'Aches and pains in joints or muscles, especially after activity'
      },
    ]
  },
]

const urgentSigns = [
  'Severe thirst with nausea or vomiting',
  'Fruity-smelling breath (ketoacidosis)',
  'Rapid or difficult breathing',
  'Severe abdominal pain',
  'Difficulty staying awake or confusion',
  'Loss of consciousness',
]

const whenToSeekHelp = [
  {
    title: 'See a Doctor If:',
    items: [
      'Symptoms persist for more than a week',
      'Blood sugar readings are consistently high or low',
      'You have unexplained weight loss',
      'Cuts or sores are not healing properly',
      'You have signs of infection (fever, redness, swelling)',
    ]
  },
  {
    title: 'Seek Emergency Care If:',
    items: [
      'You experience severe chest pain or shortness of breath',
      'You have confusion or difficulty staying awake',
      'Blood sugar is above 300 mg/dL or below 70 mg/dL persistently',
      'You have severe nausea, vomiting, or abdominal pain',
      'You notice signs of diabetic ketoacidosis (fruity breath, rapid breathing)',
    ]
  },
]

export default function SymptomsPage() {
  return (
    <PageWrapper title="Diabetes Symptoms">
      <div className="space-y-8">
        {/* Overview */}
        <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/20">
          <CardContent>
            <h2 className="text-2xl font-bold text-primary mb-4">Understanding Diabetes Symptoms</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Symptoms of diabetes can appear suddenly or develop gradually. Some people may not experience any symptoms in the early stages. If you notice any of the symptoms below, consult with your healthcare provider for proper diagnosis and management.
            </p>
            <p className="text-sm text-muted-foreground italic">
              Note: Symptoms can vary between individuals and depend on the type of diabetes and how high blood sugar levels are.
            </p>
          </CardContent>
        </Card>

        {/* Symptom Categories */}
        {symptomCategories.map((category, catIndex) => {
          const Icon = category.icon
          return (
            <div key={catIndex}>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Icon size={24} className="text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">{category.title}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.symptoms.map((symptom, symIndex) => {
                  const SymptomIcon = symptom.icon
                  return (
                    <Card key={symIndex} className="hover:shadow-lg transition-shadow">
                      <CardContent>
                        <div className="flex gap-4">
                          <div className="p-3 bg-secondary/10 rounded-lg h-fit">
                            <SymptomIcon size={20} className="text-secondary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-foreground mb-1">{symptom.name}</h3>
                            <p className="text-sm text-muted-foreground">{symptom.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          )
        })}

        {/* Urgent Warning Signs */}
        <Card className="bg-gradient-to-br from-destructive/10 to-destructive/5 border-2 border-destructive/20">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-destructive/20 rounded-lg">
              <AlertCircle size={24} className="text-destructive" />
            </div>
            <CardTitle className="!mb-0 text-destructive">⚠️ Emergency Warning Signs</CardTitle>
          </div>
          <CardContent>
            <p className="text-sm text-foreground mb-4">
              Seek immediate medical attention if you experience any of these warning signs:
            </p>
            <ul className="space-y-2">
              {urgentSigns.map((sign, index) => (
                <li key={index} className="flex gap-3">
                  <span className="text-destructive font-bold">!</span>
                  <span className="text-sm text-foreground">{sign}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* When to Seek Help */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {whenToSeekHelp.map((section, index) => (
            <Card
              key={index}
              className={section.title.includes('Emergency') ? 'bg-gradient-to-br from-destructive/10 to-destructive/5 border-destructive/20' : 'bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20'}
            >
              <CardTitle className={section.title.includes('Emergency') ? 'text-destructive' : 'text-primary'}>
                {section.title}
              </CardTitle>
              <CardContent>
                <ul className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex gap-3">
                      <span className={section.title.includes('Emergency') ? 'text-destructive font-bold' : 'text-primary font-bold'}>
                        •
                      </span>
                      <span className="text-sm text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Symptom Tracker */}
        <Card>
          <CardTitle>Daily Symptom Tracker</CardTitle>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Keep track of your symptoms to share with your healthcare provider. Monitor:
            </p>
            <div className="space-y-3">
              {[
                'Blood glucose levels (morning and evening)',
                'Energy levels throughout the day',
                'Any numbness or tingling sensations',
                'Vision or eye discomfort',
                'Infections or slow-healing wounds',
                'Mood and mental clarity',
                'Sleep quality and duration',
                'Any new or unusual symptoms',
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-border cursor-pointer"
                    id={`symptom-${index}`}
                  />
                  <label htmlFor={`symptom-${index}`} className="text-sm text-foreground cursor-pointer flex-1">
                    {item}
                  </label>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Important Note */}
        <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
          <CardContent>
            <p className="text-sm text-foreground leading-relaxed">
              <strong>Important:</strong> This information is for educational purposes only and should not replace professional medical advice. 
              Always consult with your healthcare provider for accurate diagnosis, testing, and treatment recommendations. Early detection and proper 
              management of diabetes symptoms can help prevent complications and improve your overall health outcomes.
            </p>
          </CardContent>
        </Card>
      </div>
    </PageWrapper>
  )
}
