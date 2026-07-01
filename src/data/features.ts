// Feature showcase data — consumed by FeatureShowcase.tsx
// Each item represents a business type tab with a visual mockup and description.

export interface ShowcaseItem {
  id:          string
  label:       string
  title:       string
  description: string
  highlights:  string[]
}

export const SHOWCASE_ITEMS: ShowcaseItem[] = [
  {
    id:    'restaurant',
    label: 'Restaurant',
    title: 'Restaurant Website with Online Ordering',
    description:
      'A fully branded site with your digital menu, table reservations, and contact page. Designed to turn hungry browsers into paying customers.',
    highlights: [
      'Digital menu with categories and photos',
      'Online table booking with confirmations',
      'Google Maps and opening hours',
      'Mobile-first for on-the-go visitors',
    ],
  },
  {
    id:    'clinic',
    label: 'Clinic',
    title: 'Clinic Website with Patient Automation',
    description:
      'A professional healthcare website that handles patient inquiries and appointment requests automatically, so your front desk can focus on what matters.',
    highlights: [
      'Patient inquiry form with auto-response',
      'Appointment request and confirmation flow',
      'Service pages and doctor bios',
      'Clear contact and location information',
    ],
  },
  {
    id:    'law-firm',
    label: 'Law Firm',
    title: 'Law Firm Website with Lead Capture',
    description:
      'A credibility-first site that positions your firm as the obvious choice and captures serious enquiries through a smart consultation intake form.',
    highlights: [
      'Practice area pages that build trust',
      'Case evaluation intake form',
      'Attorney profiles and credentials',
      'Qualified leads routed to your inbox',
    ],
  },
  {
    id:    'local-service',
    label: 'Local Business',
    title: 'Local Business Website with Quote Forms',
    description:
      "Whether you're a plumber, landscaper, or electrician, a clean website with an instant quote form turns local searches into booked jobs.",
    highlights: [
      'Service area pages for local SEO',
      'Instant quote request form',
      'Before and after photo gallery',
      'Google Reviews integration',
    ],
  },
  {
    id:    'ai-support',
    label: 'AI Support',
    title: 'AI Customer Support Assistant',
    description:
      'A trained AI agent that handles common customer questions, collects lead info, and escalates complex issues. Available around the clock, no extra staff needed.',
    highlights: [
      'Answers FAQs about your business 24/7',
      'Collects customer name, email and need',
      'Escalates to you when required',
      'Deploys on any website in minutes',
    ],
  },
  {
    id:    'dashboard',
    label: 'Dashboard',
    title: 'Internal Automation Dashboard',
    description:
      'A custom internal tool that gives you a real-time view of leads, bookings, and automated workflows. Everything your business runs on, in one clean screen.',
    highlights: [
      'Live lead and inquiry tracking',
      'Booking and revenue overview',
      'Automation status monitoring',
      'Integrates with your existing tools',
    ],
  },
]
