import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SHOWCASE_ITEMS as ITEMS } from '../data/features'
import styles from './FeatureShowcase.module.css'

/* ── Visual mockup sub-components ──────────────────────────── */

function RestaurantVisual() {
  return (
    <>
      <div className={styles.mockHeader}>
        <div className={styles.mockLogo} />
        <div>
          <div className={styles.mockBrand}>Bella Cucina</div>
          <div className={styles.mockSub}>Italian Fine Dining</div>
        </div>
      </div>
      <div className={styles.mockLabel}>Our Menu</div>
      {[['Pasta Carbonara', '$18'], ['Margherita Pizza', '$16'], ['Grilled Salmon', '$24'], ['Tiramisu', '$9']].map(([name, price]) => (
        <div key={name} className={styles.mockRow}>
          <span>{name}</span>
          <span style={{ color: 'var(--color-violet-light)', fontWeight: 600 }}>{price}</span>
        </div>
      ))}
      <div className={styles.mockBtn}>Reserve a Table →</div>
    </>
  )
}

function ClinicVisual() {
  return (
    <>
      <div className={styles.mockHeader}>
        <div className={styles.mockLogo} style={{ background: 'linear-gradient(135deg,#06b6d4,#4f46e5)' }} />
        <div>
          <div className={styles.mockBrand}>ClearCare Clinic</div>
          <div className={styles.mockSub}>Family Healthcare</div>
        </div>
      </div>
      <div className={styles.mockLabel}>Request an Appointment</div>
      <div className={styles.mockField}>Full Name</div>
      <div className={styles.mockField}>Preferred Date</div>
      <div className={styles.mockField}>Select Department ▾</div>
      <div className={styles.mockField}>Reason for Visit</div>
      <div className={styles.mockBtn}>Book Appointment →</div>
    </>
  )
}

function LawFirmVisual() {
  return (
    <>
      <div className={styles.mockHeader}>
        <div className={styles.mockLogo} style={{ background: 'linear-gradient(135deg,#1e3a5f,#4f46e5)' }} />
        <div>
          <div className={styles.mockBrand}>Hayes & Partners</div>
          <div className={styles.mockSub}>Trusted Legal Counsel</div>
        </div>
      </div>
      <div className={styles.mockLabel}>Practice Areas</div>
      <div style={{ marginBottom: 'var(--space-3)' }}>
        {['Family Law', 'Business', 'Personal Injury', 'Real Estate'].map(t => (
          <span key={t} className={styles.mockTag}>{t}</span>
        ))}
      </div>
      <div className={styles.mockLabel}>Free Case Evaluation</div>
      <div className={styles.mockField}>Your Name</div>
      <div className={styles.mockField}>Describe your situation</div>
      <div className={styles.mockBtn}>Get Free Consultation →</div>
    </>
  )
}

function LocalServiceVisual() {
  return (
    <>
      <div className={styles.mockHeader}>
        <div className={styles.mockLogo} style={{ background: 'linear-gradient(135deg,#059669,#06b6d4)' }} />
        <div>
          <div className={styles.mockBrand}>ProFix Services</div>
          <div className={styles.mockSub}>★★★★★ · Trusted since 2012</div>
        </div>
      </div>
      <div className={styles.mockLabel}>What do you need?</div>
      {['Plumbing', 'Electrical', 'HVAC Repair', 'General Handyman'].map(s => (
        <div key={s} className={styles.mockRow}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ width: 12, height: 12, border: '1px solid rgba(255,255,255,0.25)', borderRadius: 3, display: 'inline-block' }} />
            {s}
          </span>
        </div>
      ))}
      <div className={styles.mockBtn}>Request My Free Quote →</div>
    </>
  )
}

