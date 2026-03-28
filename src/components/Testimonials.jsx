import './Testimonials.css'

const Testimonials = () => {
  const testimonials = [
    {
      text: '"Women CISO cambió completamente mi carrera. Las conexiones que hice me abrieron puertas increíbles en ciberseguridad y ahora trabajo en mi empresa soñada."',
      author: 'María González, Security Analyst @ Microsoft'
    },
    {
      text: '"La beca AI me permitió acceder a contenido y mentorías que no hubiera podido pagar. El ROI personal fue impresionante. Totalmente recomendado para estudiantes STEM."',
      author: 'Ana Martínez, Estudiante UNAM'
    },
    {
      text: '"Como sponsor, encontramos talento excepcional. Contratamos a 5 becarias del evento y todas superaron nuestras expectativas. El ROI fue inmediato."',
      author: 'Carlos Ruiz, CTO @ TechCorp'
    },
    {
      text: '"Los talleres de threat hunting eran 100% prácticos y aplicables. Aprendí más en 3 días que en meses de cursos online. Las speakers son de primer nivel."',
      author: 'Laura Pérez, Pentester @ CyberSec'
    }
  ]

  return (
    <div className="testimonials">
      <h2 className="section-title">Lo que dicen nuestras participantes</h2>
      <div className="testimonials-grid">
        {testimonials.map((item, index) => (
          <div key={index} className="testimonial">
            <p className="testimonial-text">{item.text}</p>
            <p className="testimonial-author">— {item.author}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials
