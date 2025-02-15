import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About';
import Contact from './pages/Contact';
import Work from './pages/Work';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/work' element={<Work />}/>
          <Route path='/about' element={<About />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
