import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
          className="footer-column"
        >
          <h3>Company</h3>
          <span>Google</span>
          <span>Microsoft</span>
          <span>Pinterest</span>
          <span>Samsung</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
          className="footer-column"
        >
          <h3>Quick Links</h3>
          <span>Home</span>
          <span>About</span>
          <span>Contact</span>
        </div>
        <div className="footer-column">
          <h3>Social Media</h3>
          <div className="social-icons">
            <a
              href="#"
              className="social-icon"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="social-icon"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="social-icon"
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              className="social-icon"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
        <div
          className="footer-column"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <h3>Contact</h3>
          <span>Facebook</span>
          <span>Twitter</span>
          <span>Pinterest</span>
          <span>Whatsapp</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
