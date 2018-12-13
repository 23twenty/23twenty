import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import "./style.scss";

const Footer = () => (
  <footer class="dark-wrapper inverse-text">
    <div class="sub-footer">
      <div class="container inner text-center">
        {" "}
        <img
          src="#"
          srcset="style/images/logo-light.png 1x, style/images/logo-light@2x.png 2x"
          alt=""
        />
        <div class="space25" />
        <p>© 2018 Brailie. All rights reserved. Theme by elemis.</p>
        <div class="space30" />
        <ul class="social social-bg social-s">
          <li>
            <a href="#">
              <i className="fa fa-facebook-f">
                <FaFacebookF />
              </i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-instagram">
                <FaInstagram />
              </i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
