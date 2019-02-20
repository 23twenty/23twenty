import React from 'react'
import ScrollToTop from 'react-scroll-up'
import { FaFacebookF, FaInstagram, FaChevronUp } from 'react-icons/fa'
import Logo from '../Header/Logo-Light.svg'
import './style.scss'

const Footer = () => (
  <footer className="dark-wrapper inverse-text">
    <div id="scrollUp">
      <ScrollToTop showUnder={400}>
        <span className="btn btn-square btn-full-rounded btn-icon ">
          <i className="scroll-up">
            <FaChevronUp />
          </i>
        </span>
      </ScrollToTop>
    </div>

    <div className="sub-footer">
      <div className="container inner text-center">
        <img src={Logo} className="footer-logo" />
        <div className="space25" />
        <p className="contact-heading">Get In Touch</p>
        <a className="contact-email" href="mailto:brian@23Twenty.com">brian@23Twenty.com</a>
        <ul className="social social-bg social-s">
          <li>
            <a href="https://www.facebook.com/23twentymedia/" target="_blank">
              <i className="fa fa-facebook-f">
                <FaFacebookF />
              </i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/23twentymedia/" target="_blank">
              <i className="fa fa-instagram">
                <FaInstagram />
              </i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
)

export default Footer
