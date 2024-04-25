import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const FooterCat = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const categoryResponse = await fetch('https://utsarvajewels.com/api/crud?get_random_category_list');
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
            {categories.map((cat, index) => (         
                <li key={index}>
                    <Link to={`shop/${cat.cat_name_new}/${cat.sub_name_new}/1`} data-set={cat.id}>{cat.cat_name}/{cat.sub_name}</Link>
                </li>      
            ))}
        </>
    );
};
