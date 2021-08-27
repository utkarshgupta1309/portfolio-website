import React, { useEffect } from "react";
import Navbar from "./Navbar";
import WebText from "../TextData";
import scrollIntoView from "scroll-into-view-if-needed";

function Header({ language, onChange }) {
  const submitOnClick = (e) => {
    const scroll = document.getElementsByClassName(e.target.value)[0];
    scrollIntoView(scroll, { behavior: "smooth", scrollMode: "if-needed" });
  };
  const header =
    language === "English" ? WebText.home.header : WebText.HIHome.header;

  useEffect(() => {
    var htmlElement = document.getElementsByTagName("html")[0];
    var header = document.getElementById("header");
    window.addEventListener("scroll", () => {
      var top = htmlElement.scrollTop;
      if (top > 150) {
        header.className = "header-blur";
      } else {
        header.className = "";
      }
    });
  });
  return (
    <header id="header">
      <Navbar language={language} onChange={onChange} />
      <div className="dark-header grid">
        <div className="content">
          <h1 className="light-font">{header.headings.greeting}</h1>
          <h1>{header.headings.intro}</h1>
          <h3>
            <em>{header.headings.title}</em>
          </h3>
        </div>
      </div>
      <section
        className="header-divider"
        // style={{
        //   backgroundImage: "url(/Assests/Images/Vector.svg)",
        // }}
      >
        <svg
          width="1435"
          height="313"
          viewBox="0 0 1435 313"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          id="header-svg"
          className="header-divider"
        >
          <path d="M355 311.5C179.5 307.5 1 65 1 65V1H1434V88.5C1434 88.5 530.5 315.5 355 311.5Z" />
        </svg>
        <button
          className="contact-btn"
          onClick={(e) => submitOnClick(e)}
          value="contact"
        >
          Contact Me
        </button>
      </section>
    </header>
  );
}

export default Header;
