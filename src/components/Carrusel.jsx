import { useState, useEffect, useRef } from 'react'
import './Carrusel.css'

const Carrusel = () => {
  const carouselRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(1)
  const isProgrammaticScroll = useRef(false)

  const cards = Array.from({ length: 19 }, (_, i) => ({
    id: i + 1,
    image: `/Carrussel${i + 1}.png`
  }))

  useEffect(() => {
    const carousel = carouselRef.current
    if (carousel) {
      carousel.scrollLeft = (carousel.scrollWidth - carousel.clientWidth) / 2
    }
  }, [])

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    const cardElements = carousel.querySelectorAll('.card')
    if (cardElements[activeIndex]) {
      isProgrammaticScroll.current = true
      cardElements[activeIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      })

      setTimeout(() => {
        isProgrammaticScroll.current = false
      }, 500)
    }
  }, [activeIndex])

  const handleScroll = () => {
    if (isProgrammaticScroll.current) return

    const carousel = carouselRef.current
    if (!carousel) return

    const cardElements = carousel.querySelectorAll('.card')
    const carouselRect = carousel.getBoundingClientRect()
    const center = carouselRect.left + carouselRect.width / 2

    let closestIndex = 0
    let closestDistance = Infinity

    cardElements.forEach((card, index) => {
      const rect = card.getBoundingClientRect()
      const cardCenter = rect.left + rect.width / 2
      const distance = Math.abs(center - cardCenter)

      if (distance < closestDistance) {
        closestDistance = distance
        closestIndex = index
      }
    })

    setActiveIndex(closestIndex)
  }

  const goToCard = (index) => {
    setActiveIndex(index)
  }

  return (
    <div className="carousel-container">
      <div
        className="carousel"
        ref={carouselRef}
        onScroll={handleScroll}
      >
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`card ${index === activeIndex ? 'active' : ''}`}
            onClick={() => goToCard(index)}
          >
            <img src={card.image} alt={`Carrusel ${card.id}`} />
          </div>
        ))}
      </div>

      <div className="dots">
        {cards.map((_, index) => (
          <span
            key={index}
            className={index === activeIndex ? 'active' : ''}
            onClick={() => goToCard(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default Carrusel
