import './SponsorLevels.css'

const SponsorLevels = () => {
  const levels = [
    {
      icon: '🌟',
      title: 'Visionario',
      price: '$150,000 MXN',
      benefits: [
        'Prioridad en futuras ediciones',
        'Menciones 2 meses antes',
        'Logo en playeras y banners',
        'Keynote magistral',
        '15 pases + 10 cortesía',
        'Stand premium destacado',
        'Artículos en kit oficial'
      ]
    },
    {
      icon: '🎯',
      title: 'Estratégico',
      price: '$100,000 MXN',
      benefits: [
        'Menciones 1 mes antes',
        'Logo en swag y sitio oficial',
        '2 presentaciones 30 min',
        '10 pases + 5 cortesía',
        'Stand grande en área preferente',
        'Obsequios en kits'
      ]
    },
    {
      icon: '🤝',
      title: 'Aliado',
      price: '$80,000 MXN',
      benefits: [
        'Menciones en redes sociales',
        'Logo en playeras y sitio',
        '1 sesión de 30 minutos',
        '5 pases + 3 cortesía',
        'Stand mediano'
      ]
    },
    {
      icon: '👥',
      title: 'Comunidad',
      price: '$60,000 MXN',
      benefits: [
        'Menciones 15 días antes',
        'Logo en playeras y sitio',
        'Materiales en kit bienvenida',
        '3 pases + 2 cortesía',
        'Stand pequeño'
      ]
    },
    {
      icon: '💙',
      title: 'Supporter',
      price: '$8,000 MXN',
      benefits: [
        'Reconocimiento como Supporter',
        'Logo en sitio oficial',
        '1 acceso al evento',
        'Tarifas preferenciales'
      ]
    }
  ]

  const specialSponsorships = [
    {
      icon: '🎓',
      title: 'Becas Nombradas',
      description: 'Vincula tu marca a un bloque específico de becas (Ej. "Becas AI - [Tu Empresa]") con menciones destacadas.'
    },
    {
      icon: '🏆',
      title: 'Challenges IA + Ciberseguridad',
      description: 'Propón un reto real de negocio o seguridad para los becados; participa en la evaluación y premia el talento.'
    },
    {
      icon: '🌐',
      title: 'Networking Temático',
      description: 'Patrocina espacios de conexión (Talento Diverso o IA Generativa) y lidera dinámicas entre mentores y alumnos.'
    }
  ]

  const handleContact = (level) => {
    const subject = encodeURIComponent(`Interesado en Nivel ${level}`)
    const body = encodeURIComponent('Hola, quiero información detallada sobre el Nivel ' + level + '.\n\nEmpresa: ')
    window.location.href = `mailto:comunicacion@womenciso.com?subject=${subject}&body=${body}`
  }

  const handleSpecialContact = () => {
    const subject = encodeURIComponent('Consulta sobre Patrocinios Especiales')
    const body = encodeURIComponent('Hola, me interesa conocer más sobre las opciones de patrocinios especiales.\n\nEmpresa: ')
    window.location.href = `mailto:comunicacion@womenciso.com?subject=${subject}&body=${body}`
  }

  return (
    <section className="section" id="sponsors">
      <h2 className="section-title">Niveles de Patrocinio</h2>
      <p className="section-subtitle">
        Únete a nosotros como sponsor y conecta con el talento más prometedor en ciberseguridad
      </p>

      <div className="medals-grid">
        {levels.map((level, index) => (
          <div
            className="medal"
            key={index}
            onClick={() => handleContact(level.title)}
          >
            <div className="medal-icon">{level.icon}</div>
            <div className="medal-title">{level.title}</div>
            <div className="medal-price">{level.price}</div>
            <ul className="medal-benefits">
              {level.benefits.map((benefit, i) => (
                <li key={i}>✓ {benefit}</li>
              ))}
            </ul>
            <button className="btn" style={{ width: '100%', marginTop: '1rem' }}>
              Contactar
            </button>
          </div>
        ))}
      </div>

      <div style={{
        marginTop: '4rem',
        background: 'rgba(106, 27, 154, 0.1)',
        border: '1px solid #9C27B0',
        borderRadius: '16px',
        padding: '2rem'
      }}>
        <h3 style={{ fontSize: '1.8rem', color: '#FF00FF', marginBottom: '1.5rem', textAlign: 'center' }}>
          🎨 Patrocinios Especiales
        </h3>
        <p style={{ textAlign: 'center', marginBottom: '2rem', opacity: 0.9 }}>
          Potencia tu marca a través del impacto directo y la co-creación
        </p>
        <div className="cards-grid">
          {specialSponsorships.map((item, index) => (
            <div className="card" key={index}>
              <h3>{item.icon} {item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <button className="btn" onClick={handleSpecialContact}>
            Consultar Opciones Especiales
          </button>
        </div>
      </div>
    </section>
  )
}

export default SponsorLevels
