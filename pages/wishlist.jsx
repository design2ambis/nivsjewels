import React,{useState,useEffect} from 'react'
import Loader from '../components/pageloader';

const Wishlist = () => {
  document.title = "Nivsjewels - Wishlist";
  const [isLoaded, setLoad] = useState(true);
  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      setLoad(false);
    }, 1000);
  }, []);
  
  
  
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
                  Wishlist
                </h1>
              </div>
              <div className="breadcrumbs">
                <a href="index.php" style={{ color: "#fff" }}>
                  Home
                </a>
                <span className="delimiter" />
                <a href="#!" style={{ color: "#fff" }}>
                  Wishlist
                </a>
              </div>
            </div>
          </div>
          <div id="content" className="site-content" role="main">
            <div className="section-padding" style={{ paddingBottom: 90 }}>
              <div className="section-container p-l-r">
                <div className="shop-wishlist">
                  <h1
                    className="text-title-heading"
                    style={{ textAlign: "center" }}
                  >
                    Wishlist products
                  </h1>
                  {/*?php 
                      if(isset($_SESSION['CUSTOMER_LOGIN']) && $_SESSION['CUSTOMER_LOGIN']="YES"){ 
                          $cId = $_SESSION['CUSTOMER_ID'];
                          $res = mysqli_query($ncon,"select * from tbl_wishlist where wuId = '$cId' ");
                              if(mysqli_num_rows($res)*/}
                  0){"{"}
                  ?&gt;
                  <table className="wishlist-items">
                    <thead style={{ textAlign: "center" }}>
                      <tr>
                        <th style={{ width: "10%" }}>S.No</th>
                        <th style={{ width: "30%" }}>Product image</th>
                        <th style={{ width: "25%" }}>Product name</th>
                        <th style={{ width: "25%" }}>Weight</th>
                        <th style={{ width: "10%" }}>remove</th>
                      </tr>
                    </thead>
                    <tbody style={{ textAlign: "center" }}>
                      {/*?php
                                  $x=1;
                                  while($row = mysqli_fetch_assoc($res)){ 
                                      
                                      $result=mysqli_query($con,"select dt.design_image, dt.design_no, ct.category_name, dsc.sub_cat_name, dt.design_weight, dt.design_id  from design_tbl dt 
                                      INNER JOIN category_tbl ct on dt.design_cat = ct.category_id 
                                      INNER JOIN sub_category_tbl dsc on dt.design_sub_cat = dsc.sub_cat_id 
                                      where dt.design_sta='1' && dt.design_id='".$row['wpId']."' ");
                                      
                                      
                                      $list=mysqli_fetch_assoc($result);
                               ?*/}
                      <tr
                        className="wishlist-item"
                        id="id_<?php echo $row['wId'] ?>"
                      >
                        <td>{/*?php echo $x ?*/}</td>
                        <td className="wishlist-item-image">
                          <a href="productdetails.php?id=<?php echo encrypt($list['design_id']) ?>">
                            <img
                              width={600}
                              height={600}
                              src="<?php echo DESIGN_SITE.$list['design_image'] ?>"
                              onerror="this.src='assets/images/No_Image_Available.jpg';"
                              alt="<?php echo $list['design_no'] ?>"
                            />
                          </a>
                        </td>
                        <td className="wishlist-item-actions">
                          <div className="wishlist-item-stock">
                            {/*In stock*/}
                            <dt>
                              Design no :{" "}
                              <span style={{ fontWeight: "lighter" }}>
                                {/*?php echo $list['design_no'] ?*/}
                              </span>
                            </dt>
                            <dt>
                              Category :{" "}
                              <span style={{ fontWeight: "lighter" }}>
                                {/*?php echo $list['category_name'] ?*/}
                              </span>
                            </dt>
                            <dt>
                              Sub-category :{" "}
                              <span style={{ fontWeight: "lighter" }}>
                                {/*?php echo $list['sub_cat_name'] ?*/}
                              </span>
                            </dt>
                          </div>
                          <div className="wishlist-item-add">
                            <div className="" data-title="Add to cart">
                              <a
                                rel="nofollow"
                                href="#"
                                className="product-btn"
                                onclick="addCart('<?php echo $row['wpId'] ?>')"
                              >
                                Add to cart
                              </a>
                            </div>
                          </div>
                        </td>
                        <td className="wishlist-item-info">
                          <div className="wishlist-item-name">
                            <a href="productdetails.php?id=<?php echo encrypt($list['design_id']) ?>">
                              {" "}
                              Quantity : 1
                            </a>
                          </div>
                          <div
                            className="wishlist-item-price"
                            id="wei_<?php echo $x ?>"
                          >
                            <span>
                              Weight : {/*?php echo $list['design_weight'] ?*/}
                            </span>
                          </div>
                          {/*<div class="wishlist-item-time"> June 6,2022</div>*/}
                        </td>
                        <td>
                          <a
                            href="#!"
                            onclick="wish_remove('<?php echo $row['wId'] ?>','<?php echo $x ?>')"
                            className="edit"
                          >
                            <i>Remove</i>
                          </a>
                        </td>
                      </tr>
                      {/*?php $x++;} ?*/}
                    </tbody>
                    <tbody>
                      <tr>
                        <td colSpan={7} style={{ textAlign: "end" }}>
                          <input type="hidden" defaultValue={1} id="qty" />
                          <button
                            type="button"
                            className="btn btn-default btn-lg fright"
                            onclick="clearWish()"
                          >
                            clear wishlist
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/*?php }else{ ?*/}
                <div className="col-12 text-center">
                  <img src="assets/images/empty-wishlist.png" />
                </div>
                {/*?php } ?*/}
                {/*?php }else{ ?*/}
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
                    to View Wishlist
                  </h3>
                </div>
                {/*?php } ?*/}
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

export default Wishlist