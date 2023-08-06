import React from "react";

const ProductCard = () => {
  return (
    <div className="mt-product1 mt-paddingbottom20">
      <div className="box">
        <div className="b1">
          <div className="b2">
            <a href="product-detail.html" tabIndex="0">
              <img
                src="https://htmlbeans.com/html/schon/images/products/img01.jpg"
                alt="image description"
              />
            </a>
            <span className="caption">
              <span className="new">NEW</span>
            </span>
            <ul className="mt-stars">
              <li>
                <i className="fa fa-star"></i>
              </li>
              <li>
                <i className="fa fa-star"></i>
              </li>
              <li>
                <i className="fa fa-star"></i>
              </li>
              <li>
                <i className="fa fa-star-o"></i>
              </li>
            </ul>
            <ul className="links">
              <li>
                <a href="#" tabIndex="0">
                  <i className="icon-handbag"></i>
                  <span>Add to Cart</span>
                </a>
              </li>
              <li>
                <a href="#" tabIndex="0">
                  <i className="icomoon icon-heart-empty"></i>
                </a>
              </li>
              <li>
                <a href="#popup1" className="lightbox" tabIndex="0">
                  <i className="icomoon icon-eye"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="txt">
        <strong className="title">
          <a href="product-detail.html" tabIndex="0">
            Puff Chair
          </a>
        </strong>
        <span className="price">
          <i className="fa fa-eur"></i> <span>287,00</span>
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
