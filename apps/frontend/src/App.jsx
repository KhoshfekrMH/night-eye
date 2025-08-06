import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes";
import ScrollToTop from "./shared/util/ScrollToTop";
import "./App.css";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {routes.map(({ path, element }, index) => (
          <Route key={index} path={path} element={element} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
