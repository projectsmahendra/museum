import React, { useEffect, useState } from 'react';

const Museum = () => {
    const [museums, setMuseums] = useState([]);
    const [topMuseums, setTopMuseums] = useState([]);
    const [recentMuseums, setRecentMuseums] = useState([]);

    useEffect(() => {
        document.title = 'My Favorites';
        setMuseums(getMuseums());
        setTopMuseums(getCarItems());
        setRecentMuseums(getRecentMuseums())
    });

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

    const getMuseums = () => {
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

            }, {
                name: "Antique Museum",
                location: "Toronto, Canada",

            }, {
                name: "Antique Museum",
                location: "Toronto, Canada",

            },
        ]
    };

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

    return (

        <>
            {/* <!-- breadcrumb --> */}
            {/* <section class="breadcrumb-section section top-section">
                <div class="container">
                    <ul>
                        <li class="bread-parent">MUSEUMS</li>
                        <li class="bread-seperator"> <img class="img-fluid" src="../../assets/images/icons/breadcrumb-arrow.png" alt="breadcrumb" /> </li>
                        <li class="bread-child">MUSEUMS</li>
                    </ul>
                </div>
            </section> */}

            {/* <!-- page title --> */}
            <section class="page-title-section section top-section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8">
                            <h1 class="page-title list-inline-item">Museums</h1>
                            <p class="page-details">Lorem consectetur adipis</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- /page title --> */}


            <section class="car-section my-car section">
                <div class="container">
                    <div class="regular slider">
                        {topMuseums.map((museums, id) => (
                            <div class="car-item" key={id}>
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


            <section class="section">
                <div class="container">
                    <h2 class="searth-title">Search Museums</h2>
                    <div class="row">
                        <div class="col-md-4">
                            <select id="srchcity" class="form-control">
                                <option value=""></option>
                                <option>One</option>
                                <option>Two</option>
                            </select>
                        </div>

                        <div class="form-floating">
                            <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <label for="floatingSelect">Works with selects</label>
                        </div>


                        <div class="dropdown">
                            <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown link
                            </a>

                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>



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
            <section class="search-result-section section">
                <div class="container">
                    <div class="res-found">320 Results found</div>
                    {/* <!-- Search Result --> */}
                    <div class="row justify-content-center">
                        {/* <!-- item --> */}
                        {museums.map((museum, id) => (
                            <div class="col-lg-3 col-sm-6 mb-3" key={id}>
                                <a class="text-color" href="#">
                                    <div class="card p-0 hover-shadow">
                                        <img class="card-img-top img-fluid" src="../../assets/images/museums/4.png" alt="museums" />
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
                                </a>
                            </div>
                        ))}

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


            {/* <!-- Recent Views --> */}
            <section class="search-result-section recent-views section">
                <div class="container">
                    <h2 class="searth-title mob-center">Recent Views</h2>
                    {/* <!-- Search Result --> */}
                    <div class="row justify-content-center">
                        {/* <!-- item --> */}
                        {recentMuseums.map((museums, id) => (
                            <div class="col-lg-3 col-sm-6 mb-3">
                                <a class="text-color" href="#">
                                    <div class="card p-0 hover-shadow">
                                        <img class="card-img-top img-fluid" src="../../assets/images/museums/4.png" alt="museums" />
                                        <div class="card-body">
                                            <div class="card-label">SCULPTURE</div>
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
                                </a>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </>
    );
};
export default Museum;