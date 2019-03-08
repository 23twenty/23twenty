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

import '../lib/morphext.css';
import '../lib/morphtext';
import 'animate.css/animate.css';
import ParallaxContainer from "../components/ParalaxContainer";
import bgImg from '../../content/images/pages/home/background.jpg';

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
    const photoImg = data.photo.images[0].img.childImageSharp.fluid;
    const videoImg = data.video.images[0].img.childImageSharp.fluid;
    const myImg = data.me.images[0].img.childImageSharp.fluid;
    return (
        <Layout location={location} isHome={true}>
          <Meta site={siteMetadata} title="" />
          <Slider images={data} />
          <div className="container home-wrapper">
            <h2 className="intro-heading">We capture your <span className="rotating">Moment, Brand, Beauty, Energy, Message, Love, Passion</span></h2>
            <div className="row">
              <div className="col-md-6">
                <MainLink image={photoImg} linkTo="/photo" caption="Photography"/>
              </div>
              <div className="col-md-6">
                <MainLink image={videoImg} linkTo="/video" caption="Videography"/>
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
    sliderImg: allFile(
      filter: {
        extension: { regex: "/(jpeg|jpg|gif|png)/" }
        dir: { regex: "/pages/home/slider/mobile/" }
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
        dir: { regex: "/pages/home/slider/desktop/" }
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
    video: allFile(
      filter: {
        extension: { regex: "/(jpeg|jpg|gif|png)/" }
        dir: { regex: "/pages/home/video/" }
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
    photo: allFile(
      filter: {
        extension: { regex: "/(jpeg|jpg|gif|png)/" }
        dir: { regex: "/pages/home/photo/" }
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
