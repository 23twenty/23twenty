import React from 'react'

import Meta from 'components/shared/Meta'
import Layout from 'components/shared/Layout'
import Intro from 'components/weddings/intro'
import Team from 'components/weddings/team'
import Behind from 'components/weddings/behind'
import InstagramFeed from 'components/shared/Instafeed'
import Quotes from 'components/weddings/quotes'
import { siteMetadata } from '../../gatsby-config'

const Weddings = ({ location }) => {
  return (
    <Layout location={location}>
      <Meta site={siteMetadata} title="Investment" />
      <div className="container">
        <Intro />
        <Team />
      </div>
      <Quotes />
      <Behind />

      <InstagramFeed />
    </Layout>
  )
}

export default Weddings
