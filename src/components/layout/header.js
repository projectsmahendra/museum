import React, { useEffect } from 'react';

import NavBarHome from './navbar_home'

const Header = () => {
    useEffect(() => {

    });

    return (
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
                            <ul class="list-inline">
                                <li class="list-inline-item py-2 head-search"><a class="text-uppercase text-lightenmore p-sm-2 py-2 px-0 d-inline-block" href="#"><i class="ti-search"></i></a></li>
                                <li class="list-inline-item py-2"><a class="text-uppercase text-lighten p-sm-2 py-2 px-0 d-inline-block" href="#">NEWS</a></li>
                                <li class="list-inline-item py-2"><a class="text-uppercase text-lighten p-sm-2 py-2 px-0 d-inline-block" href="#">SUBSCRIBE</a></li>
                                <li class="list-inline-item py-2"><a class="text-uppercase text-lighten p-sm-2 py-2 px-0 d-inline-block" href="#" data-toggle="modal" data-target="#loginModal">LOGIN</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <NavBarHome />
        </header>
    );
};
export default Header;