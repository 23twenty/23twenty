import React from 'react'
import Meta from '../../components/shared/Meta'
import Layout from '../../components/shared/Layout'
import { siteMetadata } from '../../../gatsby-config'
import {graphql} from "gatsby";
import '../../scss/rome-and-zion.scss';
import Gallery from 'react-photo-gallery';
import Plyr from 'react-plyr';
import '../../lib/plyr.css';
import siteImg from '../../../content/images/romeandzion/philadelphia-engagement-photoshoot-magic-gardens-01.jpg'


const PhiladelphiaEngagementPhotoShootMagicGardens = ({data: { location, romeandzion: {images}}}) => {
  const _renderGallery = () => {
    return images.map(({img: {responsive: { fixed: { srcSet, width, height} }}}, i) => ({ srcSet, width, height }))
  };

  return (
      <Layout location={location}>
        <Meta site={siteMetadata} title="Rome + Zion Engagement Photo Shoot - Philadelphia Magic Gardens" image={siteImg}/>
        <div className="container rome-and-zion-wrapper">
          <div className="row">
            <div className="col">
              <h1 className="header-text">Rome + Zion // Philadelphia Engagement Photo Shoot</h1>
              <p className="sub-text">Philadelphia Magic Gardens - April 12, 2019</p>
              <Plyr className="proposal" type="vimeo" videoId="331423258"/>
            </div>
          </div>
          <div className="row">
            <div className="col main-content align-self-center">
              <p>
                Romhay & Zion were so amazing to shoot! Their excitement for their new journey together made my job easy!
                Even a place as visually "busy" as The Philadelphia Magic Gardens can work wonderfully if done right!
                The Gardens became a colorful, vibrant, & imaginative backdrop that perfectly suited these two.
              </p>
              <p>We also had the honor of capturing the proposal with video!</p>
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
        dir: { regex: "/romeandzion/" }
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
  }
`;

export default PhiladelphiaEngagementPhotoShootMagicGardens
