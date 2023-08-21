import { FavoriteBorder, Iso } from "@mui/icons-material";
import { Badge } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Wishlist = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  const handlClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isOpen) {
      setIsOpen(true);
    }
  };
  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <li className={`drop ${isOpen ? "open" : ""}`}>
      <Badge badgeContent={3} color="primary">
        <a href="#" onClick={handlClick}>
          <FavoriteBorder sx={{ fontSize: 25, color: "black" }} />
        </a>
      </Badge>
      {isOpen && (
        <div className="mt-drop" ref={ref}>
          <div className="mt-drop-sub">
            <div className="mt-side-widget">
              <div className="cart-row">
                <a href="#" className="img">
                  <Image
                    width={74}
                    height={74}
                    src="/images/products/img36.jpg"
                    alt="image"
                    className="img-responsive"
                  />
                </a>
                <div className="mt-h">
                  <span className="mt-h-title">
                    <a href="#">Marvelous Modern 3 Seater</a>
                  </span>
                  <span className="price">
                    <i className="fa fa-eur" aria-hidden="true"></i> 599,00
                  </span>
                </div>
                <a href="#" className="close fa fa-times"></a>
              </div>
              <div className="cart-row">
                <a href="#" className="img">
                  <Image
                     width={74}
                     height={74}
                    src="/images/products/img37.jpg"
                    alt="image"
                    className="img-responsive"
                  />
                </a>
                <div className="mt-h">
                  <span className="mt-h-title">
                    <a href="#">Marvelous Modern 3 Seater</a>
                  </span>
                  <span className="price">
                    <i className="fa fa-eur" aria-hidden="true"></i> 599,00
                  </span>
                </div>
                <a href="#" className="close fa fa-times"></a>
              </div>
              <div className="cart-row">
                <a href="#" className="img">
                  <Image
                     width={74}
                     height={74}
                    src="/images/products/img38.jpg"
                    alt="image"
                    className="img-responsive"
                  />
                </a>
                <div className="mt-h">
                  <span className="mt-h-title">
                    <a href="#">Marvelous Modern 3 Seater</a>
                  </span>
                  <span className="price">
                    <i className="fa fa-eur" aria-hidden="true"></i> 599,00
                  </span>
                </div>
                <a href="#" className="close fa fa-times"></a>
              </div>
              <div className="cart-row-total">
                <span className="mt-total">Add them all</span>
                <span className="mt-total-txt">
                  <a href="#" className="btn-type2">
                    add to CART
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
      <span className="mt-mdropover"></span>
    </li>
  );
};

export default Wishlist;
