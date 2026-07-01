import { motion } from 'framer-motion'
import { SERVICES } from '../data/services'
import ServiceCard from './ServiceCard'
import styles from './Services.module.css'

export default function Services() {
  return (
    <section id="services" className={`section ${styles.services}`}>
      <div className="container">

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
            From a polished website to a fully automated AI workflow, everything your
            business needs to look professional online and run smarter behind the scenes.
          </p>
        </motion.div>

        <div className={styles.grid} role="list">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}
