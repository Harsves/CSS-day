import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "./routes";
import Years from "./layouts/YearsLayout/Years";
import styles from "./App.module.scss";

function App() {
  return (
    <Router>
      <Routes>
        {routes.map(({ path, view: Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
        <Route path="/years/:year" element={<Years />} />
      </Routes>
    </Router>
  );
}

export default App;
