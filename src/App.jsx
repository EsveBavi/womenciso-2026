import { sponsorsList } from './sponsors'
import { aliadosList } from './aliados'
import './App.css'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Carrusel from './components/Carrusel'
import About from './components/About'
import Scholarships from './components/Scholarships'
import SponsorLevels from './components/SponsorLevels'
import SponsorsDisplay from './components/SponsorsDisplay'
import AliadosDisplay from './components/AliadosDisplay'
import Recruitment from './components/Recruitment'
import Speakers from './components/Speakers'
import Agenda from './components/Agenda'
import EventLinks from './components/EventLinks'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navigation />
      <Hero />
      <Carrusel />
      <About />
      <Scholarships />
      <SponsorLevels />
      <SponsorsDisplay sponsors={sponsorsList} />
      <AliadosDisplay aliados={aliadosList} />
      <Recruitment />
      <Speakers />
      <Agenda />
      <EventLinks />
      <Testimonials />
      <Footer />
    </>
  )
}

export default App
