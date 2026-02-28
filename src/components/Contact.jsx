import { FaEnvelope, FaLinkedin, FaWhatsapp } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <h2>Let's Connect</h2>

      <div className="social-icons">

        <a href="mailto:ey16122004@gmail.com">
          <FaEnvelope />
        </a>

        <a
          href="https://wa.me/91XXXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
        </a>

        <a
          href="https://www.linkedin.com/in/enoshyaffat"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>

      </div>
    </section>
  );
}

export default Contact;