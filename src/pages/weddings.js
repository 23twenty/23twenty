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
            <div className="content container">
              <div className="row">
                <div className="col">
                  <div className="slider-wrapper">
                    <ReactSlick children={this._getSlides()}
                                pauseOnHover={false}
                                className="home-slider"
                                autoplay={true}
                                infinite={true}/>
                  </div>
                </div>
              </div>
              <div className="text-content row">
                <div className="col">
                  <div className="header-text">
                     Vibrant. <br/>Alive. <br/>Modern. <br/>Timeless. <br/> Your love captured perfectly.
                  </div>
                  <br/>
                  <p>
                    Your once in a lifetime moment should be captured in that very same way. We are 23Twenty, a photography
                    & cinematography studio. Our style is bold, vibraant, authentic, & modern. Our mission is to provide you with a
                    unique visual legacy of love, joy & emotion that will last lifetimes. Your <b><i>story</i></b> deserves to be artfully
                    preserved & we'd be honored to help you tell it! We also know wedding planning can be stressful, so we aim to make this process as painless as possible.
                    We will work with you or your team to make sure your day and memories are captured in an optimal fashion.
                  </p>
                  <div className="portfolio-wrapper">
                    <div id="cube-grid" className="cbp light-gallery">
                      {this._renderGallery()}
                    </div>
                  </div>
                  <p><b>Pricing:</b></p>
                  <p><i>We know every wedding is unique, with unique needs. Please contact us at <a href="mailto:brian@23twenty.com">brian@23twenty.com</a></i> to discuss your special day</p>
                  <p><b>
                    Individual (Photography or Video) wedding packages start at $2,000 - includes 2 shooters, 6 hours of coverage, and all high resolution digital images.
                  </b></p>
                  <p><b>
                    Photography & Video packages start at $3,000.
                  </b></p>
                  <p><b>Fully designed wedding albums and fine art wall prints are also available as package add ons.</b></p>
                </div>
              </div>
            </div>
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