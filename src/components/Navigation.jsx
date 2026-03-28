import './Navigation.css'

const Navigation = () => {
  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
          <img src="/LOGO.png" alt="Women CISO" />
        </div>
        <ul className="nav-links">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#becas">Becas</a></li>
          <li><a href="#sponsors">Sponsors</a></li>
          <li><a href="#agenda">Agenda</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
