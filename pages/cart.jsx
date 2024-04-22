import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/pageloader";

const Cart = () => {
  const [isLoaded, setLoad] = useState(true);
  const [cart, setCart] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isCount, setIsCount] = useState(false);

  const username = localStorage.getItem("token");

  useEffect(() => {
    if (username !== null) {
      setIsLoggedIn(true);
    }
  }, []);

  const fetchData = async () => {
    try {
      const cartResponse = await fetch('https://nivsjewels.com/api/select?get_cart&token=' + username);
      const cartData = await cartResponse.json();
      if (cartData.status === 200) {
        setCart(cartData.data);
        setIsCount(true);
        // console.log(cartData.data);                     
      } else {
        setIsCount(false);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  useEffect(() => {
    fetchData();
  }, [username]);

  const qty = async (id, qty, type) => {

    try {
      const cartResponse = await fetch(`https://nivsjewels.com/api/update?update_cart&id=${id}&qty=${qty}&type=${type}`);
      const cartData = await cartResponse.json();
      if (cartData.update_sta === true) {
        fetchData();
      }
    } catch (error) {
      console.error('Error updating cart:', error);
    }

    useEffect(() => {
      // Simulate an API call
      setTimeout(() => {
        setLoad(false);
      }, 500);
    }, []);

  }
  return (
    <>
      <div id="site-main" className="site-main">
        <div id="main-content" className="main-content">
          <div id="primary" className="content-area">
            <div id="title" className="page-title">
              <div className="section-container" style={{ paddingTop: 45 }}>
                <div className="content-title-heading">
                  <h1
                    className="text-title-heading"
                    style={{ fontFamily: "serif", color: "#fff" }}
                  >
                    Shopping Cart
                  </h1>
                </div>
                <div className="breadcrumbs">
                  <a href="index.php" style={{ color: "#fff" }}>
                    Home
                  </a>
                  <span className="delimiter" />
                  <a href="javascript:void(0)" style={{ color: "#fff" }}>
                    cart
                  </a>
                </div>
              </div>
            </div>
            <div id="content" className="site-content" role="main">
              <div className="section-padding">
                <div className="section-container p-l-r">
                  <div className="shop-cart">

                    <div className="row">
                      <div
                        className="col-lg-8 col-md-12 col-12"
                        style={{ paddingTop: 20 }}
                      >
                        <form className="cart-form" action="#" method="post">
                          <div className="table-responsive">
                            <table className="cart-items table" cellSpacing={0}>
                              <thead>
                                <tr>
                                  <th className="product-thumbnail">S.No</th>
                                  <th className="product-thumbnail">
                                    Product image
                                  </th>
                                  <th className="product-price">Weight</th>
                                  <th className="product-quantity">Quantity</th>
                                  <th className="product-subtotal">total</th>
                                  <th className="product-remove"> remove &nbsp;</th>
                                </tr>
                              </thead>
                              <tbody>

                                <tr
                                  className="cart-item"
                                  id="id_<?php echo $row['caId'] ?>"
                                >
                                  <td> {/*?php echo $x ?*/}</td>
                                  <td className="product-thumbnail">
                                    <a href="#">
                                      <img
                                        width={600}
                                        height={600}
                                        src="<?php echo DESIGN_SITE.$list['design_image'] ?>"
                                        onerror="this.src='assets/images/No_Image_Available.jpg';"
                                        className="product-image"
                                        alt=""
                                      />
                                    </a>
                                    <div className="product-name">
                                      <a href="#">
                                        {/*?php echo $list['design_no'] ?*/}
                                      </a>
                                    </div>
                                  </td>
                                  <td className="product-price">
                                    <span
                                      className="price"
                                      id="weight_<?php echo $x ?>"
                                    >
                                      {/*?php echo $list['design_weight'] ?*/}
                                    </span>
                                  </td>
                                  <td className="product-quantity">
                                    <div
                                      className="quantity"
                                      style={{ display: "flex" }}
                                    >
                                      <button
                                        type="button"
                                        style={{
                                          backgroundColor: "black",
                                          color: "white",
                                          cursor: "pointer"
                                        }}
                                        onclick="adjust_qty('-','<?php echo $x ?>','<?php echo $row['caId'] ?>')"
                                      >
                                        -
                                      </button>
                                      <input
                                        type="number"
                                        className="qty"
                                        min={1}
                                        max={5}
                                        name="quantity"
                                        id="design_quty_<?php echo $x ?>"
                                        defaultValue="<?php echo $row['caQty'] ?>"
                                        title="Qty"
                                        placeholder=""
                                        inputMode="numeric"
                                        autoComplete="off"
                                      />
                                      <button
                                        type="button"
                                        style={{
                                          backgroundColor: "black",
                                          color: "white",
                                          cursor: "pointer"
                                        }}
                                        onclick="adjust_qty('+','<?php echo $x ?>','<?php echo $row['caId'] ?>')"
                                      >
                                        +
                                      </button>
                                    </div>
                                  </td>
                                  <td className="product-subtotal">
                                    <span
                                      className="eachProweight"
                                      id="wei_qty_id_<?php echo $x ?>"
                                    >
                                      {/*?php 
    															    $subtotal=$list['design_weight']*$row['caQty'];
    															    echo number_format($subtotal, 2)
															    ?*/}
                                    </span>
                                  </td>
                                  <td className="product-remove">
                                    <a
                                      href="javascript:void(0)"
                                      className="remove"
                                      onclick="cart_remove('<?php echo $row['caId'] ?>','<?php echo $x ?>')"
                                    >
                                      REMOVE
                                    </a>
                                  </td>
                                </tr>
                                {/*?php
													
													$total += $subtotal;
													$x++;} ?*/}
                                <tr>
                                  <td colSpan={6} className="actions">
                                    <div className="bottom-cart">
                                      <div className="coupon">
                                        <input
                                          type="text"
                                          name="coupon_code"
                                          className="input-text"
                                          id="coupon-code"
                                          defaultValue=""
                                          placeholder="Coupon code"
                                        />
                                        <button
                                          type="submit"
                                          name="apply_coupon"
                                          className="button"
                                          value="Apply coupon"
                                        >
                                          Apply coupon
                                        </button>
                                      </div>
                                      <a
                                        href="index.php"
                                        className="checkout-button button"
                                      >
                                        CONTINUE SHOPPING
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </form>
                      </div>
                      <div className="col-lg-4 col-md-12 col-12">
                        <div className="cart-totals">
                          <h2>Cart totals</h2>
                          <div>
                            <div className="cart-subtotal">
                              <div className="title">Subtotal</div>
                              <div>
                                <span id="sub-tot-weight">

                                </span>
                              </div>
                            </div>
                            <div className="order-total">
                              <div className="title">Total</div>
                              <div>
                                <span id="overallTot">

                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="proceed-to-checkout">
                            <a
                              href="checkout.php"
                              className="checkout-button button"
                            >
                              Proceed to checkout
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-12 text-center">
                      <img src="assets/images/cart_is_empty.png" />
                    </div>


                    <div className="col-12 text-center">
                      <h3>
                        Please{" "}
                        <a
                          className="active-login"
                          href="#"
                          style={{ color: "#cb8161" }}
                        >
                          Login
                        </a>{" "}
                        to View Cart
                      </h3>
                    </div>

                  </div>
                </div>
                <div className="shop-cart-empty">
                  <div className="notices-wrapper">
                    <p className="cart-empty">Your cart is currently empty.</p>
                  </div>
                  <div className="return-to-shop">
                    <a className="button" href="index.php">
                      Return to shop
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* #content */}
        </div>
        {/* #primary */}
      </div>
      {/* #main-content */}
    </>

  )
}

export default Cart