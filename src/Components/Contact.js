import React from "react";
import WebText from "../TextData";

function Contact({ language }) {
  const contact =
    language === "English" ? WebText.home.contact : WebText.HIHome.contact;
  return (
    <section className="contact">
      <h2>{contact.heading}</h2>
      <div className="socialIcons">
        {contact.socialIcons.map((icon, i) => {
          i = i + 1;
          return (
            <a rel="noopener noreferrer" key={i} href={icon.link} target="_blank">
              <h1>{icon.ico}</h1>
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default Contact;
