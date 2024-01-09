import {
  BrowserRouter as Router,
  Switch,
  Route, BrowserRouter
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import List from "./routes/List";
import "./input.css";
import { ApiDataProvider } from "./components/ApiDataContext";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/list">
          <List />
        </Route>
        <Route path="/detail/:id">
          <Detail />
        </Route>
        <Route path="/schedule-seoul">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;