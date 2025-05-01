import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          {/* Email and Phone */}
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:trivedi2693@gmail.com" data-cursor="disable">
                trivedi2693@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+919112548215" data-cursor="disable">
                +91 91125 48215
              </a>
            </p>
          </div>

          {/* Social Links */}
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/Dcoderath"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/divakar-trivedi-6b2291361/"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
          </div>

          {/* Designed and Developed By Section */}
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Divakar Trivedi</span>
            </h2>
            <h5>
              <MdCopyright /> 2025
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
