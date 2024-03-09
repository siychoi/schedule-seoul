import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import List from "./routes/List";
import "./input.css";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
          <Route path={`${process.env.PUBLIC_URL}/detail:/id`} element={<Detail />} />
          <Route path={`${process.env.PUBLIC_URL}/list`} element={<List />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;