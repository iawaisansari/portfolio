import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import "./App.css";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Flyer from "./components/Flyer/Flyer";
import Canva from "./components/Canva/Canva";
import Website from "./components/Website/Website";
import Logo from "./components/Logo/Logo";
import Testimonial from "./components/Testimonials/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";
import { useContext } from "react";
import { themeContext } from "./Context";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <ScrollToTopButton />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
      <Flyer />
      <Canva />
      <Website />
      <Logo />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
