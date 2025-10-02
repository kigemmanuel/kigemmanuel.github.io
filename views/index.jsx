
import snapp from "../src/snapp.js"
import Navbar from "./section/Navbar.jsx";
import HeroSection from "./section/HeroSection.jsx";
import AboutMe from "./section/AboutMe.jsx";
import FeactureProject from "./section/FeatureProject.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutMe />
      <FeactureProject />
    </>
  )
}

const SnappBody = document.querySelector("#snapp-body");
snapp.render(SnappBody, App())