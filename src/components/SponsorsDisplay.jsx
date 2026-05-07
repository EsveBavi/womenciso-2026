import './SponsorsDisplay.css'
import { useState } from 'react'

const SponsorsDisplay = ({ sponsors }) => {
  const [failedImages, setFailedImages] = useState(new Set())

  const handleImageError = (sponsorId) => {
    setFailedImages(prev => new Set([...prev, sponsorId]))
  }

  const visibleSponsors = sponsors.filter(sponsor => !failedImages.has(sponsor.id))

  if (visibleSponsors.length === 0) {
    return null
  }

  return (
    <section className="section sponsors-display">
      <h2 className="section-title">Nuestros Sponsors</h2>
      <div className="sponsors-grid">
        {visibleSponsors.map((sponsor) => (
          <div key={sponsor.id} className="sponsor-item">
            <img
              src={sponsor.image}
              alt={sponsor.name}
              title={sponsor.name}
              onError={() => handleImageError(sponsor.id)}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default SponsorsDisplay
