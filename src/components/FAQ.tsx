import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './FAQ.module.css'

const EASE = [0.16, 1, 0.3, 1] as const

const FAQS = [
  {
    q: 'What is included in the $250 website?',
    a: 'A fully designed, mobile-responsive website with up to 5 pages, a contact form, and SEO setup so you show up in local searches. You provide the content and we handle everything else.',
  },
  {
    q: 'What does "delivered in 7 days" mean exactly?',
    a: 'From the day your contract is signed and a 50% deposit is received, we begin immediately. You will have a production-ready site live within 7 business days.',
  },
  {
    q: 'What does the AI chatbot actually do?',
    a: 'It is a custom-trained assistant embedded on your site. It answers visitor questions using information about your business, captures contact details, and forwards qualified leads to you automatically, around the clock.',
  },
  {
    q: 'Are there any ongoing fees?',
    a: 'No. Both prices are one-time project fees. You will need to cover hosting, which typically runs $10 to $20 per month through providers like Vercel or Netlify, but there are no ongoing fees from us after delivery.',
  },
  {
    q: 'What do you need from me to get started?',
    a: 'Your logo, brand colors or a style reference, any copy or content you want on the site, and a 50% deposit. We handle everything else from there.',
  },
  {
    q: 'Can I add the chatbot to my site later?',
    a: 'Yes. If you start with the $250 website and want to add the chatbot later, the upgrade is $150.',
  },
  {
    q: 'What happens after the site goes live?',
    a: 'You own everything. We hand over the full codebase, the hosting setup, and access to all accounts. If you need changes down the line, we can work together on a per-project basis.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  function toggle(i: number) {
    setOpenIndex(prev => (prev === i ? null : i))
  }

  return (
    <section id="faq" className={`section ${styles.faq}`}>
      <div className="container">

        <motion.div
          className="section-header centered"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: EASE }}
        >
          <span className="section-label">FAQ</span>
          <h2 className="section-heading">Questions Worth Asking</h2>
          <p className="section-subtext">
            Straightforward answers before you reach out.
          </p>
        </motion.div>

        <motion.dl
          className={styles.list}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: EASE }}
        >
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div key={faq.q} className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}>
                <dt>
                  <button
                    type="button"
                    className={styles.question}
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                    id={`faq-question-${i}`}
                  >
                    <span>{faq.q}</span>
                    <span className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`} aria-hidden="true">
                      <svg viewBox="0 0 16 16" fill="none" width={14} height={14}>
                        <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </button>
                </dt>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.dd
                      key="answer"
                      id={`faq-answer-${i}`}
                      role="region"
                      aria-labelledby={`faq-question-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: EASE }}
                      style={{ overflow: 'hidden', margin: 0 }}
                    >
                      <p className={styles.answer}>{faq.a}</p>
                    </motion.dd>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </motion.dl>

      </div>
    </section>
  )
}
