import './Speakers.css'
import { speakersList } from '../speakers'

const Speakers = () => {
  return (
    <section className="section speakers-section">
      <h2 className="section-title speakers-title">Speakers Confirmados</h2>
      <p className="section-subtitle speakers-subtitle">
        Líderes reconocidas en ciberseguridad e inteligencia artificial
      </p>

      <div className="speakers-grid">
        {speakersList.map((speaker, index) => (
          <div key={index} className="speaker-card">
            <div className="speaker-image-wrapper">
              <img src={speaker.image} alt={speaker.name} className="speaker-image" />
            </div>
            <div className="speaker-content">
              <div className="speaker-name">{speaker.name}</div>
              <div className="speaker-title">{speaker.title}</div>
              <p className="speaker-bio">{speaker.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Speakers
