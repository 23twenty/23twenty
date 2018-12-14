import React from 'react'

import Meta from 'components/shared/Meta'
import Layout from 'components/shared/Layout'
import HeroBg from 'components/about/herobg'
import Intro from 'components/about/intro'
import InstagramFeed from 'components/shared/Instafeed'
import { siteMetadata } from '../../gatsby-config'

const About = ({ location }) => {
  return (
    <Layout location={location}>
      <Meta site={siteMetadata} title="About" />
      <HeroBg />
      <Intro />
      <InstagramFeed />
    </Layout>
  )
}

export default About
