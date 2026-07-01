import { motion, useTransform } from 'framer-motion'
import { useMouseParallax } from '../hooks/useMouseParallax'
import styles from './Hero.module.css'

const EASE = [0.16, 1, 0.3, 1] as const

function scrollTo(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
}

/* ── Floating card sub-components ─────────────────────────────── */

function WebsiteCard() {
  return (
    <>
      <div className={styles.browserBar}>
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.dot} />
      </div>
      <div className={styles.browserBody}>
        <div className={styles.mockLine} style={{ width: '65%', background: 'rgba(124,58,237,0.4)' }} />
        <div className={styles.mockLine} style={{ width: '90%' }} />
        <div className={styles.mockLine} style={{ width: '55%' }} />
        <div className={styles.mockImg} />
        <div className={styles.mockLine} style={{ width: '80%' }} />
        <div className={styles.mockLine} style={{ width: '50%' }} />
      </div>
    </>
  )
}

function ChatCard() {
  return (
    <>
      <div className={styles.chatHeader}>
        <div className={styles.chatAvatar}>AI</div>
        <span className={styles.chatName}>Velora Assistant</span>
        <div className={styles.onlineDot} />
      </div>
      <div className={styles.chatMessages}>
        <div className={`${styles.bubble} ${styles.bubbleBot}`}>
          Hi! How can I help your business today?
        </div>
        <div className={`${styles.bubble} ${styles.bubbleUser}`}>
          I need more leads
        </div>
        <div className={`${styles.bubble} ${styles.bubbleBot}`}>
          On it — let me set that up for you ✓
        </div>
      </div>
    </>
  )
}

function AnalyticsCard() {
  return (
    <>
      <div className={styles.analyticsLabel}>Leads This Month</div>
      <div className={styles.analyticsValue}>+124%</div>
      <div className={styles.analyticsTrack}>
        <div className={styles.analyticsFill} />
      </div>
      <div className={styles.analyticsRow}>
        <span>Bookings</span>
        <span className={styles.up}>↑ 89</span>
      </div>
      <div className={styles.analyticsRow}>
        <span>Inquiries</span>
        <span className={styles.up}>↑ 203</span>
      </div>
    </>
  )
}

function AutomationCard() {
  return (
    <>
      <div className={styles.autoTitle}>Auto-Workflow</div>
      <div className={styles.flowRow}>
        <span className={styles.flowNode}>Form</span>
        <span className={styles.flowArrow}>→</span>
        <span className={`${styles.flowNode} ${styles.flowNodeAi}`}>AI</span>
        <span className={styles.flowArrow}>→</span>
        <span className={styles.flowNode}>CRM</span>
      </div>
      <div className={styles.autoStatus}>
        <span className={styles.statusDot} />
        Running 24/7
      </div>
    </>
  )
}

/* ── Hero ──────────────────────────────────────────────────────── */

export default function Hero() {
  const { x, y } = useMouseParallax(28)

  // Each card sits at a different depth — higher multiplier = more movement
  const x1 = useTransform(x, v => v * 1.2)
  const y1 = useTransform(y, v => v * 1.2)

  const x2 = useTransform(x, v => v * 0.65)
  const y2 = useTransform(y, v => v * 0.65)

  const x3 = useTransform(x, v => v * -0.5)
  const y3 = useTransform(y, v => v * -0.5)

  const x4 = useTransform(x, v => v * 0.9)
  const y4 = useTransform(y, v => v * 0.9)

  return (
    <section id="hero" className={`section ${styles.hero}`} aria-label="Introduction">

      {/* ── Background ── */}
      <div className={styles.bgGlow}  aria-hidden="true" />
      <div className={styles.bgGrid}  aria-hidden="true" />
      <div className={styles.orb1}    aria-hidden="true" />
      <div className={styles.orb2}    aria-hidden="true" />

      {/* ── Floating cards (desktop only) ── */}
      <motion.div
        className={`${styles.floatCard} ${styles.cardWebsite}`}
        style={{ x: x1, y: y1 }}
        aria-hidden="true"
      >
        <WebsiteCard />
      </motion.div>

      <motion.div
        className={`${styles.floatCard} ${styles.cardChat}`}
        style={{ x: x2, y: y2 }}
        aria-hidden="true"
      >
        <ChatCard />
      </motion.div>

      <motion.div
        className={`${styles.floatCard} ${styles.cardAnalytics}`}
        style={{ x: x3, y: y3 }}
        aria-hidden="true"
      >
        <AnalyticsCard />
      </motion.div>

      <motion.div
        className={`${styles.floatCard} ${styles.cardAutomation}`}
        style={{ x: x4, y: y4 }}
        aria-hidden="true"
      >
        <AutomationCard />
      </motion.div>

      {/* ── Content ── */}
      <div className={`container ${styles.contentWrap}`}>
        <div className={styles.content}>

          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: EASE }}
          >
            Built for Small Business Growth
          </motion.span>

          <motion.h1
            className={styles.headline}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08, ease: EASE }}
          >
            Websites & AI Agents<br />
            <span className="gradient-text">That Work While&nbsp;You&nbsp;Don't</span>
          </motion.h1>

          <motion.p
            className={styles.subheadline}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease: EASE }}
          >
            I build modern websites, AI chatbots, and automation tools that help
            small businesses look professional, capture more leads, and stop doing
            repetitive work manually.
          </motion.p>

          <motion.div
            className={styles.ctaGroup}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28, ease: EASE }}
          >
            <button
              className="btn btn-primary"
              onClick={() => scrollTo('#contact')}
              type="button"
            >
              Start a Project
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => scrollTo('#services')}
              type="button"
            >
              See What I Build
            </button>
          </motion.div>

          <motion.div
            className={styles.trustLine}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            <span>Free consultation</span>
            <span className={styles.trustDot} />
            <span>No commitment required</span>
            <span className={styles.trustDot} />
            <span>Custom-built for your business</span>
          </motion.div>

        </div>
      </div>

      {/* ── Scroll cue ── */}
      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        aria-hidden="true"
      >
        <div className={styles.scrollLine} />
        <span>Scroll</span>
      </motion.div>

    </section>
  )
}
