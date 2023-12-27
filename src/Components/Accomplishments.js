import React, { useEffect, useState } from "react";
import WebText from "../TextData";

function Accomplishments({ language }) {
  const accomplishments =
    language === "English"
      ? WebText.home.accomplishments
      : WebText.HIHome.accomplishments;

      return (
    <section className="accomplishments">
      {accomplishments.map((accomplishment, i) => {
        i = i + 1;
        return (
          <div key={i}>
            <h3> {accomplishment.icon}</h3>
            <h4>{accomplishment.title}</h4>
            <p dangerouslySetInnerHTML = {createMarkup(accomplishment.description)}></p>
          </div>
        );
        
      })}
    </section>
  );
  function createMarkup(text) {
    return {__html: text};
  }
}

export default Accomplishments;
