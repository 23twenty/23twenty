"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// Images
import img01 from "@/assets/images/gallery/about_img.jpg";
import img02 from "@/assets/images/gallery/img_06_large.jpg";
import img03 from "@/assets/images/gallery/img_01_large.jpg";
import { PhotoLink } from "@/components/PhotoLink";

// ------------------

const Photo = () => {
  return (
    <main className="single single-gallery">
      <div id="content" className="site-content">
        <div className="gallery">
          {/* Title */}
          <h1 className="entry-title center-relative center-text">
            Photography
          </h1>
        </div>
        <PhotoLink src={img02} title="Headshots" href="./headshots" />
        <PhotoLink src={img02} title="Corporate" href="./corporate" />
        <PhotoLink src={img02} title="Events" href="./events" />
        <PhotoLink src={img02} title="Headshots" href="./headshots" />
      </div>
    </main>
  );
};

export default Photo;
