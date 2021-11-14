import React, { useState, useRef, useEffect } from "react";
import { social } from "../data";

const Contact = () => {
  return (
    <section id="contact" className="section">
      <h2>Interested to work with me?</h2>
      <button className="button">Lets talk</button>
      <div id="icon_links">
        <ul className="social-icons">
          {social.map((link) => {
            const { id, url, icon } = link;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export { Contact };
