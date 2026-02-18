import { useState } from 'react'
import './Navbar.css'

const navItems = [
  { id: 'title', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="navbar-brand">
          <span className="navbar-logo">BR</span>
          <div className="navbar-brand-text">
            <span className="navbar-name">BuildRight Construction</span>
            <span className="navbar-tagline">Building safer, stronger — on schedule.</span>
          </div>
        </div>
        <button
          type="button"
          className="navbar-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`navbar-nav ${open ? 'navbar-nav--open' : ''}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`navbar-link ${item.id === 'contact' ? 'navbar-link--primary' : ''}`}
              onClick={() => scrollTo(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}
