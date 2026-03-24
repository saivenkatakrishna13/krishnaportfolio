import { useEffect } from 'react'
import { gsap } from 'gsap'
import Lenis from 'lenis'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Education from './pages/Education'
import Training from './pages/Training'
import Certificates from './pages/Certificates'
import Contact from './pages/Contact'
import Navbar from './components/Navigation/Navbar'
import FullScreenNav from './components/Navigation/FullScreenNav'


const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      lerp: 0.08,
      smoothWheel: true,
      smoothTouch: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.1
    })

    const update = (time) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(update)

    return () => {
      gsap.ticker.remove(update)
      lenis.destroy()
    }
  }, [])

  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <FullScreenNav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/education' element={<Education />} />
        <Route path='/training' element={<Training />} />
        <Route path='/certificates' element={<Certificates />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App