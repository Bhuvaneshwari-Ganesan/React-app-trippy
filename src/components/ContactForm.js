import "./ContactFormStyles.css";

function ContactForm() {
  return (
    <div className="contact-form-container">
      <h1>Send a Message to Us!</h1>
      <form action="">
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Subject" />
        <textarea placeholder="Message" rows="4"></textarea>
        <button className="send">Send Message</button>
      </form>
    </div>
  );
}

export default ContactForm;
