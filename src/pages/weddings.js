import React from 'react'

import Meta from 'components/shared/Meta'
import Layout from 'components/shared/Layout'
import { siteMetadata } from '../../gatsby-config'
import ParallaxContainer from "../components/ParalaxContainer";
import Img from 'gatsby-image';
import {graphql} from "gatsby";
import '../scss/weddings.scss';

const Weddings = ({ location, data }) => {
  const { images } = data.allFile;
  return (
    <Layout location={location}>
      <Meta site={siteMetadata} title="Investment" />
      <ParallaxContainer caption="Weddings" imgUrl="img/background.jpg" className='wedding-image'/>
      <div className="container-fluid wedding-wrapper">
        <div className="row">
          <div className="col-md-6"><Img fixed={images[2].img.responsive.fixed}/></div>
          <div className="col-md-6">There</div>
        </div>
      </div>
    </Layout>
  )
};


export const query = graphql`
  query Weddings {
    allFile(
      filter: {
        extension: { regex: "/(jpeg|jpg|gif|png)/" }
        dir: { regex: "/pages/home/" }
      },
      sort: { fields: [name], order: ASC}
      ){
        images: edges {
          img: node {
            relativePath
            responsive: childImageSharp {
              resize(height: 480, quality: 100) {
                src
              }
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
              fixed(width: 800, quality: 100) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
  }
`;

export default Weddings
