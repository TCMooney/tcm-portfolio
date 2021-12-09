import React from "react";
import About from "./About";
import Header from "./Header";
import Projects from "./Projects";
import Contact from "./Contact";

export default function Home() {
  return (
    <div className="home-wrapper">
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
