import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./componenets/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Models from "./pages/Models";
import TestimonialsPage from "./pages/TestimonialsPage";
import OurTeam from "./pages/OurTeam";
import Contact from "./pages/Contact";


function App() {
  return (
    <>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/models" element={<Models />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/ourTeam" element={<OurTeam />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
