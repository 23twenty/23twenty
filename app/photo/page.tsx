import { motion } from "framer-motion";
import Link from "next/link";

// Images
import headshotThumb from "@/assets/images/headshotThumb.jpg";
import eventsThumb from "@/assets/images/eventsThumb.jpg";
import musicThumb from "@/assets/images/musicThumb.jpg";
import productThumb from "@/assets/images/productThumb.jpg";
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
        <ul className="grid">
          <PhotoLink src={headshotThumb} title="Headshots" href="./headshots" />
          <PhotoLink src={eventsThumb} title="Events" href="./events" />
          <PhotoLink src={musicThumb} title="Music" href="./music" />
          <PhotoLink src={productThumb} title="Product" href="./product" />
        </ul>
      </div>
    </main>
  );
};

export default Photo;
