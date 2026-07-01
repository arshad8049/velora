import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useTransform } from 'framer-motion'
import { useMouseParallax } from '../hooks/useMouseParallax'
import styles from './Hero.module.css'

const EASE = [0.16, 1, 0.3, 1] as const

function scrollTo(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
}

/* ── WebsiteCard ─────────────────────────────────────────────── */
function WebsiteCard() {
  return (
    <>
      <div className={styles.browserBar}>
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.urlBar} />
      </div>
      <div className={styles.browserBody}>
        <div className={styles.mockLine} style={{ width: '65%', background: 'rgba(124,58,237,0.4)' }} />
        <div className={styles.mockLine} style={{ width: '90%' }} />
        <div className={styles.mockLine} style={{ width: '55%' }} />
        <div className={styles.mockImg} />
        <div className={styles.mockLine} style={{ width: '80%' }} />
        <div className={styles.mockLine} style={{ width: '45%' }} />
        <div className={styles.mockBtn} />
      </div>
    </>
  )
}

/* ── RevenueCard ─────────────────────────────────────────────── */
function RevenueCard() {
  return (
    <>
      <div className={styles.revenueLabel}>Monthly Revenue</div>
      <div className={styles.revenueValue}>$12.4k</div>
      <div className={styles.revenueTrend}>
        <span className={styles.up}>+34%</span>
        <span className={styles.revenueSub}>&nbsp;vs last month</span>
      </div>
    </>
  )
}

/* ── LeadCard ────────────────────────────────────────────────── */
const LEADS = [
  { initials: 'SM', name: 'Sarah M.',   type: 'Website Enquiry', ago: 'just now' },
  { initials: 'JR', name: 'James R.',   type: 'Chatbot Lead',    ago: '2m ago'   },
  { initials: 'PK', name: 'Priya K.',   type: 'Booking Request', ago: '5m ago'   },
  { initials: 'MT', name: 'Marcus T.',  type: 'Contact Form',    ago: '9m ago'   },
]

function LeadCard() {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIdx(i => (i + 1) % LEADS.length), 2800)
    return () => clearInterval(id)
  }, [])

  return (
    <>
      <div className={styles.leadHeader}>
        <span className={styles.leadLiveDot} aria-hidden="true" />
        <span className={styles.leadTitle}>Live Activity</span>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={idx}
          className={styles.leadRow}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          transition={{ duration: 0.26, ease: EASE }}
        >
          <div className={styles.leadAvatar}>{LEADS[idx].initials}</div>
          <div className={styles.leadInfo}>
            <span className={styles.leadName}>{LEADS[idx].name}</span>
            <span className={styles.leadType}>{LEADS[idx].type}</span>
          </div>
          <span className={styles.leadAgo}>{LEADS[idx].ago}</span>
        </motion.div>
      </AnimatePresence>
      <div className={styles.leadDivider} />
      <div className={styles.leadFooter}>
        <span className={styles.leadCount}>47</span>
        <span className={styles.leadCountLabel}>&nbsp;leads this week</span>
      </div>
    </>
  )
}

/* ── ChatCard ────────────────────────────────────────────────── */
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
          On it. Setting that up for you now.
        </div>
        <div className={styles.typingRow}>
          <span className={styles.typingDot} style={{ animationDelay: '0ms'   }} />
          <span className={styles.typingDot} style={{ animationDelay: '150ms' }} />
          <span className={styles.typingDot} style={{ animationDelay: '300ms' }} />
        </div>
      </div>
    </>
  )
}

/* ── BookingCard ─────────────────────────────────────────────── */
function BookingCard() {
  return (
    <>
      <div className={styles.bookingCheck} aria-hidden="true">
        <svg viewBox="0 0 16 16" fill="none" width={14} height={14}>
          <circle cx="8" cy="8" r="7" fill="rgba(16,185,129,0.15)" stroke="rgba(16,185,129,0.5)" strokeWidth="1" />
          <path d="M5 8l2 2 4-4" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Appointment Booked
      </div>
      <div className={styles.bookingName}>Emma Thompson</div>
      <div className={styles.bookingMeta}>Initial Consultation</div>
      <div className={styles.bookingTime}>Tomorrow · 10:00 AM</div>
      <div className={styles.bookingSource}>Booked via your website</div>
    </>
  )
}

/* ── SpeedCard ───────────────────────────────────────────────── */
function SpeedCard() {
  return (
    <>
      <div className={styles.speedLabel}>Performance</div>
      <div className={styles.speedRingWrap}>
        <svg viewBox="0 0 64 64" width={56} height={56} aria-hidden="true">
          <defs>
            <linearGradient id="sg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7c3aed" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
          <circle cx="32" cy="32" r="26" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="5" />
          <circle
            cx="32" cy="32" r="26"
            fill="none"
            stroke="url(#sg)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray="163.4"
            strokeDashoffset="1.6"
            transform="rotate(-90 32 32)"
          />
        </svg>
        <span className={styles.speedScore}>99</span>
      </div>
      <span className={styles.speedMeta}>Google PageSpeed</span>
    </>
  )
}

