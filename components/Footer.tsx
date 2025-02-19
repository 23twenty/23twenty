import Link from "next/link";

// Images
import footerLogo from "@/assets/images/Logo-Light.svg";

// ----------

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content content-1140 center-relative">
        {/* Your Contact links */}
        <div className="footer-logo">
          <Link href="/">
            <img src={footerLogo.src} alt="Opta" />
          </Link>
        </div>
        <div className="footer-text">
          <p className="footer-first-line">
            <Link href="mailto:brian@23twenty.com">brian@23twenty.com</Link>
          </p>
        </div>

        {/* Coptright and social links */}
        <ul className="copyright-holder">
          <li className="copyright-footer">
            © {new Date(Date.now()).getFullYear()} - 23Twenty Media
          </li>
          <li className="social-footer">
            <Link href="https://www.facebook.com/23twentymedia" target="_blank">
              FACEBOOK
            </Link>
            <Link
              href="https://www.instagram.com/23twentymedia"
              target="_blank"
            >
              INSTAGRAM
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
