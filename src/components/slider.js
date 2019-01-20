import React from 'react';
import './slider.scss'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const Slider = ({images}) => {
  const slides = images.map(({img}) => {
    const image = img.childImageSharp;
    return {
      original: image.fluid.src,
      thumbnail: image.fixed.src
    }
  });
  return <div className="slider-wrapper">
    <ImageGallery items={slides}
                  autoPlay={false}
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