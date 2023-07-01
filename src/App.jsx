import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandingSection from './components/LandingSection'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <LandingSection/>
    </>
  )
}

export default App
