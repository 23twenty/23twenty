import React from 'react';

const ParallaxContainer = ({imgUrl, caption, className}) => (
    <div className={`wrapper image-wrapper bg-image inverse-text ${className}`} style={{backgroundImage: `url(${imgUrl})`}}>
      <div className="container inner pt-120 pb-120 text-center">
        <h1 className="heading mb-0">{caption}</h1>
      </div>
    </div>
);

export default ParallaxContainer;