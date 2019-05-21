import React from 'react';
import Meta from '../components/shared/Meta'
import Layout from '../components/shared/Layout'
import ParallaxContainer from "../components/ParalaxContainer";
import bgImg from "../../content/images/pages/home/background.jpg";
import {siteMetadata} from "../../gatsby-config";
import Img from "gatsby-image";
import {graphql} from "gatsby";
import '../scss/about.scss';

const About = ({location, data}) => {
  const myImg = data.me.images[0].img.childImageSharp.fluid;
  return (
      <Layout location={location} >
        <Meta site={siteMetadata} title="About" />
        <ParallaxContainer caption="Behind The Lens" imgUrl={bgImg} className='about-us-image'/>
        <div className="about-wrapper gray-wrapper">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-9 d-flex justify-content-center">
                <Img className="my-portrait" fluid={myImg}/>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-9">
                <p className="intro-content">Hey! My name is Brian Kilpatrick. I started 23Twenty Media out of an insatiable
                  appetite for high quality imagery. Creatively & beautifully capturing once in a lifetime moments, ideas, & brands is my passion. I'd love to work with you to create something great!
                  I'm also a husband, father, software developer, musician, & die-hard Philadelphia Eagles fan.
                  Shoot me an email and lets talk! <a href="mailto:brian@23twenty.com">brian@23twenty.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
  )
};

export const query = graphql`
  query  {
    me: allFile(
      filter: {
        extension: { regex: "/(jpeg|jpg|gif|png)/" }
        dir: { regex: "/pages/home/me/" }
        sourceInstanceName: { eq: "images" }
      },
      sort: { fields: [name], order: ASC}
      ) {
      images: edges {
        img: node {
          childImageSharp {
            fluid(maxWidth: 2000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

export default About;