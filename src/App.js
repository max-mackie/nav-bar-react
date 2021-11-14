// App.js
import React, { Component } from "react";
import { Navbar } from "./components/Navbar";
import {
  Main,
  Spacer1,
  AboutMe,
  TechStack,
  Projects,
  Contact,
  Footer,
} from "./components/";

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <Spacer1 />
      <section id="content-body">
        <AboutMe />
        <TechStack />
        <Projects />
        <Contact />
        <Footer />
      </section>
    </>
  );
}

export default App;
