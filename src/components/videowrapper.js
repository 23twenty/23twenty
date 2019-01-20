const initVideoWrapper = () => {
  /*-----------------------------------------------------------------------------------*/
  /*	VIDEO WRAPPER
  /*-----------------------------------------------------------------------------------*/
  $('.video-wrapper video').backgroundVideo({
    $videoWrap: $('.video-wrapper-inner'),
    $outerWrap: $('.video-wrapper'),
    pauseVideoOnViewLoss: false,
    parallaxOptions: {
      effect: 3
    }
  });
};

export default initVideoWrapper;