import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './AIAgents.module.css'

/* ── Capability list ───────────────────────────────────────── */

const CAPABILITIES = [
  {
    title: 'Answer customer questions instantly',
    desc:  'Handles FAQs about your services, pricing, location, and hours. Any time of day, without you being online.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" width={20} height={20}>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    title: 'Collect and qualify leads automatically',
    desc:  'Asks the right questions, gathers contact details, and delivers warm leads straight to your inbox or CRM.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" width={20} height={20}>
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    title: 'Book appointments without back-and-forth',
    desc:  'Lets clients pick a time and confirms the booking automatically. No phone tag, no email chains.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" width={20} height={20}>
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    ),
  },
  {
    title: 'Send follow-up emails on schedule',
    desc:  'Automatically follows up with leads, confirms appointments, and sends reminders so nothing slips through the cracks.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" width={20} height={20}>
        <path d="M22 2 11 13" />
        <path d="M22 2 15 22 11 13 2 9l20-7z" />
      </svg>
    ),
  },
  {
    title: 'Summarize and sort new inquiries',
    desc:  'Reads incoming messages, pulls out the important details, and organises them so you can act fast on what matters.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" width={20} height={20}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    title: 'Update your CRM automatically',
    desc:  'Every new lead, booking, and customer interaction is logged without you touching a thing.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" width={20} height={20}>
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
  },
  {
    title: 'Handle repetitive admin all day long',
    desc:  'Anything you do more than twice a day on a computer is a candidate for automation. AI agents handle it round the clock.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" width={20} height={20}>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
] as const

/* ── Task feed data ────────────────────────────────────────── */

const ALL_TASKS = [
  { text: 'Answered: "What are your opening hours?"',  active: false },
  { text: 'Lead captured: sarah@bloom-studio.com',      active: false },
  { text: 'Appointment booked: Monday at 3 pm',         active: false },
  { text: 'Follow-up email sent to James R.',           active: false },
  { text: 'Inquiry summarised and filed',               active: false },
  { text: 'CRM updated: new contact added',             active: false },
  { text: 'Confirmed booking for Emma K.',              active: false },
  { text: 'Processing new inquiry...',                  active: true  },
]

const CHIPS = [
  '24 / 7 Availability',
  'Lead Capture',
  'Auto Follow-Up',
  'Zero Downtime',
]

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] },
  }),
}

/* ── Component ─────────────────────────────────────────────── */

export default function AIAgents() {
  const [queue, setQueue] = useState(() =>
    ALL_TASKS.slice(0, 4).map((t, i) => ({ ...t, key: `init-${i}` }))
  )
  const counterRef = useRef(4)

  // Cycle a new task into the feed every ~2.2 s
  useEffect(() => {
    const timer = setInterval(() => {
      const next = ALL_TASKS[counterRef.current % ALL_TASKS.length]
      counterRef.current += 1
      setQueue(prev => [
        ...prev.slice(-3),
        { ...next, key: `task-${counterRef.current}` },
      ])
    }, 2200)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="ai-agents" className={`section ${styles.section}`}>
      <div className="container">

        {/* Section header */}
        <motion.div
          className="section-header centered"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-label">AI Agents</span>
          <h2 className="section-heading">
            Your Business,<br />Running on Autopilot
          </h2>
          <p className="section-subtext">
            An AI agent isn't a chatbot. It's a tireless digital worker that handles real
            tasks like capturing leads, booking appointments, and sending emails, without you
            having to do anything.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className={styles.layout}>

          {/* ── Left: capability list ── */}
          <ul className={styles.capList} role="list">
            {CAPABILITIES.map((cap, i) => (
              <motion.li
                key={cap.title}
                className={styles.capItem}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                role="listitem"
              >
                <div className={styles.capIcon} aria-hidden="true">
                  {cap.icon}
                </div>
                <div>
                  <div className={styles.capTitle}>{cap.title}</div>
                  <div className={styles.capDesc}>{cap.desc}</div>
                </div>
              </motion.li>
            ))}
          </ul>

          {/* ── Right: animated agent card ── */}
          <motion.div
            className={styles.right}
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Floating chips */}
            {CHIPS.map((chip, i) => (
              <div
                key={chip}
                className={`${styles.chip} ${styles[`chip${i + 1}` as keyof typeof styles]}`}
                aria-hidden="true"
              >
                {chip}
              </div>
            ))}

            {/* Agent card */}
            <div className={styles.agentCard}>

              {/* Header */}
              <div className={styles.agentHeader}>
                <div className={styles.agentAvatar} aria-hidden="true">AI</div>
                <div className={styles.agentMeta}>
                  <div className={styles.agentName}>Velora AI Agent</div>
                  <div className={styles.agentStatus}>
                    <span className={styles.statusDot} aria-hidden="true" />
                    Active · Running 24/7
                  </div>
                </div>
              </div>

              {/* Task feed */}
              <div className={styles.feedLabel} aria-live="polite" aria-label="Recent agent activity">
                Recent Activity
              </div>

              <div className={styles.taskFeed}>
                <AnimatePresence initial={false}>
                  {queue.map(task => (
                    <motion.div
                      key={task.key}
                      className={styles.taskItem}
                      initial={{ opacity: 0, y: 14, x: -6 }}
                      animate={{ opacity: 1, y: 0, x: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      {task.active
                        ? <span className={styles.taskArrow} aria-hidden="true">→</span>
                        : <span className={styles.taskCheck} aria-hidden="true">✓</span>
                      }
                      {task.text}
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Footer */}
              <div className={styles.agentFooter}>
                <span className={styles.footerStat}>
                  <strong>247</strong> tasks handled today
                </span>
                <span className={styles.footerBadge}>Live</span>
              </div>

            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
