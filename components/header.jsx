import React from "react";
import { Link } from "react-router-dom";
import Category from "./category";

const Header = () => {
  return (
    <header id="site-header" className="site-header header-v1 color-white">
      <div className="header-mobile">
        <div className="section-padding">
          <div className="section-container">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-3 header-left">
                <div className="navbar-header">
                  <button
                    type="button"
                    id="show-megamenu"
                    className="navbar-toggle"
                  />
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 header-center">
                <div className="site-logo">
                  <a href="/">
                    <img src="/assets/images/logo1.png" alt="NIVS" />
                  </a>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-3 header-right">
                <div className="mojuri-topcart dropdown">
                  <div className="dropdown mini-cart top-cart">
                    <div className="remove-cart-shadow" />
                    <a
                      className="dropdown-toggle cart-icon"
                      href="#"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <div className="icons-cart">
                        <i className="icon-large-paper-bag" />
                        <span className="cart-count">0</span>
                      </div>
                    </a>
                    <div className="dropdown-menu cart-popup">

                      <div className="cart-list-wrap">
                        <ul className="cart-list">
                          <li className="empty">
                            <a className="active-login button btn" href="#">
                              Login <br />
                              To View cart{" "}
                              <i aria-hidden="true" className="arrow_right" />
                            </a>
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
        <div className="header-mobile-fixed">
          {/* Shop */}
          <div className="shop-page">
            <a href="#!">
              <i className="wpb-icon-shop" />
            </a>
          </div>
          {/* Login */}
          <div className="my-account">
            <div className="login-header">
              {/*<a  class="active-login" href="#"><i class="wpb-icon-user"></i></a>*/}
              <a className="active-login" href="#">
                <i className="wpb-icon-user" />
              </a>
              <div className="form-login-register" id="signn">
                <div className="box-form-login" style={{ margin: 60 }}>
                  <div className="active-login" />
                  <div className="box-content">
                    <div className="form-login active">
                      <form
                        id="formlogin2"
                        method="post"
                        className="login"
                        name="formlogin2"
                        data-gtm-form-interact-id={0}
                      >
                        <h2>Sign in</h2>
                        <p className="status" />
                        <div className="content">
                          <div className="email">
                            <input
                              type="email"
                              className="input-text"
                              placeholder="Email"
                              name="email1"
                              id="email1"
                              defaultValue=""
                              data-gtm-form-interact-field-id={0}
                            />
                          </div>
                          <div className="password">
                            <input
                              className="input-text"
                              required="required"
                              type="password"
                              name="password4"
                              id="password4"
                              placeholder="Password"
                              data-gtm-form-interact-field-id={1}
                            />
                          </div>
                          <div className="rememberme-lost">
                            <div className="rememberme">
                              <input
                                name="rememberme"
                                type="checkbox"
                                id="rememberme"
                                defaultValue="forever"
                              />
                              <label htmlFor="rememberme" className="inline">
                                Remember me
                              </label>
                            </div>
                            <div className="lost_password">
                              <a href="#!">
                                Lost your password?
                              </a>
                            </div>
                          </div>
                          <div className="button-login">
                            <input
                              type="submit"
                              className="button"
                              name="login"
                              defaultValue="Login"
                            />
                          </div>
                          <div className="button-next-reregister">
                            Create An Account
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="form-register">
                      <form
                        method="post"
                        className="register"
                        id="formregister"
                        data-gtm-form-interact-id={1}
                      >
                        <h2>REGISTER</h2>
                        <div className="content">
                          <div className="email">
                            <input
                              type="text"
                              className="input-text"
                              placeholder="Name"
                              name="name"
                              id="name"
                              defaultValue=""
                            />
                          </div>
                          <div className="email">
                            <input
                              type="email"
                              className="input-text"
                              placeholder="Email"
                              name="email2"
                              id="reg_email1"
                              defaultValue=""
                              data-gtm-form-interact-field-id={2}
                            />
                          </div>
                          <div className="password">
                            <input
                              type="password"
                              className="input-text"
                              placeholder="Password"
                              name="password1"
                              id="reg_password1"
                              data-gtm-form-interact-field-id={3}
                            />
                          </div>
                          <div className="button-register">
                            <input
                              type="submit"
                              className="button"
                              name="register"
                              defaultValue="Register"
                            />
                          </div>
                          <div className="button-next-login">
                            Already has an account
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Search */}
          <div className="search-box">
            <div className="search-toggle">
              <i className="wpb-icon-magnifying-glass" />
            </div>
          </div>
          {/* Wishlist */}
          <div className="wishlist-box">
            <Link to="/wishlist">
              <i className="wpb-icon-heart" />
            </Link>
          </div>
        </div>
      </div>
      <div className="header-desktop">
        <div className="header-wrapper">
          <div className="section-padding">
            <div className="section-container large p-l-r">
              <div className="row" style={{ paddingTop: 19 }}>
                <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 header-left">
                  <div className="site-logo">


                    <a href="/">
                      {/*<img src="assets/images/nivslogo.png"*/}
                      <img
                        src="/assets/images/logo1.png"
                        alt="NIVS"
                        style={{ width: 150, height: "auto" }}
                      />
                    </a>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 text-center header-center">
                  <div className="site-navigation" id="mainnav">
                    <nav id="main-navigation">
                      <ul id="menu-main-menu" className="menu">
                        <li className="level-0 menu-item   current-menu-item">

                          <a href="/">
                            <span className="menu-item-text">Home</span>
                          </a>
                        </li>

                        <Category />

                        <li className="level-0 menu-item ">
                          <Link to="/about">
                            <span className="menu-item-text ">AboutUs</span>
                          </Link>
                        </li>
                        <li className="level-0 menu-item ">
                          <Link to="/contact">

                            <span
                              className="menu-item-text"
                              style={{ position: "absolute" }}
                            >
                              Contact
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 header-right">
                  <div className="header-page-link">
                    {/* Search */}
                    <div className="search-box">
                      <div className="search-toggle">
                        <i className="icon-search" />
                      </div>
                    </div>
                    {/* Login */}
                    <div className="login-header icon">
                      <a className="active-login" href="#">
                        <i className="icon-user" />
                      </a>
                      {/* <ul class="sub-menu">
                        <li>
                          <a href="/shop/mens/ring/1">
                            <span class="menu-item-text">Ring</span>
                          </a>
                        </li>
                        <li>
                          <a href="/shop/mens/chain/1">
                            <span class="menu-item-text">Chain</span>
                          </a>
                        </li>
                        <li>
                          <a href="/shop/mens/plain-charms/1">
                            <span class="menu-item-text">Plain Charms</span>
                          </a>
                        </li>
                        <li>
                          <a href="/shop/mens/bracelet/1">
                            <span class="menu-item-text">Bracelet</span>
                          </a>
                        </li>
                      </ul> */}
                      <div className="form-login-register" id="signn">
                        <div className="box-form-login">
                          <div className="active-login" />
                          <div className="box-content">
                            <div className="form-login active">
                              <form
                                id="formlogin1"
                                method="post"
                                className="login"
                                name="formlogin1"
                                data-gtm-form-interact-id={2}
                              >
                                <h2>Sign in</h2>
                                <p className="status" />
                                <div className="content">
                                  <div className="email">
                                    <input
                                      type="email"
                                      className="input-text"
                                      placeholder="Email"
                                      name="email3"
                                      id="email3"
                                      defaultValue=""
                                      data-gtm-form-interact-field-id={4}
                                    />
                                  </div>
                                  <div className="password">
                                    <input
                                      className="input-text"
                                      required="required"
                                      type="password"
                                      name="password2"
                                      id="password2"
                                      placeholder="Password"
                                      data-gtm-form-interact-field-id={5}
                                    />
                                  </div>
                                  <div className="rememberme-lost">
                                    <div className="rememberme">
                                      <input
                                        name="rememberme1"
                                        type="checkbox"
                                        id="rememberme1"
                                        defaultValue="forever"
                                      />
                                      <label
                                        htmlFor="rememberme"
                                        className="inline"
                                      >
                                        Remember me
                                      </label>
                                    </div>
                                    <div className="lost_password">
                                      <a href="#!">
                                        Lost your password?
                                      </a>
                                    </div>
                                  </div>
                                  <div className="button-login">
                                    <input
                                      type="submit"
                                      className="button"
                                      name="login"
                                      defaultValue="Login"
                                    />
                                  </div>
                                  <div className="button-next-reregister">
                                    Create An Account
                                  </div>
                                </div>
                              </form>
                            </div>
                            <div className="form-register">
                              <form
                                method="post"
                                className="register"
                                id="formregister1"
                                data-gtm-form-interact-id={3}
                              >
                                <h2>REGISTER</h2>
                                <div className="content">
                                  <div className="email">
                                    <input
                                      type="text"
                                      className="input-text"
                                      placeholder="Name"
                                      name="name1"
                                      id="name1"
                                      defaultValue=""
                                    />
                                  </div>
                                  <div className="email">
                                    <input
                                      type="email"
                                      className="input-text"
                                      placeholder="Email"
                                      name="email5"
                                      id="reg_email"
                                      defaultValue=""
                                      data-gtm-form-interact-field-id={6}
                                    />
                                  </div>
                                  <div className="password">
                                    <input
                                      type="password"
                                      className="input-text"
                                      placeholder="Password"
                                      name="password3"
                                      id="reg_password3"
                                      data-gtm-form-interact-field-id={7}
                                    />
                                  </div>
                                  <div className="button-register">
                                    <input
                                      type="submit"
                                      className="button"
                                      name="register"
                                      defaultValue="Register"
                                    />
                                  </div>
                                  <div className="button-next-login">
                                    Already has an account
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Wishlist */}
                    <div className="wishlist-box">
                      <Link to="/wishlist">
                        <i className="icon-heart" />
                      </Link>
                      <span className="count-wishlist">0</span>
                    </div>
                    {/* Cart */}
                    <div className="mojuri-topcart dropdown light">
                      <div className="dropdown mini-cart top-cart">
                        <div className="remove-cart-shadow" />
                        <a
                          className="dropdown-toggle cart-icon"
                          href="#"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <div className="icons-cart">
                            <i className="icon-large-paper-bag" />
                            <span className="cart-count">0</span>
                          </div>
                        </a>
                        <div className="dropdown-menu cart-popup">
                          <div className="cart-list-wrap">
                            <ul className="cart-list">
                              <li className="empty">
                                <a className="active-login button btn" href="#">
                                  Login <br />
                                  To View cart{" "}
                                  <i
                                    aria-hidden="true"
                                    className="arrow_right"
                                  />
                                </a>
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
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
