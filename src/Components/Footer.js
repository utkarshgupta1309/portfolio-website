import React from "react";
import { FaReact } from "react-icons/fa";

import { AiFillHeart } from "react-icons/ai";
function Footer() {
  return (
    <section
      className="footer"
      style={{ backgroundImage: "url(/Assests/Images/about-img-bg-tiny.svg)" }}
    >
      <div className="footer-end">
        <div className="footer-txt">
          <h3>
            Designed with{" "}
            <span>
              <AiFillHeart />
            </span>{" "}
            by Utkarsh
          </h3>
          <h4>
            Built on React <FaReact />
          </h4>
          <p>
            Liked the website? Check out the source code{" "}
            <a
              href="https://github.com/utkarshgupta1309/portfolio-website.git"
              target="_blank"
            >
              here
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
