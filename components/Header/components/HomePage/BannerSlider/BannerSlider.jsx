import HomePageContext from "@/pages/HomePageContext";
import React, { useContext, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
const BannerSlider = () => {
  const { slides } = useContext(HomePageContext);
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
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
                  <div className="col-xs-12" dangerouslySetInnerHTML={{ __html: item.content }} />
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