/* ── AnalyticsCard ───────────────────────────────────────────── */
function AnalyticsCard() {
  const bars = [38, 52, 44, 67, 80, 95, 72]
  return (
    <>
      <div className={styles.analyticsLabel}>Leads This Month</div>
      <div className={styles.analyticsValue}>+124%</div>
      <div className={styles.analyticsTrack}>
        <div className={styles.analyticsFill} />
      </div>
      <div className={styles.miniChart} aria-hidden="true">
        {bars.map((h, i) => (
          <div key={i} className={styles.miniBar} style={{ height: `${h}%` }} />
        ))}
      </div>
      <div className={styles.analyticsRow}>
        <span>Bookings</span>
        <span className={styles.up}>+89</span>
      </div>
      <div className={styles.analyticsRow}>
        <span>Inquiries</span>
        <span className={styles.up}>+203</span>
      </div>
    </>
  )
}

/* ── AutomationCard ──────────────────────────────────────────── */
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
      <div className={styles.autoRow}>
        <span className={styles.autoRowLabel}>Leads routed</span>
        <span className={styles.autoRowVal}>1,204</span>
      </div>
      <div className={styles.autoRow}>
        <span className={styles.autoRowLabel}>Avg response</span>
        <span className={styles.autoRowVal}>4s</span>
      </div>
      <div className={styles.autoStatus}>
        <span className={styles.statusDot} />
        Running 24/7
      </div>
    </>
  )
}

/* ── Hero ────────────────────────────────────────────────────── */

export default function Hero() {
  const { x, y } = useMouseParallax(24)

  // 8 depth layers — alternating positive/negative creates the staggered depth feel
  const x1 = useTransform(x, v => v * 1.2);  const y1 = useTransform(y, v => v * 1.2)
  const x2 = useTransform(x, v => v * 0.45); const y2 = useTransform(y, v => v * 0.45)
  const x3 = useTransform(x, v => v * 0.8);  const y3 = useTransform(y, v => v * 0.8)
  const x4 = useTransform(x, v => v * 0.55); const y4 = useTransform(y, v => v * 0.55)
  const x5 = useTransform(x, v => v * -0.3); const y5 = useTransform(y, v => v * -0.3)
  const x6 = useTransform(x, v => v * -0.5); const y6 = useTransform(y, v => v * -0.5)
  const x7 = useTransform(x, v => v * -0.4); const y7 = useTransform(y, v => v * -0.4)
  const x8 = useTransform(x, v => v * 0.9);  const y8 = useTransform(y, v => v * 0.9)

  const hover = { scale: 1.04 }
  const tap   = { scale: 0.97 }

  return (
    <section id="hero" className={`section ${styles.hero}`} aria-label="Introduction">

      <div className={styles.bgGlow}  aria-hidden="true" />
      <div className={styles.bgGrid}  aria-hidden="true" />
      <div className={styles.orb1}    aria-hidden="true" />
      <div className={styles.orb2}    aria-hidden="true" />
      <div className={styles.orb3}    aria-hidden="true" />

      {/* ─── 8 floating cards ─── */}

      {/* Outer column — right edge */}
      <motion.div className={`${styles.floatCard} ${styles.cardWebsite}`}    style={{ x: x1, y: y1 }} whileHover={hover} whileTap={tap} aria-hidden="true"><WebsiteCard /></motion.div>
      <motion.div className={`${styles.floatCard} ${styles.cardChat}`}       style={{ x: x4, y: y4 }} whileHover={hover} whileTap={tap} aria-hidden="true"><ChatCard /></motion.div>
      <motion.div className={`${styles.floatCard} ${styles.cardSpeed}`}      style={{ x: x6, y: y6 }} whileHover={hover} whileTap={tap} aria-hidden="true"><SpeedCard /></motion.div>
      <motion.div className={`${styles.floatCard} ${styles.cardAutomation}`} style={{ x: x8, y: y8 }} whileHover={hover} whileTap={tap} aria-hidden="true"><AutomationCard /></motion.div>

      {/* Inner column — inset, creates depth */}
      <motion.div className={`${styles.floatCard} ${styles.cardRevenue}`}   style={{ x: x2, y: y2 }} whileHover={hover} whileTap={tap} aria-hidden="true"><RevenueCard /></motion.div>
      <motion.div className={`${styles.floatCard} ${styles.cardLead}`}      style={{ x: x3, y: y3 }} whileHover={hover} whileTap={tap} aria-hidden="true"><LeadCard /></motion.div>
      <motion.div className={`${styles.floatCard} ${styles.cardBooking}`}   style={{ x: x5, y: y5 }} whileHover={hover} whileTap={tap} aria-hidden="true"><BookingCard /></motion.div>
      <motion.div className={`${styles.floatCard} ${styles.cardAnalytics}`} style={{ x: x7, y: y7 }} whileHover={hover} whileTap={tap} aria-hidden="true"><AnalyticsCard /></motion.div>

      {/* ─── Text content ─── */}
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
            <span className="gradient-text">That Work While&nbsp;You&nbsp;Sleep</span>
          </motion.h1>

          <motion.p
            className={styles.subheadline}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease: EASE }}
          >
            We build modern websites, AI chatbots, and automation systems that help
            small businesses look professional, capture more leads, and stop doing
            repetitive work.
          </motion.p>

          <motion.div
            className={styles.ctaGroup}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28, ease: EASE }}
          >
            <button className="btn btn-primary"   onClick={() => scrollTo('#contact')} type="button">Start a Project</button>
            <button className="btn btn-secondary" onClick={() => scrollTo('#services')} type="button">See What We Build</button>
          </motion.div>

          <motion.div
            className={styles.trustLine}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            <span>Delivered in 7 days</span>
            <span className={styles.trustDot} />
            <span>Free consultation</span>
            <span className={styles.trustDot} />
            <span>No commitment required</span>
          </motion.div>

        </div>
      </div>

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
