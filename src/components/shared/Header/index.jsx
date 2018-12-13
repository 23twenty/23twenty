import React from 'react'
import Logo from './logo-light.png'
import './styles.scss'

import { FaFacebookF, FaInstagram } from 'react-icons/fa'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'

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
  componentWillMount() {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 992 && this.state.isOpen === true) {
        this.setState({
          isOpen: false,
        })
      }
    })
  }

  render() {
    const { isOpen } = this.state
    return (
      <Navbar
        expand="lg"
        className="transparent absolute nav-wrapper-dark text-uppercase inverse-text"
      >
        <div className="container">
          <div className="navbar-header">
            <div class="navbar-brand">
              <a href="index.html">
                <img src={Logo} alt="webiste logo" />
              </a>
            </div>
            <div class="navbar-hamburger ml-auto d-lg-none d-xl-none">
              <NavbarToggler
                onClick={this.toggle}
                className={`hamburger animate ${isOpen ? 'active' : ''}`}
              />
            </div>
          </div>

          <Collapse isOpen={isOpen} navbar>
            <Nav className="nav ml-auto sm-collapsible" navbar>
              <NavItem>
                <NavLink href="#">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Features</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">FAQ</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Team</NavLink>
              </NavItem>
            </Nav>
            <div class="navbar-divider" />
            <ul class="social social-mute social-s">
              <li>
                <a href="#">
                  <i>
                    <FaFacebookF />
                  </i>
                </a>
              </li>
              <li>
                <a href="#">
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
