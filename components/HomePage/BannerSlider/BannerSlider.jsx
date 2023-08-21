import React, { useContext, useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const BannerSlider = ({slides}) => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  // Add a state to indicate if the component is mounted
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Render the component only if it's mounted (client-side rendering)
  if (!isMounted) {
    return null;
  }

  return (
    <div className="mt-main-slider">
      <Carousel
        className="slider banner-slider"
        activeIndex={index}
        onSelect={handleSelect}
      >
        {slides?.map((item) => {
          return (
            <Carousel.Item
              className="holder text-center"
              style={{
                backgroundImage: `url(${item.image})`,
              }}
              key={item.id}
            >
              <div className="container">
                <div className="row">
                  <div
                    className="col-xs-12"
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  />
                </div>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default BannerSlider;
