import './Hero.css'

const Hero = () => {
  return (
    <section className="hero" id="inicio">
      <video className="hero-video-bg" autoPlay muted loop playsInline>
        <source src="/VIDEOOFICIAL.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay"></div>
      <div className="hero-decorations"></div>

      <div className="hero-content">
        {/* Contenido comentado - Solo mostrar botones */}
        {/* <h1>10,000 Becas AI</h1>
        <div className="hero-stats">Por el trabajo de mis sueños</div>
        <p className="hero-description">
          Conecta con talento real capacitado en IA y ciberseguridad<br />
          8, 9 y 10 de Mayo 2026 |  CDMX, México
        </p> */}

        {/* Botones de CTA */}
        <div className="hero-ctas">
          <a href="https://forms.gle/9SZKdnwyHPqkNKm36" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            Regístrate para Becas
          </a>
          <a href="#sponsors" className="btn btn-blue">
            Explora Sponsors
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
