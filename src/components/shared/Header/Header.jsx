import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Headhesive from 'headhesive';
import HamburgerMenu from './HamburgerMenu';
import LogoWhite from './Logo-Light.svg';
import LogoBlack from './Logo-Black.svg';
import './header.scss';

import { Navbar } from 'reactstrap';


class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    }

    this._headerInit = null;
  }

  static propTypes = {
    isHome: PropTypes.bool
  };

  static defaultProps = {
    isHome: false
  };

  componentDidMount() {
    this._initStickyHeader();
  }

  componentWillUnmount() {
    this._headerInit.destroy();
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
      this._headerInit = new Headhesive('.navbar', options);

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
    const { isTransparent, isHome } = this.props;
    const { isOpen } = this.state;
    return (
      <Navbar expand={false}
              className={`${isTransparent ? 'transparent absolute' : `solid`}
                          ${isHome ? 'home' : ''} text-uppercase inverse-text`}>
        <div className="container">
          {/*<MenuLink to="/" text="Home" />*/}
          <MenuLink to="/photo" text="Photo" />
          <Link to="/">
            <img className="logo" src={isHome ? LogoWhite : LogoBlack} alt="website logo" />
          </Link>
          <MenuLink to="/video" text="Video" />
          {/*<MenuLink to="/weddings" text="Weddings" />*/}
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
