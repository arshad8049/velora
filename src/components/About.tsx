import { motion } from 'framer-motion'
import styles from './About.module.css'

// Replace placeholder copy, stats, and skills with your own details.
const STATS = [
  { val: '20+',  key: 'Projects'   },
  { val: '100%', key: 'Client Focus' },
  { val: '24/7', key: 'Support'    },
]

const SKILLS = [
  'React & TypeScript',
  'Node.js',
  'AI / LLM Integration',
  'Workflow Automation',
  'UI / UX Design',
  'REST APIs',
  'CRM Integrations',
  'SEO Foundations',
  'Framer Motion',
  'Vite & Modern Tooling',
]

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] },
  }),
}

function scrollTo(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function About() {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">

        {/* Section header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-label">About</span>
          <h2 className="section-heading">Built by People Who<br />Actually Give a Damn</h2>
        </motion.div>

        <div className={styles.layout}>

          {/* ── Left — avatar + stats ── */}
          <motion.div
            className={styles.left}
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Avatar */}
            <div className={styles.avatarWrap}>
              <div className={styles.avatar} aria-label="Velora team avatar">
                V
              </div>
            </div>

            {/* Name + role */}
            <div>
              <div className={styles.name}>Velora Studio</div>
              {/* Replace with your real name once ready */}
              <div className={styles.role}>Websites · AI Agents · Automation</div>
            </div>

            {/* Stats */}
            <div className={styles.stats} role="list">
              {STATS.map(s => (
                <div key={s.key} className={styles.stat} role="listitem">
                  <div className={styles.statVal}>{s.val}</div>
                  <div className={styles.statKey}>{s.key}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Right — bio + skills + CTA ── */}
          <motion.div
            className={styles.right}
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.bio}>
              <p className={styles.bioText}>
                We're a small, focused studio that builds <strong>professional websites and
                AI-powered systems</strong> for small businesses. The kind of businesses that
                deserve great technology but don't have the budget or time for a big agency.
              </p>
              <p className={styles.bioText}>
                Every project starts with understanding your business first. We don't sell
                templates or cookie-cutter solutions. We build things that actually fit
                how you work and what your customers need. Then we make sure they keep working.
              </p>
              <p className={styles.bioText}>
                <strong>Websites, AI chatbots, booking systems, automations, lead capture, CRM
                integrations</strong>. If it helps your business run smarter or look better
                online, it's in our wheelhouse.
              </p>
            </div>

            {/* Skills */}
            <div>
              <div className={styles.skillsLabel}>What we work with</div>
              <ul className={styles.skills} role="list">
                {SKILLS.map((skill, i) => (
                  <motion.li
                    key={skill}
                    className={styles.skill}
                    custom={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    role="listitem"
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className={styles.ctaRow}>
              <button
                className="btn btn-primary"
                onClick={() => scrollTo('#contact')}
                type="button"
                style={{ padding: '0.875rem 2rem' }}
              >
                Work With Us
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => scrollTo('#projects')}
                type="button"
                style={{ padding: '0.875rem 2rem' }}
              >
                See Our Work
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
