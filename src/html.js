import React from "react";
import "scss/main.scss";
export default class HTML extends React.Component {
  render() {
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {this.props.headComponents}
          <link href="/img/favicon.ico" rel="icon" type="image/x-icon" />
          <link href="styles/plugins.css" rel="stylesheet" type="text/css"/>
        </head>
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
          <script src="js/jquery.min.js"></script>
          <script src="js/plugins.js"></script>
        </body>
      </html>
    );
  }
}
