import React from "react";
import {Collapse, Nav, NavbarToggler, NavItem} from "reactstrap";
import {Link} from "gatsby";
import {FaFacebookF, FaInstagram} from "react-icons/fa";
const { Fragment } = React;

const HamburgerMenu = ({isOpen, toggle}) => (
    <Fragment>
      <NavbarToggler onClick={toggle} className={`hamburger mobile-only animate ${isOpen ? 'active' : ''}`} />
      <Collapse className="mobile-only" isOpen={isOpen} navbar>
        <Nav className="nav ml-auto sm-collapsible" navbar>
          <NavItem>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/photo" className="nav-link">
              Photography
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/video" className="nav-link">
              Videography
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/weddings" className="nav-link">
              Weddings
            </Link>
          </NavItem>
        </Nav>
        <div className="navbar-divider" />
        <ul className="social social-mute social-s">
          <li>
            <a href="https://www.facebook.com/23twentymedia/" target="_blank">
              <i><FaFacebookF /></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/23twentymedia/" target="_blank">
              <i><FaInstagram /></i>
            </a>
          </li>
        </ul>
      </Collapse>
    </Fragment>
);

export default HamburgerMenu;