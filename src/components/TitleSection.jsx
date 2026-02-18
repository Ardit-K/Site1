import './TitleSection.css'

export default function TitleSection() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="title" className="title-section">
      <div className="title-inner">
        <span className="title-kicker">Construction · Design · Delivery</span>
        <h1 className="title-heading">
          We build <span className="title-accent">smarter structures</span> for your next project.
        </h1>
        <p className="title-sub">
          BuildRight Construction delivers commercial, residential, and civic projects with a focus on safety, schedule, and transparent communication from ground-breaking to handover.
        </p>
        <div className="title-actions">
          <button type="button" className="title-btn title-btn--primary" onClick={() => scrollTo('contact')}>
            Get in touch
          </button>
          <button type="button" className="title-btn title-btn--outline" onClick={() => scrollTo('about')}>
            Learn about us
          </button>
        </div>
      </div>
    </section>
  )
}
