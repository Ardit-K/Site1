import './ContactSection.css'

const contact = {
  email: 'contact@buildright-construction.com',
  phone: '(555) 123-4567',
  location: '123 Construction Way, Suite 100, Your City, ST 12345',
}

export default function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-inner">
        <span className="contact-kicker">Contact</span>
        <h2 className="contact-heading">Get in touch</h2>
        <p className="contact-sub">
          Ready to start your next project? Reach out by email, phone, or visit our office. We’ll respond within one business day.
        </p>
        <div className="contact-cards">
          <a href={`mailto:${contact.email}`} className="contact-card">
            <span className="contact-card-icon" aria-hidden>✉</span>
            <span className="contact-card-label">Email</span>
            <span className="contact-card-value">{contact.email}</span>
          </a>
          <a href={`tel:${contact.phone.replace(/\D/g, '')}`} className="contact-card">
            <span className="contact-card-icon" aria-hidden>☎</span>
            <span className="contact-card-label">Phone</span>
            <span className="contact-card-value">{contact.phone}</span>
          </a>
          <div className="contact-card contact-card--static">
            <span className="contact-card-icon" aria-hidden>📍</span>
            <span className="contact-card-label">Location</span>
            <span className="contact-card-value">{contact.location}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
