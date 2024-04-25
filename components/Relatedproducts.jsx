import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Relatedproducts = (props) => {

    let navigate = useNavigate();
    const [products, setProducts] = useState([]);
    
    
  useEffect(() => {
    const fetchData = async () => {
        try {
          const proRes = await fetch(
            `https://utsarvajewels.com/api/crud?get_product_details_related&cat=${props.cat}&&subcat=${props.subcat}`
          );
          const proData = await proRes.json();
    
          if (proData.status === 200) {          
              setProducts(proData.data);          
          } else {
            
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
    
    fetchData();
  }, [props]);
 

  return (
    <>
     <div
            className="row"
           
            >
        {products.map((pro, index) => (
       
                        
                            <div className="col-lg-3 col-md-4 col-sm-2"  key={index}>
                                <div className="items">
                                    <div className="products-entry clearfix product-wapper">
                                    <div className="products-thumb">
                                        <div className="product-lable">
                                        <div className="hot">Hot</div>
                                        </div>
                                        <div className="product-thumb-hover">
                                        <Link to={`/product/${pro.no}`}>
                                            <img
                                            width={600}
                                            height={600}
                                            src={`${pro.image}`}
                                            
                                            className="post-image"
                                            alt=""
                                            />
                                            {/* <img
                                            width={600}
                                            height={600}
                                            src={`${pro.image}`}                                            
                                            className="hover-image back"
                                            alt=""
                                            /> */}
                                        </Link>
                                        </div>
                                        
                                    </div>
                                    <div className="products-content">
                                        <div className="contents text-center">
                                        <h3 className="product-title">
                                            <Link to={`/product/${pro.no}`}>
                                            {pro.no}
                                            </Link>
                                        </h3>
                                        <div className="rating">
                                            <div className="star star-5" />
                                        </div>
                                        <span className="price">
                                            Wgt: {pro.weight}
                                        </span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                         
                        

            ))}
            </div>
    </>

  )
}

export default Relatedproducts
