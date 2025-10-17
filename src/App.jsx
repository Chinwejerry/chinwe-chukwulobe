import Home from "./pages/home";
import Projects from "./pages/projects";
import About from "./pages/about";
import Contact from "./pages/contact";
import MainLayout from "./layouts/mainLayout";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default App;
