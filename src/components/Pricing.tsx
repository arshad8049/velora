import { motion } from 'framer-motion'
import styles from './Pricing.module.css'

const EASE = [0.16, 1, 0.3, 1] as const

function scrollToContact() {
  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
}

interface Tier {
  name:        string
  price:       string
  desc:        string
  stat?:       string
  features:    string[]
  cta:         string
  highlighted: boolean
  badge?:      string
}

const TIERS: Tier[] = [
  {
    name:        'Website',
    price:       '$150',
    desc:        'A complete, production-ready website designed, built, and live in 7 days.',
    highlighted: false,
    cta:         'Start a Project',
    features: [
      'Up to 5 custom pages',
      'Mobile-responsive design',
      'Contact form',
      'SEO foundations',
      'Optimised for fast loading',
    ],
  },
  {
    name:        'Website + Chatbot',
    price:       '$200',
    desc:        'Everything in Website, plus an AI chatbot that captures and qualifies leads around the clock.',
    stat:        'Businesses that respond to a lead within 5 minutes are 9x more likely to convert them. The chatbot does that automatically.',
    highlighted: true,
    badge:       'Most Chosen',
    cta:         'Start a Project',
    features: [
      'Everything in Website',
      'AI chatbot trained on your business',
      '24/7 lead capture and qualification',
      'Instant answers to visitor questions',
      'Enquiries forwarded to you automatically',
    ],
  },
]

const CheckIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" width={14} height={14} aria-hidden="true">
    <circle cx="8" cy="8" r="7" fill="rgba(124,58,237,0.15)" stroke="rgba(124,58,237,0.35)" strokeWidth="1" />
    <path d="M5 8l2 2 4-4" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function Pricing() {
  return (
    <section id="pricing" className={`section ${styles.pricing}`}>
      <div className="container">

        <motion.div
          className="section-header centered"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: EASE }}
        >
          <span className="section-label">Pricing</span>
          <h2 className="section-heading">Two Options. One Decision.</h2>
          <p className="section-subtext">
            No retainers. No surprise invoices. A fixed price, a fixed timeline,
            and a production-ready product at the end.
          </p>
        </motion.div>

        {/* Launch special banner */}
        <motion.div
          className={styles.offerBanner}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: EASE }}
          role="region"
          aria-label="Launch special offer"
        >
          <div className={styles.offerLeft}>
            <span className={styles.offerTag}>Launch Special</span>
            <p className={styles.offerHeadline}>
              Fully delivered within 7 days of contract signing.
            </p>
            <p className={styles.offerBody}>
              These prices reflect our introductory rate as we build our portfolio.
              Once the first 10 projects are closed, rates move to market standard.
            </p>
          </div>
          <div className={styles.offerRight} aria-hidden="true">
            <div className={styles.offerStat}>
              <span className={styles.offerStatNum}>7</span>
              <span className={styles.offerStatLabel}>day delivery</span>
            </div>
            <div className={styles.offerDivider} />
            <div className={styles.offerStat}>
              <span className={styles.offerStatNum}>10</span>
              <span className={styles.offerStatLabel}>spots remaining</span>
            </div>
          </div>
        </motion.div>

        {/* Tier cards */}
        <div className={styles.grid}>
          {TIERS.map((tier, i) => (
            <motion.div
              key={tier.name}
              className={`${styles.card} ${tier.highlighted ? styles.cardHighlighted : ''}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
            >
              {tier.highlighted && (
                <div className={styles.topAccent} aria-hidden="true" />
              )}

              {tier.badge && (
                <div className={styles.badge}>{tier.badge}</div>
              )}

              <div className={styles.cardHead}>
                <h3 className={styles.tierName}>{tier.name}</h3>
                <div className={styles.priceRow}>
                  <span className={styles.price}>{tier.price}</span>
                  <span className={styles.unit}>one-time</span>
                </div>
                <p className={styles.desc}>{tier.desc}</p>
              </div>

              <ul className={styles.features} role="list">
                {tier.features.map(f => (
                  <li key={f} className={styles.feature}>
                    <CheckIcon />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              {tier.stat && (
                <p className={styles.stat}>{tier.stat}</p>
              )}

              <button
                type="button"
                className={`btn ${tier.highlighted ? 'btn-primary' : 'btn-secondary'} ${styles.cta}`}
                onClick={scrollToContact}
              >
                {tier.cta}
              </button>
            </motion.div>
          ))}
        </div>

        <motion.p
          className={styles.note}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55, delay: 0.25, ease: EASE }}
        >
          Need something custom?{' '}
          <button type="button" className={styles.noteLink} onClick={scrollToContact}>
            Send us the brief
          </button>{' '}
          and we will work out a fixed quote.
        </motion.p>

      </div>
    </section>
  )
}
