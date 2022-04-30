import React, { useEffect } from 'react';

const NavBarHome = () => {

    return (
        <>
            <div class="navigation w-100">
                <div class="container">
                    <nav class="navbar navbar-expand-lg navbar-dark p-0 position-static">

                        <button class="navbar-toggler rounded-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse mobile-menubox" id="navbarSupportedContent">
                            {/* <div class="collapse navbar-collapse" id="navigation"> */}

                            {/* <!-- Collapsible wrapper --> */}
                            {/* <div class="collapse navbar-collapse partner-section" id="navbarExample6"> */}
                            <div class="partner-section">
                                {/* <!-- Left links --> */}
                                <ul class="navbar-nav text-center lftnav drop-icon">
                                    {/* <!-- Navbar dropdown --> */}
                                    <li class="nav-item dropdown position-static">

                                        {/* <a
                                            class="nav-link dropdown-toggle my-btn position-relative"
                                            href="#"
                                            id="navbarDropdown"
                                            role="button"
                                            data-mdb-toggle="dropdown"
                                            aria-expanded="false">
                                            PARTNER
                                        </a> */}

                                        <a
                                            class="nav-link dropdown-toggle my-btn position-relative"
                                            href="#"
                                            id="navbarDropdown"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            PARTNER
                                        </a>

                                        {/* <!-- Dropdown menu --> */}
                                        <div class="dropdown-menu w-100 mt-0 partner-bg" aria-labelledby="navbarDropdown">
                                            <div class="container partner-bg-container">
                                                <div class="row my-4">
                                                    <div class="col-md-6 mb-4 mb-md-0 shadow-man-content">
                                                        <h3>Partners</h3>
                                                        <ul className='partner-list'>
                                                            <li>
                                                                <a class="" href="#" data-bs-toggle="modal" data-bs-target="#partner1Modal">
                                                                    <img class="partner-icon img-fluid" src="../../assets/images/icons/partner-icon1.png" alt="icons" />
                                                                    MUSEUMS PARTNERING PROGRAM
                                                                    <img class="partner-go" src="../../assets/images/icons/partner-go.png" alt="icons" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a class="" href="#" data-bs-toggle="modal" data-bs-target="#partner2Modal">
                                                                    <img class="partner-icon img-fluid" src="../../assets/images/icons/partner-icon2.png" alt="icons" />
                                                                    BLOCKCHAIN PROFESSIONALS
                                                                    <img class="partner-go" src="../../assets/images/icons/partner-go.png" alt="icons" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a class="" href="#" data-bs-toggle="modal" data-bs-target="#partner3Modal">
                                                                    <img class="partner-icon img-fluid" src="../../assets/images/icons/partner-icon3.png" alt="icons" />
                                                                    INVESTORS
                                                                    <img class="partner-go" src="../../assets/images/icons/partner-go.png" alt="icons" />
                                                                </a>
                                                            </li>
                                                        </ul>

                                                        <h6>PARTNERS AND ASSOCIATIONS</h6>
                                                        <ul className='partner-name-list'>
                                                            <li>
                                                                <div className='partner-name-box'><img class="partner-name img-fluid" src="../../assets/images/icons/partner-name.png" alt="icons" /> </div>
                                                                <p>Partner Name</p>
                                                            </li>
                                                            <li>
                                                                <div className='partner-name-box'><img class="partner-name img-fluid" src="../../assets/images/icons/partner-name.png" alt="icons" /> </div>
                                                                <p>Partner Name</p>
                                                            </li>
                                                            <li>
                                                                <div className='partner-name-box'><img class="partner-name img-fluid" src="../../assets/images/icons/partner-name.png" alt="icons" /> </div>
                                                                <p>Partner Name</p>
                                                            </li>
                                                        </ul>

                                                    </div>
                                                    <div class="col-md-6 mb-md-0 shadow-man">
                                                        <img class="shadow-man-img img-fluid mb-4 hidden-laptop" src="../../assets/images/backgrounds/shadow-man.png" alt="museum" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                {/* <!-- Left links --> */}
                            </div>
                            {/* <!-- Collapsible wrapper --> */}


                            <ul class="navbar-nav main-nav text-center mid-side">
                                <li class="nav-item">
                                    <a class="nav-link nav-link-mid nav-link-hvr" href="museum">MUSEUMS</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link nav-link-mid nav-link-hvr active" href="openings">OPENINGS</a>
                                </li>
                                <li class="nav-item dropdown view">
                                    <a class="nav-link dropdown-toggle nav-link-mid nav-link-hvr" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        EXPERIENCES
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item" href="virtual-exhibits"><div class="mr-10 grey-gold virtualexhibits"></div> VIRTUAL EXHIBITS</a></li>
                                        <li><a class="dropdown-item" href="virtual-tours"><div class="mr-10 grey-gold virtualtours"></div> VIRTUAL TOURS</a></li>
                                        <li><a class="dropdown-item" href="virtual-museums"><div class="mr-10 grey-gold virtualmuseums"></div> VIRTUAL MUSEUMS</a></li>
                                        <li><a class="dropdown-item" href="games"><div class="mr-10 grey-gold games"></div> GAMES</a></li>
                                        <li><a class="dropdown-item" href="metaverse"><div class="mr-10 grey-gold metaverse"></div> METAVERSE</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link nav-link-mid nav-link-hvr" href="coming-soon">COMMUNITY</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link nav-link-mid nav-link-hvr" href="coming-soon">HELP CENTER</a>
                                </li>
                            </ul>
                            <ul class="navbar-nav text-center lftnav ml-auto">
                                <li class="nav-item">
                                    <a class="nav-link nav-link-mid nav-link-hvr" href="coming-soon">MY MUSEUM</a>
                                </li>
                                <li class="nav-item mr-0">
                                    <a class="nav-link my-btn mt-6" href="/current-auctions">COLLECT</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
};
export default NavBarHome;