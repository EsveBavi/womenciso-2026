import './Agenda.css'

const agendaData = {
  day1: {
    date: '8 de Mayo',
    sessions: [
      'Google Career Launchpad',
      'Google AI, Gemini & NotebookLM',
      'Diseño de Prompts',
      'Generative AI Leader',
      'Security New Attacks Simulator',
      'Mi Camino para llegar a Google',
      'Panel de Reclutamiento',
      'Cierre del día'
    ]
  },
  day2: {
    date: '9 de Mayo',
    sessions: [
      'Agent Launchpad',
      'Como programar su certificación',
      'Cognitive Agents SOC & Ciberdefensa',
      'AI Building with Vertex',
      'AI Ofensiva',
      'Generative AI Business Leadership',
      'Panel: Vacantes, Reclutamiento, Como Preparar tu CV y Entrevistas',
      'Cierre'
    ]
  }
}

const Agenda = () => {
  return (
    <section className="section" id="agenda" style={{ background: 'rgba(30, 58, 138, 0.05)' }}>
      <div className="agenda-container">
        <h2 className="agenda-title">Agenda del Evento</h2>
        <div className="agenda-days">
          <div className="agenda-day">
            <div className="day-header">
              <span className="day-icon">📅</span>
              <h3 className="day-title">{agendaData.day1.date}</h3>
            </div>
            <div className="sessions-list">
              {agendaData.day1.sessions.map((session, index) => (
                <div key={index} className="session-item">
                  <span className="session-number">{index + 1}</span>
                  <span className="session-name">{session}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="agenda-day">
            <div className="day-header">
              <span className="day-icon">📅</span>
              <h3 className="day-title">{agendaData.day2.date}</h3>
            </div>
            <div className="sessions-list">
              {agendaData.day2.sessions.map((session, index) => (
                <div key={index} className="session-item">
                  <span className="session-number">{index + 1}</span>
                  <span className="session-name">{session}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="video-button-container">
          <a
            href="https://youtu.be/5N8j_W4Szzk?si=EmSHjelSRmEt8Pa4"
            target="_blank"
            rel="noopener noreferrer"
            className="video-button"
          >
            <span className="button-icon">▶️</span>
            <span>Ver Video de Rutas para Becas</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Agenda
