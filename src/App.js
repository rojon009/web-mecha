import "./App.css";
import HomePage from "./components/homepage";
import Accademics from "./components/academics";
import { Route, Switch } from "react-router-dom";
import Notice from "./components/notice";
import Events from "./components/events";
import Alumni from "./components/alumni";
import Header from "./components/header";

function App() {
  return (
    <div className="App font-comfortaa">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/academics" component={Accademics}></Route>
        <Route path="/notice" component={Notice}></Route>
        <Route path="/events" component={Events}></Route>
        <Route path="/alumni" component={Alumni}></Route>
      </Switch>
    </div>
  );
}

export default App;
