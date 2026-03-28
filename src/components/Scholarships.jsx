const Scholarships = () => {
  const benefits = [
    {
      icon: '✨',
      title: 'Acceso Full',
      description: 'Entrada completa a todas las conferencias, talleres prácticos y networking sessions exclusivas.'
    },
    {
      icon: '👥',
      title: 'Mentorías 1:1',
      description: 'Sesiones personalizadas con CISOs experimentadas de empresas líderes en tecnología.'
    },
    {
      icon: '📜',
      title: 'Certificaciones AI',
      description: 'Obtén certificaciones reconocidas internacionalmente en seguridad e inteligencia artificial.'
    }
  ]

  return (
    <section className="section" id="becas" style={{ background: 'rgba(106, 27, 154, 0.05)' }}>
      <h2 className="section-title">Becas para Estudiantes</h2>
      <p className="section-subtitle">
        10,000 becas disponibles que cubren acceso completo al evento, mentorías 1:1 con CISOs experimentadas y certificaciones en AI Security
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
        <p style={{ marginBottom: '1.5rem', opacity: 0.9, fontSize: '1.1rem' }}>
          <strong>Requisitos:</strong> Estudiante STEM, CV con interés en ciberseguridad
        </p>
        <a href="https://forms.gle/9SZKdnwyHPqkNKm36" className="btn" target="_blank" rel="noopener noreferrer">
          Solicita tu Beca →
        </a>
      </div>
    </section>
  )
}

export default Scholarships
