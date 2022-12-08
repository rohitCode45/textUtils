
import "./App.css";
import Nav from "./Components/Nav"
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";





function App() {
  return (
    <>
    <Router>
    <div>
    <Nav title="TextUtils" about="About"/>
    <Switch>
          <Route exact path="/About">
            <About />
          </Route>
          <Route exact path="/">
          <TextForm heading="Type your text here "/>
          </Route>
        </Switch>
    </div>
    </Router>
    </>
  );
}

export default App;
