import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/pageloader";
const Gridproduct = (props) => {
  // const { cat, subcat, page } = useParams();

  // let navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [isCount, setCount] = useState(false);
  const [pages, setPage] = useState([]);
  const [isLoaded, setLoad] = useState(true);

  document.title = `Nivsjewels - shop/${props.cat}/${props.subcat}`;

  useEffect(() => {
    setLoad(true);
    const fetchData = async () => {
      try {
        const proRes = await fetch(
          `https://utsarvajewels.com/api/crud?get_product_details_overall&cat=${props.cat}&&subcat=${props.subcat}&&page=${props.page}`
        );
        const proData = await proRes.json();

        if (proData.status.status == 200) {
          setCount(true);          
          setProducts(proData.data);
          setPage(proData.status.page);          
        } else {
          setCount(false);
        }
        setLoad(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [props]);
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [props])

  var minuspage, addpage = "";
  var currentpage = props.page;


  if (currentpage == 1) {
    minuspage = 1
  } else {
    minuspage = parseInt(currentpage) - 1;
  }
  addpage = parseInt(currentpage) + 1;

  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      setLoad(false);
    }, 2000);
  }, []);

  if (isLoaded) {
    return <Loader />;
  }

  return (
    <>


      <div className="row">

        {

          isCount ? (

            products.map((pro, index) => (

              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6" key={index}>
                <div className="products-entry clearfix product-wapper ">
                  <div className="products-thumb ">
                    <div className="product-thumb-hover img-water">
                      <Link to={`/product/${pro.no}`}>
                        <img width="600" height="600" src={pro.image} className="post-image" alt={pro.no} />
                        <img width="600" height="600" src={pro.image} className="hover-image back" alt={pro.no} />
                      </Link>
                    </div>
                    <div className="product-button" style={{ display: "none" }}>

                      <span className="product-quickview" data-title="Quick View">
                        <Link to={`/product/${pro.no}`} className="quickview quickview-button">Quick View
                          <i className="icon-search"></i></Link>
                      </span>
                    </div>
                  </div>
                  <div className="products-content">
                    <div className="contents text-center">
                      <div className="rating">
                        <div className="star star-3"></div>
                        <span className="count">(5 review)</span>
                      </div>
                      <h3 className="product-title">
                        <Link to={`/product/${pro.no}`}>{pro.no}</Link>
                      </h3>
                      <span className="price">Wgt: {pro.weight}</span>
                    </div>
                  </div>
                </div>
              </div>



            ))

          ) : (

            <div className="col-12 text-center" >
              <img src='https://www.utsarvajewels.com/images/empty_data.jpg' id='imagenodata' />
            </div>


          )


        }

      </div>

      {

        isCount ? (

          <div>
            <center>
              <nav className="pagination">

                <ul className="page-numbers">
                  <li><Link className="prev page-numbers" to={`/shop/${props.cat}/${props.subcat}/${minuspage}`}>Previous</Link></li>


                  {pages.map((page, index) => (
                    <li key={index}>

                      {
                        page.i == props.page ? (
                          <Link className="pg-active" to={`/shop/${props.cat}/${props.subcat}/${page.i}`}>{page.i}</Link>
                        ) : (
                          <Link className="" to={`/shop/${props.cat}/${props.subcat}/${page.i}`}>{page.i}</Link>
                        )
                      }

                    </li>
                  ))}

                  <li><Link className="next page-numbers" to={`/shop/${props.cat}/${props.subcat}/${addpage}`}>Next</Link></li>
                </ul>
              </nav>
            </center>
          </div>

        ) : (

          <></>

        )

      }

    </>
  )
}

export default Gridproduct;
