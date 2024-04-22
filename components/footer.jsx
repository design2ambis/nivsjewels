import React from 'react'

const Footer = () => {
  return (
    <footer id="site-footer" className="site-footer background four-columns">
    <div className="footer">
      <div className="section-padding">
        <div className="section-container">
          <div className="block-widget-wrap">
            <div className="row">
              <div className="col-lg-3 col-md-6 column-1">
                <div className="block block-menu m-b-20">
                  <h2 className="block-title">Contact Us</h2>
                  <div className="block-content">
                    <ul>
                      <li>
                        <span>Office:</span> 84B,First floor, Viswanathapuram Main
                        St, Thudiyalur,Coimbatore - 641034, Tamilnadu, India
                      </li>
                      <li>
                        <span>Tel:</span> +91 9150016196
                      </li>
                      <li>
                        <span>Email:</span>{" "}
                        <a href="mailto:info@nivsjewels.com">
                          info@nivsjewels.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/*<div class="block block-social">*/}
                {/*    <ul class="social-link">*/}
                {/*        <li><a href="#"><i class="fa fa-twitter"></i></a></li>*/}
                {/*        <li><a href="#"><i class="fa fa-instagram"></i></a></li>*/}
                {/*        <li><a href="#"><i class="fa fa-dribbble"></i></a></li>*/}
                {/*        <li><a href="#"><i class="fa fa-behance"></i></a></li>*/}
                {/*    </ul>*/}
                {/*</div>*/}
              </div>
              <div className="col-lg-3 col-md-6 column-2">
                <div className="block block-menu">
                  <h2 className="block-title">Customer Services</h2>
                  <div className="block-content">
                    <ul>
                      <li>
                        <a href="contact.php">Contact Us</a>
                      </li>
                      <li>
                        <a href="#">Track Your Order</a>
                      </li>
                      <li>
                        <a href="#">Product Care &amp; Repair</a>
                      </li>
                      <li>
                        <a href="#">Book an Appointment</a>
                      </li>
                      <li>
                        <a href="#">Frequently Asked Questions</a>
                      </li>
                      <li>
                        <a href="#">Shipping &amp; Returns</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 column-3">
                <div className="block block-menu">
                  <h2 className="block-title">About Us</h2>
                  <div className="block-content">
                    <ul>
                      <li>
                        <a href="about.php">About Us</a>
                      </li>
                      <li>
                        <a href="#">FAQ</a>
                      </li>
                      <li>
                        <a href="contact.php">Sitemap</a>
                      </li>
                      <li>
                        <a href="#">Terms &amp; Conditions</a>
                      </li>
                      <li>
                        <a href="#">Privacy Policy</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 column-4">
                <div className="block block-menu">
                  <h2 className="block-title">Catalog</h2>
                  <div className="block-content">
                    <ul>
                      <li>
                        <a href="#!">Earrings</a>
                      </li>
                      <li>
                        <a href="#!">Necklaces</a>
                      </li>
                      <li>
                        <a href="#!">Bracelets</a>
                      </li>
                      <li>
                        <a href="#!">Rings</a>
                      </li>
                      <li>
                        <a href="#!">Jewelry Box</a>
                      </li>
                      <li>
                        <a href="#!">Studs</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="section-padding">
        <div className="section-container">
          <div className="block-widget-wrap">
            <div className="row">
              <div className="col-md-6">
                <div className="footer-left">
                  <p className="copyright">
                    Copyright © 2024. Nivs Jewels All Rights Reserved.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="footer-right">
                  <div className="block block-image">
                    <img
                      width={309}
                      height={32}
                      src="https://nivsjewels.com/media/payments.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  
  )
}

export default Footer