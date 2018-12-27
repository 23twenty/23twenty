import React from 'react';
import './slider.scss'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const Slider = ({images}) => {
  const slides = images.map(({node}) => {
    const img = node.childImageSharp;
    return {
      original: img.fluid.src,
      thumbnail: img.fixed.src
    }
  });
  return <ImageGallery items={slides}
                       autoPlay={true}
                       additionalClass="home-slider"
                       showNav={false}
                       showPlayButton={false}/>;
};

export default Slider;