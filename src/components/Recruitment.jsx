const Recruitment = () => {
  const benefits = [
    {
      icon: '🎯',
      title: 'Acceso a Talento',
      description: 'Conecta con 10,000 estudiantes top en CISO y AI de toda Latinoamérica altamente calificadas.'
    },
    {
      icon: '💼',
      title: 'Publicación de Vacantes',
      description: 'Postea oportunidades laborales y realiza entrevistas 1:1 durante todo el evento.'
    },
    {
      icon: '🤝',
      title: 'Networking Exclusivo',
      description: 'Sessions privadas con sponsors y empresas líderes en ciberseguridad y tecnología.'
    }
  ]

  const handlePublishJob = () => {
    window.location.href = 'mailto:comunicacion@womenciso.com?subject=Publicar%20Vacante&body=Hola,%20quiero%20publicar%20una%20vacante.%0A%0AEmpresa:%0APuesto:%0ADescripción:'
  }

  const handleScheduleMeeting = () => {
    window.location.href = 'mailto:comunicacion@womenciso.com?subject=Agendar%20Meeting&body=Hola,%20quiero%20agendar%20una%20reunión.%0A%0AEmpresa:%0AFecha%20preferida:'
  }

  return (
    <section className="section" style={{ background: 'rgba(30, 58, 138, 0.05)' }}>
      <h2 className="section-title">Reclutamiento y Networking</h2>
      <p className="section-subtitle">
        Conecta con el talento más prometedor en ciberseguridad e inteligencia artificial
      </p>

      <div className="cards-grid">
        {benefits.map((benefit, index) => (
          <div className="card" key={index}>
            <h3>{benefit.icon} {benefit.title}</h3>
            <p>{benefit.description}</p>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <button className="btn" onClick={handlePublishJob}>
          Publica una Vacante
        </button>
        <button
          className="btn btn-secondary"
          onClick={handleScheduleMeeting}
          style={{ marginLeft: '1rem' }}
        >
          Agenda Meeting
        </button>
      </div>
    </section>
  )
}

export default Recruitment
