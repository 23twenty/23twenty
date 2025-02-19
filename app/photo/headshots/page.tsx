"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// Images
import img01 from "@/assets/images/gallery/about_img.jpg";
import img02 from "@/assets/images/gallery/img_06_large.jpg";
import img03 from "@/assets/images/gallery/img_01_large.jpg";
import { PhotoLink } from "@/components/PhotoLink";

// ------------------

const Headshots = () => {
  return (
    <main className="single single-gallery">
      <div id="content" className="site-content">
        <div className="gallery">
          {/* Title */}
          <h1 className="entry-title center-relative center-text">Headshots</h1>
        </div>
      </div>
    </main>
  );
};

export default Headshots;
