import React from 'react'
import { graphql } from 'gatsby'
import Meta from '../components/shared/Meta'
import Layout from '../components/shared/Layout'
import SliderView from '../components/SliderView'
import InstagramFeed from '../components/shared/Instafeed'
import { siteMetadata } from '../../gatsby-config'
import Img from "gatsby-image";
import { Link } from "gatsby";
import '../scss/index.scss';
import '../lib/morphext.css';
import '../lib/morphtext';
import 'animate.css/animate.css';

class Index extends React.Component {
  componentDidMount() {
    $('.rotating').Morphext({
      animation: 'fadeIn',
      separator: ',',
      speed: 2000
    });
  }

  render() {
    const { data, location } = this.props;
    const photoImg = data.photo.img.fluid;
    const videoImg = data.video.img.fluid;
    const weddingImg = data.wedding.img.fluid;
    const blogImg = data.rome.img.fluid;
    return (
        <Layout location={location} isHome={true}>
          <Meta site={siteMetadata} title="" />
          <SliderView images={data} />
          <div className="container home-wrapper">
            <h2 className="intro-heading">We capture your <span className="rotating">Moment, Brand, Beauty, Energy, Message, Love, Passion</span></h2>
            <p>
              <span className="title">Hey! </span>
              We are 23Twenty Media, a photography & cinematography studio. We are based out of Philadelphia, PA but can travel world-wide
              to create something great! Take a look around and lets talk soon!
            </p>
          </div>
          <div className="container grey-wrapper portfolio">
            <div className="row">
              <div className="col">
                <div className="align-center header-text">Portfolio</div>
              </div>
            </div>
            <div className="row portfolio-links">
              <div className="col-md-4">
                <MainLink image={photoImg} linkTo="/photo" caption="Photography"/>
              </div>
              <div className="col-md-4">
                <MainLink image={videoImg} linkTo="/video" caption="Videography"/>
              </div>
              <div className="col-md-4">
                <MainLink image={weddingImg} linkTo="/weddings" caption="Weddings"/>
              </div>
            </div>
          </div>
          {/*<div className="container">*/}
            {/*<div className="row">*/}
              {/*<div className="col-sm-6">*/}
                {/*<span className="header-text">Featured Blog Posts</span>*/}
                {/*<MainLink image={blogImg}*/}
                          {/*linkTo="/engagements/philadelphia-engagement-photo-shoot-magic-gardens" caption="Rome + Zion"/>*/}
                {/*<p>Philadelphia Magic Gardens Engagement Session - April 11th, 2019</p>*/}
              {/*</div>*/}
            {/*</div>*/}
          {/*</div>*/}
          <InstagramFeed />
        </Layout>
    )
  }
}

export default Index

export const query = graphql`
  query AllImages {
    sliderImg: allFile(
      filter: {
        extension: { regex: "/(jpeg|jpg|gif|png)/" }
        dir: { regex: "/home/slider/mobile/" }
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
    sliderImgWide: allFile(
      filter: {
        extension: { regex: "/(jpeg|jpg|gif|png)/" }
        dir: { regex: "/home/slider/desktop/" }
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
    video: file(relativePath: {eq: "home/videopreview.jpg"}) {
      img: childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    photo: file(relativePath: {eq: "home/photopreview.jpg"}) {
      img: childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    wedding: file(relativePath: {eq: "home/wedding.jpg"}) {
      img: childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    rome: file(relativePath: {eq: "home/rome.jpg"}) {
      img: childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid
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
          <span className="header-text mb-0">{caption}</span>
        </div>
      </figcaption>
    </figure>
);
