import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandingSection from './sections/landing/LandingSection'
import Navbar from './components/Navbar'
import NewArrivals from './sections/new-arrivals/NewArrivals'
import NewArrivalsCard from './components/NewArrivalsCard'
import NewArrivalsCarousel from './components/NewArrivalsCarousel'

function App() {

  return (
    <>
      <Navbar />
      <LandingSection/>
      <NewArrivals/>
    </>
  )
}

export default App
