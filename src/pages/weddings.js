import React from 'react'
import '../components/slider.scss';
import Meta from 'components/shared/Meta'
import Layout from 'components/shared/Layout'
import { siteMetadata } from '../../gatsby-config'
import ParallaxContainer from "../components/ParalaxContainer";
import Img from 'gatsby-image';
import {graphql} from "gatsby";
import '../scss/weddings.scss';
import bgImg from '../../content/images/weddings/1.jpg';
import siteImg from '../../content/images/weddings/site.jpg';
import ReactSlick from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CubeGridImage from "../components/CubeGridImage";
import '../lib/cubeportfolio';
import'../lib/cubeportfolio.css';
import '../lib/lightgallery.js';
import 'lightgallery.js/dist/css/lightgallery.css';
import initCubeGallery from "../components/cubegallery";
import WeddingLogo from '../components/weddings/weddingLogo';

class Weddings extends React.Component {

  componentDidMount() {
    lightGallery(document.getElementById('cube-grid'), {
      thumbnail: false,
      selector: 'a',
      mode: 'lg-fade',
      download: false,
      autoplayControls: false,
      zoom: false,
      fullScreen: false,
      videoMaxWidth: '1000px',
      loop: false,
      hash: true,
      mousewheel: true,
      videojs: true,
      share: false
    });
    initCubeGallery();
  }

  _renderGallery = () => {
    return this.props.data.gallery.images.map(({img}, i) => <CubeGridImage key={Math.random() * i} img={img}/>)
  };

  _getSlides = () => {
    return this.props.data.slides.images.slice(0,5).map((data, i) => {
      const img = data.img.responsive;
      return (
          <Img className="wedding-slider-img" fluid={img.fluid}/>
      )
    });
  };

  render() {
    const { location } = this.props;

    return (
        <Layout location={location}>
          <Meta site={siteMetadata} title="Weddings" image={siteImg}/>
          <ParallaxContainer caption="Weddings" imgUrl={bgImg} className='wedding-image'/>
          <div className="wedding-wrapper">
            <p className="header-text">Great News, we've rebranded! Please check out:</p>
            <a href="https://www.briankphoto.com">
              <WeddingLogo/>
            </a>
            <a href="https://www.briankphoto.com">www.briankphoto.com</a>
          </div>
        </Layout>
    )


  }



};


export const query = graphql`
  query Weddings {
    gallery: allFile(
      filter: {
        extension: { regex: "/(jpeg|jpg|gif|png)/" }
        dir: { regex: "/weddings/gallery/" }
        sourceInstanceName: { eq: "images" }
      },
      sort: { fields: [name], order: ASC}
      ) {
      images: edges {
        img: node {
          responsive: childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
            resize(height: 800, quality: 100) {
              src
            }
            fixed(width: 1920, quality: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
    slides: allFile(
      filter: {
        extension: { regex: "/(jpeg|jpg|gif|png)/" }
        dir: { regex: "/weddings/slider/" }
        sourceInstanceName: { eq: "images" }
      },
      sort: { fields: [name], order: ASC}
      ) {
      images: edges {
        img: node {
          responsive: childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
            resize(height: 800, quality: 100) {
              src
            }
            fixed(width: 1920, quality: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }   
`;

export default Weddings