import React, { useState, useRef, useEffect } from "react";

const Contact = () => {
  return (
    <section id="contact">
      <h2>Interested to work with me?</h2>
      <button className="button">Lets talk</button>
      <div id="icon_links">
        <div id="github link"></div>
        <div id="linkedin"></div>
        <div id="cv"></div>
      </div>
    </section>
  );
};

export { Contact };
