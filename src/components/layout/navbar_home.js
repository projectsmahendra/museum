import React, { useEffect } from 'react';

const NavBarHome = () => {
    
    return (
        <div class="navigation w-100">
            <div class="container">
                <nav class="navbar navbar-expand-lg navbar-dark p-0">
                    <button class="navbar-toggler rounded-0" type="button" data-toggle="collapse" data-target="#navigation"
                        aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navigation">
                        <ul class="navbar-nav text-center lftnav drop-icon">
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
                        </ul>
                        <ul class="navbar-nav main-nav text-center pl-50">
                            <li class="nav-item dropdown view ml-0">
                                <div class="nav-link-box">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false">
                                        MUSEUMS
                                    </a>
                                </div>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <div class="menu-container">
                                        <a class="dropdown-item" href="/museum"><div class="mr-10 grey-gold museums"></div> MUSEUMS</a>
                                        <a class="dropdown-item" href="#"><div class="mr-10 grey-gold virtualmuseums"></div> VIRTUAL MUSEUMS</a>
                                    </div>
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
                                        <a class="dropdown-item" href="#"><div class="mr-10 grey-gold virtualexhibits"></div> VIRTUAL EXHIBITS</a>
                                        <a class="dropdown-item" href="#"><div class="mr-10 grey-gold virtualtours"></div> VIRTUAL TOURS</a>
                                        <a class="dropdown-item" href="#"><div class="mr-10 grey-gold virtualmuseums"></div> VIRTUAL MUSEUMS</a>
                                        <a class="dropdown-item" href="games.html"><div class="mr-10 grey-gold games"></div> GAMES</a>
                                        <a class="dropdown-item" href="#"><div class="mr-10 grey-gold metaverse"></div> METAVERSE</a>

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
    );
};
export default NavBarHome;