import React, { Component } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Education from "./pages/Education";
import Footer from "./components/Footer";
import Skills from "./pages/Skills";

class App extends Component {
  render() {
    return (
      <>
        <Home />
        <About />
        <Skills />
        <Portfolio />
        <Education />
        <Footer />
      </>
    );
  }
}

export default App;
