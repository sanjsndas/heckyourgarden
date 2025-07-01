import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './navbar8.css'

const Navbar8 = (props) => {
  const [link5AccordionOpen, setLink5AccordionOpen] = useState(false)
  const [link5DropdownVisible, setLink5DropdownVisible] = useState(false)
  return (
    <header className="navbar8-container1">
      <header data-thq="thq-navbar" className="navbar8-navbar-interactive">
        <img
          alt={props.logoAlt}
          src={props.logoSrc}
          className="navbar8-image1"
        />

        <div className="navbar8-icon-container1">
          {link5DropdownVisible === true && (
            <div className="navbar8-container2">
              <svg viewBox="0 0 1024 1024" className="navbar8-icon10">
                <path d="M298 426h428l-214 214z"></path>
              </svg>
            </div>
          )}
          {link5DropdownVisible === false && (
            <div className="navbar8-container3">
              <svg viewBox="0 0 1024 1024" className="navbar8-icon12">
                <path d="M426 726v-428l214 214z"></path>
              </svg>
            </div>
          )}
        </div>

        <div className="navbar8-buttons1">
          <button className="navbar8-action11 thq-button-animated thq-button-filled">
            <span>
              {props.action1 ?? (
                <Fragment>
                  <span className="navbar8-text15">Sign Up</span>
                </Fragment>
              )}
            </span>
          </button>
          <button className="navbar8-action21 thq-button-outline thq-button-animated">
            <span>
              {props.action2 ?? (
                <Fragment>
                  <span className="navbar8-text27">Get Started</span>
                </Fragment>
              )}
            </span>
          </button>
        </div>

        <div data-thq="thq-burger-menu" className="navbar8-burger-menu">
          <svg viewBox="0 0 1024 1024" className="navbar8-icon14">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>

        <div data-thq="thq-mobile-menu" className="navbar8-mobile-menu">
          <div className="navbar8-nav">
            <div className="navbar8-top">
              <img
                alt={props.logoAlt}
                src={props.logoSrc}
                className="navbar8-logo"
              />
              <div data-thq="thq-close-menu" className="navbar8-close-menu">
                <svg viewBox="0 0 1024 1024" className="navbar8-icon16">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="navbar8-links2">
              <a className="navbar8-link12 thq-link thq-body-small">
                {props.link1 ?? (
                  <Fragment>
                    <span className="navbar8-text18">/home</span>
                  </Fragment>
                )}
              </a>
              <a className="thq-link thq-body-small">
                {props.link2 ?? (
                  <Fragment>
                    <span className="navbar8-text16">/plants</span>
                  </Fragment>
                )}
              </a>
              <a className="navbar8-link32 thq-link thq-body-small">
                {props.link3 ?? (
                  <Fragment>
                    <span className="navbar8-text24">/outdoor-spaces</span>
                  </Fragment>
                )}
              </a>
            </nav>
          </div>
        </div>
      </header>
    </header>
  )
}

Navbar8.defaultProps = {
  logoAlt: 'Heckyourgarden Logo',
  logoSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
  link1: undefined,
  link2: undefined,
  link3: undefined,
  action1: undefined,
  action2: undefined,
}

Navbar8.propTypes = {
  logoAlt: PropTypes.string,
  logoSrc: PropTypes.string,
  link1: PropTypes.element,
  link2: PropTypes.element,
  link3: PropTypes.element,
  action1: PropTypes.element,
  action2: PropTypes.element,
}

export default Navbar8
