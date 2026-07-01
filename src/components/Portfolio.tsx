import { motion } from 'framer-motion'
import { PROJECTS } from '../data/projects'
import styles from './Portfolio.module.css'

const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
}

function scrollTo(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Portfolio() {
  return (
    <section id="projects" className={`section ${styles.portfolio}`}>
      <div className="container">

        {/* Section header */}
        <motion.div
          className="section-header centered"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-label">Our Work</span>
          <h2 className="section-heading">Problems Solved,<br />Results Delivered</h2>
          <p className="section-subtext">
            A look at the kind of work we do: real problems, tailored solutions, and
            measurable outcomes. Client case studies added as projects complete.
          </p>
        </motion.div>

        {/* Cards */}
        <div className={styles.grid}>
          {PROJECTS.map((project, i) => (
            <motion.article
              key={project.id}
              className={styles.card}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              whileHover={{ y: -5, transition: { duration: 0.22 } }}
              viewport={{ once: true, margin: '-60px' }}
              aria-label={project.title}
            >
              {/* Accent stripe — colour from data */}
              <div
                className={styles.accent}
                style={{ background: project.accent }}
                aria-hidden="true"
              />

              <div className={styles.body}>
                {/* Meta row */}
                <div className={styles.meta}>
                  <span className={styles.category}>{project.category}</span>
                  <span className={styles.placeholder}>Concept project</span>
                </div>

                {/* Title */}
                <h3 className={styles.title}>{project.title}</h3>

                {/* Problem / Solution / Result */}
                <dl className={styles.psrList}>
                  <div className={styles.psr}>
                    <dt className={styles.psrLabel}>Problem</dt>
                    <dd className={styles.psrText}>{project.problem}</dd>
                  </div>
                  <div className={styles.psr}>
                    <dt className={styles.psrLabel}>Solution</dt>
                    <dd className={styles.psrText}>{project.solution}</dd>
                  </div>
                  <div className={`${styles.psr} ${styles.psrResult}`}>
                    <dt className={styles.psrLabel}>Result</dt>
                    <dd className={styles.psrText}>{project.result}</dd>
                  </div>
                </dl>

                {/* Tags */}
                <ul className={styles.tags} role="list" aria-label="Technologies used">
                  {project.tags.map(tag => (
                    <li key={tag} className={styles.tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
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
          <button
            className="btn btn-primary"
            onClick={() => scrollTo('#contact')}
            type="button"
            style={{ padding: '1rem 2.5rem', fontSize: 'var(--text-base)' }}
          >
            Start Your Project
          </button>
          <p className={styles.ctaNote}>
            Have a specific project in mind? Let's talk it through. No commitment needed.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
