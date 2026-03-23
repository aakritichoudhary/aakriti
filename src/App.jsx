import "./App.css";
import About from "./components/About";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="w-full">
      <NavBar />
      <div className="flex flex-col md:px-50">
        <Home />
        <About />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
