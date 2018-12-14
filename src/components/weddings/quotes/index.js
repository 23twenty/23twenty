import React from 'react'
import Swiper from 'react-id-swiper'

import BgImage from './bg11.jpg'

const quotes = () => {
  const options = {
    slidesPerView: 1,
    spaceBetween: 0,
    autoHeight: true,
    grabCursor: true,
    pagination: {
      el: '.basic-slider-pagination-0',
      clickable: true,
    },
  }
  return (
    <div
      class="wrapper image-wrapper bg-image inverse-text"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <div class="container inner pt-120 pb-120">
        <div class="row">
          <div class="col-lg-8 offset-lg-2">
            <div class="swiper-container-wrapper basic-slider">
              <div class="swiper-container text-center">
                <Swiper {...options}>
                  {/* <div class="swiper-wrapper"> */}
                  <div class="swiper-slide">
                    <blockquote class="icon icon-top larger">
                      <p>
                        Consectetur adipiscing elit. Duis mollis, est non
                        commodo luctus gestas eget quam integer. Curabitur
                        blandit tempus rutrum faucibus.
                      </p>
                      <footer class="blockquote-footer">Connor Gibson</footer>
                    </blockquote>
                  </div>
                  <div class="swiper-slide">
                    <blockquote class="icon icon-top larger">
                      <p>
                        Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                        dolor auctor. Vestibulum id ligula porta felis euismod
                        semper. Cras justo odio.
                      </p>
                      <footer class="blockquote-footer">Coriss Ambady</footer>
                    </blockquote>
                  </div>
                  <div class="swiper-slide">
                    <blockquote class="icon icon-top larger">
                      <p>
                        Duis mollis, est non commodo luctus, nisi erat porttitor
                        ligula, eget lacinia odio sem nec elit. Cras justo odio,
                        dapibus ac facilisis.
                      </p>
                      <footer class="blockquote-footer">
                        Barclay Widerski
                      </footer>
                    </blockquote>
                  </div>
                  {/* </div> */}
                </Swiper>
              </div>

              <div class="swiper-pagination gap-small" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default quotes
