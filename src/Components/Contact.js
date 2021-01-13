import React from "react";
import WebText from "../TextData";

function Contact() {
  const contact = WebText.home.contact;
  return (
    <section className="contact">
      <h2>{contact.heading}</h2>
      <div className="socialIcons">
        {contact.socialIcons.map((icon, i) => {
          i = i + 1;
          return (
            <a key={i} href={icon.link} target="_blank">
              <h1>{icon.ico}</h1>
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default Contact;
