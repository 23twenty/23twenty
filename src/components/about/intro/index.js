import React from 'react'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'

import './styles.scss'
import AboutImage from './about4.jpg'

const HeroBg = () => (
  <div className="wrapper light-wrapper">
    <div className="container inner">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <figure>
            <img src={AboutImage} alt="" />
          </figure>
          <div className="space30" />
          <h2 className="section-title text-center">Who is Behind?</h2>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
            Maecenas sed diam eget risus varius blandit sit amet non magna.
            Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula
            porta felis euismod semper. Nullam id dolor id nibh ultricies
            vehicula ut id elit, fusce dapibus, tellus ac.
          </p>
          <blockquote className="bordered">
            <p>
              Sed posuere consectetur est at lobortis. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Duis mollis, est non commodo
              luctus, nisi erat porttitor ligula lacinia odio sem nec elit.
            </p>
            <footer className="blockquote-footer">Connor Gibson</footer>
          </blockquote>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Nullam id dolor id nibh ultricies vehicula ut id elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit
          </p>
          <ul className="social social-color social-s mb-15 text-center">
            <li>
              <a href="#">
                <i className="fa fa-facebook">
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
    </div>
  </div>
)

export default HeroBg
