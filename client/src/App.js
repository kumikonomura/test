import React, { Component } from "react";
import Home from "./pages/Home";
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Footer from './components/Footer'
import Contact from './pages/Contact'

class App extends Component {
  render() {
    return (
      <>
        <Home />
        <Portfolio />
        <About />
        <Contact />
        <Footer />
      </>
    );
  }
}

export default App;
