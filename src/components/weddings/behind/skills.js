import React, { Component } from 'react'
import ProgressBar from 'progressbar.js'

class Skills extends Component {
  componentDidMount() {
    var porgressBars = document.querySelectorAll('.progressbar')
    for (var i = 0; i < porgressBars.length; i++) {
      const dataValue = porgressBars[i].getAttribute('data-value')
      const progressBar = new ProgressBar.Line(porgressBars[i], {
        strokeWidth: 3,
        trailWidth: 3,
        duration: 3000,
        easing: 'easeInOut',
        text: {
          style: {
            color: 'inherit',
            position: 'absolute',
            right: '0',
            top: '-30px',
            padding: 0,
            margin: 0,
            transform: null,
          },
          autoStyleContainer: false,
        },
        step: function(state, line, attachment) {
          line.setText(Math.round(line.value() * 100) + ' %')
        },
      })

      progressBar.animate(dataValue / 100)
    }
  }
  render() {
    return (
      <div className="col-md-4">
        <h5>Our Skills</h5>
        <ul className="progress-list">
          <li>
            <p>Photoshop</p>
            <div
              className="progressbar line blue"
              ref="progressOne "
              data-value="90"
            />
          </li>
          <li>
            <p>Final Cut</p>
            <div className="progressbar line green" data-value="80" />
          </li>
          <li>
            <p>Studio Photography</p>
            <div className="progressbar line orange" data-value="85" />
          </li>
          <li>
            <p>Motion Video</p>
            <div className="progressbar line red" data-value="65" />
          </li>
        </ul>
      </div>
    )
  }
}

export default Skills
