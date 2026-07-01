export type ServiceIconId =
  | 'monitor'
  | 'chat'
  | 'agent'
  | 'automation'
  | 'landing'
  | 'booking'
  | 'redesign'

export interface Service {
  id:          string
  iconId:      ServiceIconId
  title:       string
  description: string
  features:    string[]
  highlight?:  boolean   // renders a "Most Popular" badge
}

export const SERVICES: Service[] = [
  {
    id:          'website-design',
    iconId:      'monitor',
    title:       'Website Design & Development',
    description: 'Beautiful, fast, and conversion-focused websites built from scratch — designed to make your business look as good as it really is.',
    features: [
      'Custom design, not a template',
      'Mobile-first & fully responsive',
      'SEO-ready from day one',
      'Fast load times',
    ],
  },
  {
    id:          'ai-chatbots',
    iconId:      'chat',
    title:       'AI Chatbots',
    description: 'A smart chat assistant that answers customer questions, captures leads, and guides visitors — 24 hours a day, without you lifting a finger.',
    features: [
      'Trained on your business info',
      'Handles FAQs automatically',
      'Captures leads & contact details',
      'Works on any website',
    ],
    highlight: true,
  },
  {
    id:          'ai-agents',
    iconId:      'agent',
    title:       'AI Agents for Business',
    description: 'Purpose-built AI agents that handle repetitive back-office tasks — so your team can focus on work that actually needs a human.',
    features: [
      'Summarize & sort inquiries',
      'Follow-up email automation',
      'CRM data entry & updates',
      'Custom workflow logic',
    ],
    highlight: true,
  },
  {
    id:          'automation',
    iconId:      'automation',
    title:       'Business Automation',
    description: 'Connect your tools and eliminate the manual steps in between. From new lead to booked appointment — automated, every time.',
    features: [
      'Form → CRM → Email pipelines',
      'Appointment reminders',
      'Invoice & follow-up triggers',
      'Integrates with your existing tools',
    ],
  },
  {
    id:          'landing-pages',
    iconId:      'landing',
    title:       'Landing Pages',
    description: 'High-converting single pages built for one goal: turning visitors into leads, calls, or bookings. Fast to build, fast to launch.',
    features: [
      'One focused call to action',
      'Copywriting guidance included',
      'A/B test ready',
      'Connected to your CRM or email',
    ],
  },
  {
    id:          'booking-systems',
    iconId:      'booking',
    title:       'Booking & Lead Systems',
    description: 'Let clients book themselves in, submit inquiries, or request quotes — all routed to you automatically without back-and-forth emails.',
    features: [
      'Online appointment booking',
      'Lead capture & routing',
      'Automated confirmations',
      'Calendar & email integration',
    ],
  },
  {
    id:          'redesigns',
    iconId:      'redesign',
    title:       'Website Redesigns',
    description: "Your current site not doing the job? I'll rebuild it with a modern design, better structure, and the right tools to start converting visitors.",
    features: [
      'Content & structure audit first',
      'Modern, premium design refresh',
      'Improved page speed',
      'Migration with zero downtime',
    ],
  },
]
