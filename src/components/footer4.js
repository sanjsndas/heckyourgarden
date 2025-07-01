import React from 'react'
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
            <a href="/about" className="thq-body-small">About Us</a>
            <a href="/contact" className="thq-body-small">Contact Us</a>
            <a href="/faq" className="thq-body-small">FAQs</a>
            <a href="/terms" className="thq-body-small">Terms and Conditions</a>
            <a href="/privacy" className="thq-body-small">Privacy Policy</a>
          </div>
        </div>

        <div className="footer4-credits">
          <div className="thq-divider-horizontal"></div>
          <div className="footer4-row">
            <div className="footer4-container">
              <span className="thq-body-small">© 2024 Heck Your Garden</span>
            </div>
            <div className="footer4-footer-links">
              <a href="/privacy" className="thq-body-small">Privacy Policy</a>
              <a href="/terms" className="thq-body-small">Terms and Conditions</a>
              <a href="/cookies" className="thq-body-small">Cookies Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer4
