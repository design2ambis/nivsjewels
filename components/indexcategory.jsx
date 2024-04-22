import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



const IndexCategory = () => {
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
                <div className="item item-product-cat slick-slide " key={index}>
                    <div className="item-product-cat-content ">
                        <Link to={`shop/${cat.cat_name_new}/${cat.sub_name_new}/1`}>
                            <div className="item-image animation-horizontal ">
                                <img
                                    width={258}
                                    height={258}
                                    src={cat.image}
                                    onError="this.src='assets/images/No_Image_Available.jpg';"
                                    alt="Bracelets"
                                />
                            </div>
                        </Link>
                        <div className="product-cat-content-info">
                            <h2 className="item-title">
                                <Link to={`shop/${cat.cat_name_new}/${cat.sub_name_new}/1`}>
                                    {cat.cat_name}/{cat.sub_name}
                                </Link>
                            </h2>
                        </div>
                    </div>
                </div>
                                           
              


            ))}
        </>
    );
};

export default IndexCategory;