import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import Loader from '../components/pageloader';

const Login = () => {
  const [isLoaded, setLoad] = useState(true);


  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    setLoad(true);
    e.preventDefault();
    try {
      const response = await fetch('https://nivsjewels.com/api/signin', {
        method: 'POST',
        body: JSON.stringify(formData),
      });
      var res = await response.json();
      if (res.status === true) {
        localStorage.setItem("token", res.token);
        setLoad(false);
        Swal.fire({
          icon: "success",
          title: "Welcome",
          text: "Taking you to the Shopping"
        }).then(() => {
          window.location.href = '/';
        });
      } else {
        setLoad(false);
        Swal.fire({
          icon: "error",
          title: "Invalid Credentials",
          text: "Try again with Correct Credentials"
        })
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

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

    <div id="site-main" className="site-main">
      <div id="main-content" className="main-content">
        <div id="primary" className="content-area">
          <div id="title" className="page-title">
            <div className="section-container" style={{ paddingTop: 58 }}>
              <div className="content-title-heading">
                <h1
                  className="text-title-heading"
                  style={{ fontFamily: "serif", color: "#fff" }}
                >
                  Login/Register
                </h1>
              </div>
              <div className="breadcrumbs" style={{ color: "#fff" }}>
                <a href="index.php" style={{ color: "#fff" }}>
                  Home
                </a>
                <span className="delimiter" />
                Login/Register
              </div>
            </div>
          </div>
          <div id="content" className="site-content" role="main">
            <div className="section-padding">
              <div className="section-container p-l-r">
                <div className="page-login-register">
                  <div className="row" style={{ marginBottom: 60 }}>
                    <div className="col-lg-6 col-md-6 col-sm-12 sm-m-b-50">
                      <div className="box-form-login">
                        <h2>Login</h2>
                        <div className="box-content">
                          <div className="form-login">
                            <form onSubmit={handleSubmit} className="login">
                              <div className="username">
                                <label>
                                  Username or email address{" "}
                                  <span className="required">*</span>
                                </label>
                                <input
                                  type="text"
                                  className="input-text"
                                  name="email"
                                  id="email"
                                  value={formData.email}
                                  onChange={handleChange}
                                />
                              </div>
                              <div className="password">
                                <label htmlFor="password">
                                  Password <span className="required">*</span>
                                </label>
                                <input
                                  className="input-text"
                                  type="password"
                                  name="password"
                                  value={formData.password}
                                  onChange={handleChange}
                                />
                              </div>

                              <div className="button-login">
                                <input
                                  type="submit"
                                  className="button"
                                  name="login"
                                  defaultValue="Login"
                                />
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="box-form-login">
                        <h2 className="register">Register</h2>
                        <div className="box-content">
                          <div className="form-register">
                            <form method="post" className="register">
                              <div className="email">
                                <label>
                                  Email address <span className="required">*</span>
                                </label>
                                <input
                                  type="email"
                                  className="input-text"
                                  name="email"
                                  defaultValue=""
                                />
                              </div>
                              <div className="password">
                                <label>
                                  Password <span className="required">*</span>
                                </label>
                                <input
                                  type="password"
                                  className="input-text"
                                  name="password"
                                />
                              </div>
                              <div className="button-register">
                                <input
                                  type="submit"
                                  className="button"
                                  name="register"
                                  defaultValue="Register"
                                />
                              </div>
                            </form>
                          </div>
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

export default Login

