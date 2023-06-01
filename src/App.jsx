import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Sponsors from "./components/Sponsors/Sponsors";
import Specs from "./components/Specs/Specs";
import Case from "./components/Case/Case";
import Immerse from "./components/Immerse/Immerse";
import Style from "./components/Style/Style";
import Footer from "./components/Footer/Footer";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Hero />
        <Sponsors />
        <Specs />
        <Case />
        <Immerse />
        <Style />
        <Footer />
      </div>
    );
  }
}

export default App;
