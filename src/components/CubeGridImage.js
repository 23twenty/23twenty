import React from 'react';

const CubeGridImage = ({img: { responsive: { resize, fixed}}}) => (
    <div className="cbp-item">
      <figure className="overlay overlay2">
        <a data-srcset={fixed.srcSet} data-src={fixed.src}>
          <span className="bg"></span>
          <img src={resize.src} alt=""/>
        </a>
      </figure>
    </div>
);

export default CubeGridImage;