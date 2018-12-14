import React, { Fragment } from 'react'

const Intro = () => (
  <Fragment>
    <div class="space70" />
    <p class="lead larger text-center">
      We are a photography studio specializing in wedding, jewelry, birthday and
      fashion photography,
      <br class="d-none d-xl-block" />
      based in New York. We love to turn ideas into beautiful things.
    </p>
    <div class="space20" />
    <div class="row text-center">
      <div class="col-md-6 col-lg-3">
        <div class="box box-border">
          <span class="icon icon-color color-default fs-48 mb-20">
            <i class="si-love_hearts" />
          </span>
          <h5>Wedding Photography</h5>
          <p>
            Nulla vitae elit libero elit non porta gravida eget metus cras
            egestas.
          </p>
        </div>
      </div>
      <div class="col-md-6 col-lg-3">
        <div class="box box-border">
          <span class="icon icon-color color-default fs-48 mb-20">
            <i class="si-gambling_diamond-2" />
          </span>
          <h5>Jewelry Photography</h5>
          <p>
            Nulla vitae elit libero elit non porta gravida eget metus cras
            egestas.
          </p>
        </div>
      </div>
      <div class="space30 d-none d-md-block d-lg-none" />
      <div class="col-md-6 col-lg-3">
        <div class="box box-border">
          <span class="icon icon-color color-default fs-48 mb-20">
            <i class="si-party_christmas-cake" />
          </span>
          <h5>Birthday Photography</h5>
          <p>
            Nulla vitae elit libero elit non porta gravida eget metus cras
            egestas.
          </p>
        </div>
      </div>
      <div class="col-md-6 col-lg-3">
        <div class="box box-border">
          <span class="icon icon-color color-default fs-48 mb-20">
            <i class="si-clothes_lady-bag-3" />
          </span>
          <h5>Fashion Photography</h5>
          <p>
            Nulla vitae elit libero elit non porta gravida eget metus cras
            egestas.
          </p>
        </div>
      </div>
    </div>
    <div class="space20" />
  </Fragment>
)

export default Intro
