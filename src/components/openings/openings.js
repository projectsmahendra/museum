import React, { useEffect, useState } from 'react';

const Openings = () => {
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
            {/* <!-- page title --> */}
            <section class="page-title-section">
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
                                <img src="../../assets/images/museums/1.png" class="img-fluid" alt="museums" />
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
                                <span>Search By City:</span>
                                <div class="select">
                                    <select name="subject" id="subject">
                                        <option value="" selected="selected">Select City</option>
                                    </select>
                                </div>
                            </div>
                            <div class="filter-box">
                                <span>State:</span>
                                <div class="select">
                                    <select name="topic" id="topic">
                                        <option value="" selected="selected">Select City first</option>
                                    </select>
                                </div>
                            </div>
                            <div class="filter-box">
                                <span>Country:</span>
                                <div class="select">
                                    <select name="chapter" id="chapter">
                                        <option value="" selected="selected">Select State first</option>
                                    </select>
                                </div>
                            </div>
                            <div class="filter-box">
                                <span>Categoty:</span>
                                <div class="select">
                                    <select name="chapter" id="chapter">
                                        <option value="" selected="selected">Select Categoty</option>
                                        <option value="">All, Antique...+1 </option>
                                        <option value="">All, Antique...+2 </option>
                                        <option value="">All, Antique...+3 </option>
                                        <option value="">All, Antique...+4 </option>
                                    </select>
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
                                    <div class="card p-0 hover-shadow">
                                        <img class="card-img-top img-fluid" src="../../assets/images/openings/opening1.jpg" alt="openings" />
                                        <div class="card-body">
                                            <div class="save-btn">
                                                <a href="#" class="my-btn">SAVE</a>
                                            </div>
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