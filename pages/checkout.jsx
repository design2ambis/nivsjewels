import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/pageloader";
import Swal from 'sweetalert2';

const Checkout = () => {
  document.title = "Nivsjewels - Checkout";

  const [isLoaded, setLoad] = useState(true);
  const [cart, setCart] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isCount, setIsCount] = useState(false);

  const [totalWgt, settotalWgt] = useState(0);
  const [totalQty, settotalQty] = useState(0);

  const username = localStorage.getItem("token");
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    address: '',
    townCity: '',
    stateCountry: '',
    zipcode: '',
    phone: '',
    save: false,
    token:username,
    order_confirmation:''
});

const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: newValue,
    }));
};

  

  useEffect(() => {
    if (username !== null) {
      setIsLoggedIn(true);
    }
  }, []);

  const fetchData = async () => {
    try {
      setLoad(true);
      const cartResponse = await fetch(
        "https://nivsjewels.com/api/select?get_cart&token=" + username
      );
      const cartData = await cartResponse.json();
      if (cartData.status === 200) {
        setCart(cartData.data);
        setIsCount(true);
        settotalWgt(cartData.total.total_weight);
        settotalQty(cartData.total.total_qty);
        // console.log(cartData.data);
      } else {
        setIsCount(false);
      }
      setLoad(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('https://nivsjewels.com/api/insert', {
            method: 'POST',
            body: JSON.stringify(formData)
        });
        const data = await response.json();
        if(data.status===true){
            Swal.fire({
                title: 'Success',
                text: 'Order Placed Successfully',
                icon: 'success'
              }).then(()=>{
                    window.location.href='/myaccount'
              });
        }
        console.log('Form submitted:', data);

    } catch (error) {
        console.error('Error submitting form:', error);
        // Handle errors or display an error message to the user
    }
};

  useEffect(() => {
    fetchData();
  }, [username]);

  if (isLoaded) {
    return <Loader />;
  }

  return (
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
                  Checkout
                </h1>
              </div>
              <div className="breadcrumbs">
                <Link to="/" style={{ color: "#fff" }}>
                  Home
                </Link>
                <span className="delimiter" />
                <a href="#" style={{ color: "#fff" }}>
                  Checkout
                </a>
              </div>
            </div>
          </div>
          <div id="content" className="site-content" role="main">
            <div className="section-padding">
              <div
                className="section-container p-l-r"
                style={{ textAlign: "center" }}
              >

                 { 
                 isLoggedIn ? (
                     <>
                      {
                      isCount ? (
                          <>
                          <div className="shop-checkout">
                            <form                             
                              className="checkout"                           
                              autoComplete="off"
                              onSubmit={handleSubmit}
                            >
                              <div className="row">
                                <div className="col-xl-4 col-lg-5 col-md-12 col-12">
                                  <div className="checkout-review-order">
                                    <div className="checkout-review-order-table">
                                      <h3 className="review-order-title">Order summary</h3>
                                      <div className="cart-items">
                                      {cart.map((pro, index) => (
                                        <div className="cart-item" key={index}>
                                          <div className="info-product">
                                            <div className="product-thumbnail">
                                              <img
                                                  width={600}
                                                  height={600}
                                                  src={pro.capImg}
                                                  alt={pro.capName}                                                  
                                                  className="product-image"
                                                />
                                            </div>
                                            <div className="product-name">
                                            {pro.capName}
                                              <strong className="product-quantity">
                                                {pro.caQty} X {pro.capWgt}
                                              </strong>
                                            </div>
                                          </div>
                                          <div className="product-total">
                                            <span>
                                            { (parseFloat(pro.caQty) * parseFloat(pro.capWgt)).toFixed(2) }
                                            </span>
                                          </div>
                                        </div>
                                        ))}
                                      </div>
                                      <div className="cart-subtotal">
                                        <h2>Subtotal</h2>
                                        <div className="subtotal-price">
                                          <span>
                                            {totalWgt}
                                          </span>
                                        </div>
                                      </div>
                                      <div className="order-total">
                                        <h2>Total</h2>
                                        <div className="total-price">
                                          <strong>
                                            <span>
                                            {totalWgt}
                                            </span>
                                          </strong>
                                        </div>
                                      </div>
                                    </div>
                                    <div id="payment" className="checkout-payment">
                                      <div className="form-row place-order">
                                        <div className="terms-and-conditions-wrapper">
                                          <div className="privacy-policy-text" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-xl-8 col-lg-7 col-md-12 col-12">
                                  <div className="customer-details">
                                    <div className="billing-fields" id="billingAddress">
                                      <h3>Billing Details</h3>
                                      <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                                          <div
                                            className="billing-fields-wrapper"
                                            style={{ paddingBottom: 65 }}
                                          >
                                            <p className="form-row form-row-first validate-required">
                                              <label>
                                                First name{" "}
                                                <span className="required" title="required">
                                                  *
                                                </span>
                                              </label>
                                              <span className="input-wrapper">
                                                <input
                                                  type="text"
                                                  className="input-text"
                                                  name="firstName"
                                                  id="firstName"
                                                  
                                                  value={formData.fname}
                                                  onChange={handleChange}
                                                />
                                              </span>
                                            </p>
                                            <p className="form-row form-row-last validate-required">
                                              <label>
                                                Last name{" "}
                                                <span className="required" title="required">
                                                  *
                                                </span>
                                              </label>
                                              <span className="input-wrapper">
                                                <input
                                                  type="text"
                                                  className="input-text"
                                                  name="lastName"
                                                  id="lastName"                                                 
                                                  value={formData.lname}
                                                  onChange={handleChange}
                                                />
                                              </span>
                                            </p>
                                            <p className="form-row form-row-wide validate-required validate-phone">
                                              <label>
                                                Phone{" "}
                                                <span className="required" title="required">
                                                  *
                                                </span>
                                              </label>
                                              <span className="input-wrapper">
                                                <input
                                                  type="tel"
                                                  className="input-text"
                                                  name="phone"
                                                  id="phone"
                                                  
                                                  value={formData.phone}
                                                  onChange={handleChange}
                                                />
                                              </span>
                                            </p>
                                          </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                                          <div
                                            className="billing-fields-wrapper"
                                            style={{ paddingBottom: 65 }}
                                          >
                                            <p className="form-row address-field validate-required form-row-wide">
                                              <label>
                                                Address{" "}
                                                <span className="required" title="required">
                                                  *
                                                </span>
                                              </label>
                                              <span className="input-wrapper">
                                                <input
                                                  type="text"
                                                  className="input-text"
                                                  name="address"
                                                  id="address"
                                                  placeholder="House number and street name"                                                 
                                                  value={formData.add}
                                                  onChange={handleChange}
                                                />
                                              </span>
                                            </p>
                                            <p className="form-row address-field validate-required form-row-wide">
                                              <label htmlFor="billing_city" className="">
                                                Town / City{" "}
                                                <span className="required" title="required">
                                                  *
                                                </span>
                                              </label>
                                              <span className="input-wrapper">
                                                <input
                                                  type="text"
                                                  className="input-text"
                                                  name="townCity"
                                                  id="townCity"
                                                  value={formData.city}
                                                  onChange={handleChange}
                                                />
                                              </span>
                                            </p>
                                            <p className="form-row address-field validate-required validate-state form-row-wide">
                                              <label>
                                                State / County{" "}
                                                <span className="required" title="required">
                                                  *
                                                </span>
                                              </label>
                                              <span className="input-wrapper">
                                                  <input
                                                        type="text"
                                                        name="stateCountry"
                                                        id="stateCountry"
                                                        placeholder="State / Country"
                                                        className="form-control"
                                                        value={formData.state}
                                                        onChange={handleChange}
                                                    />
                                              </span>
                                            </p>
                                            <p className="form-row address-field validate-required validate-postcode form-row-wide">
                                              <label>
                                                Postcode / ZIP{" "}
                                                <span className="required" title="required">
                                                  *
                                                </span>
                                              </label>
                                              <span className="input-wrapper">
                                              <input
                                                    type="text"
                                                    name="zipcode"
                                                    id="zipcode"
                                                    placeholder="Postcode / ZIP"
                                                    className="form-control"
                                                    value={formData.zip}
                                                    onChange={handleChange}
                                                />
                                              </span>
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12">
                                  <input type="hidden" name="order_confirmation" />
                                  <button
                                    type="submit"
                                    className="button alt btn-dark"
                                    name="checkout_place_order"
                                    value="Place order"
                                  >
                                    Place order
                                  </button>
                                </div>
                                <br />
                                <br />
                              </div>
                            </form>
                          </div>
                          </>
              
                          ) : (
                          <>
                            <div className="col-12 text-center">
                              <img src="/assets/images/cart_is_empty.png" />
                            </div>
                          </>

                          )
                          }
                     </>
                    ) : (
                      <>
                          <div className="col-12 text-center">
                            <h5>
                              <Link to="/login">Login</Link> to view Cart
                            </h5>
                          </div>
                      </>
                    )
                    
                    }
              
              </div>
           
            </div>
          </div>
          {/* #content */}
        </div>
        {/* #primary */}
      </div>
      {/* #main-content */}
    </div>

  )
}

export default Checkout