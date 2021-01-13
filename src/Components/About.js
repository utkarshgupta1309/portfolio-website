import React from "react";
import WebText from "../TextData";

function About() {
  const about = WebText.home.about;
  return (
    <section className="about">
      <article
        className="about-img"
        style={{
          backgroundImage: "url(/Assests/Images/about-img-bg.svg)",
        }}
      >
        <div className="image-here">
          <img alt="Utkarsh Gupta" src="/Assests/Images/me.png"></img>
        </div>
      </article>
      <article className="about-txt">
        <h3>{about.heading}</h3>
        <p>{about.aboutTxt}</p>
      </article>
    </section>
  );
}

export default About;
