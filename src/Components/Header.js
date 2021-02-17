import React from "react";
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
  return (
    <header>
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
        style={{
          backgroundImage: "url(/Assests/Images/Vector.svg)",
        }}
      >
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
