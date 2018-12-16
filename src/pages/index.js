import React from 'react'
import { graphql } from 'gatsby'

import Meta from 'components/shared/Meta'
import Layout from 'components/shared/Layout'
import Slider from 'components/home/slider'
import Intro from 'components/home/intro'
import InstagramFeed from 'components/shared/Instafeed'
import { siteMetadata } from '../../gatsby-config'

const Index = ({ data, location }) => {
  const sliderImages = data.allFile.edges
  return (
    <Layout location={location} trasparentHeader>
      <Meta site={siteMetadata} title="Home" />
      <Slider images={sliderImages} />
      <Intro />
      <InstagramFeed />
    </Layout>
  )
}

export default Index

export const query = graphql`
  query allImagesForSlider {
    allFile(
      filter: {
        extension: { regex: "/(jpeg|jpg|gif|png)/" }
        dir: { regex: "/home-slider/" }
        sourceInstanceName: { eq: "images" }
      }
    ) {
      edges {
        node {
          relativePath
          childImageSharp {
            resize(width: 180, height: 180, cropFocus: ENTROPY) {
              src
            }
            fixed(height: 90, width: 150) {
              ...GatsbyImageSharpFixed
            }
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`
