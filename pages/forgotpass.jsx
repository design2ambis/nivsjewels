import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Loader from '../components/pageloader';

const Forgotpass = () => {
  const [isLoaded, setLoad] = useState(true);
  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      setLoad(false);
    }, 500);
  }, []);

  if (isLoaded) {
    return <Loader />;
  }
  return (
    <>
      <div id="site-main" className="site-main">
        <div id="main-content" className="main-content">
          <div id="primary" className="content-area">
            <div id="title" className="page-title">
              <div className="section-container">
                <div className="content-title-heading">
                  <h1 className="text-title-heading">Forgot Password</h1>
                </div>
                <div className="breadcrumbs">
                  <a href="index.html">Home</a>
                  <span className="delimiter" />
                  Forgot Password
                </div>
              </div>
            </div>
            <div id="content" className="site-content" role="main">
              <div className="section-padding">
                <div className="section-container p-l-r">
                  <div className="page-forget-password">
                    <form method="post" className="reset-password">
                      <p>
                        Lost your password? Please enter your username or email
                        address. You will receive a link to create a new password via
                        email.
                      </p>
                      <p className="form-row form-row-first">
                        <label>Username or email</label>
                        <input
                          className="input-text"
                          type="text"
                          name="user_login"
                          autoComplete="username"
                        />
                      </p>
                      <div className="clear" />
                      <p className="form-row">
                        <button
                          type="submit"
                          className="button"
                          value="Reset password"
                        >
                          Reset password
                        </button>
                      </p>
                    </form>
                    <div className='text-center'>
                      <Link to={'/login'} className='btn btn-link'>Back to Login</Link>
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

    </>
  )
}


export default Forgotpass