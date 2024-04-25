import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Category = () => {
    var [categories, setCategories] = useState([]);

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

    return (
        <>
            {categories.map((category) => (
                <li className="level-0 menu-item menu-item-has-children " key={category.id}>
                    <a href="#!">
                        <span className="menu-item-text">{category.name}</span>
                    </a>
                    <ul className="sub-menu">
                        {category.subcat.map((sub) => (
                            <li key={sub.sid}>
                                <Link to={`shop/${category.cname}/${sub.sname}/1`} >
                                    <span className="menu-item-text">{sub.name}</span>
                                </Link>
                            </li>
                        ))}

                    </ul>
                </li>
            ))}
        </>
    );
};

export default Category;