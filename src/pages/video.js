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
import siteImg from '../../content/images/video/site.jpg'


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
          <Meta site={siteMetadata} title="Videography" image={siteImg}/>
          <div className="video-wrapper inverse-text aos-init aos-animate" data-aos="fade">
            <div className="video-wrapper-inner">
              <video preload="metadata" playsInline={true} autoPlay={true} muted={true} loop={true}>
                <source src={windowWidth < 768 ? videoMobile : video} type="video/mp4"/>
              </video>
              <div className="content-overlay">
                <div className="container text-center">
                  <span className="heading mb-0 header-text">Videography</span>
                </div>
              </div>
            </div>
          </div>
          <div className="container inner main-wrapper">
            <p>Small events to full production commercials and everything in between. <br/> We've got you covered with amazing, professional video content.</p>
            <div className="row">
              <div className="col align-self-center">
                <Plyr className="styled-shoot" type="vimeo" videoId="331809951"/>
              </div>
            </div>
            <div className="row">
              <div className="col align-self-center">
                <Plyr className="proposal" type="vimeo" videoId="331423258"/>
              </div>
            </div>
            <div className="row">
              <div className="col align-self-center">
                <Plyr className="roots" type="youtube" videoId="7bbq9aP1DSo"/>
              </div>
            </div>
            <p>We recently collaborated with The Recording Academy (Grammys) for their coverage of The Roots Festival. We shot all of the b-roll in this segment.</p>
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