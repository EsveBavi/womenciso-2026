import './EventLinks.css'

const EventLinks = () => {
  const events = [
    {
      day: '8 de Mayo',
      date: '2026-05-08',
      link: 'https://www.youtube.com/live/jSknAYaOZg0?si=neHIZOt9scUnjr8n',
      icon: '📺'
    },
    {
      day: '9 de Mayo',
      date: '2026-05-09',
      link: 'https://www.youtube.com/live/euFT4s-UXlk?si=BeifwpDCLGn1p_CD',
      icon: '🎬'
    }
  ]

  return (
    <section className="section" id="event-links" style={{ background: 'rgba(30, 58, 138, 0.05)' }}>
      <div className="event-links-container">
        <h2 className="event-links-title">En Vivo</h2>
        <p className="event-links-subtitle">Sigue el evento en YouTube</p>
        <div className="events-grid">
          {events.map((event, index) => (
            <a
              key={index}
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
              className="event-link-card"
            >
              <div className="event-icon">{event.icon}</div>
              <div className="event-content">
                <span className="event-day">{event.day}</span>
                <span className="event-label">Ver en vivo</span>
              </div>
              <div className="event-arrow">→</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EventLinks
