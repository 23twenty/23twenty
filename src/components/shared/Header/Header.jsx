import React from 'react'
import { Link } from 'gatsby'
import Headhesive from 'headhesive'
import HamburgerMenu from './HamburgerMenu'
import Logo from './Logo-Light.svg'
import './header.scss'

import { Navbar } from 'reactstrap'


class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    }
  }

  componentDidMount() {
    this._initStickyHeader();
  }

  _toggle = () => this.setState(({isOpen}) => ({isOpen: !isOpen}));

  _initStickyHeader = () => {
    if (typeof window !== 'undefined') {
      let options = {
        offset: 350,
        offsetSide: 'top',
        classes: {
          clone: 'banner--clone fixed',
          stick: 'banner--stick',
          unstick: 'banner--unstick',
        },
      };
      new Headhesive('.navbar', options);

      window.addEventListener('resize', () => {
        if (window.innerWidth > 992 && this.state.isOpen === true) {
          this.setState({
            isOpen: false,
          })
        }
      })
    }
  };

  render() {
    const { isTransparent } = this.props;
    const { isOpen } = this.state;
    return (
      <Navbar expand={false} className={`${isTransparent ? 'transparent absolute' : `solid`} text-uppercase inverse-text`}>
        <div className="container">
          <MenuLink to="/" text="Home" />
          <MenuLink to="/weddings" text="Weddings" />
          <Link to="/">
            <img className="logo" src={Logo} alt="website logo" />
          </Link>
          <MenuLink to="/investment" text="Investment" />
          <MenuLink to="/about" text="About" />
          <HamburgerMenu isOpen={isOpen} toggle={this._toggle}/>
        </div>
      </Navbar>
    )
  }
}

export default Header;


const MenuLink = ({to, text}) => (
    <div className="desktop-link">
      <Link to={to} className="d-none d-lg-block">
        {text}
      </Link>
      <div className="underline"></div>
    </div>
);
