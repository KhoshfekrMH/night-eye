import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes";
import ScrollToTop from "./shared/util/ScrollToTop";
import { AlertProvider } from "./shared/context/AlertContext";
import "./App.css";

function App() {
  return (
    <Router>
      <AlertProvider>
        <ScrollToTop />
        <Routes>
          {routes.map(({ path, element }, index) => (
            <Route key={index} path={path} element={element} />
          ))}
        </Routes>
      </AlertProvider>
    </Router>
  );
}

export default App;
