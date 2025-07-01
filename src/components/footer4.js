import React from 'react'
import { Link } from 'react-router-dom'
import './footer4.css'

const Footer4 = () => {
  return (
    <footer className="footer4-footer7 thq-section-padding">
      <div className="footer4-max-width thq-section-max-width">
        <div className="footer4-content">
          <div className="footer4-logo1">
            <img
              alt="Heckyourgarden Logo"
              src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
              className="footer4-logo2"
            />
          </div>

          <div className="footer4-links">
            <Link to="/about" className="thq-body-small">About Us</Link>
            <Link to="/contact" className="thq-body-small">Contact Us</Link>
            <Link to="/faq" className="thq-body-small">FAQs</Link>
            <Link to="/terms" className="thq-body-small">Terms and Conditions</Link>
            <Link to="/privacy" className="thq-body-small">Privacy Policy</Link>
          </div>
        </div>

        <div className="footer4-credits">
          <div className="thq-divider-horizontal"></div>
          <div className="footer4-row">
            <div className="footer4-container">
              <span className="thq-body-small">© 2024 Heck Your Garden</span>
            </div>
            <div className="footer4-footer-links">
              <Link to="/privacy" className="thq-body-small">Privacy Policy</Link>
              <Link to="/terms" className="thq-body-small">Terms and Conditions</Link>
              <Link to="/cookies" className="thq-body-small">Cookies Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer4
