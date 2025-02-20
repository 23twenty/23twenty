"use client";

import { useEffect, useState } from "react";
import LightGallery from 'lightgallery/react';

const Headshots = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      const response = await fetch('/api/gallery-images?folderPath=/images/example');
      const data = await response.json();
      setPhotos(data);
    };

    fetchPhotos();
  }, []);

  return (
      <main className="single single-gallery">
        <div id="content" className="site-content">
          <div className="gallery">
            <h1 className="entry-title center-relative center-text">Headshots</h1>
            <LightGallery
                dynamic={true}
                dynamicEl={photos}
            />
          </div>
        </div>
      </main>
  );
};

export default Headshots;