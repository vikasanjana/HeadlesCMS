import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer id="mt-footer" className="style1">
      <div className="footer-holder dark">
        <Container>
          <Row>
            <Col xs={12} sm={6} md={3}>
              <div className="f-widget-about">
                <div className="logo">
                  <a href="#">
                    <img src="images/logo.png" alt="Schon" />
                  </a>
                </div>
                <p>
                  Exercitation ullamco laboris nisi ut aliquip ex commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <ul className="list-unstyled social-network">
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-google-plus"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-whatsapp"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={12} sm={6} md={3}>
              <div className="f-widget-news">
                <h3 className="f-widget-heading">Twitter</h3>
                <div className="news-articles">
                  <div className="news-column">
                    <i className="fa fa-twitter"></i>
                    <div className="txt-box">
                      <p>
                        Laboris nisi ut <a href="#">#schön</a> aliquip econse-{" "}
                        <br />
                        quat. <a href="#">https://t.co/vreNJ9nEDt</a>
                      </p>
                    </div>
                  </div>
                  <div className="news-column">
                    <i className="fa fa-twitter"></i>
                    <div className="txt-box">
                      <p>
                        Ficia deserunt mollit anim id est labo- <br />
                        rum. incididunt ut labore et dolore <br />
                        <a href="#">https://t.co/vreNJ9nEDt</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={6} md={3}>
              <div className="f-widget-tabs">
                <h3 className="f-widget-heading">Product Tags</h3>
                <ul className="list-unstyled tabs">
                  <li>
                    <a href="#">Sofas</a>
                  </li>
                  <li>
                    <a href="#">Armchairs</a>
                  </li>
                  <li>
                    <a href="#">Living</a>
                  </li>
                  <li>
                    <a href="#">Bedroom</a>
                  </li>
                  <li>
                    <a href="#">Lighting</a>
                  </li>
                  <li>
                    <a href="#">Tables</a>
                  </li>
                  <li>
                    <a href="#">Pouf</a>
                  </li>
                  <li>
                    <a href="#">Wood</a>
                  </li>
                  <li>
                    <a href="#">Office</a>
                  </li>
                  <li>
                    <a href="#">Outdoor</a>
                  </li>
                  <li>
                    <a href="#">Kitchen</a>
                  </li>
                  <li>
                    <a href="#">Stools</a>
                  </li>
                  <li>
                    <a href="#">Footstools</a>
                  </li>
                  <li>
                    <a href="#">Desks</a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={12} sm={6} md={3}>
              <div className="f-widget-about">
                <h3 className="f-widget-heading">Information</h3>
                <ul className="list-unstyled address-list align-right">
                  <li>
                    <i className="fa fa-map-marker"></i>
                    <address>
                      Connaugt Road Central Suite 18B, 148 <br />
                      New Yankee
                    </address>
                  </li>
                  <li>
                    <i className="fa fa-phone"></i>
                    <a href="tel:15553332211">+1 (555) 333 22 11</a>
                  </li>
                  <li>
                    <i className="fa fa-envelope-o"></i>
                    <a href="mailto:info@schon.chair">info@schon.chair</a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
