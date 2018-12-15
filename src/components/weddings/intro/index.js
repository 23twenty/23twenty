import React, { Fragment } from 'react'

const Intro = () => (
  <Fragment>
    <div className="space70" />
    <p className="lead larger text-center">
      We are a photography studio specializing in wedding, jewelry, birthday and
      fashion photography,
      <br className="d-none d-xl-block" />
      based in New York. We love to turn ideas into beautiful things.
    </p>
    <div className="space20" />
    <div className="row text-center">
      <div className="col-md-6 col-lg-3">
        <div className="box box-border">
          <span className="icon icon-color color-default fs-48 mb-20">
            <i className="si-love_hearts" />
          </span>
          <h5>Wedding Photography</h5>
          <p>
            Nulla vitae elit libero elit non porta gravida eget metus cras
            egestas.
          </p>
        </div>
      </div>
      <div className="col-md-6 col-lg-3">
        <div className="box box-border">
          <span className="icon icon-color color-default fs-48 mb-20">
            <i className="si-gambling_diamond-2" />
          </span>
          <h5>Jewelry Photography</h5>
          <p>
            Nulla vitae elit libero elit non porta gravida eget metus cras
            egestas.
          </p>
        </div>
      </div>
      <div className="space30 d-none d-md-block d-lg-none" />
      <div className="col-md-6 col-lg-3">
        <div className="box box-border">
          <span className="icon icon-color color-default fs-48 mb-20">
            <i className="si-party_christmas-cake" />
          </span>
          <h5>Birthday Photography</h5>
          <p>
            Nulla vitae elit libero elit non porta gravida eget metus cras
            egestas.
          </p>
        </div>
      </div>
      <div className="col-md-6 col-lg-3">
        <div className="box box-border">
          <span className="icon icon-color color-default fs-48 mb-20">
            <i className="si-clothes_lady-bag-3" />
          </span>
          <h5>Fashion Photography</h5>
          <p>
            Nulla vitae elit libero elit non porta gravida eget metus cras
            egestas.
          </p>
        </div>
      </div>
    </div>
    <div className="space20" />
  </Fragment>
)

export default Intro
