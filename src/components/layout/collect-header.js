import React, { useEffect } from 'react';

import NavBarHome from './navbar_home'

const CollectHeader = () => {
    useEffect(() => {

    });

    return (
        <>
            <header class="fixed-top header">
                {/* <!-- top-most header --> */}
                <div class="topmost-header py-1 bg-white">
                    <a class="navbar-brand" href="/">
                        <ul class="list-inline d-inline">
                            <li class="list-inline-item mx-0"><img src="../../assets/images/logo.png" class="head-logo" alt="logo" /></li>
                            <li class="list-inline-item mx-0"><div class="logoorg"><img src="../../assets/images/logoorg.png" alt="logo" /></div></li>
                        </ul>
                    </a>
                </div>

                {/* <!-- top header --> */}
                <div class="top-header bg-white">
                    <div class="container">
                        <div class="d-flex no-gutters top-header-outbox">
                            <div class="left-side text-center text-lg-left">
                            </div>
                            <div class="mid-side text-center text-lg-left">
                                <ul class="list-inline top-hd-ul">
                                    <li class="list-inline-item"><a class="text-uppercase text-lighten p-sm-2 py-2 px-0 d-inline-block" href="coming-soon">HELP CENTER</a></li>
                                    <li class="list-inline-item"><a class="text-uppercase text-lighten p-sm-2 py-2 px-0 d-inline-block" href="coming-soon">ARCHIVES</a></li>
                                    <li class="list-inline-item"><a class="text-uppercase text-lighten p-sm-2 py-2 px-0 d-inline-block" href="coming-soon">MY MUSEUM</a></li>
                                </ul>
                            </div>
                            <div class="right-side text-center text-lg-right mob-bot">
                                <ul class="list-inline right-side">
                                    {/* <li class="list-inline-item py-2 head-search"><a class="text-uppercase text-lightenmore p-sm-2 py-2 px-0 d-inline-block" href="#"><i class="ti-search"></i></a></li> */}
                                    <li className='header-searchbar hidden-mobile'>
                                        <form class="search">
                                            <div class="search__wrapper">
                                                <input type="text" name="" placeholder="Search Here" class="search__field" />
                                                <button type="submit" class="search__icon"><i class="ti-search"></i></button>
                                            </div>
                                        </form>
                                    </li>
                                    <li class="list-inline-item head-search hidden-laptop">
                                        <form class="d-flex">
                                            <div class="head-search-input-icon"><i class="ti-search"></i></div>
                                            <input class="form-control head-search-input" type="search" placeholder="Search Here" aria-label="Search" />
                                        </form>
                                    </li>
                                    <li class="list-inline-item py-2"><a class="text-uppercase text-lighten p-sm-2 py-2 px-0 d-inline-block" href="coming-soon">NEWS</a></li>
                                    <li class="list-inline-item py-2"><a class="text-uppercase text-lighten p-sm-2 py-2 px-0 d-inline-block" href="coming-soon">SUBSCRIBE</a></li>
                                    <li class="list-inline-item py-2"><a class="text-uppercase text-lighten p-sm-2 py-2 px-0 d-inline-block" href="#" data-bs-toggle="modal" data-bs-target="#loginModal">LOGIN</a></li>
                                </ul>
                                {/* <ul class="mid-right-menu">
                                <li class="head-search">
                                    <form class="d-flex">
                                        <div class="head-search-input-icon"><img src="../../assets/images/icons/search.png" alt="search" /></div>
                                        <input class="form-control head-search-input" type="search" placeholder="Search Here" aria-label="Search" />
                                    </form>
                                </li>
                                <li class="head-right-others"><a class="text-uppercase text-lighten p-sm-2 py-2 px-0 d-inline-block" href="#">NEWS</a></li>
                                <li class="head-right-others"><a class="text-uppercase text-lighten p-sm-2 py-2 px-0 d-inline-block" href="#">SUBSCRIBE</a></li>
                                <li class="head-right-others"><a class="text-uppercase text-lighten p-sm-2 py-2 px-0 d-inline-block" href="#" data-toggle="modal" data-target="#loginModal">LOGIN</a></li>
                            </ul> */}
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- navbar --> */}
                <div class="navigation w-100 collect-header">
                    <div class="container">
                        <nav class="navbar navbar-expand-lg navbar-dark p-0 position-static">

                            <button class="navbar-toggler rounded-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>

                            <div class="collapse navbar-collapse mobile-menubox" id="navbarSupportedContent">

                                {/* <ul class="navbar-nav text-center lftnav back-btn left-side">
                                    <li>
                                        <a class="nav-link collect-nav-link collect-back" href="/"><img class="img-fluid" src="../../assets/images/icons/back.png" alt="icon" /> COLLECT</a>
                                    </li>
                                </ul> */}
                                <ul class="navbar-nav text-center lftnav back-btn left-side">
                                    <li>
                                        <a class="nav-link collect-nav-link collect-back" href="/">
                                            <div className='collect-back-bg hidden-mobile'><div className='collect-back-icon'></div></div>
                                            <img class="img-fluid hidden-laptop" src="../../assets/images/icons/back.png" alt="icon" />
                                            COLLECT
                                        </a>
                                    </li>
                                </ul>
                                <ul class="navbar-nav main-nav text-center mid-side">

                                    <li class="nav-item dropdown view ml-0">
                                        <a class="nav-link dropdown-toggle nav-link-large nav-link-hvr" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            AUCTIONS
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><a class="dropdown-item" href="/current-auctions"><div class="mr-10 grey-gold current"></div> CURRENT</a></li>
                                            <li><a class="dropdown-item" href="/upcoming-auctions"><div class="mr-10 grey-gold upcoming"></div> UPCOMING</a></li>
                                            <li><a class="dropdown-item" href="/auction-results"><div class="mr-10 grey-gold results"></div> RESULTS</a></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item dropdown view ml-0">
                                        <a class="nav-link dropdown-toggle nav-link-large nav-link-hvr active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            COMING SOON
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><a class="dropdown-item active-gold" href="/art-results"><div class="mr-10 grey-gold comming-art"></div> ART</a></li>
                                            <li><a class="dropdown-item" href="/artifacts-results"><div class="mr-10 grey-gold comming-artifacts"></div> ARTIFACTS</a></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item dropdown view ml-0">
                                        <a class="nav-link dropdown-toggle nav-link-large nav-link-hvr" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            MUSEUMS
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li className='collect-mega'>
                                                <div class="row">
                                                    <div class="col-md-4">
                                                        <a class="dropdown-item" href="/all-museums"><div class="mr-10"><img src="../../assets/images/icons/menu/museums/all-museums.png" alt="icon" /></div> ALL</a>
                                                        <a class="dropdown-item" href="coming-soon"><div class="mr-10"><img src="../../assets/images/icons/menu/museums/themet.png" alt="icon" /></div> THE MET</a>
                                                        <a class="dropdown-item" href="coming-soon"><div class="mr-10"><img src="../../assets/images/icons/menu/museums/fieldmuseum.png" alt="icon" /></div> THE FIELD MUSEUM</a>
                                                        <a class="dropdown-item" href="coming-soon"><div class="mr-10"><img src="../../assets/images/icons/menu/museums/sanfransisco.png" alt="icon" /></div> SANFRANSISCO MUSEUM</a>
                                                        <a class="dropdown-item" href="coming-soon"><div class="mr-10"><img src="../../assets/images/icons/menu/museums/artchicago.png" alt="icon" /></div> ART INSTITUTE OF CHICAGO</a>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <a class="dropdown-item" href="coming-soon"><div class="mr-10"><img src="../../assets/images/icons/menu/museums/gettycenter.png" alt="icon" /></div> GETTY CENTER</a>
                                                        <a class="dropdown-item" href="coming-soon"><div class="mr-10"><img src="../../assets/images/icons/menu/museums/royalontario.png" alt="icon" /></div> ROYAL ONTARIO MUSEUM</a>
                                                        <a class="dropdown-item" href="coming-soon"><div class="mr-10"><img src="../../assets/images/icons/menu/museums/museedelouvre.png" alt="icon" /></div> MUSEE DE LOUVRE</a>
                                                        <a class="dropdown-item" href="coming-soon"><div class="mr-10"><img src="../../assets/images/icons/menu/museums/tatemodern.png" alt="icon" /></div> TATE MODERN</a>
                                                        <a class="dropdown-item" href="coming-soon"><div class="mr-10"><img src="../../assets/images/icons/menu/museums/thebritish.png" alt="icon" /></div> THE BRITISH MUSEUM</a>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <a class="dropdown-item" href="coming-soon"><div class="mr-10"><img src="../../assets/images/icons/menu/museums/egyptian.png" alt="icon" /></div> MUSEUM OF EGYPTIAN</a>
                                                        <a class="dropdown-item" href="coming-soon"><div class="mr-10"><img src="../../assets/images/icons/menu/museums/statehermitage.png" alt="icon" /></div> STATE HERMITAGE MUSEUM</a>
                                                        <a class="dropdown-item" href="coming-soon"><div class="mr-10"><img src="../../assets/images/icons/menu/museums/museedorsay.png" alt="icon" /></div> MUSEE D’ORSAY</a>
                                                        <a class="dropdown-item" href="coming-soon"><div class="mr-10"><img src="../../assets/images/icons/menu/museums/gallerylondon.png" alt="icon" /></div> NATIONAL GALLERY OF LONDON</a>
                                                        <a class="dropdown-item" href="coming-soon"><div class="mr-10"><img src="../../assets/images/icons/menu/museums/acropolis.png" alt="icon" /></div> ACROPOLIS MUSEUM</a>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="nav-item dropdown view ml-0">
                                        <a class="nav-link dropdown-toggle nav-link-small nav-link-hvr" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            ART
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li className='collect-mega'>
                                                <div class="row">
                                                    <div class="col-md-4">
                                                        <a class="dropdown-item" href="/all-arts"><div class="mr-10 grey-gold comming-art"></div> ALL</a>
                                                        <a class="dropdown-item" href="coming-soon"><div class="mr-10"><img src="../../assets/images/icons/menu/art/sculpture.png" alt="icon" /></div> SCULPTURE</a>
                                                        <a class="dropdown-item" href="coming-soon"><div class="mr-10"><img src="../../assets/images/icons/menu/art/paintings.png" alt="icon" /></div> PAINTINGS</a>
                                                        <a class="dropdown-item" href="coming-soon"><div class="mr-10"><img src="../../assets/images/icons/menu/art/contemporary.png" alt="icon" /></div> CONTEMPORARY</a>
                                                        <a class="dropdown-item" href="coming-soon"><div class="mr-10"><img src="../../assets/images/icons/menu/art/photography.png" alt="icon" /></div> PHOTOGRAPHY</a>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <a class="dropdown-item" href="coming-soon"><div class="mr-10"><img src="../../assets/images/icons/menu/art/prints.png" alt="icon" /></div> PRINTS</a>
                                                        <a class="dropdown-item" href="coming-soon"><div class="mr-10"><img src="../../assets/images/icons/menu/art/drawings.png" alt="icon" /></div> DRAWINGS</a>
                                                        <a class="dropdown-item" href="coming-soon"><div class="mr-10"><img src="../../assets/images/icons/menu/art/renassance.png" alt="icon" /></div> RENASSANCE</a>
                                                        <a class="dropdown-item" href="coming-soon"><div class="mr-10"><img src="../../assets/images/icons/menu/art/impressionist.png" alt="icon" /></div> IMPRESSIONIST</a>
                                                        <a class="dropdown-item" href="coming-soon"><div class="mr-10"><img src="../../assets/images/icons/menu/art/oldmasters.png" alt="icon" /></div> OLD MASTERS</a>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <a class="dropdown-item" href="coming-soon"><div class="mr-10"><img src="../../assets/images/icons/menu/art/abstract.png" alt="icon" /></div> ABSTRACT</a>
                                                        <a class="dropdown-item" href="coming-soon"><div class="mr-10"><img src="../../assets/images/icons/menu/art/pop.png" alt="icon" /></div> POP</a>
                                                        <a class="dropdown-item" href="coming-soon"><div class="mr-10"><img src="../../assets/images/icons/menu/art/portrait.png" alt="icon" /></div> PORTRAIT</a>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="nav-item dropdown view ml-0">
                                        <a class="nav-link dropdown-toggle nav-link-large nav-link-hvr" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            ARTIFACTS
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li className='collect-mega'>
                                                <div class="row">
                                                    <div class="col-md-4">
                                                        <a class="dropdown-item" href="all-artifacts"><div class="mr-10 grey-gold comming-artifacts"></div> ALL</a>
                                                        <a class="dropdown-item" href="coming-soon"><div class="mr-10"><img src="../../assets/images/icons/menu/artifacts/dinosaurs.png" alt="icon" /></div> DINOSAURS</a>
                                                        <a class="dropdown-item" href="/fossils"><div class="mr-10"><img src="../../assets/images/icons/menu/artifacts/fossils.png" alt="icon" /></div> FOSSILS</a>
                                                        <a class="dropdown-item" href="coming-soon"><div class="mr-10"><img src="../../assets/images/icons/menu/artifacts/birds.png" alt="icon" /></div> BIRDS, MAMMALS, REPTILES</a>
                                                        <a class="dropdown-item" href="coming-soon"><div class="mr-10"><img src="../../assets/images/icons/menu/artifacts/masks.png" alt="icon" /></div> MASKS</a>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <a class="dropdown-item" href="coming-soon"><div class="mr-10"><img src="../../assets/images/icons/menu/artifacts/military.png" alt="icon" /></div> MILITARY</a>
                                                        <a class="dropdown-item" href="coming-soon"><div class="mr-10"><img src="../../assets/images/icons/menu/artifacts/archeology.png" alt="icon" /></div> ARCHEOLOGY</a>
                                                        <a class="dropdown-item" href="coming-soon"><div class="mr-10"><img src="../../assets/images/icons/menu/artifacts/oceanic.png" alt="icon" /></div> OCEANIC</a>
                                                        <a class="dropdown-item" href="coming-soon"><div class="mr-10"><img src="../../assets/images/icons/menu/artifacts/antiques.png" alt="icon" /></div> ANTIQUES</a>
                                                        <a class="dropdown-item" href="coming-soon"><div class="mr-10"><img src="../../assets/images/icons/menu/artifacts/sculpture.png" alt="icon" /></div> ANCIENT SCULPTURE</a>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <a class="dropdown-item" href="coming-soon"><div class="mr-10"><img src="../../assets/images/icons/menu/artifacts/americana.png" alt="icon" /></div> AMERICANA</a>
                                                        <a class="dropdown-item" href="coming-soon"><div class="mr-10"><img src="../../assets/images/icons/menu/artifacts/african.png" alt="icon" /></div> AFRICAN</a>
                                                        <a class="dropdown-item" href="coming-soon"><div class="mr-10"><img src="../../assets/images/icons/menu/artifacts/chinese.png" alt="icon" /></div> CHINESE</a>
                                                        <a class="dropdown-item" href="coming-soon"><div class="mr-10"><img src="../../assets/images/icons/menu/artifacts/egyptian.png" alt="icon" /></div> EGYPTIAN</a>
                                                        <a class="dropdown-item" href="coming-soon"><div class="mr-10"><img src="../../assets/images/icons/menu/artifacts/greek.png" alt="icon" /></div> GREEK AND ROMAN</a>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                <ul class="navbar-nav text-center lftnav ml-auto cart-side right-side">
                                    <li class="nav-item">
                                        <a class="nav-link collect-nav-link" href="#">
                                            <img class="img-fluid" src="../../assets/images/icons/head-wishlist.png" alt="icon" /> <span>0</span>
                                        </a>
                                    </li>
                                    <li class="nav-item mr-0">
                                        <a class="nav-link collect-nav-link" href="#">
                                            <img class="img-fluid" src="../../assets/images/icons/cart.png" alt="icon" /> <span>0</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>

            
            {/* Login Modal */}
            <div class="modal fade loginModal" id="loginModal" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content rounded-0 border-0 p-4">

                        <div class="modal-body">
                            <div className='row'>
                                <div class="col-lg-6 login-bg">
                                    <img src="../../assets/images/login-logo.png" class="login-logo" alt="logo" />
                                </div>
                                <div class="col-lg-6 login-form-box">
                                    <div className='close-box'>
                                        <button type="button" class="close border-0" data-bs-dismiss="modal" aria-label="Close">
                                            &times;
                                        </button>
                                    </div>
                                    <div className='login-cont-box'>
                                        <h3>Welcome Back!</h3>
                                        <p>Login to continue and explore more</p>
                                        <form action="#" class="row">
                                            <div class="col-12">
                                                <div class="input-group mb-2">
                                                    <div class="input-group-prepend">
                                                        <div class="input-group-text"><img src="../../assets/images/icons/login-user.png" alt="logo" /></div>
                                                    </div>
                                                    <input type="text" class="form-control" id="loginuser" name="loginuser" placeholder="USERNAME" />
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="input-group mb-2">
                                                    <div class="input-group-prepend">
                                                        <div class="input-group-text"><img src="../../assets/images/icons/login-pass.png" alt="logo" /></div>
                                                    </div>
                                                    <input type="password" class="form-control" id="loginPassword" name="loginPassword" placeholder="PASSWORD" />
                                                </div>
                                            </div>
                                            <div className='forgot-pass'><a href="#">Forgot Password?</a></div>
                                            <div class="col-12">
                                                <button type="submit" class="my-btn login-btn">LOGIN</button>
                                            </div>
                                        </form>
                                        <div className='signup-box'><span>Or Signup with</span></div>
                                        <ul class="login-icons list-inline">
                                            <li class="mb-3 list-inline-item"><a href="#" target="_blank"><img src="../../assets/images/icons/google.png" alt="logo" /></a></li>
                                            <li class="mb-3 list-inline-item"><a href="#" target="_blank"><img src="../../assets/images/icons/twitter.png" alt="logo" /></a></li>
                                            <li class="mb-3 list-inline-item"><a href="#" target="_blank"><img src="../../assets/images/icons/facebook.png" alt="logo" /></a></li>
                                        </ul>
                                        <div className='signup-link'>Don’t have an account? <a class="openlogin" href="#" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#signupModal">Create New</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Signup Modal */}
            <div class="modal fade loginModal" id="signupModal" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content rounded-0 border-0 p-4">
                        <div class="modal-body">
                            <div className='row'>
                                <div class="col-lg-6 login-bg">
                                    <img src="../../assets/images/login-logo.png" class="login-logo" alt="logo" />
                                </div>
                                <div class="col-lg-6 login-form-box">
                                    <div className='close-box'>
                                        <button type="button" class="close border-0" data-bs-dismiss="modal" aria-label="Close">
                                            &times;
                                        </button>
                                    </div>
                                    <div className='login-cont-box'>
                                        <h3>Create new account</h3>
                                        <p>Signup here and get access to explore more</p>
                                        <form action="#" class="row">
                                            <div class="col-12">
                                                <div class="input-group mb-2">
                                                    <div class="input-group-prepend">
                                                        <div class="input-group-text"><img src="../../assets/images/icons/login-user.png" alt="logo" /></div>
                                                    </div>
                                                    <input type="text" class="form-control" id="loginfullname" name="loginfullname" placeholder="Full Name" />
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="input-group mb-2">
                                                    <div class="input-group-prepend">
                                                        <div class="input-group-text"><img src="../../assets/images/icons/login-email.png" alt="logo" /></div>
                                                    </div>
                                                    <input type="text" class="form-control" id="loginemail" name="loginemail" placeholder="Email Address" />
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="input-group mb-2">
                                                    <div class="input-group-prepend">
                                                        <div class="input-group-text"><img src="../../assets/images/icons/login-phone.png" alt="logo" /></div>
                                                    </div>
                                                    <input type="text" class="form-control" id="loginphone" name="loginphone" placeholder="PHONE NUMBER" />
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="input-group mb-2">
                                                    <div class="input-group-prepend">
                                                        <div class="input-group-text"><img src="../../assets/images/icons/login-pass.png" alt="logo" /></div>
                                                    </div>
                                                    <input type="password" class="form-control" id="loginCretPassword" name="loginCretPassword" placeholder="Create Password" />
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="input-group mb-2">
                                                    <div class="input-group-prepend">
                                                        <div class="input-group-text"><img src="../../assets/images/icons/login-pass.png" alt="logo" /></div>
                                                    </div>
                                                    <input type="password" class="form-control" id="loginConfPassword" name="loginConfPassword" placeholder="Conform Password" />
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <button type="submit" class="my-btn login-btn">CREATE</button>
                                            </div>
                                        </form>
                                        <div className='signup-link'>Already have an account? <a class="openlogin" href="#" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#loginModal">Login here</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};
export default CollectHeader;