import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Trip from "../components/Trip";
import nightImg from "../assets/night.jpg";

function Service() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={nightImg} title="Service" />
      <Trip />
      <Footer />
    </>
  );
}

export default Service;
