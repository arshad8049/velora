import { motion } from 'framer-motion'
import styles from './Process.module.css'

const STEPS = [
  {
    number: '01',
    title:  'Discover Your Business',
    desc:   'We start with a free conversation about your business, your customers, and what you actually need. No jargon, no sales pitch.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" width={28} height={28}>
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
    ),
  },
  {
    number: '02',
    title:  'Plan the System',
    desc:   'We map out exactly what to build: pages, features, automations. You get a clear plan before a single line of code is written.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" width={28} height={28}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    number: '03',
    title:  'Design the Experience',
    desc:   'You see exactly how everything will look and feel before it gets built, giving you the chance to shape it while changes are still easy.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" width={28} height={28}>
        <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
        <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
        <circle cx="8.5"  cy="7.5"  r=".5" fill="currentColor" />
        <circle cx="6.5"  cy="12.5" r=".5" fill="currentColor" />
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
      </svg>
    ),
  },
  {
    number: '04',
    title:  'Build the Website or Agent',
    desc:   'We build everything clean, fast, and properly. Whether that is a website, an AI chatbot, an automation flow, or all three at once.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" width={28} height={28}>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    number: '05',
    title:  'Test and Launch',
    desc:   'Everything is tested across devices and browsers before going live. Launch day is handled. Your site or agent goes live without disruption.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" width={28} height={28}>
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    number: '06',
    title:  'Improve Over Time',
    desc:   'Your business grows and your website should grow with it. We stay available for updates, improvements, and new features whenever you need them.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" width={28} height={28}>
        <polyline points="23 4 23 10 17 10" />
        <polyline points="1 20 1 14 7 14" />
        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
      </svg>
    ),
  },
] as const

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
}

function scrollTo(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Process() {
  return (
    <section id="process" className={`section ${styles.process}`}>
      <div className="container">

        {/* Section header */}
        <motion.div
          className="section-header centered"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-label">How It Works</span>
          <h2 className="section-heading">A Simple Process.<br />No Surprises.</h2>
          <p className="section-subtext">
            From our first conversation to ongoing improvements, here is exactly what
            working together looks like.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className={styles.grid}>
          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              className={styles.step}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              whileHover={{ y: -4, transition: { duration: 0.22 } }}
              viewport={{ once: true, margin: '-50px' }}
            >
              {/* Large ghost number */}
              <span className={styles.stepBgNumber} aria-hidden="true">
                {step.number}
              </span>

              {/* Step badge */}
              <div className={styles.stepNumber} aria-label={`Step ${step.number}`}>
                {step.number}
              </div>

              {/* Icon */}
              <div className={styles.icon} aria-hidden="true">
                {step.icon}
              </div>

              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className={styles.ctaText}>
            <strong>Ready to start?</strong> The first conversation is free and takes 20 minutes.
          </p>
          <button
            className="btn btn-primary"
            onClick={() => scrollTo('#contact')}
            type="button"
            style={{ padding: '1rem 2.5rem', fontSize: 'var(--text-base)' }}
          >
            Book a Free Consultation
          </button>
        </motion.div>

      </div>
    </section>
  )
}
