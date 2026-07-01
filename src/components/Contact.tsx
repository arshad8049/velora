import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { validateContactForm, sanitizeField } from '../utils/validation'
import type { ContactFormData } from '../utils/validation'
import styles from './Contact.module.css'

async function submitForm(data: ContactFormData): Promise<void> {
  const id = import.meta.env.VITE_FORMSPREE_ID as string | undefined
  if (!id) throw new Error('VITE_FORMSPREE_ID is not set')

  const res = await fetch(`https://formspree.io/f/${id}`, {
    method:  'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body:    JSON.stringify(data),
  })

  if (!res.ok) throw new Error('Submission failed')
}

const PROJECT_TYPES = [
  'Website Design & Development',
  'AI Chatbot',
  'AI Agent / Automation',
  'Landing Page',
  'Booking or Lead System',
  'Website Redesign',
  'Something Else',
]

const EMPTY: ContactFormData = {
  name:        '',
  email:       '',
  business:    '',
  projectType: '',
  message:     '',
}

export default function Contact() {
  const [form,    setForm]    = useState<ContactFormData>(EMPTY)
  const [errors,  setErrors]  = useState<Partial<Record<keyof ContactFormData, string>>>({})
  const [status,  setStatus]  = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const charCount = form.message.length

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    // Clear the error for this field as the user types
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const sanitized: ContactFormData = {
      name:        sanitizeField(form.name),
      email:       sanitizeField(form.email),
      business:    sanitizeField(form.business),
      projectType: form.projectType,
      message:     sanitizeField(form.message),
    }

    const { valid, errors: fieldErrors } = validateContactForm(sanitized)
    if (!valid) {
      setErrors(fieldErrors)
      return
    }

    setStatus('loading')
    try {
      await submitForm(sanitized)
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  function fieldClass(name: keyof ContactFormData) {
    return `${styles.input} ${errors[name] ? styles.inputError : ''}`
  }

  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className="container">

        {/* Section header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-label">Get in Touch</span>
          <h2 className="section-heading">Let's Build Something<br />Worth Talking About</h2>
        </motion.div>

        <div className={styles.layout}>

          {/* ── Left info panel ── */}
          <motion.div
            className={styles.info}
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className={styles.infoTitle}>
              Tell us about<br />your project
            </h3>
            <p className={styles.infoDesc}>
              Whether you have a fully fleshed-out brief or just a rough idea,
              we are happy to hear it. Fill out the form and we will get back to
              you within one business day.
            </p>

            <div className={styles.details}>
              {[
                {
                  label: 'Free initial consultation',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" width={16} height={16}>
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  ),
                },
                {
                  label: 'No commitment on the first call',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" width={16} height={16}>
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  ),
                },
                {
                  label: 'Custom quote based on your needs',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" width={16} height={16}>
                      <line x1="12" y1="1" x2="12" y2="23" />
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  ),
                },
              ].map(item => (
                <div key={item.label} className={styles.detailItem}>
                  <div className={styles.detailIcon} aria-hidden="true">{item.icon}</div>
                  {item.label}
                </div>
              ))}
            </div>

            <div className={styles.responseBadge}>
              <span className={styles.responseDot} aria-hidden="true" />
              Usually responds within a few hours
            </div>
          </motion.div>

          {/* ── Form card ── */}
          <motion.div
            className={styles.formCard}
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <AnimatePresence mode="wait">
              {status === 'success' ? (

                /* ── Success state ── */
                <motion.div
                  key="success"
                  className={styles.success}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className={styles.successIcon} aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={28} height={28}>
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <h3 className={styles.successTitle}>Message sent!</h3>
                  <p className={styles.successDesc}>
                    Thanks for reaching out. We will review your project details
                    and get back to you within one business day.
                  </p>
                  <button
                    className="btn btn-secondary"
                    onClick={() => { setForm(EMPTY); setStatus('idle') }}
                    type="button"
                  >
                    Send another message
                  </button>
                </motion.div>

              ) : (

                /* ── Form ── */
                <motion.form
                  key="form"
                  className={styles.form}
                  onSubmit={handleSubmit}
                  noValidate
                  aria-label="Contact form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {/* Name + Email */}
                  <div className={styles.row}>
                    <div className={styles.field}>
                      <label htmlFor="name" className={styles.label}>
                        Name <span className={styles.required} aria-hidden="true">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        placeholder="Your full name"
                        value={form.name}
                        onChange={handleChange}
                        className={fieldClass('name')}
                        aria-required="true"
                        aria-describedby={errors.name ? 'name-error' : undefined}
                      />
                      {errors.name && (
                        <span id="name-error" className={styles.errorMsg} role="alert">{errors.name}</span>
                      )}
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="email" className={styles.label}>
                        Email <span className={styles.required} aria-hidden="true">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="you@company.com"
                        value={form.email}
                        onChange={handleChange}
                        className={fieldClass('email')}
                        aria-required="true"
                        aria-describedby={errors.email ? 'email-error' : undefined}
                      />
                      {errors.email && (
                        <span id="email-error" className={styles.errorMsg} role="alert">{errors.email}</span>
                      )}
                    </div>
                  </div>

                  {/* Business + Project type */}
                  <div className={styles.row}>
                    <div className={styles.field}>
                      <label htmlFor="business" className={styles.label}>
                        Business name
                      </label>
                      <input
                        id="business"
                        name="business"
                        type="text"
                        placeholder="Your business (optional)"
                        value={form.business}
                        onChange={handleChange}
                        className={styles.input}
                      />
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="projectType" className={styles.label}>
                        Project type <span className={styles.required} aria-hidden="true">*</span>
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={form.projectType}
                        onChange={handleChange}
                        className={`${styles.select} ${errors.projectType ? styles.inputError : ''}`}
                        aria-required="true"
                        aria-describedby={errors.projectType ? 'project-error' : undefined}
                      >
                        <option value="">Select a type</option>
                        {PROJECT_TYPES.map(t => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                      {errors.projectType && (
                        <span id="project-error" className={styles.errorMsg} role="alert">{errors.projectType}</span>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div className={styles.field}>
                    <label htmlFor="message" className={styles.label}>
                      Tell us about your project <span className={styles.required} aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="What are you trying to build or improve? Any details help."
                      value={form.message}
                      onChange={handleChange}
                      className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                      aria-required="true"
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      maxLength={2000}
                    />
                    <span className={`${styles.charCount} ${charCount > 1800 ? styles.charCountWarn : ''}`}>
                      {charCount} / 2000
                    </span>
                    {errors.message && (
                      <span id="message-error" className={styles.errorMsg} role="alert">{errors.message}</span>
                    )}
                  </div>

                  {/* Submit */}
                  <div className={styles.submitRow}>
                    {status === 'error' && (
                      <p className={styles.errorMsg} role="alert">
                        Something went wrong. Please try again or email us directly.
                      </p>
                    )}
                    <button
                      type="submit"
                      className={`btn btn-primary ${styles.submitBtn}`}
                      disabled={status === 'loading'}
                      aria-busy={status === 'loading'}
                    >
                      {status === 'loading' ? 'Sending...' : 'Send Message'}
                    </button>
                    <p className={styles.disclaimer}>
                      This form is for project enquiries only. We will never share
                      your information with third parties.
                    </p>
                  </div>
                </motion.form>

              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
