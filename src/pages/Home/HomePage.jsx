import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from '../../components/Navbar/Navbar.jsx'
import Hero from '../../components/Hero/Hero.jsx'
import PerformanceStats from '../../components/PerformanceStats/PerformanceStats.jsx'
import JourneySection from '../../components/JourneySection/JourneySection.jsx'
import HomeownershipSection from '../../components/HomeownershipSection/HomeownershipSection.jsx'
import DreamSection from '../../components/DreamSection/DreamSection.jsx'
import ReasonsSection from '../../components/ReasonsSection/ReasonsSection.jsx'
import TestimonialsSection from '../../components/TestimonialsSection/TestimonialsSection.jsx'
import ContactSection from '../../components/ContactSection/ContactSection.jsx'
import Footer from '../../components/Footer/Footer.jsx'

function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-quart',
      offset: 0,
      once: true,
      mirror: false,
    })
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PerformanceStats />
        <JourneySection />
        <HomeownershipSection />
        <DreamSection />
        <ReasonsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

export default HomePage
