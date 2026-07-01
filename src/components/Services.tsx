import { motion } from 'framer-motion'
import { SERVICES } from '../data/services'
import type { ServiceIconId } from '../data/services'
import styles from './Services.module.css'

/* ── SVG icon map ──────────────────────────────────────────────
   Stroke-based icons, no external icon library needed.
   ──────────────────────────────────────────────────────────── */

const ICON_PATHS: Record<ServiceIconId, React.ReactNode> = {
  monitor: (
    <>
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </>
  ),
  chat: (
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  ),
  agent: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v3M12 20v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M1 12h3M20 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
    </>
  ),
  automation: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </>
  ),
  landing: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 21V9" />
    </>
  ),
  booking: (
    <>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
      <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
    </>
  ),
  redesign: (
    <>
      <polyline points="23 4 23 10 17 10" />
      <polyline points="1 20 1 14 7 14" />
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
    </>
  ),
}

function ServiceIcon({ id }: { id: ServiceIconId }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      width={22}
      height={22}
      aria-hidden="true"
    >
      {ICON_PATHS[id]}
    </svg>
  )
}

/* ── Animation variant ─────────────────────────────────────── */

const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.07,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

/* ── Component ─────────────────────────────────────────────── */

export default function Services() {
  return (
    <section id="services" className={`section ${styles.services}`}>
      <div className="container">

        {/* Section header */}
        <motion.div
          className="section-header centered"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-label">What I Build</span>
          <h2 className="section-heading">
            Services That Move Your<br />Business Forward
          </h2>
          <p className="section-subtext">
            From a polished website to a fully automated AI workflow — everything your
            business needs to look professional online and run smarter behind the scenes.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className={styles.grid} role="list">
          {SERVICES.map((service, i) => (
            <motion.article
              key={service.id}
              className={`${styles.card} ${service.highlight ? styles.cardHighlight : ''}`}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              viewport={{ once: true, margin: '-60px' }}
              role="listitem"
              aria-label={service.title}
            >
              {service.highlight && (
                <span className={styles.badge} aria-label="Most popular service">
                  Most Popular
                </span>
              )}

              <div className={styles.iconWrap}>
                <ServiceIcon id={service.iconId} />
              </div>

              <h3 className={styles.title}>{service.title}</h3>
              <p className={styles.desc}>{service.description}</p>

              <ul className={styles.featureList} role="list" aria-label={`${service.title} features`}>
                {service.features.map(feature => (
                  <li key={feature} className={styles.feature}>
                    <span className={styles.check} aria-hidden="true">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  )
}
