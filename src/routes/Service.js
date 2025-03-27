import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Service() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg="/assets/night.jpg" title="Service" />
      <Trip />
      <Footer />
    </>
  );
}

export default Service;
