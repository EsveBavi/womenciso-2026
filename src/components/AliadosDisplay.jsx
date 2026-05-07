import './AliadosDisplay.css'
import { useState } from 'react'

const AliadosDisplay = ({ aliados }) => {
  const [failedImages, setFailedImages] = useState(new Set())

  const handleImageError = (aliadoId, originalImage) => {
    console.log('Error cargando imagen:', aliadoId, originalImage)
    setFailedImages(prev => new Set([...prev, aliadoId]))
  }

  const visibleAliados = aliados.filter(aliado => !failedImages.has(aliado.id))
  console.log('Aliados totales:', aliados.length, 'Fallidos:', failedImages.size, 'Visibles:', visibleAliados.length)

  if (visibleAliados.length === 0) {
    return null
  }

  return (
    <section className="section aliados-display">
      <h2 className="section-title">Nuestros Aliados</h2>
      <div className="aliados-grid">
        {visibleAliados.map((aliado) => (
          <div key={aliado.id} className="aliado-item">
            <img
              src={aliado.image}
              alt={aliado.name}
              title={aliado.name}
              onError={() => handleImageError(aliado.id, aliado.image)}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default AliadosDisplay
