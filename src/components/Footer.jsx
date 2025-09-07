import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer id="footer" className="overflow-hidden">
      <Container>
        <Row className="d-flex flex-wrap justify-content-between py-5">
          <Col lg={3} sm={6} className="pb-3">
            <div className="footer-menu">
              <img src="/images/logo.png" alt="logo" />
              <p>Nunc tristique facilisis consectetur vivamus ut porta porta aliquam vitae vehicula leo nullam urna lectus.</p>
              <div className="social-links">
                <ul className="d-flex list-unstyled gap-2">
                  <li className="social">
                    <a href="#">
                      <iconify-icon className="social-icon" icon="ri:facebook-fill"></iconify-icon>
                    </a>
                  </li>
                  <li className="social">
                    <a href="#">
                      <iconify-icon className="social-icon" icon="ri:twitter-fill"></iconify-icon>
                    </a>
                  </li>
                  <li className="social">
                    <a href="#">
                      <iconify-icon className="social-icon" icon="ri:pinterest-fill"></iconify-icon>
                    </a>
                  </li>
                  <li className="social">
                    <a href="#">
                      <iconify-icon className="social-icon" icon="ri:instagram-fill"></iconify-icon>
                    </a>
                  </li>
                  <li className="social">
                    <a href="#">
                      <iconify-icon className="social-icon" icon="ri:youtube-fill"></iconify-icon>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg={2} sm={6} className="pb-3">
            <div className="footer-menu text-uppercase">
              <h5 className="widget-title pb-2">Quick Links</h5>
              <ul className="menu-list list-unstyled text-uppercase">
                <li className="menu-item pb-2">
                  <a href="#">Home</a>
                </li>
                <li className="menu-item pb-2">
                  <a href="#">About</a>
                </li>
                <li className="menu-item pb-2">
                  <a href="#">Shop</a>
                </li>
                <li className="menu-item pb-2">
                  <a href="#">Blogs</a>
                </li>
                <li className="menu-item pb-2">
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={3} sm={6} className="pb-3">
            <div className="footer-menu text-uppercase">
              <h5 className="widget-title pb-2">Help & Info Help</h5>
              <ul className="menu-list list-unstyled">
                <li className="menu-item pb-2">
                  <a href="#">Track Your Order</a>
                </li>
                <li className="menu-item pb-2">
                  <a href="#">Returns Policies</a>
                </li>
                <li className="menu-item pb-2">
                  <a href="#">Shipping + Delivery</a>
                </li>
                <li className="menu-item pb-2">
                  <a href="#">Contact Us</a>
                </li>
                <li className="menu-item pb-2">
                  <a href="#">Faqs</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={3} sm={6} className="pb-3">
            <div className="footer-menu">
              <h5 className="widget-title pb-2">Subscribe Us</h5>
              <p>Subscribe to our newsletter to get updates about our grand offers.</p>
              <div className="search-bar border rounded-pill border-dark-subtle px-2">
                <form className="text-center d-flex align-items-center" action="" method="">
                  <input type="text" className="form-control border-0 bg-transparent" placeholder="Enter your email here" />
                  <iconify-icon className="send-icon" icon="tabler:location-filled"></iconify-icon>
                </form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <hr />
      <Container>
        <Row className="d-flex flex-wrap justify-content-between">
          <Col md={4} className="ship-and-return">
            <div className="shipping d-flex">
              <p>We ship with:</p>
              <div className="card-wrap ps-2">
                <img src="/images/dhl.png" alt="visa" />
                <img src="/images/shippingcard.png" alt="mastercard" />
              </div>
            </div>
          </Col>
          <Col md={4} className="text-center">
            <div className="copyright">
              <p>© Copyright 2023 Waggy. Design by <a href="https://templatesjungle.com/" target="_blank" rel="noopener noreferrer">TemplatesJungle</a> Distribution by <a href="https://themewagon.com" target="blank" rel="noopener noreferrer">ThemeWagon</a></p>
            </div>
          </Col>
          <Col md={4} className="card-wrap">
            <div className="card d-flex">
              <p>Payment methods:</p>
              <div className="card-wrap ps-2">
                <img src="/images/visa.jpg" alt="visa" />
                <img src="/images/mastercard.jpg" alt="mastercard" />
                <img src="/images/paypal.jpg" alt="paypal" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer