import React, { useEffect } from 'react';

const NavBarHome = () => {

    return (
        <>
            <div class="navigation w-100">
                <div class="container">
                    <nav class="navbar navbar-expand-lg navbar-dark p-0 position-static">
                        <button class="navbar-toggler rounded-0" type="button" data-toggle="collapse" data-target="#navigation"
                            aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navigation">
                            {/* <ul class="navbar-nav text-center lftnav drop-icon">
                            <li class="nav-item dropdown view ml-0">
                                <a class="nav-link dropdown-toggle my-btn" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                    PARTNER
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#">PARTNER-1</a>
                                    <a class="dropdown-item" href="#">PARTNER-2</a>
                                    <a class="dropdown-item" href="#">PARTNER-3</a>
                                    <a class="dropdown-item" href="#">PARTNER-4</a>
                                    <a class="dropdown-item" href="#">PARTNER-5</a>
                                </div>
                            </li>
                        </ul> */}



                            {/* <!-- Collapsible wrapper --> */}
                            <div class="collapse navbar-collapse partner-section" id="navbarExample6">
                                {/* <!-- Left links --> */}
                                <ul class="navbar-nav text-center lftnav drop-icon">
                                    {/* <!-- Navbar dropdown --> */}
                                    <li class="nav-item dropdown position-static">
                                        <a
                                            class="nav-link dropdown-toggle my-btn position-relative"
                                            href="#"
                                            id="navbarDropdown"
                                            role="button"
                                            data-mdb-toggle="dropdown"
                                            aria-expanded="false">
                                            PARTNER
                                        </a>





                                        {/* <!-- Dropdown menu --> */}
                                        <div class="dropdown-menu w-100 mt-0 partner-bg" aria-labelledby="navbarDropdown">
                                            <div class="container">
                                                <div class="row my-4">
                                                    <div class="col-md-6 mb-4 mb-md-0">
                                                        <h3>Partners</h3>
                                                        <ul className='partner-list'>
                                                            <li>
                                                                <a class="" href="#" data-toggle="modal" data-target="#partner1Modal">
                                                                    <img class="partner-icon img-fluid" src="../../assets/images/icons/partner-icon1.png" alt="icons" />
                                                                    MUSEUMS PARTNERING PROGRAM
                                                                    <img class="partner-go" src="../../assets/images/icons/partner-go.png" alt="icons" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a class="" href="#" data-toggle="modal" data-target="#partner2Modal">
                                                                    <img class="partner-icon img-fluid" src="../../assets/images/icons/partner-icon2.png" alt="icons" />
                                                                    BLOCKCHAIN PROFESSIONALS
                                                                    <img class="partner-go" src="../../assets/images/icons/partner-go.png" alt="icons" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a class="" href="#" data-toggle="modal" data-target="#partner3Modal">
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
                                                        {/* <img class="shadow-man-img img-fluid mb-4" src="../../assets/images/backgrounds/shadow-man.png" alt="museum" /> */}



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
                                    <div class="nav-link-box">
                                        <a class="nav-link" href="museum">MUSEUMS</a>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <div class="nav-link-box active">
                                        <a class="nav-link" href="openings">OPENINGS</a>
                                    </div>
                                </li>
                                <li class="nav-item dropdown view ml-0">
                                    <div class="nav-link-box">
                                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false">
                                            EXPERIENCES
                                        </a>
                                    </div>
                                    <div class="dropdown-menu expdrop" aria-labelledby="navbarDropdown">
                                        <div class="menu-container">
                                            <a class="dropdown-item" href="virtual-exhibits"><div class="mr-10 grey-gold virtualexhibits"></div> VIRTUAL EXHIBITS</a>
                                            <a class="dropdown-item" href="virtual-tours"><div class="mr-10 grey-gold virtualtours"></div> VIRTUAL TOURS</a>
                                            <a class="dropdown-item" href="virtual-museums"><div class="mr-10 grey-gold virtualmuseums"></div> VIRTUAL MUSEUMS</a>
                                            <a class="dropdown-item" href="games"><div class="mr-10 grey-gold games"></div> GAMES</a>
                                            <a class="dropdown-item" href="metaverse"><div class="mr-10 grey-gold metaverse"></div> METAVERSE</a>
                                        </div>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <div class="nav-link-box">
                                        <a class="nav-link" href="#">COMMUNITY</a>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <div class="nav-link-box">
                                        <a class="nav-link" href="#">HELP CENTER</a>
                                    </div>
                                </li>
                            </ul>
                            <ul class="navbar-nav text-center lftnav ml-auto">
                                <li class="nav-item">
                                    <a class="nav-link" href="#">MY MUSEUM</a>
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