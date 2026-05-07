import './Speakers.css'
// import { speakersList } from '../speakers'

const Speakers = () => {
  // Generar lista de speakers desde las imágenes
  const speakerImages = Array.from({ length: 17 }, (_, i) => `/speakers/${i + 1}.png`)

  return (
    <section className="section speakers-section">
      <h2 className="section-title speakers-title">Speakers Confirmados</h2>
      {/* <p className="section-subtitle speakers-subtitle">
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
      </div> */}

      <div className="speakers-photos-grid">
        {speakerImages.map((image, index) => (
          <div key={index} className="speaker-photo-card">
            <img src={image} alt={`Speaker ${index + 1}`} className="speaker-photo" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Speakers
