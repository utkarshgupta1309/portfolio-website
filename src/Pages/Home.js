import React, { useState } from "react";
import Header from "../Components/Header";
import About from "../Components/About";
import Accomplishments from "../Components/Accomplishments";
import Contact from "../Components/Contact";
import Skills from "../Components/Skills";
import Projects from "../Components/Projects";
// import Footer from "../Components/Footer";
// import Test from "../Components/Test";

function Home() {
  const [language, setLanguage] = useState("English");
  const handleChange = (newValue) => {
    setLanguage(newValue);
  };

  return (
    <>
      <Header language={language} onChange={handleChange} />
      <About language={language} onChange={handleChange} />
      <Accomplishments language={language} onChange={handleChange} />
      <Contact language={language} onChange={handleChange} />
      <Skills language={language} onChange={handleChange} />
      <Projects language={language} onChange={handleChange} />
      {/* <Footer language={language} onChange={handleChange} /> */}
    </>
  );
}

export default Home;
