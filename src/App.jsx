import { BrowserRouter } from "react-router-dom";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Feedbacks from "./components/Feedbacks";
import Experience from "./components/Experience";
import { Contact, StarsCanvas, Tech, Works } from "./components";

// import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
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
    </BrowserRouter>
  );
};

export default App;
