import React, { Component } from "react";
import Instafeed from "react-instafeed";

import "./styles.scss";

class InstagramFeed extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="wrapper gray-wrapper">
        <div class="container inner">
          <h2 class="section-title text-center">Instagram Feed</h2>
          <p class="lead text-center">
            Here you will find the latest shots from our Instagram feed.
          </p>
          <div class="space20" />
          <div class="tiles tiles-s">
            <div id="instafeed" class="items row">
              <Instafeed
                userId="1215763826"
                limit="6"
                ref="instafeed"
                resolution="low_resolution"
                sortBy="most-recent"
                target="instafeed"
                template={`<div class="item col-6 col-sm-4 col-md-2"><figure class="overlay overlay3"><a href="{{link}}" target="_blank"><span class="bg"></span><img src="{{image}}" /><figcaption class="d-flex"><div class="align-self-center mx-auto"><i class="fa fa-instagram"></i></div></figcaption></figure></div>`}
                accessToken="1215763826.f1627ea.512d3a9b334a4c91ac2e83d4f4d9b291"
              />
            </div>
          </div>
          <div class="space40" />
          <div class="text-center">
            <a href="#" class="btn btn-full-rounded">
              Instagram Page
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default InstagramFeed;
