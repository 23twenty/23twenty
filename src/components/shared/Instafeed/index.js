import React, { Component } from 'react'
import Instafeed from 'react-instafeed'

import './styles.scss'

class InstagramFeed extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="wrapper gray-wrapper">
        <div className="container inner">
          <h2 className="section-title text-center">Instagram Feed</h2>
          <p className="lead text-center">
            Here you will find the latest shots from our Instagram feed.
          </p>
          <div className="space20" />
          <div className="tiles tiles-s">
            <div id="instafeed" className="items row">
              <Instafeed
                userId="1215763826"
                limit="6"
                ref="instafeed"
                resolution="low_resolution"
                sortBy="most-recent"
                target="instafeed"
                template={`<div class="item col-6 col-sm-4 col-md-2"><figure className="overlay overlay3"><a href="{{link}}" target="_blank"><span className="bg"></span><img src="{{image}}" /><figcaption className="d-flex"><div className="align-self-center mx-auto"><i className="fa fa-instagram"></i></div></figcaption></figure></div>`}
                accessToken="1215763826.f1627ea.512d3a9b334a4c91ac2e83d4f4d9b291"
              />
            </div>
          </div>
          <div className="space40" />
          <div className="text-center">
            <a href="#" className="btn btn-full-rounded">
              Instagram Page
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default InstagramFeed
