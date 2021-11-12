//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Sports
    </h1>
    <div>
      <img
        className="sport-img"
        src="https://media.istockphoto.com/photos/ice-hockey-picture-id1137319987?b=1&k=20&m=1137319987&s=170x170&h=dy0XRhOspn9EzGuD5iqSeGEhZ4gbCawICY7XihGjXXU="
        alt="Hockey image"
      />
      <img
        className="sport-img"
        src="https://media.istockphoto.com/photos/family-having-fun-skiing-together-on-winter-day-picture-id1125452768?b=1&k=20&m=1125452768&s=170x170&h=yUIpfdjatZ-fUvGNfmKEskO_lxaYB5GC6TE6ipXrRZA="
        alt="Sking image"
      />
      <img
        className="sport-img"
        src="https://media.istockphoto.com/photos/swimmer-picture-id172339615?b=1&k=20&m=172339615&s=170x170&h=fNVnpxWfDV11Ff4SwfybjSoJUGTpgGGFhUZg3AqNr5A="
        alt="Swimming image"
      />
      <img alt="random" src={img + "?grayscale"} />
    </div>
  </div>,
  document.getElementById("root")
);
