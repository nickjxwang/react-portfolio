import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { content } from './Content'
import About from './Layouts/About'
import Contact from './Layouts/Contact'
import Footer from './Layouts/Footer'
import Hero from './Layouts/Hero'
import Navbar from './Layouts/Navbar'
import ProjectDetail from './Layouts/ProjectDetails/ProjectDetail'
import ProjectDetail1 from './Layouts/ProjectDetails/ProjectDetail1'
import ProjectDetail2 from './Layouts/ProjectDetails/ProjectDetail2'
import ProjectDetail3 from './Layouts/ProjectDetails/ProjectDetail3'
import Projects from './Layouts/Projects'
import Skills from './Layouts/Skills'
import ScrollToTop from './components/ScrollToTop'

const App = () => {
  const [activePath, setActivePath] = useState()
  const [showMenu, setShowMenu] = useState(false)

  const handleMenuClose = () => {
    if (showMenu) {
      setShowMenu(false)
    }
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar
        setActivePath={setActivePath}
        activePath={activePath}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
      />
      <div onClick={handleMenuClose}>
        <Routes>
          <Route
            index
            path='/'
            element={<Hero setActivePath={setActivePath} />}
          />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/ProjectDetail' element={<ProjectDetail />} />
          <Route path='/ProjectDetail1' element={<ProjectDetail1 />} />
          <Route path='/ProjectDetail2' element={<ProjectDetail2 />} />
          <Route path='/ProjectDetail3' element={<ProjectDetail3 />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
