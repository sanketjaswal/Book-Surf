import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Recommendations from "./pages/Recommendations";
import "./App.css";
import { Logo } from "./components/Logo";

function App() {
  return (
    <Router>
      <Logo />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/recommendations">Recommendations</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recommendations" element={<Recommendations />} />
      </Routes>
    </Router>
  );
}

export default App;
