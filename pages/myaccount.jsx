import React, { useState, useEffect } from 'react'
import Loader from '../components/pageloader';
import { Link } from 'react-router-dom';


const Myaccount = () => {
  document.title = "Nivsjewels - Myaccount";
  const [isLoaded, setLoad] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isCount, setIsCount] = useState(false);
  const [cart, setCart] = useState([]);

  const username = localStorage.getItem("token");
  const name = localStorage.getItem("name");



  useEffect(() => {
    if (username !== null) {
      setIsLoggedIn(true);
    }
  }, []);

  const fetchData = async () => {
    try {
      const cartResponse = await fetch('https://nivsjewels.com/api/select?get_order&token=' + username);
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

  function Status(type) {
    if (type == '1') {
      return <button className='btn btn-warning text-warning' style={{ backgroundColor: "#eb9316" }}>Pending</button>;
    } else if (type == '2') {
      return <button className='btn btn-success' style={{ backgroundColor: "#419641" }}>Order Accept</button>;
    } else {
      return <button class='btn btn-primary' style={{ backgroundColor: "#2e6da4" }}>Order complete</button>;
    }
  }


  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      setLoad(false);
    }, 1000);
  }, []);

  const handleLogout = () => {
    // console.log("test");
    localStorage.removeItem("token");
    window.location.href = "/login";
  }

  if (isLoaded) {
    return <Loader />;
  }
  return (
    <div id="site-main" className="site-main">
      <div id="main-content" className="main-content">
        <div id="primary" className="content-area">
          <div id="title" className="page-title">
            <div className="section-container">
              <div className="content-title-heading">
                <h1 className="text-title-heading" style={{ color: "#fff" }}>My Account</h1>
              </div>
              <div className="breadcrumbs" style={{ color: "#fff" }}>
                <Link to="/" style={{ color: "#fff" }}>Home</Link>
                <span className="delimiter" style={{ color: "#fff" }} />
                My Account
              </div>
            </div>
          </div>
          <div id="content" className="site-content" role="main">
            <div className="section-padding">
              <div className="section-container p-l-r">
                <div className="page-my-account">
                  {
                    isLoggedIn ? (
                      <>
                        {
                          isCount ? (
                            <>
                              <div className="my-account-wrap clearfix">
                                <nav className="my-account-navigation">
                                  <ul className="nav nav-tabs">
                                    <li className="nav-item">
                                      <a
                                        className="nav-link active"
                                        data-toggle="tab"
                                        href="#dashboard"
                                        role="tab"
                                      >
                                        Dashboard
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a
                                        className="nav-link"
                                        data-toggle="tab"
                                        href="#orders"
                                        role="tab"
                                      >
                                        Orders
                                      </a>
                                    </li>
                                    {/* <li className="nav-item">
                                      <a
                                        className="nav-link"
                                        data-toggle="tab"
                                        href="#addresses"
                                        role="tab"
                                      >
                                        Addresses
                                      </a>
                                    </li> */}
                                    {/* <li className="nav-item">
                                      <a
                                        className="nav-link"
                                        data-toggle="tab"
                                        href="#account-details"
                                        role="tab"
                                      >
                                        Account details
                                      </a>
                                    </li> */}
                                    <li className="nav-item">
                                      <a className="nav-link" href="#!" onClick={handleLogout}>
                                        Logout
                                      </a>
                                    </li>
                                  </ul>
                                </nav>
                                <div className="my-account-content tab-content">
                                  <div
                                    className="tab-pane fade show active"
                                    id="dashboard"
                                    role="tabpanel"
                                  >
                                    <div className="my-account-dashboard">
                                      <p>
                                        Hello <strong>{name}</strong> (not <strong>{name}</strong>
                                        ? <a href="#!" onClick={handleLogout}>Log out</a>)
                                      </p>
                                      <p>
                                        From your account dashboard you can view your{" "}
                                        <a href="#!">recent orders</a>, manage your{" "}
                                        <a href="#!">shipping and billing addresses</a>, and{" "}
                                        <a href="#!">edit your password and account details</a>.
                                      </p>
                                    </div>
                                  </div>
                                  <div className="tab-pane fade" id="orders" role="tabpanel">
                                    <div className="my-account-orders">
                                      <div className="table-responsive">
                                        <table className="table">
                                          <thead>
                                            <tr>
                                              <th>Sno</th>
                                              <th>Order</th>
                                              <th>Qty</th>
                                              <th>Status</th>
                                              <th>Actions</th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            {cart.map((pro, index) => (

                                              <tr key={pro.id}>
                                                <td>{index + 1}</td>
                                                <td>NI-{pro.Orderno}</td>
                                                <td>{pro.Qty}</td>
                                                <td>{Status(pro.OSta)}</td>
                                                <td>
                                                  <Link to={`/order-detail/${pro.id}`} className="btn-small d-block">
                                                    View
                                                  </Link>
                                                </td>
                                              </tr>
                                            ))}
                                          </tbody>
                                        </table>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="tab-pane fade" id="addresses" role="tabpanel">
                                    <div className="my-account-addresses">
                                      <p>
                                        The following addresses will be used on the checkout
                                        page by default.
                                      </p>
                                      <div className="addresses">
                                        <div className="addresses-col">
                                          <header className="col-title">
                                            <h3>Billing address</h3>
                                            <a href="#" className="edit">
                                              Edit
                                            </a>
                                          </header>
                                          <address>
                                            3522 Interstate
                                            <br />
                                            75 Business Spur,
                                            <br />
                                            Sault Ste.
                                            <br />
                                            Marie, MI 49783
                                          </address>
                                        </div>
                                        <div className="addresses-col">
                                          <header className="col-title">
                                            <h3>Shipping address</h3>
                                            <a href="#" className="edit">
                                              Edit
                                            </a>
                                          </header>
                                          <address>
                                            4299 Express Lane
                                            <br />
                                            Sarasota,
                                            <br />
                                            FL 34249 USA <br />
                                            Phone: 1.941.227.4444
                                          </address>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="tab-pane fade"
                                    id="account-details"
                                    role="tabpanel"
                                  >
                                    <div className="my-account-account-details">
                                      <form className="edit-account" action="#" method="post">
                                        <p className="form-row">
                                          <label htmlFor="account_first_name">
                                            First name <span className="required">*</span>
                                          </label>
                                          <input
                                            type="text"
                                            className="input-text"
                                            name="account_first_name"
                                          />
                                        </p>
                                        <p className="form-row">
                                          <label>
                                            Last name <span className="required">*</span>
                                          </label>
                                          <input
                                            type="text"
                                            className="input-text"
                                            name="account_last_name"
                                          />
                                        </p>
                                        <div className="clear" />
                                        <p className="form-row">
                                          <label>
                                            Display name <span className="required">*</span>
                                          </label>
                                          <input
                                            type="text"
                                            className="input-text"
                                            name="account_display_name"
                                          />
                                          <span>
                                            <em>
                                              This will be how your name will be displayed in
                                              the account section and in reviews
                                            </em>
                                          </span>
                                        </p>
                                        <div className="clear" />
                                        <p className="form-row">
                                          <label>
                                            Email address <span className="required">*</span>
                                          </label>
                                          <input
                                            type="email"
                                            className="input-text"
                                            name="account_email"
                                          />
                                        </p>
                                        <fieldset>
                                          <legend>Password change</legend>
                                          <p className="form-row">
                                            <label>
                                              Current password (leave blank to leave unchanged)
                                            </label>
                                            <input
                                              type="password"
                                              className="input-text"
                                              name="password_current"
                                              autoComplete="off"
                                            />
                                          </p>
                                          <p className="form-row">
                                            <label>
                                              New password (leave blank to leave unchanged)
                                            </label>
                                            <input
                                              type="password"
                                              className="input-text"
                                              name="password_1"
                                              autoComplete="off"
                                            />
                                          </p>
                                          <p className="form-row">
                                            <label>Confirm new password</label>
                                            <input
                                              type="password"
                                              className="input-text"
                                              name="password_2"
                                              autoComplete="off"
                                            />
                                          </p>
                                        </fieldset>
                                        <div className="clear" />
                                        <p className="form-row">
                                          <button
                                            type="submit"
                                            className="button"
                                            name="save_account_details"
                                            value="Save changes"
                                          >
                                            Save changes
                                          </button>
                                        </p>
                                      </form>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </>
                          ) : (
                            <>
                              <div className='text-center mb-3'>
                                {/* <h5>You have no orders</h5> */}
                                {/* Suggested code may be subject to a license. Learn more: ~LicenseLog:3978053137. */}
                                <img className='img-fluid' src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/a3be1258142655.59f70a0604f55.gif" alt="No Orders" width="500px" style={{ marginBottom: '70px' }} />
                              </div>
                            </>
                          )
                        }
                      </>
                    ) : (
                      <>
                        <div className='text-center'>
                          <h5>You are not logged in please <Link to="/login" >Login</Link> to view Account</h5>
                        </div>
                      </>
                    )
                  }

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
export default Myaccount
