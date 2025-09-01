import { useState } from "react";
import Home from "./components/home";
import About from "./components/about";
import Project from "./components/project";
import Contact from "./components/contact";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="relative h-full w-full  scroll-smooth">
      <Navbar />
      <div className="h-full w-full flex flex-col justify-center items-center  ">
        <Home />
        <About />
        <Project />
        <Contact />
      </div>
    </div>
  );
}

export default App;
