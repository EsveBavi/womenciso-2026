const About = () => {
  const topics = [
    {
      icon: '🛡️',
      title: 'Threat Hunting',
      description: 'Aprende técnicas avanzadas de caza de amenazas con expertos en ciberseguridad de talla mundial.'
    },
    {
      icon: '🤖',
      title: 'AI Security',
      description: 'Domina la seguridad en inteligencia artificial y protección de modelos de aprendizaje automático.'
    },
    {
      icon: '👑',
      title: 'Leadership',
      description: 'Desarrolla habilidades de liderazgo como CISO en organizaciones modernas y dinámicas.'
    }
  ]

  return (
    <section className="section">
      <h2 className="section-title">Sobre Women CISO</h2>
      <div className="cards-grid">
        {topics.map((topic, index) => (
          <div className="card" key={index}>
            <h3>{topic.icon} {topic.title}</h3>
            <p>{topic.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default About
