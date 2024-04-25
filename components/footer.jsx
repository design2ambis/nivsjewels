import React from 'react'
import { Link } from 'react-router-dom'
import { FooterCat } from './footercategory';
import FooterCategory from './footercat';

const Footer = () => {
  const closeNav = () => {
    document.querySelector("#mm-nivs").classList.remove('active');
  };
  return (
    <>
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
                  </div>
                  <div className="col-lg-3 col-md-6 column-2">
                    <div className="block block-menu">
                      <h2 className="block-title">Customer Services</h2>
                      <div className="block-content">
                        <ul>
                          <li>
                            <Link to="/contact">Contact Us</Link>
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
                            <Link to="/about">About Us</Link>
                          </li>
                          <li>
                            <a href="#">FAQ</a>
                          </li>
                          <li>
                            <a href="contact">Sitemap</a>
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
                            <FooterCat />
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
      
      <div className="site-mobile-navigation mm-wrapper" id="mm-nivs">
        <span id="remove-megamenu" className="remove-megamenu icon-remove" onClick={closeNav}></span>
        <nav id="mobile-main-menu" className="mm-menu">
          <div className="mm-panels">
            {/* //footercat */}
            <FooterCategory />       
            
          </div>
        </nav>
      </div>

    </>

  )
}

export default Footer