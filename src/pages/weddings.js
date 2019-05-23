import React from 'react'
import '../components/slider.scss';
import Meta from 'components/shared/Meta'
import Layout from 'components/shared/Layout'
import { siteMetadata } from '../../gatsby-config'
import ParallaxContainer from "../components/ParalaxContainer";
import Img from 'gatsby-image';
import {graphql} from "gatsby";
import '../scss/weddings.scss';
import bgImg from '../../content/images/pages/weddings/1.jpg';
import ReactSlick from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Weddings = ({ location, data }) => {
  const { images } = data.sliderImages;

  const slides = images.map((data, i) => {
    const img = data.img.responsive;
    return (
        <Img className="wedding-slider-img" fluid={img.fluid}/>
    )
  });
  return (
      <Layout location={location}>
        <Meta site={siteMetadata} title="Weddings" />
        <ParallaxContainer caption="Weddings" imgUrl={bgImg} className='wedding-image'/>
        <div className="wedding-wrapper">
          <div className="content container">
            <div className="row">
              <div className="col">
                <div className="slider-wrapper">
                  <ReactSlick children={slides}
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
                  Your love. <br/>Vibrant. <br/>Alive. <br/>Modern. <br/>Timeless.
                </div>
                <br/>
                <p>
                  We at 23Twenty Media strive to capture your once in a lifetime moment in that very
                    same way. We are not people with "good cameras". As tried & true imaging professionals, provide a
                  unique visual legacy of emotion, love, & laughter. Photography & Video are truly one of the few
                  investments of your wedding day that will last generations. We'd be honored to tell your story! We also
                  know wedding planning can be stressful, so we aim to make this process as painless as possible.
                  We will work with you or your team to make sure your day and memories are captured in an optimal fashion.
                </p>
                <p><b>Pricing:</b></p>
                <p><i>We know every wedding is unique, with unique needs. Please contact us at <a href="mailto:brian@23twenty.com">brian@23twenty.com</a></i> to discuss your special day</p>
                <p><b>
                  Individual (Photography or Video) wedding packages start at $2,000 - includes 2 shooters, 8 hours of coverage, and all high resolution digital images.
                </b></p>
                <p><b>
                  Photography & Video packages start at $3,000
                </b></p>
                <p><b>Fully designed wedding albums and fine art wall prints are available for an additional cost</b></p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
  )
};


export const query = graphql`
  query Weddings {
    sliderImages: allFile(
      filter: {
        extension: { regex: "/(jpeg|jpg|gif|png)/" }
        dir: { regex: "/pages/weddings/slider/" }
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
          }
        }
      }
    }
  }   
`;

export default Weddings