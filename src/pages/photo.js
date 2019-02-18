import React from 'react'
import { graphql } from 'gatsby';
import Meta from '../components/shared/Meta'
import Layout from '../components/shared/Layout'
import { siteMetadata } from '../../gatsby-config'
import '../scss/photos.scss';
import initCubeGallery from "../components/cubegallery";
import ParallaxContainer from '../components/ParalaxContainer';

class Photo extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    initCubeGallery();
  }

  _renderGallery = () => {
    const { images } = this.props.data.allFile;
    return images.map(({img}) => <CubeGridImage img={img}/>)
  };

  render() {
    const { location } = this.props;
    return (
        <Layout location={location}>
          <Meta site={siteMetadata} title="Photography" />
          <div className="photos-wrapper">
            {/*Title*/}
            <ParallaxContainer caption="Photography" imgUrl="img/background.jpg" className='about-us-image'/>
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
            responsive: childImageSharp {
              resize(height: 480, quality: 100) {
                src
              }
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
              fixed(quality: 100) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
  }
`;

const CubeGridImage = ({img: { responsive: { fluid, resize}}}) => (
    <div className="cbp-item">
      <figure className="overlay overlay2">
        <a data-sizes={fluid.sizes} data-srcset={fluid.srcSet} data-src={fluid.src}>
          <span className="bg"></span>
          <img src={resize.src} alt=""/>
        </a>
      </figure>
    </div>
);
