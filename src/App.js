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
import { ApiDataProvider } from "./components/ApiDataContext";

function App() {
  return (
    <ApiDataProvider>
      <BrowserRouter>
        <Routes>
          <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
          <Route path={`${process.env.PUBLIC_URL}/detail:/id`} element={<Detail />} />
          <Route path={`${process.env.PUBLIC_URL}/list`} element={<List />} />
        </Routes>
      </BrowserRouter>
    </ApiDataProvider>
  );
}

export default App;