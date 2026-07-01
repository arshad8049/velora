import { motion } from 'framer-motion'
import styles from './Testimonials.module.css'

const EASE = [0.16, 1, 0.3, 1] as const

// Replace these with real client quotes before going live.
const TESTIMONIALS = [
  {
    quote:   'They had our site live in under a week. We booked three new clients in the first month through the chatbot alone.',
    name:    'James Harlow',
    role:    'Owner',
    company: 'Harlow Electrical',
    initial: 'JH',
  },
  {
    quote:   'Professional, fast, and they actually understood what a small business needs. No bloated agency process.',
    name:    'Maria Santos',
    role:    'Founder',
    company: 'Santos Family Law',
    initial: 'MS',
  },
  {
    quote:   'The AI chatbot answers enquiries 24/7. I wake up to qualified leads in my inbox every morning.',
    name:    'Derek Osei',
    role:    'Director',
    company: 'ProClean Services',
    initial: 'DO',
  },
]

function Stars() {
  return (
    <div className={styles.stars} aria-label="5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 16 16" width={14} height={14} aria-hidden="true">
          <path
            d="M8 1l1.8 3.6 4 .6-2.9 2.8.7 4L8 10l-3.6 1.9.7-4L2.2 5.2l4-.6z"
            fill="#f59e0b"
          />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className={`section ${styles.testimonials}`}>
      <div className="container">

        <motion.div
          className="section-header centered"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: EASE }}
        >
          <span className="section-label">Client Results</span>
          <h2 className="section-heading">What Happens After Launch</h2>
          <p className="section-subtext">
            Outcomes from businesses that were where you are now.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              className={styles.card}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: EASE }}
            >
              <Stars />

              <blockquote className={styles.quote}>
                <span className={styles.openQuote} aria-hidden="true">"</span>
                {t.quote}
              </blockquote>

              <div className={styles.author}>
                <div className={styles.avatar} aria-hidden="true">{t.initial}</div>
                <div className={styles.authorInfo}>
                  <span className={styles.name}>{t.name}</span>
                  <span className={styles.meta}>{t.role}, {t.company}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
