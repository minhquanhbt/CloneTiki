import React, { useState } from 'react';
import './Banner.scss';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const items = [
  {
    src:
      'https://salt.tikicdn.com/cache/w824/ts/banner/ae/bc/81/050df2760b744d607a375a22cdf4fe74.jpg',
  },
  {
    src:
      'https://salt.tikicdn.com/cache/w824/ts/banner/37/fc/62/3eebdc1dbd65b45564ed14130ab8fef3.png.jpg',
  },
  {
    src:
      'https://salt.tikicdn.com/cache/w824/ts/banner/a2/97/9a/f30031dd106756aac808d97de33b231e.png.jpg',
  },
  {
    src:
      'https://salt.tikicdn.com/cache/w824/ts/banner/37/fc/62/3eebdc1dbd65b45564ed14130ab8fef3.png.jpg',
  },
  {
    src:
      'https://salt.tikicdn.com/cache/w824/ts/banner/74/78/98/51e27d2c85f8e9df96a86c8b8793b2f7.png.jpg',
  },
  {
    src:
      'https://salt.tikicdn.com/cache/w824/ts/banner/36/31/73/587aa6295b7fb43648798ad3f55b7c98.png.jpg',
  },
];
const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  const slides = items.map(item => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });
  return (
    <div className="sale">
      <div class="row">
        <div class="col-lg-8 col-md-12">
          <div class="sale__left">
            <Carousel activeIndex={activeIndex} next={next} previous={previous}>
              <CarouselIndicators
                items={items}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
              />
              {slides}
              <CarouselControl
                direction="prev"
                directionText="Previous"
                onClickHandler={previous}
              />
              <CarouselControl
                direction="next"
                directionText="Next"
                onClickHandler={next}
              />
            </Carousel>
          </div>
        </div>
        <div className="col-lg-4 col-md-12">
            <div className="sale__right">
              <img src="https://salt.tikicdn.com/cache/w408/ts/banner/69/9a/36/dcff148edf2a3918a8ac974d4b75cb20.png.jpg" alt="sd" />
            </div>
          </div>
      </div>
    </div>
  );
};

export default Banner;
