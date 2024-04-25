import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import Loader from '../components/pageloader';
import { Link } from 'react-router-dom';

const Login = () => {


  const [isLoaded, setLoad] = useState(true);

  const [formData, setFormData] = useState({
    customerName: '',
    mobile: '',
    address: '',
    phone: '',
    city: '',
    email: '',
    password: '',
    register:''
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
        localStorage.setItem("name", res.name);
        
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
    setLoad(false);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = new FormData();
    for (const key in formData) {
      form.append(key, formData[key]);
    }

    setLoad(true);
    try {
      const response = await fetch("https://nivsjewels.com/api/register", {
        method: "POST",
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.status === true) {
        Swal.fire({
          title: 'Success',
          text: data.message,
          icon: 'success'
        }).then(() => {
          window.location.href = '/';
        });
      } else {
        Swal.fire({
          title: 'Failed',
          text: 'Registration Failed',
          icon: 'error'
        });
      }
    } catch (error) {
      console.error("Registration error:", error);
      // Handle error response from the server
    }
    setLoad(false);
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
                          <div className='text-center'>
                            <Link to={'/forgot-password'} className='btn btn-link'>Forgot Password?</Link>                           
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="box-form-login">
                        <h2 className="register">Register</h2>
                        <div className="box-content">
                          <div className="form-register">
                            <form onSubmit={handleRegister}>
                              <label htmlFor="customerName">Customer Name:</label>
                              <input
                                type="text"
                                id="customerName"
                                name="customerName"
                                value={formData.customerName}
                                onChange={handleChange}
                              />

                              <label htmlFor="mobile">Mobile:</label>
                              <input
                                type="text"
                                id="mobile"
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleChange}
                              />                            
                              

                              <label htmlFor="address">Address:</label>
                              <textarea
                                id="address"
                                name="address"
                                value={formData.address}
                                onChange={handleChange} 
                                className="form-control border"
                                />

                              <label htmlFor="phone">Phone:</label>
                              <input
                                type="text"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                              />

                              <label htmlFor="city">City:</label>
                              <input
                                type="text"
                                id="city"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                              />

                              <label htmlFor="email">Email:</label>
                              <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                              />

                              <label htmlFor="password">Password:</label>
                              <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                              />
                              <center>
                                <button type="submit" style={{marginTop: '12px'}} className='btn btn-block btn-primary m-2'>Register</button>
                              </center>
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

