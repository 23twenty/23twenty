import React, { Component } from 'react'
import Slider from 'react-slick'
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
      responsive: [
        {
          breakpoint: 920,
          settings: {
            arrows: false,
          },
        },
      ],
    }
    const AllSliders = images.map(item => {
      const url = `url("${item.node.childImageSharp.fluid.src}")`
      return (
        <div className="item align-middle " key={url}>
          <div
            className="slide-img-bg"
            style={{
              backgroundImage: url,
            }}
          >
            <h1 className="slider-hero-text puffIn">Jonathan Brailie</h1>
            <h2 className="slider-hero-subtitle">Fashion Photographer</h2>
          </div>
        </div>
      )
    })

    const AllSlidersTumb = images.map(item => {
      const sizes = item.node.childImageSharp.fluid
      return (
        <div className="item" key={sizes.src}>
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
          responsive={[
            {
              breakpoint: 920,
              settings: {
                slidesToShow: 5,
                arrows: false,
              },
            },
            {
              breakpoint: 720,
              settings: {
                slidesToShow: 4,
                arrows: false,
              },
            },
            {
              breakpoint: 540,
              settings: {
                slidesToShow: 3,
                arrows: false,
              },
            },
          ]}
        >
          {AllSlidersTumb}
        </Slider>
      </div>
    )
  }
}

export default ClientsSlider
