import React from 'react'

const Intro = () => (
  <div className="wrapper light-wrapper">
    <div className="container inner">
      <div className="row gutter-60 gutter-md-30">
        <div className="col-md-6">
          <h2 className="sub-heading text-center text-md-right">
            I'm a photographer based in New York. I take photographs with
            creativity, concept and passion.
          </h2>
        </div>
        <div className="col-md-6">
          <p className="lead text-center text-md-left">
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
            venenatis vestibulum. Morbi leo risus, porta ac consectetur ac,
            vestibulum at eros.
          </p>
        </div>
      </div>
      <div className="space40" />
      <div className="row gutter-50 process-wrapper line text-center">
        <div className="col-md-3">
          <span className="icon icon-bg bg-default mb-20">
            <span className="number">01</span>
          </span>
          <h5>Concept</h5>
          <p>Nulla vitae elit libero elit non porta gravida eget metus cras.</p>
        </div>
        <div className="col-md-3">
          <span className="icon icon-bg bg-default mb-20">
            <span className="number">02</span>
          </span>
          <h5>Prepare</h5>
          <p>Nulla vitae elit libero elit non porta gravida eget metus cras.</p>
        </div>
        <div className="space20 d-md-none clearfix" />
        <div className="col-md-3">
          <span className="icon icon-bg bg-default mb-20">
            <span className="number">03</span>
          </span>
          <h5>Retouch</h5>
          <p>Nulla vitae elit libero elit non porta gravida eget metus cras.</p>
        </div>
        <div className="col-md-3">
          <span className="icon icon-bg bg-default mb-20">
            <span className="number">04</span>
          </span>
          <h5>Finalize</h5>
          <p>Nulla vitae elit libero elit non porta gravida eget metus cras.</p>
        </div>
      </div>
    </div>
  </div>
)

export default Intro
