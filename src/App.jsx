import './App.css'
import About from './components/About'
import Experience from './components/Experience'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Projects from './components/Projects'
import Footer from './components/Footer'
function App() {
  return (
    <div>
      <NavBar />
      <div className="pt-20">
        <Home />
        <About />
        <Experience />
        <Projects />
      </div>
      <Footer />
    </div>
  )
}

export default App
