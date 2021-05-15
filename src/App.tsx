import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Pages from "./pages";

function App() {
  return (
   <div className="dark:bg-gray-800 w-screen h-screen">
      <Router>
      <Route exact path="/v/:id" component={Pages.Display} />
      <Route exact path="/" component={Pages.Home} />
    </Router>
   </div>
  );
}

export default App;
