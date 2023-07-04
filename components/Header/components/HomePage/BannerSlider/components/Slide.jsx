import React from "react";
import { SwiperSlide } from "swiper/react";
const Slide = () => {
  return (
    <SwiperSlide className="holder text-center">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="text centerize">
              <strong className="title">FURNITURE DESIGNS IDEAS</strong>
              <h1>LIGHTING</h1>
              <h2>PENDANT LAMPS</h2>
              <div className="txt">
                <p>
                  Consectetur adipisicing elit. Beatae accusamus, optio,
                  repellendus inventore
                </p>
              </div>
              <a href="product-detail.html" className="shop">
                shop now
              </a>
            </div>
          </div>
        </div>
      </div>
    </SwiperSlide>
  );
};

export default Slide;
