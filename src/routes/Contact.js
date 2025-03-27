import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg="/assets/two.jpg" title="Contact" />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
