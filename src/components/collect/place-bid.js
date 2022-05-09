import React, { useEffect, useState } from 'react';

const PlaceBid = () => {
    // const [museums, setMuseums] = useState([]);
    const [topMuseums, setTopMuseums] = useState([]);

    useEffect(() => {
        document.title = 'My Favorites';
        // setMuseums(getMuseums());
        setTopMuseums(getCarItems());

    });
    const getCarItems = () => {
        return [
            {
                name: "Antique Museum",
                location: "Toronto, Canada",

            },
            {
                name: "Antique Museum",
                location: "Toronto, Canada",

            }, {
                name: "Antique Museum",
                location: "Toronto, Canada",

            }, {
                name: "Antique Museum",
                location: "Toronto, Canada",

            }, {
                name: "Antique Museum",
                location: "Toronto, Canada",

            }, {
                name: "Antique Museum",
                location: "Toronto, Canada",

            }
        ]
    };

    const getRecentMuseums = () => {
        return [
            {
                name: "Antique Museum",
                location: "Toronto, Canada",

            },
            {
                name: "Antique Museum",
                location: "Toronto, Canada",

            },
            {
                name: "Antique Museum",
                location: "Toronto, Canada",

            },
            {
                name: "Antique Museum",
                location: "Toronto, Canada",

            }
        ]
    };


    return (

        <>
            <section className="breadcrumb-section section top-section">
                <div className="container">
                    <ul>
                        <li className="bread-parent">AUCTIONS</li>
                        <li className="bread-seperator"> <img className="img-fluid" src="../../assets/images/icons/breadcrumb-arrow.png" alt="breadcrumb" /> </li>
                        <li className="bread-parent">CURRENT AUCTIONS</li>
                        <li className="bread-seperator"> <img className="img-fluid" src="../../assets/images/icons/breadcrumb-arrow.png" alt="breadcrumb" /> </li>
                        <li className="bread-child">CURRENT AUCTIONS</li>
                    </ul>
                </div>
            </section>

            {/* <!-- page title --> */}
            <section className="page-title-section bid-title-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h1 className="page-title place-bid-title">Earth's hidden extinctions</h1>
                            <p className="page-details">Fossil record during the mass extinction</p>
                        </div>
                        <div className="col-md-6">
                            <div className="title-right-box">
                                <div className="endsin-label">Ends in</div>
                                <ul className="list-inline countdown-box">
                                    <li className="list-inline-item"><span className="text-bold">5</span><br />Days</li>
                                    <li className="list-inline-item"><span className="text-bold">12</span><br />Hours</li>
                                    <li className="list-inline-item"><span className="text-bold">20</span><br />Mins</li>
                                    <li className="list-inline-item"><span className="text-bold">55</span><br />Sec</li>
                                </ul>
                                {/* <div id="countdown-container" class="countdown-container">
                                    <div id="js-countdown" class="countdown">
                                        <div id="js-days" class="number"></div>
                                        <div id="js-separator" class="separator">:</div>
                                        <div id="js-hours" class="number"></div>
                                        <div id="js-separator" class="separator">:</div>
                                        <div id="js-minutes" class="number"></div>
                                        <div id="js-separator" class="separator">:</div>
                                        <div id="js-seconds" class="number"></div>
                                    </div>
                                </div> */}
                                <a href="#" className="my-btn place-bid-btn ml-auto">PLACE A BID</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- /page title --> */}

            {/* <!-- games-bg-section --> */}
            <section className="product-slider-section">
                <div className="container">
                    <div class="main-wrapper">
                        <div class="demo">
                            <ul id="bidlightSlider">
                                <li class="product-img" data-thumb="../../assets/images/banner/product-banner/1.png">
                                    <a href="../../assets/images/banner/product-banner/1.png" data-fancybox="gallery">
                                        <img src="../../assets/images/banner/product-banner/1.png" alt="hidden-extinctions" />
                                    </a>
                                </li>
                                <li class="product-img" data-thumb="../../assets/images/banner/product-banner/2.png">
                                    <a href="../../assets/images/banner/product-banner/2.png" data-fancybox="gallery">
                                        <img src="../../assets/images/banner/product-banner/2.png" alt="hidden-extinctions" />
                                    </a>
                                </li>
                                <li class="product-data">
                                    <div>
                                        <h3>Earth's hidden extinctions</h3>
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th width="20%">Tiers</th>
                                                    <th width="15%">Total Pieces</th>
                                                    <th width="15%">Available</th>
                                                    <th width="15%">Price</th>
                                                    <th width="15%"></th>
                                                    <th width="20%"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className='sold'>
                                                    <td class="text-gold">#1 !!</td>
                                                    <td>1</td>
                                                    <td>Sold!</td>
                                                    <td>$ 180,000</td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td class="text-gold">Very Rare</td>
                                                    <td>99</td>
                                                    <td># 78</td>
                                                    <td>$ 1000</td>
                                                    <td className="iconbox">
                                                        <ul class="list-inline pro-data-icons">
                                                            <li class="list-inline-item"><div class="cart"></div></li>
                                                            <li class="list-inline-item"><div class="wishlist"></div></li>
                                                        </ul>
                                                    </td>
                                                    <td className="btnbox">
                                                        <button type="button" class="my-btn proslide-bid-btn">PLACE A BID</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="text-gold">Rare</td>
                                                    <td>500</td>
                                                    <td># 439</td>
                                                    <td>$ 500</td>
                                                    <td className="iconbox">
                                                        <ul class="list-inline pro-data-icons">
                                                            <li class="list-inline-item"><div class="cart"></div></li>
                                                            <li class="list-inline-item"><div class="wishlist"></div></li>
                                                        </ul>
                                                    </td>
                                                    <td className="btnbox">
                                                        <button type="button" class="my-btn proslide-bid-btn">PLACE A BID</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="text-gold">Collectible</td>
                                                    <td>10,000</td>
                                                    <td># 1,876</td>
                                                    <td>$ 25</td>
                                                    <td className="iconbox">
                                                        <ul class="list-inline pro-data-icons">
                                                            <li class="list-inline-item"><div class="cart"></div></li>
                                                            <li class="list-inline-item"><div class="wishlist"></div></li>
                                                        </ul>
                                                    </td>
                                                    <td className="btnbox">
                                                        <button type="button" class="my-btn proslide-bid-btn">PLACE A BID</button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div className="row prodata-foot">
                                            <div className="col-md-4">
                                                <p className="foot-title">Please Note</p>
                                                <p className="foot-subtitle">Thus is a sample of some of the shorts. <br />Each offering will also include:</p>
                                            </div>
                                            <div className="col-md-8">
                                                <ul>
                                                    <li>20 more images</li>
                                                    <li>Videos in different perspectives</li>
                                                    <li>Full Description, specs, features, awards, etc...</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
};
export default PlaceBid;