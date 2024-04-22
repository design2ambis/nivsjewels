import React from 'react'

const Checkout = () => {
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
            <a href="index.php" style={{ color: "#fff" }}>
              Home
            </a>
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
            {/*?php 
                      if(isset($_SESSION['CUSTOMER_LOGIN']) && $_SESSION['CUSTOMER_LOGIN']="YES"){ 
                          $cId = $_SESSION['CUSTOMER_ID'];
                          $res = mysqli_query($ncon,"select caId,capId,caQty from tbl_cart where cauId = '$cId'  && caSta = '0' && caQty !='' && capId!='0'");
                              if(mysqli_num_rows($res)*/}
            0){"{"}
            ?&gt;
            <div className="shop-checkout">
              <form
                id="checkout"
                method="post"
                className="checkout"
                action="#"
                autoComplete="off"
              >
                <div className="row">
                  <div className="col-xl-4 col-lg-5 col-md-12 col-12">
                    <div className="checkout-review-order">
                      <div className="checkout-review-order-table">
                        <h3 className="review-order-title">Order summary</h3>
                        <div className="cart-items">
                          {/*?php    
                                              $x=1;
                                                  while($row = mysqli_fetch_assoc($res)){ 
                                                      
                                                      $result=mysqli_query($con,"select dt.design_image, dt.design_no, ct.category_name, dsc.sub_cat_name, dt.design_weight  from design_tbl dt 
                                                      INNER JOIN category_tbl ct on dt.design_cat = ct.category_id 
                                                      INNER JOIN sub_category_tbl dsc on dt.design_sub_cat = dsc.sub_cat_id 
                                                      where dt.design_sta='1' && dt.design_id='".$row['capId']."' ");
                                                      
                                                      
                                                      $list=mysqli_fetch_assoc($result);
                                               ?*/}
                          <div className="cart-item">
                            <div className="info-product">
                              <div className="product-thumbnail">
                                <img
                                  width={600}
                                  height={600}
                                  src="<?php echo DESIGN_SITE.$list['design_image'] ?>"
                                  onerror="this.src='assets/images/No_Image_Available.jpg';"
                                  alt=""
                                />
                              </div>
                              <div className="product-name">
                                {/*?php echo $list['design_no'] ?*/}
                                <strong className="product-quantity">
                                  QTY : {/*?php echo $row['caQty'] ?*/}
                                </strong>
                              </div>
                            </div>
                            <div className="product-total">
                              <span>
                                {/*?php echo $list['design_weight'] ?*/}
                              </span>
                            </div>
                          </div>
                          {/*?php 
                                                  $ovrl_tot += $row['caQty']*$list['design_weight'];
                                                  $x++;} 
                                              ?*/}
                        </div>
                        <div className="cart-subtotal">
                          <h2>Subtotal</h2>
                          <div className="subtotal-price">
                            <span>
                              {/*?php echo number_format($ovrl_tot,2) ?*/}
                            </span>
                          </div>
                        </div>
                        <div className="order-total">
                          <h2>Total</h2>
                          <div className="total-price">
                            <strong>
                              <span>
                                {/*?php echo number_format($ovrl_tot,2) ?*/}
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
                                    defaultValue=""
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
                                    defaultValue=""
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
                                    defaultValue=""
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
                                    defaultValue=""
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
                                    defaultValue=""
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
                                  <select
                                    name="stateCountry"
                                    id="stateCountry"
                                    className="state-select custom-select"
                                    style={{ width: "100%" }}
                                  >
                                    {/*?php 
  																$state = mysqli_query($ncon,"select state from state_list");
  																while($list = mysqli_fetch_assoc($state)){
  																    echo "<option value='".$list['state']."'*/}
                                    ".$list['state']."";
                                    {"}"}
                                    ?&gt;
                                  </select>
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
                                    className="input-text"
                                    name="zipcode"
                                    id="zipcode"
                                    defaultValue=""
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
            {/*?php }else{ ?*/}
            <img src="assets/images/cart_is_empty.png" />
            {/*?php } } ?*/}
          </div>
          {/*<div class="proceed-to-checkout">		*/}
          {/*	<a href="checkout.php" class="checkout-button button dark" onclick="confirmOrder()">*/}
          {/*	    Submit*/}
          {/*	</a>*/}
          {/*</div>*/}
          {/*<div style="text-align:center" >*/}
          {/*                   <button type="button" onclick="confirmOrder()" class="btn btn-dark" style="width: 150px;">SUBMIT</button>*/}
          {/*               </div>*/}
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