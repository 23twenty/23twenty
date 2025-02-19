"use client";
import { useState } from "react";

import { motion } from "framer-motion";
import Link from "next/link";

// Images
import arrow from "@/assets/images/opta_arrow@2x.png";
import videoImg from "@/assets/images/home/video-thumb.jpg";
import photoImg from "@/assets/images/home/photo-thumb.jpg";

import { PhotoLink } from "@/components/PhotoLink";

function Home() {
  const [loadedAll, setLoadedAll] = useState(false);

  const handleLoadAll = () => {
    setLoadedAll(true);
  };

  return (
    <main className="page">
      {/* Page intro text */}
      <div className="content-1140 header-content center-relative block">
        <h1 className="entry-title">
          A photography & video production company
          <Link href="/about">passionate</Link> about creativity and excellence.
        </h1>
        <p className="page-desc">PHILA,PA & BEYOND</p>
      </div>

      <div id="content" className="site-content">
        {/* Portfolio items */}
        <ul className="grid" id="portfolio">
          <PhotoLink title="Photo" src={photoImg} />
          <PhotoLink title="Video" src={videoImg} />
          {/* Quote Item */}
          {/* <motion.li
            initial={{ opacity: 0, transform: `translateY(50px)` }}
            whileInView={{ opacity: 1, transform: `translateY(0px)` }}
            viewport={{ once: true }}
            className="grid-item element-item quote-item "
          >
            Anyone can get dressed up and look glamorous but it is how people
            dress in their days off that are the most intriguing
          </motion.li> */}
        </ul>
      </div>
    </main>
  );
}

export default Home;
