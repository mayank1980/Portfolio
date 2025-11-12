import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume"; // 1. Import the new Resume component

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Portfolio />} />
        <Route path="about" element={<About />} />
        <Route path="skills" element={<Skills />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
        {/* 2. Add the new route for the Resume page */}
        <Route path="resume" element={<Resume />} />
      </Route>
    </Routes>
  );
}

export default App;
