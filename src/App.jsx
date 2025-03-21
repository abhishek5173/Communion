
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Events from './pages/Events'
function App() {

  return (
    <>
        <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/events" element={<Events />} />
          </Routes>
        </Router>
    </>
  )
}

export default App
