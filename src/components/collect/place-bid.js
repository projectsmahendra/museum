import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
const PlaceBid = () => {
    // const [museums, setMuseums] = useState([]);
    const [topMuseums, setTopMuseums] = useState([]);
    const params = useParams();

    useEffect(() => {
        document.title = 'My Favorites';
        // setMuseums(getMuseums());
        setTopMuseums(getCarItems());

    }, []);
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
                        <div className="col-lg-6">
                            <h1 className="page-title place-bid-title">Earth's hidden extinctions</h1>
                            <p className="page-details">Fossil record during the mass extinction</p>
                        </div>
                        <div className="col-lg-6">
                            <div className="title-right-box">
                                <div className="countdown-box">
                                    <div className="endsin-label">Ends in</div>
                                    <ul className="list-inline countdown-ul">
                                        <li className="list-inline-item"><span className="text-bold">5</span><br />Days</li>
                                        <li className="list-inline-item"><span className="text-bold">12</span><br />Hours</li>
                                        <li className="list-inline-item"><span className="text-bold">20</span><br />Mins</li>
                                        <li className="list-inline-item"><span className="text-bold">55</span><br />Sec</li>
                                    </ul>
                                </div>
                                <button type="button" className="my-btn place-bid-btn ml-auto">PLACE A BID</button>
                                {/* <a href="#" className="my-btn place-bid-btn ml-auto">PLACE A BID</a> */}
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
                            {(params.bidId == 2) ?
                                <ul id="bidlightSlider">

                                    <li class="product-img bidslideli" data-thumb="../../assets/images/banner/product-banner/3.png">
                                        <a href="../../assets/images/banner/product-banner/3.png" data-fancybox="gallery">
                                            <img src="../../assets/images/banner/product-banner/3.png" alt="hidden-extinctions" />
                                        </a>
                                    </li>

                                    <li class="certi-box bidslideli" style={{ backgroundImage: `url(../../assets/images/banner/product-banner/3-grey.png)` }}>
                                        <div className='layer1'>
                                            <div className='layer2'>
                                                <div className='layer3'>
                                                    <div className='layer4'>
                                                        <div className='layer5'>
                                                            <div className='layer6'>

                                                                <div className="row">
                                                                    <div className="col-lg-12">
                                                                        <h2 className='certi-head'>Certificate of Authenticity</h2>
                                                                    </div>
                                                                    <div className="col-lg-12 certi-ulbox">
                                                                        <ul className='guarantee-ul'>
                                                                            <li>Enter Description of guarantee here</li>
                                                                            <li>Enter Description of guarantee here</li>
                                                                            <li>Enter Description of guarantee here</li>
                                                                        </ul>
                                                                        <ul className='orignal-ul'>
                                                                            <li><img class="img-fluid" src="../../assets/images/icons/orignal.png" alt="orignal" /></li>
                                                                        </ul>
                                                                        <ul className='info-ul'>
                                                                            <li>Enter Item information here</li>
                                                                            <li>Enter Item information here</li>
                                                                            <li>Enter Item information here</li>
                                                                        </ul>

                                                                        <ul className='sign-ul'>
                                                                            <li>Enter signature here</li>
                                                                            <li><img class="signature img-fluid" src="../../assets/images/icons/signature.png" alt="signature" /></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="product-data bidslideli" style={{ backgroundImage: `url(../../assets/images/banner/product-banner/3-grey.png)` }}>
                                        <div className='bid-overlay'></div>
                                        <div className='bidinfo-box'>
                                            <h3>Available Tier Information</h3>
                                            <div className="row hidden-laptop">
                                                <div className="col-lg-12 sepsec sold">
                                                    <div className="row">
                                                        <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                                                            Tiers
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-4 col-6 text-gold">
                                                            #1 !!
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                                                            Total Pieces
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                                                            1
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                                                            Available
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                                                            Sold!
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                                                            Price
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                                                            $ 180,000
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12  sepsec">
                                                    <div className="row">
                                                        <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                                                            Tiers
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-4 col-6 text-gold">
                                                            Very Rare
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                                                            Total Pieces
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                                                            99
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                                                            Available
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                                                            # 78
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                                                            Price
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                                                            $ 1000
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-4 col-6 iconbox">
                                                            <ul class="list-inline pro-data-icons">
                                                                <li class="list-inline-item"><div class="cart"></div></li>
                                                                <li class="list-inline-item"><div class="wishlist"></div></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-4 col-6 btnbox">
                                                            <button type="button" class="my-btn proslide-bid-btn">PLACE A BID</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12  sepsec">
                                                    <div className="row">
                                                        <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                                                            Tiers
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-4 col-6 text-gold">
                                                            Rare
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                                                            Total Pieces
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                                                            500
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                                                            Available
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                                                            # 439
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                                                            Price
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                                                            $ 500
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-4 col-6 iconbox">
                                                            <ul class="list-inline pro-data-icons">
                                                                <li class="list-inline-item"><div class="cart"></div></li>
                                                                <li class="list-inline-item"><div class="wishlist"></div></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-4 col-6 btnbox">
                                                            <button type="button" class="my-btn proslide-bid-btn">PLACE A BID</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12  sepsec">
                                                    <div className="row">
                                                        <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                                                            Tiers
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-4 col-6 text-gold">
                                                            Collectible
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                                                            Total Pieces
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                                                            10,000
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                                                            Available
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                                                            # 1,876
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                                                            Price
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                                                            $ 25
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-4 col-6 iconbox">
                                                            <ul class="list-inline pro-data-icons">
                                                                <li class="list-inline-item"><div class="cart"></div></li>
                                                                <li class="list-inline-item"><div class="wishlist"></div></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-4 col-6 btnbox">
                                                            <button type="button" class="my-btn proslide-bid-btn">PLACE A BID</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <table class="table hidden-mobile">
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
                                    <li class="product-img bidslideli" data-thumb="../../assets/images/banner/product-banner/3.png">
                                        <a href="../../assets/images/banner/product-banner/3.png" data-fancybox="gallery">
                                            <img src="../../assets/images/banner/product-banner/3.png" alt="hidden-extinctions" />
                                        </a>
                                    </li>
                                    <li class="product-img bidslideli" data-thumb="../../assets/images/banner/product-banner/3.png">
                                        <a href="../../assets/images/banner/product-banner/3.png" data-fancybox="gallery">
                                            <img src="../../assets/images/banner/product-banner/3.png" alt="hidden-extinctions" />
                                        </a>
                                    </li>
                                    <li class="product-img bidslideli" data-thumb="../../assets/images/banner/product-banner/3.png">
                                        <a href="../../assets/images/banner/product-banner/3.png" data-fancybox="gallery">
                                            <img src="../../assets/images/banner/product-banner/3.png" alt="hidden-extinctions" />
                                        </a>
                                    </li>
                                    <li class="product-img bidslideli" data-thumb="../../assets/images/banner/product-banner/3.png">
                                        <a href="../../assets/images/banner/product-banner/3.png" data-fancybox="gallery">
                                            <img src="../../assets/images/banner/product-banner/3.png" alt="hidden-extinctions" />
                                        </a>
                                    </li>
                                    <li class="product-img bidslideli" data-thumb="../../assets/images/banner/product-banner/3.png">
                                        <a href="../../assets/images/banner/product-banner/3.png" data-fancybox="gallery">
                                            <img src="../../assets/images/banner/product-banner/3.png" alt="hidden-extinctions" />
                                        </a>
                                    </li>
                                    <li class="product-img bidslideli" data-thumb="../../assets/images/banner/product-banner/3.png">
                                        <a href="../../assets/images/banner/product-banner/3.png" data-fancybox="gallery">
                                            <img src="../../assets/images/banner/product-banner/3.png" alt="hidden-extinctions" />
                                        </a>
                                    </li>
                                </ul>
                                :
                                <ul id="bidlightSlider">

                                    <li class="product-img bidslideli" data-thumb="../../assets/images/skull/Skull1-min.png">
                                        <a href="../../assets/images/skull/Skull1-min.png" data-fancybox="gallery">
                                            <img src="../../assets/images/skull/Skull1-min.png" alt="hidden-extinctions" />
                                        </a>
                                    </li>
                                    <li class="certi-box bidslideli" >
                                        <iframe width="100%"
                                            height="100%" title="HQ Skull" frameBorder="0" allowFullScreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/d41a8182520f4f108da10718f1db9580/embed"> </iframe>
                                    </li>

                                    <li class="product-img bidslideli" data-thumb="../../assets/images/skull/Skull2-min.png">
                                        <a href="../../assets/images/skull/Skull2-min.png" data-fancybox="gallery">
                                            <img src="../../assets/images/skull/Skull2-min.png" alt="hidden-extinctions" />
                                        </a>
                                    </li>
                                    <li class="product-img bidslideli" data-thumb="../../assets/images/skull/Skull3-min.png">
                                        <a href="../../assets/images/skull/Skull3-min.png" data-fancybox="gallery">
                                            <img src="../../assets/images/skull/Skull3-min.png" alt="hidden-extinctions" />
                                        </a>
                                    </li>
                                    <li class="product-img bidslideli" data-thumb="../../assets/images/skull/Skull4-min.png">
                                        <a href="../../assets/images/skull/Skull4-min.png" data-fancybox="gallery">
                                            <img src="../../assets/images/skull/Skull4-min.png" alt="hidden-extinctions" />
                                        </a>
                                    </li>
                                    <li class="product-img bidslideli" data-thumb="../../assets/images/skull/Skull5-min.png">
                                        <a href="../../assets/images/skull/Skull5-min.png" data-fancybox="gallery">
                                            <img src="../../assets/images/skull/Skull5-min.png" alt="hidden-extinctions" />
                                        </a>
                                    </li>
                                    <li class="product-img bidslideli" data-thumb="../../assets/images/skull/Skull6-min.png">
                                        <a href="../../assets/images/skull/Skull6-min.png" data-fancybox="gallery">
                                            <img src="../../assets/images/skull/Skull6-min.png" alt="hidden-extinctions" />
                                        </a>
                                    </li>
                                    <li class="product-img bidslideli" data-thumb="../../assets/images/skull/Skull7-min.png">
                                        <a href="../../assets/images/skull/Skull7-min.png" data-fancybox="gallery">
                                            <img src="../../assets/images/skull/Skull7-min.png" alt="hidden-extinctions" />
                                        </a>
                                    </li>
                                    <li class="product-img bidslideli" data-thumb="../../assets/images/skull/Skull2-min.png">
                                        <a href="../../assets/images/skull/Skull2-min.png" data-fancybox="gallery">
                                            <img src="../../assets/images/skull/Skull2-min.png" alt="hidden-extinctions" />
                                        </a>
                                    </li>
                                </ul>
                            }
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
};
export default PlaceBid;