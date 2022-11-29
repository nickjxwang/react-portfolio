// import components
import BgAnimation from '../src/components/BackgroundAnimation'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Works from './components/Works'
import Footer from './Layouts/Footer'
import Navbar from './Layouts/Navbar'

const App = () => {
  return (
    <div className='bg-dark_primary'>
      <Navbar />
      <Hero />
      <Skills />
      <Works />
      <Footer />
    </div>
  )
}

export default App
