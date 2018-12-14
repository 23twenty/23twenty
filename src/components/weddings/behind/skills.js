import React from 'react'

const Skills = () => {
  return (
    <div class="col-md-4">
      <h5>Our Skills</h5>
      <ul class="progress-list">
        <li>
          <p>Photoshop</p>
          <div class="progressbar line blue" data-value="90" />
        </li>
        <li>
          <p>Final Cut</p>
          <div class="progressbar line green" data-value="80" />
        </li>
        <li>
          <p>Studio Photography</p>
          <div class="progressbar line orange" data-value="85" />
        </li>
        <li>
          <p>Motion Video</p>
          <div class="progressbar line red" data-value="65" />
        </li>
      </ul>
    </div>
  )
}

export default Skills
