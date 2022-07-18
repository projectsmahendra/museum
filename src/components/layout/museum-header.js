import React, { useEffect } from 'react';

import NavBarHome from './navbar_home'

const MuseumHeader = () => {
    useEffect(() => {

    });

    return (
        <>
            <header class="fixed-top header">
                <div class="topmost-header py-1 bg-white">
                    <a class="navbar-brand" href="/">
                        <ul class="list-inline d-inline">
                            <li class="list-inline-item mx-0"><img src="../../assets/images/logo.png" class="head-logo" alt="logo" /></li>
                            <li class="list-inline-item mx-0"><div class="logoorg"><img src="../../assets/images/logoorg.png" alt="logo" /></div></li>
                        </ul>
                    </a>
                </div>
                <div class="top-header bg-white">
                    <div class="container">
                        <div class="row no-gutters">
                            <div class="col-lg-4 text-center text-lg-left">
                            </div>
                            <div class="col-lg-8 text-center text-lg-right">
                                <ul class="list-inline right-side">
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
                                    <li class="list-inline-item py-2"><a class="text-uppercase text-lighten p-sm-2 py-2 px-0 d-inline-block" href="#">NEWS</a></li>
                                    <li class="list-inline-item py-2"><a class="text-uppercase text-lighten p-sm-2 py-2 px-0 d-inline-block" href="#">SUBSCRIBE</a></li>
                                    <li class="list-inline-item py-2"><a class="text-uppercase text-lighten p-sm-2 py-2 px-0 d-inline-block" href="#" data-bs-toggle="modal" data-bs-target="#loginModal">LOGIN</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <NavBarHome />
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


            {/* Partner 1 Modal */}
            <div class="modal fade partner-modal" id="partner1Modal" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content rounded-0 border-0 p-4">
                        <div class="modal-header border-0">
                            <button type="button" class="close border-0" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <img class="img-fluid mb-4 head-line ml-auto" src="../../assets/images/icons/head-line.png" alt="head-line" />
                            <h4>MUSEUM PARTNERING PROGRAM</h4>
                            <p>Museums org is a global platform the enables the conversion of valuable art and artifacts into marketable digital assets ( ie NFTs )</p>

                            <h6>Overview</h6>
                            <ul>
                                <li>Museums around the world own the most valuable art and artifacts on the planet , yet their collections spend much of their time in storage.</li>
                                <li>This represents a massively under-utilized asset that should be generating revenue for the institutions.</li>
                                <li>Museums org was developed as a digital solutions provider and enabler of financial growth and sustainability for museums.</li>
                            </ul>

                            <h6>Essentials</h6>
                            <ul>
                                <li>Museums org is a secure hub for museums and collectors to trade in rare digital assets.</li>
                                <li>We offer “ white glove “ transition services from artifact to NFT , utilizing 3D and MR technology.</li>
                                <li>The Museums org two part platform is an all encompassing solution for both museums and collectors.</li>
                                <li>1 - The first part provides essential services to both the museums and the public.</li>
                                <li>2 - The second part is the secure marketplace for collectors to buy , sell ,and enjoy their collectibles.</li>
                                <li>The goals are to build an engaged community , thriving marketplace and become the portal to the metaverse for museums.</li>
                            </ul>

                            <h6>Learn</h6>
                            <ul>
                                <li>Learn how to add sizable new revenue streams … with no cost or funding requirements.</li>
                                <li>Learn how to create Virtual Exhibits … with no cost or funding requirements.</li>
                                <li>Learn how to increase attendance and engagement on a global scale.</li>
                            </ul>

                            <div className='modelFooter d-flex'>
                                <div className='hidden-mobile'><img class="modelFooter-icon img-fluid" src="../../assets/images/icons/modelFooterIcon.png" alt="icons" /></div>
                                <div className='modelFootertxt'>
                                    <p>Please email us for the full Museums Partnering Program</p>
                                    <p><a href="mailto:partner@museums.org">partner@museums.org</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Partner 2 Modal */}
            <div class="modal fade partner-modal" id="partner2Modal" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content rounded-0 border-0 p-4">
                        <div class="modal-header border-0">
                            <button type="button" class="close border-0" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <img class="img-fluid mb-4 head-line ml-auto" src="../../assets/images/icons/head-line.png" alt="head-line" />
                            <h4>BLOCKCHAIN PROFESSIONALS</h4>
                            <p className='text-bold'>Are you in blockchain tech , DeFi ,  marketing , or part of an initiative that could have synergies with Museum org ?</p>

                            <ul>
                                <li>We welcome inquiries and proposals on consulting or partnering.</li>
                                <li>The goal is to encourage collaboration and strategic advancemen.</li>
                            </ul>

                            <div className='modelFooter d-flex'>
                                <div className='hidden-mobile'><img class="modelFooter-icon img-fluid" src="../../assets/images/icons/modelFooterIcon.png" alt="icons" /></div>
                                <div className='modelFootertxt'>
                                    <p>Please email us for the full Museums Partnering Program</p>
                                    <p><a href="mailto:partner@museums.org">partner@museums.org</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Partner 3 Modal */}
            <div class="modal fade partner-modal" id="partner3Modal" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content rounded-0 border-0 p-4">
                        <div class="modal-header border-0">
                            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <img class="img-fluid mb-4 head-line ml-auto" src="../../assets/images/icons/head-line.png" alt="head-line" />
                            <h4>INVESTORS</h4>
                            <p className='text-bold'>We welcome inquiries from investors and firms with strategic interests in museums and/or art and artifacts as they may relate to blockchain initiatives</p>

                            <div className='modelFooter d-flex'>
                                <div className='hidden-mobile'><img class="modelFooter-icon img-fluid" src="../../assets/images/icons/modelFooterIcon.png" alt="icons" /></div>
                                <div className='modelFootertxt'>
                                    <p>Please email us for the full Museums Partnering Program</p>
                                    <p><a href="mailto:partner@museums.org">partner@museums.org</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};
export default MuseumHeader;