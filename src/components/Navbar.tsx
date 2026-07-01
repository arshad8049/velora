import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const NAV_LINKS = [
  { label: 'Services',  href: '#services' },
  { label: 'Process',   href: '#process'  },
  { label: 'Projects',  href: '#projects' },
  { label: 'About',     href: '#about'    },
  { label: 'Contact',   href: '#contact'  },
] as const

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  // Toggle glass effect based on scroll position
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Prevent body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // Close menu and smooth-scroll to target section
  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const target = document.querySelector(href)
    target?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
      role="banner"
    >
      <div className={`container ${styles.inner}`}>

        {/* ── Logo ── */}
        <button
          className={styles.logo}
          onClick={() => handleNavClick('#hero')}
          aria-label="Velora — scroll to top"
          type="button"
        >
          <span className={styles.logoText}>Velora</span>
        </button>

        {/* ── Desktop navigation ── */}
        <nav className={styles.desktopNav} aria-label="Main navigation">
          <ul role="list">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <button
                  className={styles.navLink}
                  onClick={() => handleNavClick(href)}
                  type="button"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* ── Desktop CTA ── */}
        <button
          className={`btn btn-primary ${styles.ctaBtn}`}
          onClick={() => handleNavClick('#contact')}
          type="button"
        >
          Book a Free Consultation
        </button>

        {/* ── Hamburger (mobile only) ── */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
          onClick={() => setMenuOpen(prev => !prev)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          type="button"
        >
          <span className={styles.line} />
          <span className={styles.line} />
          <span className={styles.line} />
        </button>
      </div>

      {/* ── Mobile full-screen overlay ── */}
      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}
        aria-hidden={!menuOpen}
        role="dialog"
        aria-label="Navigation menu"
      >
        <nav aria-label="Mobile navigation">
          <ul role="list">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <button
                  className={styles.mobileNavLink}
                  onClick={() => handleNavClick(href)}
                  type="button"
                  tabIndex={menuOpen ? 0 : -1}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className={`btn btn-primary ${styles.mobileCtaBtn}`}
          onClick={() => handleNavClick('#contact')}
          type="button"
          tabIndex={menuOpen ? 0 : -1}
        >
          Book a Free Consultation
        </button>
      </div>
    </header>
  )
}
