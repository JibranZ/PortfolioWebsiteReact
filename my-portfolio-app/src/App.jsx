import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import MyWork from "./components/MyWork/MyWork";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Video from "./components/Video";
import "./components/App.css";
import AOS from "aos";
import "aos/dist/aos.css"; // Ensure this import is correct
import "./components/App.css"; // Import your own CSS

const App = () => {
  const [showVideo, setShowVideo] = useState(true);
  const [showNavbar, setShowNavbar] = useState(false);
  const [showHero, setShowHero] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showMyWork, setShowMyWork] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    // Hide other components initially
    setShowNavbar(false);
    setShowHero(false);
    setShowAbout(false);
    setShowServices(false);
    setShowMyWork(false);
    setShowContact(false);
    setShowFooter(false);

    // Show the video component initially
    setShowVideo(true);

    // Set a timer to hide the video component after 5 seconds (adjust as needed)
    const timer = setTimeout(() => {
      setShowVideo(false);
      // Show other components after the video finishes or after a certain duration
      setShowNavbar(true);
      setShowHero(true);
      setShowAbout(true);
      setShowServices(true);
      setShowMyWork(true);
      setShowContact(true);
      setShowFooter(true);
    }, 2000); // Adjust the duration as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      {/* Video component with transition */}
      <div className={`video-container ${showVideo ? "show" : "hide"}`}>
        {showVideo && <Video />}
      </div>

      {/* Other components with transition */}
      <div className={`other-components ${showVideo ? "hide" : "show"}`}>
        {showNavbar && <Navbar />}
        {showHero && (
          <section id="home" data-aos="zoom-in">
            <Hero />
          </section>
        )}
        {showAbout && (
          <section data-aos="fade">
            <About />
          </section>
        )}
        {showServices && (
          <section data-aos="fade-right">
            <Services />
          </section>
        )}
        {showMyWork && (
          <section data-aos="zoom-in">
            <MyWork />
          </section>
        )}
        {showContact && (
          <section data-aos="fade-up">
            <Contact />
          </section>
        )}
        {showFooter && <Footer />}
      </div>
    </div>
  );
};

export default App;
