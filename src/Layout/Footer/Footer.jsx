import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import "./footer.css"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-column">
          <h3>Company</h3>
          {/* Company information */}
        </div>
        <div className="footer-column">
          <h3>Quick Links</h3>
          {/* Quick links */}
        </div>
        <div className="footer-column">
          <h3>Social Media</h3>
          <div className="social-icons">
            <a href="#" className="social-icon"><FaFacebook /></a>
            <a href="#" className="social-icon"><FaTwitter /></a>
            <a href="#" className="social-icon"><FaLinkedin /></a>
            <a href="#" className="social-icon"><FaInstagram /></a>
          </div>
        </div>
        <div className="footer-column">
          <h3>Contact</h3>
          {/* Contact information */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
