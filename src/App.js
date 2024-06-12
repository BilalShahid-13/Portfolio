import "./App.css";
import {
  // HashRouter as Router,
  Routes,
  Route,
  // Link,
  HashRouter,
} from "react-router-dom";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
