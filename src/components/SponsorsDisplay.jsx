import './SponsorsDisplay.css'

const SponsorsDisplay = ({ sponsors }) => {
  return (
    <section className="section sponsors-display">
      <h2 className="section-title">Nuestros Sponsors</h2>
      <div className="sponsors-grid">
        {sponsors.map((sponsor) => (
          <div key={sponsor.id} className="sponsor-item">
            <img src={sponsor.image} alt={sponsor.name} title={sponsor.name} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default SponsorsDisplay
