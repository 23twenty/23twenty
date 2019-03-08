import React, { Component } from 'react'
import Instafeed from 'react-instafeed'

import './styles.scss'

class InstagramFeed extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="gray-wrapper">
        <div className="container inner">
          <h2 className="section-title text-center">Instagram Feed</h2>
          <p className="lead text-center">
            Check out our latest shots
          </p>
          <div className="space20" />
          <div className="tiles tiles-s">
            <div id="instafeed" className="items row">
              <Instafeed
                  userId="9144106797"
                  limit="6"
                  ref="instafeed"
                  resolution="thumbnail"
                  sortBy="most-recent"
                  target="instafeed"
                  template={`<div class="item col-6 col-sm-4 col-md-2"><figure className="overlay overlay3"><a href="{{link}}" target="_blank"><span className="bg"></span><img src="{{image}}" /><figcaption className="d-flex"><div className="align-self-center mx-auto"><i className="fa fa-instagram"></i></div></figcaption></figure></div>`}
                  accessToken="9144106797.1677ed0.7472ecf190294ac29b14d7d3ea7e448e"
              />
            </div>
          </div>
          <div className="space40" />
          <div className="text-center">
            <a href="https://www.instagram.com/23twentymedia/" className="btn btn-full-rounded" target="_blank">
              Instagram Page
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default InstagramFeed
