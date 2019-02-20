import React from 'react';
import './slider.scss'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const Slider = ({images: {sliderImg, sliderImgWide}}) => {
  const slides = sliderImg.images.map((data, i) => {
    const imgMobile = data.img.childImageSharp;
    const imgDesktop = sliderImgWide.images[i].img.childImageSharp;
    return {
      original: imgMobile.fluid.src,
      imageSet: [
        {
          srcSet: imgMobile.fluid.srcSet,
          media: '(max-width: 1280px)',
        },
        {
          srcSet: imgDesktop.fluid.srcSet,
          media: '(min-width: 1280px)',
        }
      ]
    }
  });
  return <div className="slider-wrapper">
    <ImageGallery items={slides}
                  autoPlay={true}
                  additionalClass="home-slider"
                  showNav={false}
                  showThumbnails={false}
                  showPlayButton={false}/>
  </div>;
};

export default Slider;