import React from 'react';
import Meta from '../components/shared/Meta'
import Layout from '../components/shared/Layout'
import { siteMetadata } from '../../gatsby-config'
import initVideoWrapper from '../components/videowrapper';
import '../scss/video.scss';
import Plyr from 'react-plyr';
import '../lib/plyr.css';
import video from '../../content/video-web.mp4';
import videoMobile from '../../content/video-web-mobile.mp4';
import '../lib/videowrapper';


class Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: 0
    }
  }

  componentDidMount() {
    initVideoWrapper();
    this.setState({windowWidth: window.innerWidth})
  }

  render() {
    const { location } = this.props;
    const { windowWidth } = this.state;
    return (
        <Layout location={location}>
          <Meta site={siteMetadata} title="Videography"/>
          <div className="video-wrapper inverse-text aos-init aos-animate" data-aos="fade">
            <div className="video-wrapper-inner">
              <video preload="metadata" playsInline={true} autoPlay={true} muted={true} loop={true}>
                <source src={windowWidth < 768 ? videoMobile : video} type="video/mp4"/>
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
                <Plyr className="give-back-video" type="youtube" videoId="9JC3t6FjuRY"/>
              </div>
            </div>
            <div className="row">
              <div className="col align-self-center">
                <Plyr className="concert-video" type="vimeo" videoId="317924561"/>
              </div>
            </div>
          </div>
        </Layout>
    );
  }
}

export default Video;