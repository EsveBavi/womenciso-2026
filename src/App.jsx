import { sponsorsList } from './sponsors'
import './App.css'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Scholarships from './components/Scholarships'
import SponsorLevels from './components/SponsorLevels'
import SponsorsDisplay from './components/SponsorsDisplay'
import Recruitment from './components/Recruitment'
import Speakers from './components/Speakers'
import Agenda from './components/Agenda'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Scholarships />
      <SponsorLevels />
      <SponsorsDisplay sponsors={sponsorsList} />
      <Recruitment />
      <Speakers />
      <Agenda />
      <Testimonials />
      <Footer />
    </>
  )
}

export default App
