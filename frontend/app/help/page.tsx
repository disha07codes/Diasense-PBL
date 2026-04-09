'use client'

import { useState } from 'react'
import { PageWrapper } from '@/components/PageWrapper'
import { Card, CardContent, CardTitle } from '@/components/Card'
import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { Phone, Mail, Clock, AlertCircle, MessageSquare } from 'lucide-react'

const faqs = [
  {
    question: 'What is a normal blood sugar level?',
    answer: 'Normal fasting blood sugar is 70-100 mg/dL. Two hours after eating, it should be less than 140 mg/dL. A1C test should be below 5.7% for non-diabetic individuals.'
  },
  {
    question: 'How often should I check my blood sugar?',
    answer: 'Frequency depends on your type of diabetes and treatment. Type 1 diabetics typically check 4+ times daily. Type 2 may check 1-2 times daily or as recommended by their doctor. Ask your healthcare provider for personalized guidance.'
  },
  {
    question: 'Can I eat sugar if I have diabetes?',
    answer: 'You don\'t have to avoid all sugar, but should manage carbohydrate intake carefully. Focus on portion control and pair sugary foods with protein and fiber. Always check blood sugar before and after eating sweets.'
  },
  {
    question: 'Is diabetes curable?',
    answer: 'Type 1 diabetes cannot be cured but can be managed with insulin therapy. Type 2 may be manageable or reversible through lifestyle changes like weight loss and exercise. Consult your doctor about your specific situation.'
  },
  {
    question: 'What should I do if my blood sugar is too high?',
    answer: 'High blood sugar (hyperglycemia) can be managed by staying hydrated, exercising, taking your medications as prescribed, and eating balanced meals. If over 300 mg/dL or with symptoms, seek medical help immediately.'
  },
  {
    question: 'What are signs of low blood sugar?',
    answer: 'Low blood sugar (hypoglycemia) causes shakiness, sweating, rapid heartbeat, anxiety, hunger, and confusion. Treat immediately with 15g of quick carbs (juice, glucose tablets). Wait 15 minutes and retest.'
  },
  {
    question: 'Can I exercise if I have diabetes?',
    answer: 'Yes, exercise is highly recommended. It helps improve insulin sensitivity and blood sugar control. However, monitor your blood sugar, stay hydrated, carry snacks, and consult your doctor before starting new activities.'
  },
  {
    question: 'How do I prevent diabetes complications?',
    answer: 'Keep blood sugar levels in target range, maintain healthy blood pressure and cholesterol, take medications as prescribed, eat healthy, exercise, don\'t smoke, and have regular check-ups with your healthcare provider.'
  },
]

const emergencyTips = [
  {
    title: 'Hypoglycemia (Low Blood Sugar)',
    symptoms: 'Shakiness, sweating, confusion, rapid heartbeat',
    steps: [
      'Stop what you\'re doing immediately',
      'Take 15g of quick-acting carbs (juice, glucose tablets, candy)',
      'Wait 15 minutes and recheck blood sugar',
      'If still low, repeat treatment',
      'Call emergency if unconscious or unresponsive'
    ]
  },
  {
    title: 'Hyperglycemia (High Blood Sugar)',
    symptoms: 'Increased thirst, frequent urination, blurred vision, fatigue',
    steps: [
      'Drink plenty of sugar-free fluids (water, herbal tea)',
      'Take your insulin or medication as prescribed',
      'Check blood sugar regularly',
      'Light exercise can help lower blood sugar',
      'Seek medical help if over 300 mg/dL or with other symptoms'
    ]
  },
  {
    title: 'Diabetic Ketoacidosis (DKA)',
    symptoms: 'Fruity-smelling breath, nausea, vomiting, rapid breathing, confusion',
    steps: [
      'Call 911 or seek emergency medical care immediately',
      'Do not drive yourself to the hospital',
      'Have someone stay with you',
      'Keep all medication and blood sugar log accessible for the ER',
      'DKA is a medical emergency requiring hospital treatment'
    ]
  },
]

