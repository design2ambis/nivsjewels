import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const FooterCategory = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    var [categories, setCategories] = useState([]);
    var username = localStorage.getItem("token");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const categoryResponse = await fetch('https://utsarvajewels.com/api/crud?all_category_list');
                const categoryData = await categoryResponse.json();
                if (categoryData.option.status === 200) {

                    setCategories(categoryData.data);
                    //   setSubCategories(categoryData.data.subcat);          
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    
        const openSub = (cat) => {
            // console.log(cat);
            document.querySelector("#mm-"+cat).classList.remove('mm-hidden');
            document.querySelector("#mm-0").classList.remove('mm-opened');
            document.querySelector("#mm-"+cat).classList.add('mm-opened');
            
        }

        const closeSub = (cat) => {
            
            document.querySelector("#mm-"+cat).classList.add('mm-hidden');
            document.querySelector("#mm-0").classList.add('mm-opened');
            document.querySelector("#mm-"+cat).classList.remove('mm-opened');
            
        }
    useEffect(() => {
        if (username) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, [username]);

    const handleLogout = () => {
        // Perform logout actions here, such as clearing authentication state
        localStorage.removeItem("token"); // Clear token from localStorage
        setIsLoggedIn(false); // Set isLoggedIn state to false
        location.reload(); 
    };

    return (
        <>

            <div className="mm-panel mm-opened" id="mm-0">
              <ul className="menu mm-listview">

                <li className="level-0 menu-item">
                  <a href="/">
                    <span className="menu-item-text">Home</span>
                  </a>
                </li>                
                
                
                {categories.map((category, index) => (
                    <><li className="level-0 menu-item menu-item-has-children" key={index}>
                        <a
                            className="mm-next"                        
                            aria-owns="mm-1"
                            aria-haspopup="true"  onClick={() => openSub(category.id)} />
                            <a onClick={() => openSub(category.id)}>
                                <span className="menu-item-text">{category.name}</span>
                            </a>
                    </li>
                    
                </>
                ))}

                <li className="level-0 menu-item " >
                  <Link to="/about">
                    <span className="menu-item-text ">AboutUs</span>
                  </Link>
                </li>

                <li className="level-0 menu-item " >
                  <Link to="/contact">
                    <span className="menu-item-text">
                      Contact
                    </span>
                  </Link>
                </li>
               
                {isLoggedIn && (
                <li className="level-0 menu-item" >
                    <a href="/" onClick={handleLogout} className="menu-item">
                    <span className="menu-item-text">Logout</span>
                    </a>
                </li>
                )}
                
                

              </ul>
            </div>   

            {categories.map((category) => (
                <div className="mm-panel mm-subcat mm-hidden mm-hasnavbar"  key={category.key+category.id} id={`mm-${category.id}`}>
                        <div className="mm-navbar">
                            <a
                                className="mm-btn mm-prev"
                                aria-owns="mm-0"
                                aria-haspopup="true"
                                onClick={() => closeSub(category.id)}
                            >
                                <span className="mm-sronly">Close submenu ({category.cname})</span>
                            </a>
                            <a className="mm-title" onClick={closeSub} aria-hidden="true">
                            {category.cname}
                            </a>
                        </div>
                        <ul className="sub-menu mm-listview">
                        {category.subcat.map((sub) => (
                            <li  key={sub.sid}>
                                <Link to={`shop/${category.cname}/${sub.sname}/1`} > 
                                    {sub.name}
                                </Link>
                            </li>
                            ))}

                        </ul>
                </div>
            ))}
                
        </>
    );
};

export default FooterCategory;