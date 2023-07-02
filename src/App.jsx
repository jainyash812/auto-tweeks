import './App.css'
import LandingSection from './sections/landing/LandingSection'
import Navbar from './components/Navbar'
import NewArrivals from './sections/new-arrivals/NewArrivals'
import BestSeller from './sections/best-seller/BestSeller'

function App() {

  return (
    <>
      <Navbar />
      <LandingSection/>
      <NewArrivals/>
      <BestSeller />
    </>
  )
}

export default App
