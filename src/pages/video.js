import React from 'react';
import Meta from '../components/shared/Meta'
import Layout from '../components/shared/Layout'
import { siteMetadata } from '../../gatsby-config'
import initVideoWrapper from '../components/videowrapper';
import '../scss/video.scss';
import Plyr from 'react-plyr';

class Video extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    initVideoWrapper();
  }

  render() {
    const { location } = this.props;
    return (
        <Layout location={location}>
          <Meta site={siteMetadata} title="Videography"/>
          <div className="video-wrapper inverse-text aos-init aos-animate" data-aos="fade">
            <div className="video-wrapper-inner">
              <video preload="metadata" playsInline={true} autoPlay={true} muted={true} loop={true}>
                {/*TODO: replace video*/}
                <source src="img/video-web.mp4" type="video/mp4"/>
              </video>
              <div className="content-overlay">
                <div className="container text-center">
                  <h1 className="heading mb-0">Videography</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="container inner main-wrapper">
            <p>Small events to full production commercials and everything inbetween. <br/> We've got you covered with amazing, professional video content.</p>
            <div className="row">
              <div className="col align-self-center">
                <Plyr type="youtube" videoId="9JC3t6FjuRY"/>
              </div>
            </div>
            <div className="row">
              <div className="col align-self-center">
                <Plyr type="vimeo" videoId="317924561"/>
              </div>
            </div>
          </div>
        </Layout>
    );
  }
}

export default Video;