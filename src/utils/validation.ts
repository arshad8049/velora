// Frontend form validation for the contact form.
// IMPORTANT: These checks improve UX but are not a security boundary.
// Real validation must also run on the backend/serverless function
// before any data is stored or emails are sent.

export interface ContactFormData {
  name:        string
  email:       string
  business:    string
  projectType: string
  message:     string
}

export interface ValidationResult {
  valid:  boolean
  errors: Partial<Record<keyof ContactFormData, string>>
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateContactForm(data: ContactFormData): ValidationResult {
  const errors: Partial<Record<keyof ContactFormData, string>> = {}

  if (!data.name.trim()) {
    errors.name = 'Your name is required.'
  } else if (data.name.trim().length < 2) {
    errors.name = 'Please enter your full name.'
  }

  if (!data.email.trim()) {
    errors.email = 'Your email address is required.'
  } else if (!EMAIL_RE.test(data.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }

  if (!data.projectType) {
    errors.projectType = 'Please select a project type.'
  }

  if (!data.message.trim()) {
    errors.message = 'Please tell us a little about your project.'
  } else if (data.message.trim().length < 20) {
    errors.message = 'Please add a bit more detail (at least 20 characters).'
  } else if (data.message.trim().length > 2000) {
    errors.message = 'Please keep your message under 2000 characters.'
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  }
}

export function sanitizeField(value: string): string {
  // Trims whitespace. No innerHTML is used anywhere so XSS is not a risk,
  // but trimming prevents accidental leading/trailing space issues.
  return value.trim()
}
