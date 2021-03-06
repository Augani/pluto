import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Pages from "./pages";

function App() {
  return (
   <div className="dark:bg-gray-800 w-screen h-screen">
      <Router>
      <Route exact path="/r/:id" component={Pages.Display} />
      <Route exact path="/" component={Pages.Home} />
    </Router>
   </div>
  );
}

export default App;
