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
      <div className='px-80 pt-20 scroll-pt-20'>

      <Home />
      <About />
      <Experience />
      <Projects />
      </div>
    </div>
  )
}

export default App
