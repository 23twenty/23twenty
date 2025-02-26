import { motion } from "framer-motion";
import Link from "next/link";
import arrow from "@/assets/images/opta_arrow@2x.png";
import Image, { StaticImageData } from "next/image";
import videoImg from "@/assets/images/home/video-thumb.jpg";

interface PhotoLinkProps {
  src: StaticImageData;
  title: string;
  subTitle?: string;
  href: string;
}

export const PhotoLink: React.FC<PhotoLinkProps> = ({
  src,
  title,
  href,
  subTitle,
}) => {
  return (
    <motion.li
      initial={{ opacity: 0, transform: `translateY(50px)` }}
      whileInView={{ opacity: 1, transform: `translateY(0px)` }}
      viewport={{ once: true }}
      className="grid-item"
    >
      <Link href={href}>
        <div className="item-wrapper page-menu-item">
          <Image src={src} alt={title} />
          <div className="portfolio-text-holder">
            <div className="portfolio-info">
              <Link className="portfolio-text" href={href}>
                {title}
              </Link>
              {subTitle && (
                <p className="portfolio-category">
                  <Link href={href}>{subTitle}</Link>
                </p>
              )}
              <p className="portfolio-arrow">
                <Link href={href}>
                  <img src={arrow.src} alt="" />
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Link>
    </motion.li>
  );
};
