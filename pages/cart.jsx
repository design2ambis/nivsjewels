import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/pageloader";

const Cart = () => {
  document.title = "Nivsjewels - Cart";
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
      const cartResponse = await fetch(
        "https://nivsjewels.com/api/select?get_cart&token=" + username
      );
      const cartData = await cartResponse.json();
      if (cartData.status === 200) {
        setCart(cartData.data);
        setIsCount(true);
        // console.log(cartData.data);
      } else {
        setIsCount(false);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoad(false);
  };

  useEffect(() => {
    fetchData();
  }, [username]);

  const qty = async (id, qty, type) => {
    try {
      setLoad(true);
      const cartResponse = await fetch(
        `https://nivsjewels.com/api/update?update_cart&id=${id}&qty=${qty}&type=${type}`
      );
      const cartData = await cartResponse.json();
      if (cartData.update_sta === true) {
        fetchData();
      }
      setLoad(false);
    } catch (error) {
      console.error("Error updating cart:", error);
    }

    useEffect(() => {
      // Simulate an API call
      setTimeout(() => {
        setLoad(false);
      }, 1000);
    }, []);
  };
  
  if (isLoaded) {
    return <Loader />;
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
                  <Link to="/" style={{ color: "#fff" }}>
                    Home
                  </Link>
                  <span className="delimiter" />
                  <Link to="/cart" style={{ color: "#fff" }}>
                    cart
                  </Link>
                </div>
              </div>
            </div>
            <div id="content" className="site-content" role="main">
              <div className="section-padding">
                <div className="section-container p-l-r">
                  <div className="shop-cart">
                  { isLoggedIn ? (
                      <>
                      {isCount ? (
                          <>
                            <div className="row">
                              <div
                                className="col-lg-12 col-md-12 col-12"
                                style={{ paddingTop: 20 }}
                              >
                                <form
                                  className="cart-form"
                                  action="#"
                                  method="post"
                                >
                                  <div className="table-responsive">
                                    <table
                                      className="cart-items table"
                                      cellSpacing={0}
                                    >
                                      <thead>
                                        <tr>
                                          {/* <th className="product-thumbnail">S.No</th> */}
                                          <th className="product-thumbnail">
                                            Product image
                                          </th>
                                          <th className="product-price">
                                            Weight
                                          </th>
                                          <th className="product-quantity">
                                            Quantity
                                          </th>
                                          <th className="product-subtotal">
                                            total
                                          </th>
                                          <th className="product-remove">
                                            {" "}
                                            remove &nbsp;
                                          </th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {cart.map((pro) => (
                                          <tr
                                            key={pro.caId}
                                            className="cart-item"
                                            id={pro.caId}
                                          >
                                            {/* <td></td> */}
                                            <td className="product-thumbnail">
                                              <a href="#">
                                                <img
                                                  width={600}
                                                  height={600}
                                                  src={pro.capImg}
                                                  alt={pro.capName}                                                  
                                                  className="product-image"
                                                />
                                              </a>
                                              <div className="product-name">
                                                <a href="#">{pro.capName}</a>
                                              </div>
                                            </td>
                                            <td className="product-price">
                                              <span className="price">
                                                {pro.capWgt}
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
                                                    cursor: "pointer",
                                                  }}
                                                  onClick={() =>
                                                    qty(
                                                      pro.caId,
                                                      pro.caQty,
                                                      "sub"
                                                    )
                                                  }
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
                                                  readOnly
                                                  title="Qty"
                                                  placeholder=""
                                                  inputMode="numeric"
                                                  autoComplete="off"
                                                  value={pro.caQty}
                                                />
                                                <button
                                                  type="button"
                                                  style={{
                                                    backgroundColor: "black",
                                                    color: "white",
                                                    cursor: "pointer",
                                                  }}
                                                  onClick={() =>
                                                    qty(
                                                      pro.caId,
                                                      pro.caQty,
                                                      "add"
                                                    )
                                                  }
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
                                                {(parseFloat(pro.caQty) *
                                                  parseFloat(pro.capWgt)).toFixed(
                                                  2
                                                )}
                                              </span>
                                            </td>
                                            <td className="product-remove">
                                              <a
                                                href="#!"
                                                className="remove"
                                                onClick={() =>
                                                  qty(
                                                    pro.caId,
                                                    pro.caQty,
                                                    "delete"
                                                  )
                                                }
                                              >
                                                REMOVE
                                              </a>
                                            </td>
                                          </tr>
                                        ))}
                                        <tr>
                                          <td colSpan={6} className="actions">
                                            <div className="bottom-cart">
                                              <div className="coupon">
                                                <Link
                                                  to="/"
                                                  name="apply_coupon"
                                                  className="button"
                                                  value="Apply coupon"
                                                >
                                                  Continue Shopping
                                                </Link>
                                              </div>
                                              <Link
                                                to="/checkout"
                                                className="checkout-button button"
                                              >
                                                Checkout
                                              </Link>
                                            </div>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </form>
                              </div>
                              {/* <div className="col-lg-4 col-md-12 col-12">
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
                      </div> */}
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="col-12 text-center">
                              <img src="/assets/images/cart_is_empty.png" />
                            </div>
                          </>
                        )}
                      </>
                      ) : (
                      <>
                        <div className="col-12 text-center">
                          <h5>
                            <Link to="/login">Login</Link> to view Cart
                          </h5>
                        </div>
                      </>
                    )}
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
  );
};

export default Cart;
