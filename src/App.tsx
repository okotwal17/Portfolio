import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  AllProjects,
  StarsCanvas,
} from "./components";
import { useEffect } from "react";
import { config } from "./constants/config";

const App = () => {
  useEffect(() => {
    if (document.title !== config.html.title) {
      document.title = config.html.title;
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="bg-primary relative z-0">
            <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
              <Navbar />
              <Hero />
            </div>
            <About />
            <Experience />
            <Tech />
            <Works />
            <Feedbacks />
            <div className="relative z-0">
              <Contact />
              <StarsCanvas />
            </div>
          </div>
        } />
        <Route path="/all-projects" element={
          <div className="bg-primary relative z-0">
            <Navbar />
            <AllProjects />
            <div className="relative z-0">
              <StarsCanvas />
            </div>
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
