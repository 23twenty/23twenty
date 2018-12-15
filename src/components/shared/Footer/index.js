import React from 'react'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import Logo from '../Header/Logo-Light.svg'
import './style.scss'

const Footer = () => (
  <footer className="dark-wrapper inverse-text">
    <div className="sub-footer">
      <div className="container inner text-center">
        <img src={Logo} class="footer-logo" />
        <div className="space25" />
        <p>© 2018 Brailie. All rights reserved. Theme by elemis.</p>
        <div className="space30" />
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
