import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import  Search from "./pages/Search";
import Saved from "./pages/Saved";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar brand="Google Books" pageOne="Search" pageTwo="Saved" />
          <Wrapper>
            <Route exact path="/" component={Landing} />
            <Route exact path="/Search" component={Search} />
            <Route exact path="/Saved" component={Saved} />
          </Wrapper>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
