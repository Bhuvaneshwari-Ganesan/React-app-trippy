import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import twoImg from "../assets/two.jpg";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={twoImg} title="Contact" />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
