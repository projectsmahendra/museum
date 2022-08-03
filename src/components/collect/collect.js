import React, { useEffect } from 'react';

const Collect = () => {
    useEffect(() => {

    });
    return (
        <>
            {/* <!-- breadcrumb --> */}
            <section class="breadcrumb-section section collect-top-section">
                <div class="container">
                    <ul>
                        <li class="bread-parent">COLLECT</li>
                        <li class="bread-seperator"> <img class="img-fluid" src="../../assets/images/icons/breadcrumb-arrow.png" alt="breadcrumb" /> </li>
                        <li class="bread-parent">AUCTIONS</li>
                        <li class="bread-seperator"> <img class="img-fluid" src="../../assets/images/icons/breadcrumb-arrow.png" alt="breadcrumb" /> </li>
                        <li class="bread-child">CURRENT AUCTIONS</li>
                    </ul>
                </div>
            </section>

            {/* <!-- page title --> */}
            <section class="page-title-section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8">
                            <h1 class="page-title">Current Auctions</h1>
                            <p class="page-details">Lorem consectetur adipilorum ipsumdolar sitamis</p>
                        </div>
                        <div class="col-md-4 searchbox">
                            <form class="d-flex">
                                <div class="input-group mb-2">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text"><img class="img-fluid collect-search-icon" src="../../assets/images/icons/search.png" alt="search" /></div>
                                    </div>
                                    <input type="search" class="form-control" id="inlineFormInputGroup" placeholder="Search Here" />
                                </div>
                                {/* <img class="img-fluid collect-search-icon" src="../../assets/images/icons/search.png" alt="search" />
                                <input class="form-control me-2 collect-search ml-auto" type="search" placeholder="Search Here" aria-label="Search" /> */}
                                <button class="search-btn-outline ml-auto" type="submit"><img class="img-fluid" src="../../assets/images/icons/search-btn.png" alt="search" /></button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- /page title --> */}


            {/* <!-- Current Auctions --> */}
            <section class="current-section section">
                <div class="container">

                    <div class="grid">
                    <div class="grid-item">
                            <div class="grid-item-content">
                                <a href='place-bid/1'>
                                    <div class="card p-0 hover-shadow" style={{ backgroundImage: `url("/assets/images/skull/Skull2-min.png")` }}>
                                        <div class="current-overlay"></div>
                                        <div class="card-body">
                                            <div class="right-side">
                                                <div class="current-label">Ends in 3 Days</div>
                                            </div>
                                            <div class="current-bottom">
                                                <div class="card-label">Skull</div>
                                                <h3 class="current-title">Skull shell</h3>
                                                <p class="current-subtitle">Lorem ipsum dolor sit amet, consectetur.</p>
                                                <div class="current-box">
                                                    <ul class="cbul left-side">
                                                        <li class="cbul-thumb">
                                                            <img class="card-img-top img-fluid" src="../../assets/images/museums/thumb-1.png" alt="openings" />
                                                        </li>
                                                        <li class="cbul-dtl">
                                                            <span class="card-head">Dianosar Museum</span>
                                                            <br />
                                                            <span class="card-subhead">Toronto, Canada</span>
                                                        </li>
                                                    </ul>
                                                    <ul class="current-actions list-inline right-side">
                                                        <li class="list-inline-item"><div class="wishlist"></div></li>
                                                        <li class="list-inline-item curr-list-box"><div class="curr-list"></div></li>
                                                    </ul>
                                                </div>
                                                <div class="wishlist-alert">
                                                    <div class="wishlist-inner">
                                                        <ul class="list-inline">
                                                            <li class="list-inline-item"><img class="tick" src="../../assets/images/icons/tick.png" alt="icon" /></li>
                                                            <li class="list-inline-item alert-title">
                                                                <div class="add-wish">Added to your wishlist</div>
                                                                <div class="rmv-wish">Removed from your wishlist</div>
                                                            </li>
                                                            <li class="list-inline-item"><a href="#">MY WISHIST</a></li>
                                                            <li class="list-inline-item ml-auto"><img class="alert-close" src="../../assets/images/icons/close-alert.png" alt="icon" /></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="current-list">
                                                    <table class="table">
                                                        <thead>
                                                            <tr>
                                                                <th>Tiers</th>
                                                                <th>Total Pieces</th>
                                                                <th>Available</th>
                                                                <th>Price</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td class="text-gold">#1 !!</td>
                                                                <td>1</td>
                                                                <td>Sold!</td>
                                                                <td>$ 180,000</td>
                                                            </tr>
                                                            <tr>
                                                                <td class="text-gold">Very Rare</td>
                                                                <td>99</td>
                                                                <td># 78</td>
                                                                <td>$ 1000</td>
                                                            </tr>
                                                            <tr>
                                                                <td class="text-gold">Rare</td>
                                                                <td>500</td>
                                                                <td># 439</td>
                                                                <td>$ 500</td>
                                                            </tr>
                                                            <tr>
                                                                <td class="text-gold">Collectible</td>
                                                                <td>10,000</td>
                                                                <td># 1,876</td>
                                                                <td>$ 25</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <a href='place-bid/2'>
                                        <div class="anchor-overlay"></div>
                                    </a> */}
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="grid-item">
                            <div class="grid-item-content">
                                <a href='place-bid/2'>
                                    <div class="card p-0 hover-shadow" style={{ backgroundImage: `url("/assets/images/museums/test.jpg")` }}>
                                        <div class="current-overlay"></div>
                                        <div class="card-body">
                                            <div class="right-side">
                                                <div class="current-label">Ends in 5 Days</div>
                                            </div>
                                            <div class="current-bottom">
                                                <div class="card-label">FOSSIL</div>
                                                <h3 class="current-title">Nautilus shell</h3>
                                                <p class="current-subtitle">Lorem ipsum dolor sit amet, consectetur.</p>
                                                <div class="current-box">
                                                    <ul class="cbul left-side">
                                                        <li class="cbul-thumb">
                                                            <img class="card-img-top img-fluid" src="../../assets/images/museums/thumb-1.png" alt="openings" />
                                                        </li>
                                                        <li class="cbul-dtl">
                                                            <span class="card-head">Dianosar Museum</span>
                                                            <br />
                                                            <span class="card-subhead">Toronto, Canada</span>
                                                        </li>
                                                    </ul>
                                                    <ul class="current-actions list-inline right-side">
                                                        <li class="list-inline-item"><div class="wishlist"></div></li>
                                                        <li class="list-inline-item curr-list-box"><div class="curr-list"></div></li>
                                                    </ul>
                                                </div>
                                                <div class="wishlist-alert">
                                                    <div class="wishlist-inner">
                                                        <ul class="list-inline">
                                                            <li class="list-inline-item"><img class="tick" src="../../assets/images/icons/tick.png" alt="icon" /></li>
                                                            <li class="list-inline-item alert-title">
                                                                <div class="add-wish">Added to your wishlist</div>
                                                                <div class="rmv-wish">Removed from your wishlist</div>
                                                            </li>
                                                            <li class="list-inline-item"><a href="#">MY WISHIST</a></li>
                                                            <li class="list-inline-item ml-auto"><img class="alert-close" src="../../assets/images/icons/close-alert.png" alt="icon" /></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="current-list">
                                                    <table class="table">
                                                        <thead>
                                                            <tr>
                                                                <th>Tiers</th>
                                                                <th>Total Pieces</th>
                                                                <th>Available</th>
                                                                <th>Price</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td class="text-gold">#1 !!</td>
                                                                <td>1</td>
                                                                <td>Sold!</td>
                                                                <td>$ 180,000</td>
                                                            </tr>
                                                            <tr>
                                                                <td class="text-gold">Very Rare</td>
                                                                <td>99</td>
                                                                <td># 78</td>
                                                                <td>$ 1000</td>
                                                            </tr>
                                                            <tr>
                                                                <td class="text-gold">Rare</td>
                                                                <td>500</td>
                                                                <td># 439</td>
                                                                <td>$ 500</td>
                                                            </tr>
                                                            <tr>
                                                                <td class="text-gold">Collectible</td>
                                                                <td>10,000</td>
                                                                <td># 1,876</td>
                                                                <td>$ 25</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <a href='place-bid/2'>
                                        <div class="anchor-overlay"></div>
                                    </a> */}
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="grid-item">
                            <div class="grid-item-content">
                                <a href='place-bid/2'>
                                    <div class="card p-0 hover-shadow" style={{ backgroundImage: `url("/assets/images/museums/adam-mathieu-plLR9WlQMO4-unsplash.jpg")` }}>
                                        <div class="current-overlay"></div>
                                        <div class="card-body">
                                            <div class="right-side">
                                                <div class="current-label">Ends in 5 Days</div>
                                            </div>
                                            <div class="current-bottom">
                                                <div class="card-label">SCULPTURE</div>
                                                <h3 class="current-title">Dinosaur skeleton</h3>
                                                <p class="current-subtitle">Lorem ipsum dolor sit amet.</p>
                                                <div class="current-box">
                                                    <ul class="cbul left-side">
                                                        <li class="cbul-thumb">
                                                            <img class="card-img-top img-fluid" src="../../assets/images/museums/thumb-1.png" alt="openings" />
                                                        </li>
                                                        <li class="cbul-dtl">
                                                            <span class="card-head">Antique Museum</span>
                                                            <br />
                                                            <span class="card-subhead">Toronto, Canada</span>
                                                        </li>
                                                    </ul>
                                                    <ul class="current-actions list-inline right-side">
                                                        <li class="list-inline-item"><div class="wishlist"></div></li>
                                                        <li class="list-inline-item curr-list-box"><div class="curr-list"></div></li>
                                                    </ul>
                                                </div>
                                                <div class="wishlist-alert">
                                                    <div class="wishlist-inner">
                                                        <ul class="list-inline">
                                                            <li class="list-inline-item"><img class="tick" src="../../assets/images/icons/tick.png" alt="icon" /></li>
                                                            <li class="list-inline-item alert-title">
                                                                <div class="add-wish">Added to your wishlist</div>
                                                                <div class="rmv-wish">Removed from your wishlist</div>
                                                            </li>
                                                            <li class="list-inline-item"><a href="#">MY WISHIST</a></li>
                                                            <li class="list-inline-item ml-auto"><img class="alert-close" src="../../assets/images/icons/close-alert.png" alt="icon" /></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="current-list">
                                                    <table class="table">
                                                        <thead>
                                                            <tr>
                                                                <th>Tiers</th>
                                                                <th>Total Pieces</th>
                                                                <th>Available</th>
                                                                <th>Price</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td class="text-gold">#1 !!</td>
                                                                <td>1</td>
                                                                <td>Sold!</td>
                                                                <td>$ 180,000</td>
                                                            </tr>
                                                            <tr>
                                                                <td class="text-gold">Very Rare</td>
                                                                <td>99</td>
                                                                <td># 78</td>
                                                                <td>$ 1000</td>
                                                            </tr>
                                                            <tr>
                                                                <td class="text-gold">Rare</td>
                                                                <td>500</td>
                                                                <td># 439</td>
                                                                <td>$ 500</td>
                                                            </tr>
                                                            <tr>
                                                                <td class="text-gold">Collectible</td>
                                                                <td>10,000</td>
                                                                <td># 1,876</td>
                                                                <td>$ 25</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="grid-item">
                            <div class="grid-item-content">
                                <a href='place-bid/2'>
                                    <div class="card p-0 hover-shadow" style={{ backgroundImage: `url("/assets/images/museums/aaron-greenwood-xZDWEEMS3sA-unsplash.jpg")` }}>
                                        <div class="current-overlay"></div>
                                        <div class="card-body">
                                            <div class="right-side">
                                                <div class="current-label">Ends in 5 Days</div>
                                            </div>
                                            <div class="current-bottom">
                                                <div class="card-label">CHINESE</div>
                                                <h3 class="current-title">Chinese clay warrior</h3>
                                                <p class="current-subtitle">Lorem ipsum dolor sit amet, consectetur.</p>
                                                <div class="current-box">
                                                    <ul class="cbul left-side">
                                                        <li class="cbul-thumb">
                                                            <img class="card-img-top img-fluid" src="../../assets/images/museums/thumb-1.png" alt="openings" />
                                                        </li>
                                                        <li class="cbul-dtl">
                                                            <span class="card-head">Jade Museum</span>
                                                            <br />
                                                            <span class="card-subhead">Toronto, Canada</span>
                                                        </li>
                                                    </ul>
                                                    <ul class="current-actions list-inline right-side">
                                                        <li class="list-inline-item"><div class="wishlist"></div></li>
                                                        <li class="list-inline-item curr-list-box"><div class="curr-list"></div></li>
                                                    </ul>
                                                </div>
                                                <div class="wishlist-alert">
                                                    <div class="wishlist-inner">
                                                        <ul class="list-inline">
                                                            <li class="list-inline-item"><img class="tick" src="../../assets/images/icons/tick.png" alt="icon" /></li>
                                                            <li class="list-inline-item alert-title">
                                                                <div class="add-wish">Added to your wishlist</div>
                                                                <div class="rmv-wish">Removed from your wishlist</div>
                                                            </li>
                                                            <li class="list-inline-item"><a href="#">MY WISHIST</a></li>
                                                            <li class="list-inline-item ml-auto"><img class="alert-close" src="../../assets/images/icons/close-alert.png" alt="icon" /></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="current-list">
                                                    <table class="table">
                                                        <thead>
                                                            <tr>
                                                                <th>Tiers</th>
                                                                <th>Total Pieces</th>
                                                                <th>Available</th>
                                                                <th>Price</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td class="text-gold">#1 !!</td>
                                                                <td>1</td>
                                                                <td>Sold!</td>
                                                                <td>$ 180,000</td>
                                                            </tr>
                                                            <tr>
                                                                <td class="text-gold">Very Rare</td>
                                                                <td>99</td>
                                                                <td># 78</td>
                                                                <td>$ 1000</td>
                                                            </tr>
                                                            <tr>
                                                                <td class="text-gold">Rare</td>
                                                                <td>500</td>
                                                                <td># 439</td>
                                                                <td>$ 500</td>
                                                            </tr>
                                                            <tr>
                                                                <td class="text-gold">Collectible</td>
                                                                <td>10,000</td>
                                                                <td># 1,876</td>
                                                                <td>$ 25</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="grid-item">
                            <div class="grid-item-content">
                                <a href='place-bid/2'>
                                    <div class="card p-0 hover-shadow" style={{ backgroundImage: `url("/assets/images/museums/601754e0a31024adbdb20447 copy.jpg")` }}>
                                        <div class="current-overlay"></div>
                                        <div class="card-body">
                                            <div class="right-side">
                                                <div class="current-label">Ends in 5 Days</div>
                                            </div>
                                            <div class="current-bottom">
                                                <div class="card-label">EGYPT</div>
                                                <h3 class="current-title">Egyptian falcon god</h3>
                                                <p class="current-subtitle">Lorem ipsum dolor sit amet consec.</p>
                                                <div class="current-box">
                                                    <ul class="cbul left-side">
                                                        <li class="cbul-thumb">
                                                            <img class="card-img-top img-fluid" src="../../assets/images/museums/thumb-1.png" alt="openings" />
                                                        </li>
                                                        <li class="cbul-dtl">
                                                            <span class="card-head">Military Museum</span>
                                                            <br />
                                                            <span class="card-subhead">Toronto, Canada</span>
                                                        </li>
                                                    </ul>
                                                    <ul class="current-actions list-inline right-side">
                                                        <li class="list-inline-item"><div class="wishlist"></div></li>
                                                        <li class="list-inline-item curr-list-box"><div class="curr-list"></div></li>
                                                    </ul>
                                                </div>
                                                <div class="wishlist-alert">
                                                    <div class="wishlist-inner">
                                                        <ul class="list-inline">
                                                            <li class="list-inline-item"><img class="tick" src="../../assets/images/icons/tick.png" alt="icon" /></li>
                                                            <li class="list-inline-item alert-title">
                                                                <div class="add-wish">Added to your wishlist</div>
                                                                <div class="rmv-wish">Removed from your wishlist</div>
                                                            </li>
                                                            <li class="list-inline-item"><a href="#">MY WISHIST</a></li>
                                                            <li class="list-inline-item ml-auto"><img class="alert-close" src="../../assets/images/icons/close-alert.png" alt="icon" /></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="current-list">
                                                    <table class="table">
                                                        <thead>
                                                            <tr>
                                                                <th>Tiers</th>
                                                                <th>Total Pieces</th>
                                                                <th>Available</th>
                                                                <th>Price</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td class="text-gold">#1 !!</td>
                                                                <td>1</td>
                                                                <td>Sold!</td>
                                                                <td>$ 180,000</td>
                                                            </tr>
                                                            <tr>
                                                                <td class="text-gold">Very Rare</td>
                                                                <td>99</td>
                                                                <td># 78</td>
                                                                <td>$ 1000</td>
                                                            </tr>
                                                            <tr>
                                                                <td class="text-gold">Rare</td>
                                                                <td>500</td>
                                                                <td># 439</td>
                                                                <td>$ 500</td>
                                                            </tr>
                                                            <tr>
                                                                <td class="text-gold">Collectible</td>
                                                                <td>10,000</td>
                                                                <td># 1,876</td>
                                                                <td>$ 25</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>


                    {/* <!-- Pagination --> */}
                    <nav aria-label="Page navigation example" class="pagi-box">
                        <ul class="pagination">
                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                            </li>
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link active" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                            </li>
                        </ul>
                    </nav>

                </div>
            </section>
        </>
    );
};
export default Collect;