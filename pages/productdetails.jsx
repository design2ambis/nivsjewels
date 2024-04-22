import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Relatedproducts from "../components/Relatedproducts";

const Productdetails = () => {

  const { prono } = useParams();
  const [product, setproduct] = useState([]);
  const [image, setImage] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const ProductRes = await fetch(
          `https://utsarvajewels.com/api/crud?get_product&designno=${prono}`
        );
        const proData = await ProductRes.json();
       
        if (proData) {
          setproduct(proData);         
          setImage(proData.design_image);         
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [prono]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  

  const handleCartSubmit= async (e) => {
    e.preventDefault();
    const form = new FormData();
    for (const key in formData) {
      form.append(key, formData[key]);
    }

    try {
      const response = await fetch("https://hariomgolds.com/api/update", {
        method: "POST",
        body: form,
      });
      const data = await response.json();
        if(data.status===true){
          alert("Add successfully");
          location.reload();
        }else{
          alert("Oops Something wrong");
        }
    } catch (error) {
      console.error("Error:", error);      
    }
  };

 

  const [formData, setFormData] = useState({
    qty: '1',
    pid: '',
    prono:'',
    add_cart: '',
    token: '',
    prowgt:'',
    proimg:''
  });

  const handleIncrease = () => {
    setFormData((prevData) => ({ ...prevData, qty: parseInt(prevData.qty) + 1 }));
  };

  const handleDecrease = () => {
    setFormData((prevData) => ({ ...prevData, qty: parseInt(prevData.qty) - 1 }));
  };

  useEffect(() => {
    // Update formData when product.design_id or localStorage token changes
    const proId = product.design_id;
    const proNo = product.design_no;
    const proWgt = product.design_weight;
    const proImg = product.design_image;
    const username = localStorage.getItem("token");

    setFormData((prevData) => ({
      ...prevData,
      pid: proId,
      prono:proNo,
      prowgt:proWgt,
      token: username,
      proimg:proImg
    }));
  }, [product]);


  return (
    <div id="site-main" className="site-main">
  <div id="main-content" className="main-content">
    <div id="primary" className="content-area">
      <div id="title" className="page-title">
        <div className="section-container" style={{ paddingTop: 30 }}>
          <div className="content-title-heading">
            <h1
              className="text-title-heading"
              style={{ fontFamily: "serif", color: "#fff" }}
            >
              {product.design_no}
            </h1>
          </div>
          <div className="breadcrumbs" style={{ color: "#fff" }}>
            <Link to="/" style={{ color: "#fff" }}>
              Home
            </Link>
            <span className="delimiter" />
            <a href="#!" style={{ color: "#fff" }}>
              {product.category_name}
            </a>
            <span className="delimiter" />
            <a href="#!" style={{ color: "#fff" }}>
              {product.sub_cat_name}
            </a>
            <span className="delimiter" />
            {product.design_no}
          </div>
        </div>
      </div>
      <div id="content" className="site-content" role="main">
        <div
          className="shop-details zoom"
          data-product_layout_thumb="scroll"
          data-zoom_scroll="true"
          data-zoom_contain_lens="true"
          data-zoomtype="inner"
          data-lenssize={200}
          data-lensshape="square"
          data-lensborder=""
          data-bordersize={2}
          data-bordercolour="#f9b61e"
          data-popup="false"
        >
          <div className="product-top-info">
            <div className="section-padding">
              <div className="section-container p-l-r">
                <div className="row">
                  <div className="product-images col-lg-7 col-md-12 col-12">
                    <div className="row">
                      <div className="col-md-2">
                        <div className="content-thumbnail-scroll">
                          <div
                            className="image-thumbnail slick-carousel slick-vertical"
                            data-asnavfor=".image-additional"
                            data-centermode="true"
                            data-focusonselect="true"
                            data-columns4={5}
                            data-columns3={4}
                            data-columns2={4}
                            data-columns1={4}
                            data-columns={4}
                            data-nav="true"
                            data-vertical='"true"'
                            data-verticalswiping='"true"'
                          >
                            <div className="img-item ">
                              <span className="img-thumbnail-scroll">
                                <img
                                  width={600}
                                  height={600}
                                  src={product.design_image}                                  
                                  alt={product.design_no}
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-10">
                        <div className="scroll-image main-image">
                          <div
                            className="image-additional slick-carousel"
                            data-asnavfor=".image-thumbnail"
                            data-fade="true"
                            data-columns4={1}
                            data-columns3={1}
                            data-columns2={1}
                            data-columns1={1}
                            data-columns={1}
                            data-nav="true"
                          >
                            <div className="img-item">
                              <img
                                width={900}
                                height={900}
                                src={product.design_image}                                
                                alt={product.design_no}
                                title={product.design_no}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-info col-lg-5 col-md-12 col-12 ">
                    <h1 className="title">{product.sub_cat_name}</h1>
                    <span className="price">
                      <ins>
                        <span>{product.design_no}</span>
                      </ins>
                    </span>
                    <div className="rating">
                      <div className="star star-5" />
                      <div className="review-count">
                        (3<span> reviews</span>)
                      </div>
                    </div>
                    <div
                      className="description"
                      style={{ textAlign: "justify" }}
                    > 
                      <p>
                      
                        Introducing our exquisite Gold Bangle Collection:
                        Elevate your style and add a touch of timeless elegance
                        with our stunning Gold Bangles. Crafted with precision
                        and attention to detail, each piece in our collection is
                        a testament to exquisite craftsmanship and unparalleled
                        beauty. Whether you're looking for a statement piece or
                        a delicate accessory, our gold bangles are designed to
                        complement any occasion and suit every taste. Material:
                        Our Gold Bangles are meticulously crafted using
                        high-quality, 18-karat gold. This premium material
                        ensures a luxurious finish, durability, and a lustrous
                        shine that will last for generations. We carefully
                        select our gold to provide you with a piece of jewelry
                        that exudes brilliance and sophistication.
                        
                      </p>
                    </div>                    
                    <form onSubmit={handleCartSubmit} id="cartForm" autoComplete="off" name="cartForm" className="buttons">
                      <div className="add-to-cart-wrap">
                        <div className="quantity">
                          <button type="button" className="plus"  onClick={handleIncrease}>  + </button>
                          <input
                            type="number"
                            className="qty"
                            id="qty"
                            step={1}
                            min={0}
                            max=""
                            name="quantity"
                            defaultValue={1}
                            title="Qty"
                            size={4}
                            placeholder=""
                            inputMode="numeric"
                            autoComplete="off"
                            onChange={handleChange} 
                      readOnly value={formData.qty}
                          />
                          <button
                            type="button"
                            className="minus"
                            onClick={handleDecrease}
                          >
                            -
                          </button>
                        </div>
                        <div className="btn-add-to-cart">
                          <a
                            href="#!"
                            tabIndex={0}
                           
                          >
                            Add to cart
                          </a>
                         
                        </div>
                      </div>                      
                      
                      <input type="hidden" name="add_cart" />
                    <input type="hidden" name="pid" id="pid" onChange={handleChange} value={formData.pid} />
                    <input type="hidden" name="prono" id="prono" onChange={handleChange} value={formData.prono} />
                    <input type="hidden" name="prowgt" id="prowgt" onChange={handleChange} value={formData.prowgt} />
                    <input type="hidden" name="proimg" id="proimg" onChange={handleChange} value={formData.proimg} />
                    <input type="hidden" name="token" id="token" onChange={handleChange} value={formData.username} />              
                    </form>
                    <div className="product-meta">
                      
                      <span className="posted-in">
                        Category:{" "}
                        <a href="#!" rel="tag">
                          {product.sub_cat_name}
                        </a>
                      </span>
                      <span className="tagged-as">
                        No:{" "}
                        <a href="#!" rel="tag">
                          {product.design_no}
                        </a>
                      </span>
                    </div>
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="product-tabs">
            <div className="section-padding" style={{ paddingBottom: 90 }}>
              <div className="section-container p-l-r">
                <div className="product-tabs-wrap">
                  <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        data-toggle="tab"
                        href="#description"
                        role="tab"
                      >
                        Description
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-toggle="tab"
                        href="#additional-information"
                        role="tab"
                      >
                        Additional information
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-toggle="tab"
                        href="#reviews"
                        role="tab"
                      >
                        Reviews (1)
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div
                      className="tab-pane fade show active"
                      id="description"
                      role="tabpanel"
                    >
                      <p style={{ textAlign: "justify" }}>
                      
                        Introducing our exquisite Gold Bangle Collection:
                        Elevate your style and add a touch of timeless elegance
                        with our stunning Gold Bangles. Crafted with precision
                        and attention to detail, each piece in our collection is
                        a testament to exquisite craftsmanship and unparalleled
                        beauty. Whether you're looking for a statement piece or
                        a delicate accessory, our gold bangles are designed to
                        complement any occasion and suit every taste. Material:
                        Our Gold Bangles are meticulously crafted using
                        high-quality, 18-karat gold. This premium material
                        ensures a luxurious finish, durability, and a lustrous
                        shine that will last for generations. We carefully
                        select our gold to provide you with a piece of jewelry
                        that exudes brilliance and sophistication.
                        
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="additional-information"
                      role="tabpanel"
                    >
                      <table className="product-attributes">
                        <tbody>
                          <tr className="attribute-item">
                            <th className="attribute-label">Color</th>
                            <td className="attribute-value">
                              Antique, Chestnut, Grullo
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="tab-pane fade" id="reviews" role="tabpanel">
                      <div id="reviews" className="product-reviews">
                        <div id="comments">
                          <h2 className="reviews-title">
                            1 review for <span>{/*?php echo $subName ?*/}</span>
                          </h2>
                          <ol className="comment-list">
                            <li className="review">
                              <div className="content-comment-container">
                                <div className="comment-container">
                                  <img
                                    src="media/user.jpg"
                                    className="avatar"
                                    height={60}
                                    width={60}
                                    alt=""
                                  />
                                  <div className="comment-text">
                                    <div className="rating small">
                                      <div className="star star-5" />
                                    </div>
                                    <div className="review-author">
                                      Peter Capidal
                                    </div>
                                    <div className="review-time">
                                      January 12, 2023
                                    </div>
                                  </div>
                                </div>
                                <div className="description">
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Nam fringilla augue nec est
                                    tristique auctor. Donec non est at libero
                                    vulputate rutrum. Morbi ornare lectus quis
                                    justo gravida semper. Nulla tellus mi,
                                    vulputate adipiscing cursus eu, suscipit id
                                    nulla.
                                  </p>
                                </div>
                              </div>
                            </li>
                          </ol>
                        </div>
                        <div id="review-form">
                          <div id="respond" className="comment-respond">
                            <span
                              id="reply-title"
                              className="comment-reply-title"
                            >
                              Add a review
                            </span>
                            <form
                              action="#"
                              method="post"
                              id="comment-form"
                              className="comment-form"
                            >
                              <p className="comment-notes">
                                <span id="email-notes">
                                  Your email address will not be published.
                                </span>{" "}
                                Required fields are marked{" "}
                                <span className="required">*</span>
                              </p>
                              <div className="comment-form-rating">
                                <label htmlFor="rating">Your rating</label>
                                <p className="stars">
                                  <span>
                                    <a className="star-1" href="#">
                                      1
                                    </a>
                                    <a className="star-2" href="#">
                                      2
                                    </a>
                                    <a className="star-3" href="#">
                                      3
                                    </a>
                                    <a className="star-4" href="#">
                                      4
                                    </a>
                                    <a className="star-5" href="#">
                                      5
                                    </a>
                                  </span>
                                </p>
                              </div>
                              <p className="comment-form-comment">
                                <textarea
                                  id="comment"
                                  name="comment"
                                  placeholder="Your Reviews *"
                                  cols={45}
                                  rows={8}
                                  aria-required="true"
                                  required=""
                                  defaultValue={""}
                                />
                              </p>
                              <div className="content-info-reviews">
                                <p className="comment-form-author">
                                  <input
                                    id="author"
                                    name="author"
                                    placeholder="Name *"
                                    type="text"
                                    defaultValue=""
                                    size={30}
                                    aria-required="true"
                                    required=""
                                  />
                                </p>
                                <p className="comment-form-email">
                                  <input
                                    id="email"
                                    name="email"
                                    placeholder="Email *"
                                    type="email"
                                    defaultValue=""
                                    size={30}
                                    aria-required="true"
                                    required=""
                                  />
                                </p>
                                <p className="form-submit">
                                  <input
                                    name="submit"
                                    type="submit"
                                    id="submit"
                                    className="submit"
                                    defaultValue="Submit"
                                  />
                                </p>
                              </div>
                            </form>
                            {/* #respond */}
                          </div>
                        </div>
                        <div className="clear" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="product-related">
            <div className="section-padding">
              <div className="section-container p-l-r">
                <div className="block block-products slider">
                  <div className="block-title">
                    <h2>Related Products</h2>
                  </div>
                  <div className="block-content">
                    <div className="content-product-list slick-wrap">
                      <Relatedproducts cat={product.category_name} subcat={product.sub_cat_name} />
                    </div>
                  </div>
                </div>
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
</div>

  )
}

export default Productdetails