import Navbar from "./misc/Navbar";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Portfolio from "./pages/portfolio/Portfolio"; 
import Skills from "./pages/skills/Skills"; 

import "./app.scss";



export default function App() {

  return (
    <div className="app">
        <Navbar/>
      
      <div className="sections">
        <Home />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </div>
    </div>

  );
}
