import React from 'react';
import './slider.scss'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const Slider = ({images}) => {
  const slides = images.map(({img}) => {
    const image = img.childImageSharp;
    return {
      original: image.fluid.src
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