import React, { useState, useEffect } from 'react'
import Loader from '../components/pageloader';

const Notfound404 = () => {

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
    document.title = "404 Not Found";
    return (
        <>
            <div id="site-main" className="site-main">
                <div id="main-content" className="main-content">
                    <div id="primary" className="content-area">
                        <div id="content" className="site-content" role="main">
                            <div className="section-padding">
                                <div className="section-container p-l-r">
                                    <div className="page-404">
                                        <div className="content-page-404">
                                            <div className="title-error">404</div>
                                            <div className="sub-title">Oops! That page can't be found.</div>
                                            <div className="sub-error">
                                                We're really sorry but we can't seem to find the page you were
                                                looking for.
                                            </div>
                                            <a className="button" href="/">
                                                Back The Homepage
                                            </a>
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

export default Notfound404