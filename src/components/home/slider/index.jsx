import React, { Component } from 'react'
import Slider from 'react-slick'
import ImageWrapper from 'components/shared/ImageWrapper'
import Img from 'gatsby-image'
import './styles.scss'

class ClientsSlider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nav1: null,
      nav2: null,
    }
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    })
  }
  render() {
    const { images } = this.props
    const settings = {
      arrows: true,
      infinite: true,
      autoplay: false,
      draggable: true,
      focusOnSelect: false,
      speed: 700,
      autoplaySpeed: 4000,
      centerMode: true,
      centerPadding: '0px',
      slidesToShow: 1,
      fade: false,
      cssEase: 'ease',
    }
    const AllSliders = images.map(item => {
      const url = `url("${item.node.childImageSharp.sizes.src}")`
      return (
        <div className="item">
          <div
            className="slide-img-bg"
            style={{
              backgroundImage: url,
            }}
          />
        </div>
      )
    })

    const AllSlidersTumb = images.map(item => {
      const sizes = item.node.childImageSharp.sizes
      return (
        <div className="item">
          <Img fluid={sizes} backgroundColor="rgb(61,68,75)" />
        </div>
      )
    })

    return (
      <div className="slider-container">
        <Slider
          {...settings}
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
        >
          {AllSliders}
        </Slider>
        <Slider
          cssEase="ease"
          centerPadding="0px"
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={AllSliders.length}
          arrows={false}
          swipeToSlide={true}
          focusOnSelect={true}
          className="slick-thumb"
        >
          {AllSlidersTumb}
        </Slider>
      </div>
    )
  }
}

export default ClientsSlider
