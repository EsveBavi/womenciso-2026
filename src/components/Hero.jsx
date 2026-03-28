import './Hero.css'

const Hero = () => {
  return (
    <section className="hero" id="inicio">
      <div className="hero-video-wrapper">
        <iframe
          className="hero-video"
          src="https://www.youtube.com/embed/UHR0qZVwwNg?autoplay=1&mute=1&loop=1&playlist=UHR0qZVwwNg&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1"
          title="Women CISO Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="hero-overlay"></div>
      <div className="hero-decorations"></div>
      <div className="hero-content">
        <h1>10,000 Becas AI</h1>
        <div className="hero-stats">Por el trabajo de mis sueños</div>
        <p className="hero-description">
          Conecta con talento real capacitado en IA y ciberseguridad<br />
          8, 9 y 10 de Mayo 2026 |  CDMX, México
        </p>
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
