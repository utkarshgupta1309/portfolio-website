import React, { useEffect} from "react";
import scrollIntoView from "scroll-into-view-if-needed";

function Navbar(props) {
  const submitOnClick = (e) => {
    const scroll = document.getElementsByClassName(e.target.value)[0];
    console.log(scroll);
    console.log(e.target.value);
    scrollIntoView(scroll, { behavior: "smooth", scrollMode: "if-needed" });
  };
  useEffect(() => {
    const toggleButton = document.getElementsByClassName("toggle-button")[0];
    const navbarLinks = document.getElementsByClassName("navbar-links")[0];

    toggleButton.addEventListener("click", () => {
      navbarLinks.classList.toggle("active");
    });
  }, []);

  const languageSel = props.language === "English" ? "Hindi" : "English";

  return (
    <nav>
      <section className="logo">
        <img src="/Assests/Images/logo_black.png" alt="logo" />
      </section>
      <button className="toggle-button">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <div className="navbar-links">
        <ul>
          <li>
            <button onClick={(e) => submitOnClick(e)} value="dark-header">
              Home
            </button>
          </li>
          <li>
            <button onClick={(e) => submitOnClick(e)} value="about">
              About
            </button>
          </li>
          <li>
            <button onClick={(e) => submitOnClick(e)} value="contact">
              Contact
            </button>
          </li>
          <li>
            <button onClick={(e) => submitOnClick(e)} value="skillsWrapper">
              Skills
            </button>
          </li>
          <li>
            <button onClick={(e) => submitOnClick(e)} value="projectsWrapper">
              My Projects
            </button>
          </li>

          <li>
            <button
              onClick={() => props.onChange(languageSel)}
              value="projectsWrapper"
            >
              {languageSel}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
