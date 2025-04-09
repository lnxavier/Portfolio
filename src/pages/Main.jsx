import React from 'react'
import About from '../components/About'
import Contact from '../components/Contact'
import HeroSection from '../components/HeroSection'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default Home