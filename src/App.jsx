import './App.css'
import About from './components/About'
import Experience from './components/Experience'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Projects from './components/Projects'

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Experience />
      <Projects />
    </div>
  )
}

export default App
