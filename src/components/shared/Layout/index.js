import React from 'react'
import emergence from 'emergence.js'

import Header from '../Header/Header'
import Footer from 'components/shared/Footer'

import 'modern-normalize/modern-normalize.css'
import '../../../scss/main.scss'

class Layout extends React.Component {
  // componentDidMount() {
  //   emergence.init()
  // }
  //
  // componentDidUpdate() {
  //   emergence.init()
  // }

  render() {
    const { transparentHeader } = this.props;
    const { children } = this.props;
    return (
      <div className="content-wrapper">
        <Header isTransparent={transparentHeader} />
        {children}
        <Footer />
      </div>
    )
  }
}

export default Layout
