import React, { Component } from 'react'
import Swiper from 'react-id-swiper'
import ImageWrapper from 'components/shared/ImageWrapper'

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
      <div className="wrapper light-wrapper">
        <div className="container inner">
          <h2 className="section-title section-title-upper mb-40 text-center">
            Meet the Team
          </h2>
          <div className="swiper-container-wrapper swiper-col4" data-aos="fade">
            <div className="swiper-container text-center">
              <Swiper {...params}>
                <div className="swiper-slide">
                  <figure className="mb-20">
                    <ImageWrapper src="pages/weddings/teams/member_three.jpg" />
                  </figure>
                  <h5 className="mb-5">Coriss Ambady</h5>
                  <div className="meta">Art Director</div>
                  <p>
                    Etiam porta sem malesuada magna mollis euismod. Donec sed
                    odio dui consectetur.
                  </p>
                  <ul className="social social-color social-s">
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
                <div className="swiper-slide">
                  <figure className="mb-20">
                    <ImageWrapper src="pages/weddings/teams/member_four.jpg" />
                  </figure>
                  <h5 className="mb-5">Cory Zamora</h5>
                  <div className="meta">Photographer</div>
                  <p>
                    Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                    dolor auctor adipiscing elit.
                  </p>
                  <ul className="social social-color social-s">
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
                <div className="swiper-slide">
                  <figure className="mb-20">
                    <ImageWrapper src="pages/weddings/teams/member_three.jpg" />
                  </figure>
                  <h5 className="mb-5">Barclay Widerski</h5>
                  <div className="meta">Photographer & Editor</div>
                  <p>
                    Fusce dapibus, tellus ac cursus commodo, tortor mauris
                    condimentum nibh.
                  </p>
                  <ul className="social social-color social-s">
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
                <div className="swiper-slide">
                  <figure className="mb-20">
                    <ImageWrapper src="pages/weddings/teams/member_four.jpg" />
                  </figure>
                  <h5 className="mb-5">Nikola Brooten</h5>
                  <div className="meta">Videographer</div>
                  <p>
                    Fermentum massa justo sit amet risus. Morbi leo risus, porta
                    ac consectetur.
                  </p>
                  <ul className="social social-color social-s">
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
                <div className="swiper-slide">
                  <figure className="mb-20">
                    <ImageWrapper src="pages/weddings/teams/member_five.jpg" />
                  </figure>
                  <h5 className="mb-5">Connor Gibson</h5>
                  <div className="meta">Photographer</div>
                  <p>
                    Nulla non metus auctor fringilla. Sed posuere consectetur
                    est at lobortis donec.
                  </p>
                  <ul className="social social-color social-s">
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
                <div className="swiper-slide">
                  <figure className="mb-20">
                    <ImageWrapper src="pages/weddings/teams/member_six.jpg" />
                  </figure>
                  <h5 className="mb-5">Jackie Sanders</h5>
                  <div className="meta">Intern</div>
                  <p>
                    Maecenas sed diam eget risus varius blandit sit amet non
                    magna ullamcorper.
                  </p>
                  <ul className="social social-color social-s">
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
            <div className="swiper-pagination gap-large" />
          </div>
        </div>
      </div>
    )
  }
}

export default Team
