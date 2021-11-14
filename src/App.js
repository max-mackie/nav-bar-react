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
      <section id="content-body">
        <Main />
        {/* <Spacer1 /> */}
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
