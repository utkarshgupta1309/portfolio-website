import React from "react";
import WebText from "../TextData";



function About({ language }) {
  const about =
    language === "English" ? WebText.home.about : WebText.HIHome.about;
  return (
    <section className="about">
      <article
        className="about-img"
        style={{
          backgroundImage: "url(/assets/Images/about-img-bg.svg)",
        }}
      >
        <div className="image-here">
          <img alt="Utkarsh Gupta" src={process.env.PUBLIC_URL + '/assets/Images/meBWCircle.png'}></img>
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
