import { Routes, Route } from "react-router-dom";

import { NotFound } from "./pages/not-found";
import { Footer } from "./components/layout/footer";
import { Navbar } from "./components/layout/navbar";
import { Home } from "./pages/home";
import { Profile } from "./pages/profile";
import { Project } from "./pages/project";
import { CaseStudies } from "./pages/case-studies";

function App() {
  return (
    <section className="flex flex-col items-center px-36 ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/:projectId" element={<Project />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </section>
  );
}

export default App;
