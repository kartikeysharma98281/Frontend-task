
import { About } from './components/About'
import { Banner } from './components/Banner'
import { Footer } from './components/Footer'
import { HeroSection } from './components/HeroSection'
import { Navbar } from './components/Navbar'
import { Press } from './components/Press'
import { Risks } from './components/Risks'
import { Team } from './components/Team'

function App() {

  return (
    <div className=''>
      <Navbar />
      <HeroSection />
      <About />
      <Team />
      <Press />
      <Risks /> 
      <Banner />
      <Footer />
    </div>
  
  )
}

export default App
