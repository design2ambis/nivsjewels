import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Category from "./category";

const Header = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isCount, SetCount] = useState(0);
  var username = localStorage.getItem("token");

  useEffect(() => {
    if (username !== null) {

      setIsLoggedIn(true);

      const fetchData = async () => {
        try {
          const cartResponse = await fetch('https://nivsjewels.com/api/select?get_cart&token=' + username);
          const cartData = await cartResponse.json();
          if (cartData.status === 200) {
            SetCount(cartData.data.length);
            // console.log(cartData.data);                     
          } else {

          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();

    }
  }, []);

  const handleLogout = () => {
    // console.log("test");
    localStorage.removeItem("token");
    window.location.href = "/";
  }

  const openNav = () => {
    document.querySelector("#mm-nivs").classList.add('active');
    document.querySelector(".mm-subcat").classList.add('mm-hidden');
    document.querySelector("#mm-0").classList.add('mm-opened');
    document.querySelector(".mm-subcat").classList.remove('mm-opened');
  };

  

  return (
    <>
      <div id="page" className="hfeed page-wrapper">
        <header id="site-header" className="site-header header-v1 color-white">
          
          <div className="header-mobile">
            <div className="section-padding">
              <div className="section-container">
                <div className="row">
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-3 header-left">
                    <div className="navbar-header">
                      <button
                        type="button"
                        id="show-megamenu" onClick={openNav}
                        className="navbar-toggle">
                      </button>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 header-center">
                    <div className="site-logo">
                      <Link to="/">
                        <img src="/assets/images/logo1.png" alt="NIVS" />
                      </Link>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-3 header-right">
                    <div className="mojuri-topcart dropdown">
                      <div className="dropdown mini-cart top-cart">
                        <div className="remove-cart-shadow" />
                        
                        
                        {
                            isLoggedIn ? (
                              <>
                                <Link className="active-login" to="/my-account">
                                  <i className="icon-user" />
                                </Link>

                              </>

                            ) : (

                              <Link className="active-login" to="/login">
                                <i className="icon-user" />
                              </Link>

                            )
                          }  
                        <Link
                          className="dropdown-toggle cart-icon"
                          to="/cart"                         
                        >

                          

                  
                          <div className="icons-cart">
                            <i className="icon-large-paper-bag" />
                            <span className="cart-count">{isCount}</span>
                          </div>
                        </Link>
                        <div className="dropdown-menu cart-popup">

                          <div className="cart-list-wrap">
                            <ul className="cart-list">
                              <li className="empty">
                                <Link className="active-login button btn" to="/login">
                                  Login <br />
                                  To View cart
                                  <i aria-hidden="true" className="arrow_right" />
                                </Link>
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
                <Link to="/">
                  <i className="wpb-icon-shop" />
                </Link>
              </div>
              {/* Login */}
              <div className="myaccount">
                <div className="login-header">



                {
                            isLoggedIn ? (
                              <>
                                <Link className="" to="/myaccount">
                                  <i className="wpb-icon-user" />
                                </Link>

                              </>

                            ) : (

                              <Link className="" to="/login">
                                <i className="wpb-icon-user" />
                              </Link>

                            )
                          }  


                  
                  {/* <div className="form-login-register" id="signn">
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
                  </div> */}
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


                        <Link to="/">
                          {/*<img src="assets/images/nivslogo.png"*/}
                          <img
                            src="/assets/images/logo1.png"
                            alt="NIVS"
                            style={{ width: 150, height: "auto" }}
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 text-center header-center">
                      <div className="site-navigation" id="mainnav">
                        <nav id="main-navigation">
                          <ul id="menu-main-menu" className="menu">
                            <li className="level-0 menu-item">
                              <Link to="/">
                                <span className="menu-item-text">Home</span>
                              </Link>
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
                        {/* Login */}
                        <div className="site-navigation login-header icon">
                          <nav id="main-navigation">
                            <ul id="menu-main-menu" className="menu">
                        
                              <li className="level-0 menu-item menu-item-has-children ">
                                <a href="#">
                                  <i className="icon-user" />
                                </a>
                                <ul className="sub-menu">
                                {isLoggedIn ? (
                                  <>
                                  <li>
                                      <Link to="/myaccount">
                                        <span className="menu-item-text">My Account</span>
                                      </Link>
                                    </li>
                                    <li>
                                      <a href="#!" onClick={handleLogout} className="menu-item">
                                        <span className="menu-item-text">Logout</span>
                                      </a>
                                    </li>
                                  
                                  </>
                                  ):(
                                  <>
                                    <li>
                                    <Link to="/login">
                                      <span className="menu-item-text">Login / Register</span>
                                    </Link>
                                  </li>
                                  </>
                                  )}
                                  
                                </ul>
                              </li>
                            </ul>
                          </nav>
                        </div>

                        <div className="mojuri-topcart dropdown light">
                          <div className="dropdown mini-cart top-cart">
                            <div className="remove-cart-shadow" />
                            <Link
                              className="dropdown-toggle cart-icon"
                              to="/cart"
                              role="button"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <div className="icons-cart">
                                <i className="icon-large-paper-bag" />
                                <span className="cart-count">{isCount}</span>
                              </div>
                            </Link>

                          </div>
                        </div>

                        {/* Search */}
                        <div className="search-box">
                          <div className="search-toggle">
                            <i className="icon-search" />
                          </div>
                        </div>

                        {/* Login */}
                        {/* <div className="login-header icon">
                          {
                            isLoggedIn ? (
                              <>
                                <Link className="active-login" to="/my-account">
                                  <i className="icon-user" />
                                </Link>

                              </>

                            ) : (

                              <Link className="active-login" to="/login">
                                <i className="icon-user" />
                              </Link>

                            )
                          }



                        </div> */}

                        


                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </header>
      </div>
    </>
  );
};

export default Header;
