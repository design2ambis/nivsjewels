import React, { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom";
import Loader from '../components/pageloader';


const Orderdetail = (props) => {
    document.title = "Nivsjewels - Orderdetail";
    const [isLoaded, setLoad] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [cart, setCart] = useState([]);
    const { orderId } = useParams();




    const username = localStorage.getItem("token");

    useEffect(() => {
        if (username !== null) {
            setIsLoggedIn(true);
        }
    }, []);


   

    useEffect(() => {
        // Simulate an API call
        setTimeout(() => {
          setLoad(false);
        }, 500);
      }, []);



    useEffect(() => {
        const fetchData = async () => {
            setLoad(true);
            try {
                const proRes = await fetch(
                    `https://nivsjewels.com/api/select?get_order_details&id=${orderId}&token=${username}`
                );
                const proData = await proRes.json();
                if (proData.status === 200) {
                    setCart(proData.data);
                } else {

                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);
    
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);



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
                                <h1 className="text-title-heading" style={{ color: "#fff" }}>Order detail</h1>
                            </div>
                            <div className="breadcrumbs" style={{ color: "#fff" }}>
                                <Link to="/" style={{ color: "#fff" }}>Home</Link>
                                <span className="delimiter" style={{ color: "#fff" }} />
                                Order Detail
                            </div>
                        </div>
                    </div>
                    <div id="content" className="site-content" role="main">
                        <div className="section-padding">
                            <div className="section-container p-l-r">
                                <div className="page-my-account">
                                    <div className="my-account-wrap clearfix">
                                        <div className="my-account-orders">
                                            <div className="table-responsive">
                                                <div className='text-center mb-3' style={{ marginBottom: "20px" }}>
                                                    <Link className='text-center' to="/myaccount">Back to Account</Link>
                                                </div>
                                                <table className="table">
                                                    <thead>
                                                        <tr>
                                                            <th>Sno</th>
                                                            <th>Design no</th>
                                                            <th>Qty</th>
                                                            <th>Image</th>
                                                            <th>Weight</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            cart.map((pro, index) => (
                                                                <tr key={index}>
                                                                    <td className="productImage">{index + 1}</td>
                                                                    <td className="productName">{pro.proname}</td>
                                                                    <td className="qty">{pro.qty}</td>
                                                                    <td className="qty">
                                                                        <img src={pro.img} alt={pro.proname} style={{ width: "80px" }} />
                                                                    </td>
                                                                    <td className="qty">{pro.wgt}</td>

                                                                </tr>
                                                            ))

                                                        }
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Orderdetail