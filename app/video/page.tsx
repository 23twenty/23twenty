"use client";

import Plyr from "plyr-react"
import "plyr-react/plyr.css"
import Vimeo from '@u-wave/react-vimeo';
import ReactPlayer from "react-player";

// ------------------

const SingleGallery = () => {
  return (
    <main className="single single-gallery">
      <div id="content" className="site-content">
        <div className="gallery">
          {/* Title */}
          <h1 className="entry-title center-relative center-text">
            Video
          </h1>
          <div className="center-relative clear">
            <div className="entry-content">
              {/* Description text */}
              {/*<div className="content-750 center-relative">*/}
              {/*  <p>*/}
              {/*    Why end might ask civil again spoil. She dinner she our horses*/}
              {/*    depend. Remember at children by reserved to vicinity. In*/}
              {/*    affronting unreserved delightful simplicity ye. Law own*/}
              {/*    advantage furniture continual sweetness bed agreeable*/}
              {/*    perpetual.*/}
              {/*  </p>*/}
              {/*</div>*/}
              <div className="box-post-width content-1140 center-relative">
                {/* Gallery items images */}
                <div className="video-grid">
                  <iframe
                      src="https://player.vimeo.com/video/640905967?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                      title="Good Idea Bad Idea - 4K"></iframe>
                  <iframe
                      src="https://player.vimeo.com/video/606086234?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                      title="Inclub Magazine X Rodney McLeod - Defining Moments"></iframe>
                  <iframe
                      src="https://player.vimeo.com/video/747716082?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                      title="Resurgence Church"></iframe>
                  <iframe
                      src="https://player.vimeo.com/video/656439697?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                      title="The Plumes - FINAL"></iframe>
                  <iframe
                      src="https://player.vimeo.com/video/549772463?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                      title="Firestarter Sizzle"></iframe>
                </div>
              </div>
            </div>
            <div className="clear"></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SingleGallery;
