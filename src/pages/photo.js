import React from 'react'
import { graphql } from 'gatsby';
import Meta from '../components/shared/Meta'
import Layout from '../components/shared/Layout'
import { siteMetadata } from '../../gatsby-config'
import '../scss/photos.scss';

import ParallaxContainer from '../components/ParalaxContainer';
import '../lib/cubeportfolio';
import'../lib/cubeportfolio.css';
import '../lib/lightgallery.js';
import 'lightgallery.js/dist/css/lightgallery.css';
import initCubeGallery from "../components/cubegallery";
import bgImg from '../../content/images/pages/home/background.jpg';

class Photo extends React.Component {
  constructor(props) {
    super(props);
  }

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
    const { images } = this.props.data.allFile;
    return images.map(({img}, i) => <CubeGridImage key={Math.random() * i} img={img}/>)
  };

  render() {
    const { location } = this.props;
    return (
        <Layout location={location}>
          <Meta site={siteMetadata} title="Photography" />
          <div className="photos-wrapper">
            {/*Title*/}
            <ParallaxContainer caption="Photography" imgUrl={bgImg} className='photos-image'/>
            {/*Content*/}
            <div className="intro noLink">
              <h1 className="intro-title">What we love to shoot</h1>
              <div className="cbp-filter-item">Portraits</div>
              <div className="cbp-filter-item">Weddings/Engagement</div>
              <div className="cbp-filter-item">Events/Concerts</div>
              <div className="cbp-filter-item">Business/Branding</div>
              <div className="cbp-filter-item">Product</div>
              <div className="cbp-filter-item">Food</div>
              <div className="cbp-filter-item">Editorial</div>
            </div>
            <div className="portfolio-wrapper">
              <div id="cube-grid" className="cbp light-gallery">
                {this._renderGallery()}
              </div>
            </div>
          </div>
        </Layout>
    )
  }
}

export default Photo;

export const query = graphql`
  query PhotoPage {
    allFile(
      filter: {
        extension: { regex: "/(jpeg|jpg|gif|png)/" }
        dir: { regex: "/pages/photo/" }
      },
      sort: { fields: [name], order: ASC}
      ){
        images: edges {
          img: node {
            name
            responsive: childImageSharp {
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

const CubeGridImage = ({img: { responsive: { resize, fixed}}}) => (
    <div className="cbp-item">
      <figure className="overlay overlay2">
        <a data-srcset={fixed.srcSet} data-src={fixed.src}>
          <span className="bg"></span>
          <img src={resize.src} alt=""/>
        </a>
      </figure>
    </div>
);
