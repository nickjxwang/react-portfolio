// import components
import BgAnimation from '../src/components/BackgroundAnimation'
import About from './components/About'
import Contact from './components/Contact'
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
      <About />
      <Works />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
