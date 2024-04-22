import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import Gridproduct from '../components/Gridproduct';

const Product = () => {

  let navigate = useNavigate();
  const { cat, subcat, page } = useParams();

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
                  {subcat}
                </h1>
              </div>
              <div className="breadcrumbs" style={{ color: "#fff" }}>
                <a href="index" style={{ color: "#fff" }}>
                  Home
                </a>
                <span className="delimiter" />
                <a href="#!" style={{ color: "#fff" }}>
                  {cat}
                </a>
                <span className="delimiter" />
                {subcat}
              </div>
            </div>
          </div>
          <div id="content" className="site-content" role="main">
            <div className="section-padding">
              <div className="section-container p-l-r">
                <div className="row">

                  <div className="col-xl-12 col-lg-12 col-md-12 col-12">

                    <div className="tab-content greybg ">
                      <div className="tab-pane fade show active" id="layout-grid" role="tabpanel" >
                        <div className="products-list grid ">
                          <div className="filter_data">
                            <Gridproduct cat={cat} subcat={subcat} page={page} />
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="layout-list"
                        role="tabpanel"
                      ></div>
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

export default Product