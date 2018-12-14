import React, { Component } from 'react'
import Swiper from 'react-id-swiper'

import t5 from './images/t5.jpg'
import t6 from './images/t6.jpg'
import t7 from './images/t7.jpg'
import t8 from './images/t8.jpg'
import t9 from './images/t9.jpg'
import t10 from './images/t10.jpg'

import { FaFacebookF, FaInstagram } from 'react-icons/fa'

class Team extends Component {
  componentDidMount() {}

  render() {
    const params = {
      slidesPerView: 4,
      spaceBetween: 30,
      breakpoints: {
        700: {
          slidesPerView: 1,
        },
        1010: {
          slidesPerView: 2,
        },
        1130: {
          slidesPerView: 3,
        },
      },
      pagination: {
        el: '.swiper-col4-pagination-0',
        clickable: true,
      },
    }

    return (
      <div class="wrapper light-wrapper">
        <div class="container inner">
          <h2 class="section-title section-title-upper mb-40 text-center">
            Meet the Team
          </h2>
          <div class="swiper-container-wrapper swiper-col4" data-aos="fade">
            <div class="swiper-container text-center">
              <Swiper {...params}>
                <div class="swiper-slide">
                  <figure class="mb-20">
                    <img src={t5} alt="" />
                  </figure>
                  <h5 class="mb-5">Coriss Ambady</h5>
                  <div class="meta">Art Director</div>
                  <p>
                    Etiam porta sem malesuada magna mollis euismod. Donec sed
                    odio dui consectetur.
                  </p>
                  <ul class="social social-color social-s">
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
                <div class="swiper-slide">
                  <figure class="mb-20">
                    <img src={t6} alt="" />
                  </figure>
                  <h5 class="mb-5">Cory Zamora</h5>
                  <div class="meta">Photographer</div>
                  <p>
                    Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                    dolor auctor adipiscing elit.
                  </p>
                  <ul class="social social-color social-s">
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
                <div class="swiper-slide">
                  <figure class="mb-20">
                    <img src={t7} alt="" />
                  </figure>
                  <h5 class="mb-5">Barclay Widerski</h5>
                  <div class="meta">Photographer & Editor</div>
                  <p>
                    Fusce dapibus, tellus ac cursus commodo, tortor mauris
                    condimentum nibh.
                  </p>
                  <ul class="social social-color social-s">
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
                <div class="swiper-slide">
                  <figure class="mb-20">
                    <img src={t8} alt="" />
                  </figure>
                  <h5 class="mb-5">Nikola Brooten</h5>
                  <div class="meta">Videographer</div>
                  <p>
                    Fermentum massa justo sit amet risus. Morbi leo risus, porta
                    ac consectetur.
                  </p>
                  <ul class="social social-color social-s">
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
                <div class="swiper-slide">
                  <figure class="mb-20">
                    <img src={t9} alt="" />
                  </figure>
                  <h5 class="mb-5">Connor Gibson</h5>
                  <div class="meta">Photographer</div>
                  <p>
                    Nulla non metus auctor fringilla. Sed posuere consectetur
                    est at lobortis donec.
                  </p>
                  <ul class="social social-color social-s">
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
                <div class="swiper-slide">
                  <figure class="mb-20">
                    <img src={t10} alt="" />
                  </figure>
                  <h5 class="mb-5">Jackie Sanders</h5>
                  <div class="meta">Intern</div>
                  <p>
                    Maecenas sed diam eget risus varius blandit sit amet non
                    magna ullamcorper.
                  </p>
                  <ul class="social social-color social-s">
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
              </Swiper>
            </div>
            <div class="swiper-pagination gap-large" />
          </div>
        </div>
      </div>
    )
  }
}

export default Team
