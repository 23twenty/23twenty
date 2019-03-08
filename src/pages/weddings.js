import React from 'react'

import Meta from 'components/shared/Meta'
import Layout from 'components/shared/Layout'
import { siteMetadata } from '../../gatsby-config'
import ParallaxContainer from "../components/ParalaxContainer";
import Img from 'gatsby-image';
import {graphql} from "gatsby";
import '../scss/weddings.scss';
import bgImg from '../../content/images/pages/weddings/behind/Dress.jpg';

const Weddings = ({ location, data }) => {
  const { images } = data.weddings;
  return (
      <Layout location={location}>
        <Meta site={siteMetadata} title="Weddings" />
        <ParallaxContainer caption="Weddings" imgUrl={bgImg} className='wedding-image'/>
        <div className="wedding-wrapper">
          <div className="content">
            <div className="coming-soon-text">
              <h1>Hang Tight!</h1>
              <hr/>
              <span>Information Coming Soon!</span>
            </div>
            <Img className="bridal-img" fluid={images[0].img.responsive.fluid}/>
          </div>
        </div>
      </Layout>
  )
};


export const query = graphql`
  query Weddings {
    weddings: allFile(
      filter: {
        extension: { regex: "/(jpeg|jpg|gif|png)/" }
        dir: { regex: "/pages/weddings/general/" }
        sourceInstanceName: { eq: "images" }
      },
      sort: { fields: [name], order: ASC}
      ) {
      images: edges {
        img: node {
          responsive: childImageSharp {
            fluid(maxWidth: 800, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

export default Weddings