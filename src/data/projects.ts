export type ProjectCategory = 'Website' | 'AI Agent' | 'Landing Page' | 'Dashboard'

export interface Project {
  id:       string
  category: ProjectCategory
  title:    string
  problem:  string
  solution: string
  result:   string
  accent:   string    // CSS gradient for the card colour accent
  tags:     string[]
}

// Placeholder case studies — replace with real client work as it comes in.
// Keep the same shape so Portfolio.tsx needs no changes.
export const PROJECTS: Project[] = [
  {
    id:       'restaurant-site',
    category: 'Website',
    title:    'Restaurant Website Concept',
    problem:
      'A local restaurant was losing customers to competitors with a better online presence and had no way to take reservations online.',
    solution:
      'Built a branded website with a digital menu, table booking system, Google Maps integration, and mobile-first design.',
    result:
      '3× more table enquiries in the first month. All bookings now handled automatically.',
    accent: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
    tags:   ['Website', 'Booking System', 'Local SEO'],
  },
  {
    id:       'ai-support-agent',
    category: 'AI Agent',
    title:    'AI Customer Support Agent',
    problem:
      'A small e-commerce business was spending 4+ hours daily answering the same 12 customer questions over and over.',
    solution:
      'Deployed a trained AI agent that handles FAQs, captures leads, and escalates complex queries. No human needed.',
    result:
      'Reduced manual support time by 80 %. Agent now handles 200+ conversations per week.',
    accent: 'linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%)',
    tags:   ['AI Agent', 'Automation', 'Lead Capture'],
  },
  {
    id:       'local-landing',
    category: 'Landing Page',
    title:    'Local Service Landing Page',
    problem:
      'A plumbing company had zero web presence and relied entirely on word-of-mouth for new jobs.',
    solution:
      'Designed a high-converting landing page with a quote request form, service area coverage, and customer reviews.',
    result:
      'Appeared on the first page of local Google results. 15 quote requests in week one.',
    accent: 'linear-gradient(135deg, #059669 0%, #06b6d4 100%)',
    tags:   ['Landing Page', 'Local SEO', 'Lead Generation'],
  },
  {
    id:       'automation-dashboard',
    category: 'Dashboard',
    title:    'Business Automation Dashboard',
    problem:
      'A consultancy was manually tracking leads, appointments, and follow-ups across three separate tools with no single view.',
    solution:
      'Built an internal dashboard that centralises leads, automates follow-up emails, and shows live performance stats.',
    result:
      'Team saved 6 hours per week. Zero missed follow-ups since launch.',
    accent: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
    tags:   ['Dashboard', 'CRM Integration', 'Automation'],
  },
]