export default function HelpPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send to a backend
    alert(`Thank you ${contactForm.name}! We'll respond to your message soon.`)
    setContactForm({ name: '', email: '', message: '' })
  }

  return (
    <PageWrapper title="Help & Support">
      <div className="space-y-8">
        {/* Emergency Info */}
        <Card className="bg-gradient-to-br from-destructive/10 to-destructive/5 border-2 border-destructive/20">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-destructive/20 rounded-lg h-fit">
              <AlertCircle size={24} className="text-destructive" />
            </div>
            <div className="flex-1">
              <CardTitle className="text-destructive !mb-2">Emergency? Call 911</CardTitle>
              <p className="text-sm text-foreground mb-3">
                If you&apos;re experiencing chest pain, difficulty breathing, severe confusion, loss of consciousness, or any other life-threatening symptoms, call 911 immediately.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-3 border-t border-destructive/20">
                <div className="flex items-center gap-2">
                  <Phone size={18} className="text-destructive" />
                  <div className="text-sm">
                    <p className="text-muted-foreground">Emergency</p>
                    <p className="font-semibold text-foreground">911</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={18} className="text-destructive" />
                  <div className="text-sm">
                    <p className="text-muted-foreground">Available</p>
                    <p className="font-semibold text-foreground">24/7</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <AlertCircle size={18} className="text-destructive" />
                  <div className="text-sm">
                    <p className="text-muted-foreground">Response Time</p>
                    <p className="font-semibold text-foreground">Immediate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Emergency Tips */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-4">Emergency Response Guide</h2>
          <div className="space-y-4">
            {emergencyTips.map((emergency, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardTitle className="text-lg">{emergency.title}</CardTitle>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-1">Symptoms:</p>
                      <p className="text-sm text-foreground">{emergency.symptoms}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-2">What to Do:</p>
                      <ol className="space-y-1">
                        {emergency.steps.map((step, stepIndex) => (
                          <li key={stepIndex} className="text-sm text-foreground">
                            <span className="font-semibold mr-2">{stepIndex + 1}.</span>{step}
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="cursor-pointer hover:shadow-lg transition-all"
                onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
              >
                <CardContent>
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-foreground flex-1">{faq.question}</h3>
                    <span className={`text-primary text-xl transition-transform ${expandedFaq === index ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </div>
                  {expandedFaq === index && (
                    <p className="text-sm text-foreground mt-3 pt-3 border-t border-border">
                      {faq.answer}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Support Resources */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-4">Support Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5">
              <div className="p-3 bg-primary/20 rounded-lg w-fit mb-4">
                <Phone size={24} className="text-primary" />
              </div>
              <CardTitle className="text-lg">Diabetes Hotline</CardTitle>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Speak with a diabetes educator
                </p>
                <p className="text-lg font-bold text-primary">1-800-DIABETES</p>
                <p className="text-xs text-muted-foreground mt-2">Mon-Fri, 9AM-9PM ET</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5">
              <div className="p-3 bg-secondary/20 rounded-lg w-fit mb-4">
                <Mail size={24} className="text-secondary" />
              </div>
              <CardTitle className="text-lg">Email Support</CardTitle>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Send us your questions
                </p>
                <p className="text-sm font-semibold text-secondary break-all">support@diasense.com</p>
                <p className="text-xs text-muted-foreground mt-2">Response within 24 hours</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-accent/10 to-accent/5">
              <div className="p-3 bg-accent/20 rounded-lg w-fit mb-4">
                <MessageSquare size={24} className="text-accent" />
              </div>
              <CardTitle className="text-lg">Live Chat</CardTitle>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Connect with a support agent
                </p>
                <Button variant="secondary" size="sm" className="w-full">
                  Start Chat
                </Button>
                <p className="text-xs text-muted-foreground mt-2">Available 9AM-9PM EST</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact Form */}
        <Card>
          <CardTitle>Contact Us</CardTitle>
          <CardContent>
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <Input
                label="Full Name"
                value={contactForm.name}
                onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                placeholder="Your name"
                required
              />
              <Input
                label="Email Address"
                type="email"
                value={contactForm.email}
                onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                placeholder="your@email.com"
                required
              />
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  placeholder="How can we help you?"
                  className="w-full px-4 py-2.5 rounded-lg border border-input bg-card text-card-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
                  rows={5}
                  required
                />
              </div>
              <Button type="submit" variant="primary" size="lg">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Disclaimer */}
        <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
          <CardContent>
            <p className="text-sm text-foreground leading-relaxed">
              <strong>Important Disclaimer:</strong> Diasense is a health management tool designed to help you track and manage your diabetes. 
              It is not a substitute for professional medical advice, diagnosis, or treatment. Always consult with a qualified healthcare provider 
              before making changes to your diabetes management plan. In case of medical emergency, call 911 immediately.
            </p>
          </CardContent>
        </Card>
      </div>
    </PageWrapper>
  )
}
