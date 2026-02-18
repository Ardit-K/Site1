import './AboutSection.css'

export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="about-inner">
        <span className="about-kicker">About us</span>
        <h2 className="about-heading">Who we are</h2>
        <p className="about-lead">
          BuildRight Construction has been delivering high-quality commercial and residential projects for over two decades. We combine experienced project management with a strong safety culture and clear communication at every stage.
        </p>
        <div className="about-grid">
          <div className="about-card">
            <h3>Our mission</h3>
            <p>
              To deliver every project on time and on budget, without compromising safety or quality. We treat every jobsite as a partnership with our clients and communities.
            </p>
          </div>
          <div className="about-card">
            <h3>What we do</h3>
            <p>
              Full-service construction: groundworks, structural steel, concrete, MEP coordination, and finish work. We also support design-build and construction management delivery.
            </p>
          </div>
          <div className="about-card">
            <h3>Why choose us</h3>
            <p>
              Transparent scheduling, daily site updates, and a track record of on-time completion. Our team is trained in the latest safety standards and project controls.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
