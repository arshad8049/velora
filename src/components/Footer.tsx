import { motion } from 'framer-motion'
import styles from './Footer.module.css'

const EASE = [0.16, 1, 0.3, 1] as const

const NAV_LINKS = [
  { label: 'Services',   href: '#services'  },
  { label: 'Showcase',   href: '#showcase'  },
  { label: 'Process',    href: '#process'   },
  { label: 'AI Agents',  href: '#ai-agents' },
  { label: 'Work',       href: '#projects'  },
  { label: 'About',      href: '#about'     },
  { label: 'Contact',    href: '#contact'   },
]

const SOCIALS = [
  {
    label: 'LinkedIn',
    href:  '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18} aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href:  '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18} aria-hidden="true">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
  {
    label: 'X (Twitter)',
    href:  '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18} aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
]

function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer} role="contentinfo">

      {/* Top divider glow */}
      <div className={styles.topGlow} aria-hidden="true" />

      <div className="container">
        <motion.div
          className={styles.grid}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, ease: EASE }}
        >

          {/* Brand column */}
          <div className={styles.brand}>
            <span className={styles.logo}>Velora</span>
            <p className={styles.tagline}>
              Websites and AI systems built for small businesses that want to
              grow without burning more hours.
            </p>
            <div className={styles.socials} role="list" aria-label="Social links">
              {SOCIALS.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  className={styles.socialLink}
                  aria-label={s.label}
                  role="listitem"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation column */}
          <nav className={styles.nav} aria-label="Footer navigation">
            <span className={styles.colLabel}>Navigation</span>
            <ul className={styles.navList} role="list">
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <button
                    className={styles.navLink}
                    onClick={() => scrollTo(link.href)}
                    type="button"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services column */}
          <div className={styles.col}>
            <span className={styles.colLabel}>What We Build</span>
            <ul className={styles.navList} role="list">
              {[
                'Website Design',
                'AI Chatbots',
                'Automation Systems',
                'Landing Pages',
                'Booking Systems',
                'Lead Capture',
              ].map(item => (
                <li key={item}>
                  <button
                    className={styles.navLink}
                    onClick={() => scrollTo('#services')}
                    type="button"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div className={styles.col}>
            <span className={styles.colLabel}>Get In Touch</span>
            <p className={styles.contactBlurb}>
              Have a project in mind? We would love to hear about it.
            </p>
            <button
              className="btn btn-primary"
              onClick={() => scrollTo('#contact')}
              type="button"
              style={{ marginTop: 'var(--space-4)', width: '100%' }}
            >
              Start a Project
            </button>
            <div className={styles.responseBadge}>
              <span className={styles.responseDot} aria-hidden="true" />
              Usually responds within a few hours
            </div>
          </div>

        </motion.div>

        {/* Bottom bar */}
        <motion.div
          className={styles.bottom}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55, delay: 0.15, ease: EASE }}
        >
          <p className={styles.copy}>
            &copy; {year} Velora. All rights reserved.
          </p>
          <p className={styles.copy}>
            Built with React, Framer Motion, and a lot of care.
          </p>
        </motion.div>

      </div>
    </footer>
  )
}
