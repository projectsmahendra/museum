import React from 'react';
import CollectHeader from './collect-header';
import Footer from './footer';
import { Outlet } from 'react-router-dom';

const CollectLayout = ({ children }) => {
    return (
        <React.Fragment>
            <CollectHeader />
            <Outlet />
            <Footer />
        </React.Fragment>
    );
};
export default CollectLayout;