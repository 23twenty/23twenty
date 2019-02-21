import React from 'react';
import './slider.scss';
import ReactSlick from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import ImageGallery from 'react-image-gallery';
// import "react-image-gallery/styles/css/image-gallery.css";

const Slider = ({images: {sliderImg, sliderImgWide}}) => {
  const slides = sliderImg.images.map((data, i) => {
    const imgMobile = data.img.childImageSharp;
    const imgDesktop = sliderImgWide.images[i].img.childImageSharp;
    return (
        <picture key={Math.random()}>
          <source srcSet={imgMobile.fluid.srcSet} media="(max-width: 735px)"/>
          <source srcSet={imgDesktop.fluid.srcSet} media="(min-width: 736px)"/>
          <img className="slider-img" src={imgMobile.fluid.src} alt="Portfolio Image"/>
        </picture>
    )
  });
  return (
      <div className="slider-wrapper">
        <ReactSlick children={slides}
                    className="home-slider"
                    autoplay={true}
                    infinite={true}
                    speed={500}
                    slidesToShow={1}
                    slidesToScroll={1} />
      </div>
  )
};

export default Slider;