function AIAssistantVisual() {
  return (
    <>
      <div className={styles.mockHeader}>
        <div style={{
          width: 28, height: 28, borderRadius: '50%',
          background: 'var(--gradient-brand)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 11, fontWeight: 800, color: '#fff', flexShrink: 0,
        }}>AI</div>
        <div>
          <div className={styles.mockBrand}>Support Assistant</div>
          <div className={styles.mockSub} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
            Online 24/7
          </div>
        </div>
      </div>
      <div className={styles.chatWrap}>
        <div className={styles.chatBubbleBot}>Hi! How can I help your business today?</div>
        <div className={styles.chatBubbleUser}>What are your opening hours?</div>
        <div className={styles.chatBubbleBot}>We're open Monday to Friday, 9am – 6pm. Want me to book you in?</div>
        <div className={styles.chatBubbleUser}>Yes please</div>
        <div className={styles.typingDots}>
          <span /><span /><span />
        </div>
      </div>
    </>
  )
}

function DashboardVisual() {
  const bars = [30, 45, 40, 60, 75, 90, 68]
  return (
    <>
      <div className={styles.mockHeader}>
        <div className={styles.mockLogo} style={{ borderRadius: '8px' }} />
        <div>
          <div className={styles.mockBrand}>Business Overview</div>
          <div className={styles.mockSub}>Jul 2025 · Live</div>
        </div>
      </div>
      <div className={styles.statRow}>
        {[['124', 'Leads'], ['89', 'Booked'], ['$8.4k', 'Revenue']].map(([val, key]) => (
          <div key={key} className={styles.statBox}>
            <div className={styles.statVal}>{val}</div>
            <div className={styles.statKey}>{key}</div>
          </div>
        ))}
      </div>
      <div className={styles.barChart}>
        {bars.map((h, i) => (
          <div key={i} className={styles.bar} style={{ height: `${h}%` }} />
        ))}
      </div>
      {[['John D.', 'Quote Request'], ['Maria S.', 'Appointment Booked']].map(([name, action]) => (
        <div key={name} className={styles.activityRow}>
          <span className={styles.activityDot} />
          <span style={{ fontWeight: 600, color: 'var(--color-text-primary)' }}>{name}</span>
          <span>·</span>
          <span>{action}</span>
        </div>
      ))}
    </>
  )
}

const VISUALS: Record<string, () => React.ReactElement> = {
  'restaurant':    RestaurantVisual,
  'clinic':        ClinicVisual,
  'law-firm':      LawFirmVisual,
  'local-service': LocalServiceVisual,
  'ai-support':    AIAssistantVisual,
  'dashboard':     DashboardVisual,
}

/* ── Main component ────────────────────────────────────────── */

export default function FeatureShowcase() {
  const [activeId, setActiveId] = useState('restaurant')

  const active  = ITEMS.find(i => i.id === activeId)!
  const Visual  = VISUALS[activeId]

  return (
    <section id="showcase" className={`section ${styles.showcase}`}>
      <div className="container">

        {/* Section header */}
        <motion.div
          className="section-header centered"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-label">What I Can Build</span>
          <h2 className="section-heading">See It For Your Business</h2>
          <p className="section-subtext">
            Pick a business type to see exactly what we would build for you, from the
            website to the automation running behind it.
          </p>
        </motion.div>

        {/* Tab strip */}
        <div
          className={styles.tabRow}
          role="tablist"
          aria-label="Business type showcase"
        >
          {ITEMS.map(item => (
            <button
              key={item.id}
              role="tab"
              aria-selected={activeId === item.id}
              aria-controls={`panel-${item.id}`}
              id={`tab-${item.id}`}
              className={`${styles.tab} ${activeId === item.id ? styles.tabActive : ''}`}
              onClick={() => setActiveId(item.id)}
              type="button"
            >
              {item.label}
              {activeId === item.id && (
                <motion.div
                  className={styles.tabIndicator}
                  layoutId="showcase-tab-indicator"
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            id={`panel-${activeId}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeId}`}
            className={styles.panel}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Visual mockup */}
            <div className={styles.visualWrap} aria-hidden="true">
              <Visual />
            </div>

            {/* Description */}
            <div className={styles.info}>
              <h3 className={styles.panelTitle}>{active.title}</h3>
              <p className={styles.panelDesc}>{active.description}</p>
              <ul className={styles.highlights} role="list">
                {active.highlights.map(h => (
                  <li key={h} className={styles.highlight}>
                    <span className={styles.tick} aria-hidden="true">✓</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  )
}
