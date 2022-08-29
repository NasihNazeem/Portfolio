import Navbar from "./misc/Navbar";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Portfolio from "./pages/portfolio/Portfolio";
import Skills from "./pages/skills/Skills";
import Menu from "./menu/Menu";

import "./app.scss";
import { useState } from "react";



export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
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
