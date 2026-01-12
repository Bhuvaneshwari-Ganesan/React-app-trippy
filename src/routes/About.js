import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
import nightImg from "../assets/night.jpg";

function About() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={nightImg} title="About" />
      <AboutUs />
      <Footer />
    </>
  );
}

export default About;
