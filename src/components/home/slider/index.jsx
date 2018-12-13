import React from 'react'
import Slider from 'react-slick'

import ImageOne from './images/c1.jpg'
import ImageTwo from './images/c2.jpg'
import ImageThree from './images/c3.jpg'
import ImageFour from './images/c4.jpg'

import './styles.scss'

const ClientsSlider = () => {
  const settings = {
    // customPaging: function(i) {
    //   return <img src={ImageOne} />
    // },
    arrows: true,
    dots: true,
    // dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    autoplay: false,
    draggable: true,
    focusOnSelect: false,
    speed: 700,
    autoplaySpeed: 4000,
    // adaptiveHeight: true,
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 1,
    fade: false,
    cssEase: 'ease',
  }
  return (
    <Slider {...settings}>
      <div className="item">
        <div
          className="slide-img-bg"
          style={{
            backgroundImage: `url(${ImageOne})`,
          }}
        />
      </div>
      <div className="item">
        <div
          className="slide-img-bg"
          style={{
            backgroundImage: `url(${ImageTwo})`,
          }}
        />
      </div>
      <div className="item">
        <div
          className="slide-img-bg"
          style={{
            backgroundImage: `url(${ImageThree})`,
          }}
        />
      </div>
      <div className="item">
        <div
          className="slide-img-bg"
          style={{
            backgroundImage: `url(${ImageFour})`,
          }}
        />
      </div>
    </Slider>
  )
}

export default ClientsSlider
