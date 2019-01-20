import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer'

import 'modern-normalize/modern-normalize.css'
import '../../../scss/main.scss'

const Layout = ({transparentHeader, children, isHome}) => (
    <div className="content-wrapper">
      <Header isTransparent={transparentHeader} isHome={isHome}/>
      {children}
      <Footer />
    </div>
);

export default Layout
