import Image from "next/image";
import React from "react";

const MegaMenu = () => {
  return (
    <>
      <div className="mt-dropmenu text-left">
        <div className="mt-frame">
          <div className="mt-f-box">
            <div className="mt-col-3">
              <div className="sub-dropcont">
                <strong className="title">
                  <a href="product-grid-view.html" className="mt-subopener">
                    Shop Pages
                  </a>
                </strong>
                <div className="sub-drop">
                  <ul>
                    <li>
                      <a href="product-grid-view.html">Product Grid View</a>
                    </li>
                    <li>
                      <a href="product-list-view.html">Product List View</a>
                    </li>
                    <li>
                      <a href="product-quickview.html">
                        Product QuickView popup
                      </a>
                    </li>
                    <li>
                      <a href="product-detail.html">Product Detail</a>
                    </li>
                    <li>
                      <a href="product-detail2.html">Product Detail V2</a>
                    </li>
                    <li>
                      <a href="order-shopping-cart.html">Shopping Cart</a>
                    </li>
                    <li>
                      <a href="order-checkout.html">Checkout</a>
                    </li>
                    <li>
                      <a href="ordertracking.html">Order Tracking</a>
                    </li>
                    <li>
                      <a href="wishlist.html">Wish List</a>
                    </li>
                    <li>
                      <a href="faq.html">FAQ Page</a>
                    </li>
                    <li>
                      <a href="loginpage.html">Login Page</a>
                    </li>
                    <li>
                      <a href="registerpage.html">Register Page</a>
                    </li>
                    <li>
                      <a href="newsletter-popup.html">Newsletter Popup</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-col-3">
              <div className="sub-dropcont">
                <strong className="title">
                  <a href="#" className="mt-subopener">
                    404 Pages
                  </a>
                </strong>
                <div className="sub-drop">
                  <ul>
                    <li>
                      <a href="404-page.html">404 Page</a>
                    </li>
                    <li>
                      <a href="404-page2.html">404 Page2</a>
                    </li>
                    <li>
                      <a href="404-page3.html">404 Page3</a>
                    </li>
                    <li>
                      <a href="404-page4.html">404 Page4</a>
                    </li>
                    <li>
                      <a href="404-page5.html">404 Page5</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="sub-dropcont">
                <strong className="title">
                  <a href="#" className="mt-subopener">
                    Coming Soon
                  </a>
                </strong>
                <div className="sub-drop">
                  <ul>
                    <li>
                      <a href="coming-soon.html">Coming Soon</a>
                    </li>
                    <li>
                      <a href="coming-soon2.html">Coming Soon2</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-col-3">
              <div className="sub-dropcont">
                <strong className="title">
                  <a href="#" className="mt-subopener">
                    KITCHEN FURNITURE
                  </a>
                </strong>
                <div className="sub-drop">
                  <ul>
                    <li>
                      <a href="#">Kitchen Taps</a>
                    </li>
                    <li>
                      <a href="#">Breakfast time</a>
                    </li>
                    <li>
                      <a href="#">Cooking</a>
                    </li>
                    <li>
                      <a href="#">Food Storage Boxes</a>
                    </li>
                    <li>
                      <a href="#">Spice Jars</a>
                    </li>
                    <li>
                      <a href="#">Napskins</a>
                    </li>
                    <li>
                      <a href="#">Oven Gloves</a>
                    </li>
                    <li>
                      <a href="#">Placemats</a>
                    </li>
                    <li>
                      <a href="#">Cooking</a>
                    </li>
                    <li>
                      <a href="#">Food Storage Boxes</a>
                    </li>
                    <li>
                      <a href="#">Spice Jars</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-col-3 promo">
              <div className="mt-promobox">
                <a href="#">
                  <Image
                    fill
                    src="images/banner-drop.jpg"
                    alt="promo banner"
                    className="img-responsive"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span className="mt-mdropover"></span>
    </>
  );
};

export default MegaMenu;
