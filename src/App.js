import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Component/Home/Home";
import Blog from "./Component/Blog/Blog";
import Project from "./Component/Project/Project";
import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NebBar from "./Component/Header/NevBar/NebBar";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/blog">
          <NebBar />
          <Blog />
        </Route>
        <Route path="/project">
          <NebBar />
          <Project />
        </Route>
        <Route path="/about">
          <NebBar />
          <About />
        </Route>
        <Route path="/contact">
          <NebBar />
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
