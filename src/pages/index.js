import React from 'react'
import { graphql } from 'gatsby'
import Meta from '../components/shared/Meta'
import Layout from '../components/shared/Layout'
import Slider from '../components/slider'
import InstagramFeed from '../components/shared/Instafeed'
import { siteMetadata } from '../../gatsby-config'
import Img from "gatsby-image";
import { Link } from "gatsby";
import '../scss/index.scss';

import '../morphext.css';
import 'animate.css/animate.css';
import ParallaxContainer from "../components/ParalaxContainer";

class Index extends React.Component {
  componentDidMount() {
    $('.rotating').Morphext({
      animation: 'flipInX',
      separator: ',',
      speed: 2000
    });
  }

  render() {
    const { data, location } = this.props;
    const sliderImages = data.sliderImages.images;
    return (
        <Layout location={location} transparentHeader isHome={true}>
          <Meta site={siteMetadata} title="Home" />
          <Slider images={sliderImages} />
          <div className="container home-wrapper">
            <h2 className="intro-heading">We capture your <span className="rotating">Moment, Brand, Beauty, Energy, Message, Love, Passion</span></h2>
            <div className="row">
              <div className="col-md-6">
                <MainLink image={sliderImages[1].img.childImageSharp.fluid} linkTo="/photo" caption="Photography"/>
              </div>
              <div className="col-md-6">
                <MainLink image={sliderImages[2].img.childImageSharp.fluid} linkTo="/video" caption="Videography"/>
              </div>
            </div>
          </div>
          <ParallaxContainer caption="Behind The Lens" imgUrl="img/background.jpg" className='about-us-image'/>
          <div className="about-wrapper gray-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 me-img">
                  <Img fluid={sliderImages[1].img.childImageSharp.fluid}/>
                </div>
                <div className="col">
                  <p>Hey! My name is Brian Kilpatrick. I have an insatiable appetite for high quality photography & video.
                    I'm also a husband, father, software developer, musician, & die-hard Philadelphia Eagles fan.
                    I'd love to work with you to create something great! Shoot me an email at <a href="mailto:brian@23twenty.com">brian@23twenty.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <InstagramFeed />
        </Layout>
    )
  }
}

export default Index

export const query = graphql`
  query AllImages {
    sliderImages: allFile(
      filter: {
        extension: { regex: "/(jpeg|jpg|gif|png)/" }
        dir: { regex: "/home-slider/" }
        sourceInstanceName: { eq: "images" }
      },
      sort: { fields: [name], order: ASC}
      ) {
      images: edges {
        img: node {
          relativePath
          childImageSharp {
            resize(width: 180, height: 180, quality: 100, cropFocus: ENTROPY) {
              src
            }
            fixed(height: 90, width: 150) {
              ...GatsbyImageSharpFixed
            }
            fluid(maxWidth: 2000, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`;

const MainLink = ({image, linkTo, caption}) => (
    <figure className="overlay overlay4">
      <Link to={linkTo}>
        <span className="bg"></span>
        <Img fluid={image} alt=""/>
      </Link>
      <figcaption className="d-flex">
        <div className="align-self-center mx-auto">
          <h1 className="mb-0">{caption}</h1>
        </div>
      </figcaption>
    </figure>
);
