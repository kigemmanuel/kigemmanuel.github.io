
import snapp from "../src/snapp.js"
import Navbar from "./section/Navbar.jsx";
import HeroSection from "./section/HeroSection.jsx";
import AboutMe from "./section/AboutMe.jsx";
import FeactureProject from "./section/FeatureProject.jsx";
import Mindset from "./section/Mindset.jsx";
import TechStack from "./section/TechStack.jsx";

const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <HeroSection />
        <AboutMe />
        <Mindset />
        <FeactureProject />
        <TechStack />
      </main>
    </>
  )
}

const SnappBody = document.querySelector("#snapp-body");
snapp.render(SnappBody, App())