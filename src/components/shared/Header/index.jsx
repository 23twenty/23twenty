import React from 'react'
import { Link } from 'gatsby'
import Headhesive from 'headhesive'

import Logo from './Logo-Light.svg'
import './styles.scss'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'

import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap'

export default class Example extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  componentDidMount() {
    if (typeof window !== 'undefined') {
      var options = {
        offset: 350,
        offsetSide: 'top',
        classes: {
          clone: 'banner--clone fixed',
          stick: 'banner--stick',
          unstick: 'banner--unstick',
        },
      }
      new Headhesive('.navbar', options)

      window.addEventListener('resize', () => {
        if (window.innerWidth > 992 && this.state.isOpen === true) {
          this.setState({
            isOpen: false,
          })
        }
      })
    }
  }

  render() {
    const { isTransparent } = this.props
    const { isOpen } = this.state
    return (
      <Navbar
        expand="lg"
        className={`${
          isTransparent ? 'transparent absolute' : `solid`
        } nav-wrapper-dark text-uppercase inverse-text 
         `}
      >
        <div className="container">
          <div className="navbar-header">
            <div className="navbar-brand">
              <Link to="/">
                <img src={Logo} alt="webiste logo" />
              </Link>
            </div>
            <div className="navbar-hamburger ml-auto d-lg-none d-xl-none">
              <NavbarToggler
                onClick={this.toggle}
                className={`hamburger animate ${isOpen ? 'active' : ''}`}
              />
            </div>
          </div>

          <Collapse isOpen={isOpen} navbar>
            <Nav className="nav ml-auto sm-collapsible" navbar>
              <NavItem>
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/weddings" className="nav-link">
                  Weddings
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/investment" className="nav-link">
                  Investment
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </NavItem>
            </Nav>
            <div className="navbar-divider" />
            <ul className="social social-mute social-s">
              <li>
                <a
                  href="https://www.facebook.com/23twentymedia/"
                  target="_blank"
                >
                  <i>
                    <FaFacebookF />
                  </i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/23twentymedia/"
                  target="_blank"
                >
                  <i>
                    <FaInstagram />
                  </i>
                </a>
              </li>
            </ul>
          </Collapse>
        </div>
      </Navbar>
    )
  }
}
