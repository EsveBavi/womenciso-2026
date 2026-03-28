import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer" id="contacto">
      <div className="footer-content">
        <h3 className="footer-title">Women CISO 2026</h3>
        <p className="footer-description">
          Empoderando a la próxima generación de líderes en ciberseguridad
        </p>

        <div className="footer-links">
          <a href="https://forms.gle/9SZKdnwyHPqkNKm36" target="_blank" rel="noopener noreferrer" className="footer-link">
            Registro Becas
          </a>
          <a href="https://forms.gle/VRveooeuCU5ToQEP6" target="_blank" rel="noopener noreferrer" className="footer-link">
            Registro General
          </a>
          <a href="mailto:comunicacion@womenciso.com" className="footer-link">
            Contacto
          </a>
          <a href="https://twitter.com/womenciso" target="_blank" rel="noopener noreferrer" className="footer-link">
            Twitter
          </a>
          <a href="https://linkedin.com/company/womenciso" target="_blank" rel="noopener noreferrer" className="footer-link">
            LinkedIn
          </a>
          <a href="https://instagram.com/womenciso" target="_blank" rel="noopener noreferrer" className="footer-link">
            Instagram
          </a>
        </div>

        <div className="footer-contact">
          <a href="mailto:comunicacion@womenciso.com" className="footer-email">
            comunicacion@womenciso.com
          </a>
        </div>

        <p className="footer-copy">
          © 2026 Women CISO. Todos los derechos reservados.<br />
          8, 9 y 10 de Mayo 2026 | Ciudad de México, México
        </p>
      </div>
    </footer>
  )
}

export default Footer
