import React from 'react';
import MuseumHeader from './museum-header';
import Footer from './footer';
import { Outlet } from 'react-router-dom';
const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <MuseumHeader />
            <Outlet />
            <Footer />
        </React.Fragment>
    );
};
export default Layout;