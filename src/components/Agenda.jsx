import './Agenda.css'

const Agenda = () => {
  const agenda = [
    {
      day: '📅 Día 1 - 8 Mayo 2026',
      events: [
        { time: '9:00 AM', title: 'Keynote: El Futuro de AI en CISO', description: 'Apertura del evento con líderes de la industria tecnológica' },
        { time: '11:00 AM', title: 'Taller: Threat Hunting Avanzado', description: 'Técnicas prácticas de detección y respuesta a amenazas' },
        { time: '2:00 PM', title: 'Panel: Mujeres Líderes en Ciberseguridad', description: 'Experiencias, retos y consejos de carrera en el sector' },
        { time: '4:00 PM', title: 'Networking Session con Sponsors', description: 'Conecta con reclutadores y empresas patrocinadoras' }
      ]
    },
    {
      day: '📅 Día 2 - 9 Mayo 2026',
      events: [
        { time: '9:00 AM', title: 'Workshop: Hacking Devils Academy', description: 'Técnicas de pentesting ético y explotación de vulnerabilidades' },
        { time: '12:00 PM', title: 'AI Security Masterclass', description: 'Protección de modelos de ML y mitigación de ataques adversarios' },
        { time: '3:00 PM', title: 'Recruitment Fair', description: 'Entrevistas 1:1 con empresas líderes en tecnología' },
        { time: '5:00 PM', title: 'Hackathon CISO Challenge', description: 'Competencia práctica de seguridad con premios' }
      ]
    },
    {
      day: '📅 Día 3 - 10 Mayo 2026',
      events: [
        { time: '9:00 AM', title: 'Examen de Certificación AI Security', description: 'Evaluación y entrega de certificados oficiales' },
        { time: '12:00 PM', title: 'Keynote de Cierre', description: 'Reflexiones sobre el futuro de la mujer en CISO' },
        { time: '2:00 PM', title: 'After Party & Networking Final', description: 'Celebración y conexiones finales del evento' }
      ]
    }
  ]

  return (
    <section className="section" id="agenda" style={{ background: 'rgba(30, 58, 138, 0.05)' }}>
      <h2 className="section-title">Agenda del Evento</h2>

      <div className="timeline">
        {agenda.map((day, dayIndex) => (
          <div key={dayIndex} className="timeline-day">
            <div className="timeline-day-title">{day.day}</div>
            {day.events.map((event, eventIndex) => (
              <div key={eventIndex} className="timeline-event">
                <div className="timeline-time">{event.time}</div>
                <div className="timeline-content">
                  <h4>{event.title}</h4>
                  <p>{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <a href="https://forms.gle/9SZKdnwyHPqkNKm36" className="btn" target="_blank" rel="noopener noreferrer">
          Registrarme al Evento
        </a>
      </div>
    </section>
  )
}

export default Agenda
