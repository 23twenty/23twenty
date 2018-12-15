import React from 'react'
import Skills from './skills'
import ImageWrapper from 'components/shared/ImageWrapper'

const Behind = () => (
  <div className="wrapper gray-wrapper">
    <div className="container inner">
      <h2 className="section-title section-title-upper mb-40 text-center">
        Who is Behind All This?
      </h2>
      <div className="row">
        <div className="col-lg-6 text-md-center">
          <figure>
            <ImageWrapper src="pages/weddings/behind/behind-all-this.jpg" />
          </figure>
        </div>
        <div className="space30 d-block d-lg-none d-xl-none" />
        <div className="col-lg-6">
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Aenean lacinia bibendum nulla sed consectetur. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed
            consectetur. Curabitur blandit tempus porttitor. Vestibulum id
            ligula.
          </p>
          <blockquote className="bordered">
            <p>
              Sed posuere consectetur est at lobortis. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Duis mollis, est non commodo
              luctus, nisi erat porttitor ligula lacinia odio sem nec elit.
            </p>
            <footer className="blockquote-footer">Connor Gibson</footer>
          </blockquote>
          <p>
            Curabitur blandit tempus porttitor. Nulla vitae elit libero, a
            pharetra augue. Donec sed odio dui. Praesent commodo cursus magna,
            vel scelerisque nisl consectetur et. Nullam id dolor id nibh
            ultricies.
          </p>
          <ul className="social social-color social-s mb-15">
            <li>
              <a href="#">
                <i className="fa fa-twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-facebook" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-flickr" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-instagram" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-pinterest-p" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="space70" />
      <div className="row">
        <div className="col-md-4">
          <h5>What is Our Process?</h5>
          <p>
            Duis mollis, est non commodo luctus, nisi porttitor ligula, eget
            lacinia odio sem nec elit. Aenean eu leo quam. Pellentesque ornare
            sem.
          </p>
          <ol>
            <li>Vivamus sagittis lacus vel augue laoreet.</li>
            <li>Cras mattis consectetur purus sit amet.</li>
            <li>Vestibulum id ligula porta felis euismod.</li>
            <li>Nulla vitae elit libero, a pharetra augue.</li>
          </ol>
        </div>
        <div className="col-md-4">
          <h5>Why Choose Us?</h5>
          <p>
            Vestibulum id ligula porta felis euismod semper. Cras mattis
            consectetur purus sit amet fermentum. Donec ullamcorper nulla non
            metus.
          </p>
          <ul className="unordered-list list-default">
            <li>Donec ullamcorper nulla non metus auctor.</li>
            <li>Cras justo odio, dapibus ac facilisis.</li>
            <li>Praesent commodo cursus magna.</li>
            <li>Curabitur blandit tempus porttitor.</li>
          </ul>
        </div>
        <Skills />
      </div>
      <div className="space10" />
      <div className="text-center">
        <a href="#" className="btn btn-full-rounded">
          Hire Us
        </a>
      </div>
    </div>
  </div>
)

export default Behind
