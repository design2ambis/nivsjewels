import React, { useEffect, useState } from "react";
const Loader = () => {

    useEffect(() => {
        document.querySelector("#mm-nivs").classList.remove('active');

        // document.querySelector(".mm-subcat").classList.add('mm-hidden');
        // document.querySelector("#mm-0").classList.add('mm-opened');
        // document.querySelector(".mm-subcat").classList.remove('mm-opened');


    });
    
    return (
        <>
            <div className="page-preloader">
                <div className="loader">
                    <div></div>
                    <div></div>
                </div>
            </div>
        </>
    )
}

export default Loader