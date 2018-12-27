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
  return <div className="slider-wrapper">
    <ImageGallery items={slides}
                  autoPlay={true}
                  additionalClass="home-slider"
                  showNav={false}
                  showPlayButton={false}/>
    <div className="title">
      Photography &<br/>
      Videography &<br/>
      Creativity & <br/>
      Awesome.
    </div>
  </div>;
};

export default Slider;