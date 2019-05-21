import React from 'react'
import Meta from 'components/shared/Meta'
import Layout from 'components/shared/Layout'
import { siteMetadata } from '../../gatsby-config'
import {graphql} from "gatsby";
import Img from 'gatsby-image';
import '../scss/rome-and-zion.scss';
import Gallery from 'react-photo-gallery';


const RomeAndZion = ({data: { location, cover, romeandzion: {images}}}) => {
  const _renderGallery = () => {
    return images.map(({img: {responsive: { fixed: { srcSet, width, height} }}}, i) => ({ srcSet, width, height }))
  };

  return (
      <Layout location={location}>
        <Meta site={siteMetadata} title="Rome + Zion Engagement Photo Shoot - Philadelphia Magic Gardens" />
        <div className="container rome-and-zion-wrapper">
          <div className="row">
            <div className="col">
              <h1>Rome + Zion // Engagement Photo Shoot</h1>
              <p className="sub-text">Philadelphia Magic Gardens - April 12, 2019</p>
              <Img className="header-image" fluid={cover.responsive.fluid} />
            </div>
          </div>
          <div className="row">
            <div className="col main-content">
              <p>
                Romhay & Zion were so amazing to shoot! Their excitement for their new journey together made my job easy!
                Even a place as visually "busy" as The Philadelphia Magic Gardens can work wonderfully if done right!
                The Gardens became a colorful, vibrant, & imaginative backdrop that perfectly suited these two.
              </p>
              <p>Congrats to this gorgeous couple! It was an honor to capture this moment for you!</p>
              <p>~ Brian</p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 justify-content-center">
              <Gallery photos={_renderGallery()} columns={3} direction="column"/>
            </div>
          </div>
        </div>
      </Layout>
  )
};

export const query = graphql`
  query {
    romeandzion: allFile(
      filter: {
        extension: { regex: "/(jpeg|jpg|gif|png)/" }
        dir: { regex: "/pages/romeandzion/" }
        sourceInstanceName: { eq: "images" }
      },
      sort: { fields: [name], order: ASC}
    ) {
      images: edges { 
        img: node {
          responsive: childImageSharp {
            fixed(width: 800, quality: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
    cover: file(relativePath: { eq: "pages/romeandzion/cover.jpg"}) {
      responsive: childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default RomeAndZion
