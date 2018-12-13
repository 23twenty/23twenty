import React from "react";

const Intro = () => (
  <div class="wrapper light-wrapper">
    <div class="container inner">
      <div class="row gutter-60 gutter-md-30">
        <div class="col-md-6">
          <h2 class="sub-heading text-center text-md-right">
            I'm a photographer based in New York. I take photographs with
            creativity, concept and passion.
          </h2>
        </div>
        <div class="col-md-6">
          <p class="lead text-center text-md-left">
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
            venenatis vestibulum. Morbi leo risus, porta ac consectetur ac,
            vestibulum at eros.
          </p>
        </div>
      </div>
      <div class="space40" />
      <div class="row gutter-50 process-wrapper line text-center">
        <div class="col-md-3">
          <span class="icon icon-bg bg-default mb-20">
            <span class="number">01</span>
          </span>
          <h5>Concept</h5>
          <p>Nulla vitae elit libero elit non porta gravida eget metus cras.</p>
        </div>
        <div class="col-md-3">
          <span class="icon icon-bg bg-default mb-20">
            <span class="number">02</span>
          </span>
          <h5>Prepare</h5>
          <p>Nulla vitae elit libero elit non porta gravida eget metus cras.</p>
        </div>
        <div class="space20 d-md-none clearfix" />
        <div class="col-md-3">
          <span class="icon icon-bg bg-default mb-20">
            <span class="number">03</span>
          </span>
          <h5>Retouch</h5>
          <p>Nulla vitae elit libero elit non porta gravida eget metus cras.</p>
        </div>
        <div class="col-md-3">
          <span class="icon icon-bg bg-default mb-20">
            <span class="number">04</span>
          </span>
          <h5>Finalize</h5>
          <p>Nulla vitae elit libero elit non porta gravida eget metus cras.</p>
        </div>
      </div>
    </div>
  </div>
);

export default Intro;
