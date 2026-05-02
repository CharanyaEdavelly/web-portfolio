import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Work from './pages/Work'

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/work' element={<Work />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <div>
      <Router>
        <AnimatedRoutes />
      </Router>
    </div>
  )
}

export default App
