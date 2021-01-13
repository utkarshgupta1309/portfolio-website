import React from "react";
import Header from "../Components/Header";
import About from "../Components/About";
import Accomplishments from "../Components/Accomplishments";
import Contact from "../Components/Contact";
import Skills from "../Components/Skills";
import Projects from "../Components/Projects";
import Footer from "../Components/Footer";

function Home() {
  return (
    <>
      <Header />
      <About />
      <Accomplishments />
      <Contact />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}

export default Home;
