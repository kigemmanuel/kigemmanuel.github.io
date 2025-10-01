
import snapp from "../snapp.js"
import Navbar from "./section/Navbar.jsx";
import HeroSection from "./section/HeroSection.jsx";
import AboutMe from "./section/AboutMe.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutMe />
    </>
  )
}

const SnappBody = document.querySelector("#snapp-body");
snapp.render(SnappBody, App())