import React, { useEffect, useState } from 'react';

const Openings = () => {
    // const [museums, setMuseums] = useState([]);
    const [topMuseums, setTopMuseums] = useState([]);

    useEffect(() => {
        document.title = 'My Favorites';
        // setMuseums(getMuseums());
        setTopMuseums(getCarItems());

    },[]);
    const getCarItems = () => {
        return [
            {
                name: "Antique Museum",
                location: "Toronto, Canada",
                imgtitle: "interior-bullfighting-museum-real-maestranza-de-caballeria",
            },
            {
                name: "Antique Museum",
                location: "Toronto, Canada",
                imgtitle: "elizabeth-george-E_evIcvACS8-unsplash",
            }, {
                name: "Antique Museum",
                location: "Toronto, Canada",
                imgtitle: "cristina-gottardi-05P65mxLuW8-unsplash",
            }, {
                name: "Antique Museum",
                location: "Toronto, Canada",
                imgtitle: "arno-senoner-fekOj0LCFQY-unsplash",
            }, {
                name: "Antique Museum",
                location: "Toronto, Canada",
                imgtitle: "akshay-chauhan-42lgAdOoRso-unsplash",
            }, {
                name: "Antique Museum",
                location: "Toronto, Canada",
                imgtitle: "vr-in-art-museum-2021-09-24-04-06-24-utc",
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
            {/* <!-- page title --> */}
            <section class="page-title-section top-section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8">
                            <h1 class="page-title list-inline-item">Openings</h1>
                            <p class="page-details">Lorem consectetur adipis</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- /page title --> */}

            {/* <!-- carousel   --> */}
            <section class="car-section my-car section">
                <div class="container">
                    <div class="regular slider">
                        {topMuseums.map((museums, id) => (
                            <div class="car-item">
                                {/* <img src="../../assets/images/museums/1.png" class="img-fluid" alt="museums" /> */}
                                <img src={`../../assets/images/museums/${id}.png`} class="img-fluid" alt="museums" />
                                <div class="card-body">
                                    <ul class="cbul">
                                        <li class="cbul-thumb">
                                            <img class="card-img-top img-fluid" src="../../assets/images/museums/thumb-1.png" alt="museums" />
                                        </li>
                                        <li class="cbul-dtl">
                                            <span class="card-head">Antique Museum</span>
                                            <br />
                                            <span class="card-subhead">Toronto, Canada</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* <!-- Searchbar --> */}
            <section class="search-filter-section section">
                <div class="container">
                    <h2 class="searth-title">Search Museums</h2>

                    <div class="searchbar">
                        <form name="form1" id="form1" action="/action_page.php">

                            <div class="filter-box">
                                <div class="form-floating select">
                                    <select class="form-select" id="city" aria-label="Floating label select example">
                                        <option selected>Toronto</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                    <label for="city">Search By City</label>
                                </div>
                            </div>

                            <div class="filter-box">
                                <div class="form-floating select">
                                    <select class="form-select" id="state" aria-label="Floating label select example">
                                        <option selected>Ontario</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                    <label for="state">State</label>
                                </div>
                            </div>

                            <div class="filter-box">
                                <div class="form-floating select">
                                    <select class="form-select" id="country" aria-label="Floating label select example">
                                        <option selected>Canada</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                    <label for="country">Country</label>
                                </div>
                            </div>

                            <div class="filter-box">
                                <div class="form-floating select">
                                    <select class="form-select" id="categoty" aria-label="Floating label select example">
                                        <option selected>All, Antique...+3</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                    <label for="categoty">Categoty</label>
                                </div>
                            </div>

                            <div class="filter-box">
                                <input type="submit" class="btn my-btn" value="SEARCH" />
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* <!-- Search Museums --> */}
            <section class="opening-section section">
                <div class="container">
                    {/* <!-- Search Result --> */}
                    <div class="row justify-content-center">
                        {/* <!-- item --> */}
                        {topMuseums.map((museums, id) => (
                            <div class="col-lg-6 col-sm-6 mb-3">
                                <a class="text-color" href="#">
                                    <div class="card p-0 hover-shadow" style={{ backgroundImage: `url("/assets/images/museums/${museums.imgtitle}.jpg")` }}>
                                        <div class="current-overlay"></div>
                                        {/* <img class="card-img-top img-fluid" src="../../assets/images/openings/opening1.jpg" alt="openings" /> */}
                                        <div class="card-body">
                                            <div class="save-btn ml-auto">
                                                <a href="#" class="my-btn">SAVE</a>
                                            </div>
                                            <div className='clrbth'></div>
                                            <img class="img-fluid mb-4 head-line ml-auto" src="../../assets/images/icons/head-line.png" alt="head-line" />
                                            <h2>Grand Opening</h2>
                                            <p>15th Feb 2022</p>
                                            <ul class="cbul">
                                                <li class="cbul-thumb">
                                                    <img class="card-img-top img-fluid" src="../../assets/images/museums/thumb-1.png" alt="openings" />
                                                </li>
                                                <li class="cbul-dtl">
                                                    <span class="card-head">Antique Museum</span>
                                                    <br />
                                                    <span class="card-subhead">Toronto, Canada</span>
                                                </li>
                                            </ul>
                                            <ul class="label-box">
                                                <li>
                                                    <div class="card-label">FOSSIL</div>
                                                </li>
                                                <li>
                                                    <div class="card-label">DINOSOUR</div>
                                                </li>
                                                <li>
                                                    <div class="card-label">ANTIQUE</div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))}
                        {/* <!-- item --> */}
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
export default Openings;