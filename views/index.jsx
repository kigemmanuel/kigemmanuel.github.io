
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
      <Navbar />
      <HeroSection />
      <AboutMe />
      <Mindset />
      <FeactureProject />
      <TechStack />
    </>
  )
}

const SnappBody = document.querySelector("#snapp-body");
snapp.render(SnappBody, App())