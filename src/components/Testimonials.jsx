import './Testimonials.css'

const Testimonials = () => {
  const testimonials = [
    {
      text: 'Women CISO me ayudó a entender mejor que la tecnología es parte de nuestras vidas y me inspiró a nunca dejar de aprender cosas fuera de mi zona de comfort.',
      author: 'Sofia Querey - Estudiante Relaciones Internacionales y Marketing. Pasante de Relaciones públicas'
    },
    {
      text: 'MenCiso me ayudó a concretar la infraestructura interna de mí, hacia el exterior formando nuevas formas de pensar y sobre todo poder analizar desde un punto de vista diferente.',
      author: 'Daniel Santos - Automation Engineer - Danone'
    },
    {
      text: 'WomenCISO superó todas mis expectativas al darme una voz que no sabía que tenía, además de fortalecer mi perfil técnico. Al combinar el aprendizaje profundo en ciberseguridad con el trabajo en equipo con perfiles brillantes, mis habilidades de comunicación y liderazgo técnico crecieron de forma natural y acelerada. Ha sido una experiencia increíblemente divertida y reveladora; perdí el miedo a hablar en público y encontré una comunidad que me impulsa a atreverme a más cada día.',
      author: 'Raquel M. Villarreal M. - Asesora en VIRMAR Ciberseguridad'
    }
  ]

  return (
    <div className="testimonials">
      <h2 className="section-title">Lo que dicen nuestras participantes</h2>
      <div className="testimonials-grid">
        {testimonials.map((item, index) => (
          <div key={index} className="testimonial">
            <p className="testimonial-text">"{item.text}"</p>
            <p className="testimonial-author">— {item.author}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials
