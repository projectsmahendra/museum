import React from 'react';
import Header from './header';
import Footer from './footer';
// import Navigation from './Navigation';
const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Header />
            {/* <div className="navigationWrapper"> */}
                {/* <Navigation /> */}
                <main>{children}</main>
            {/* </div> */}
            <Footer />
        </React.Fragment>
    );
};
export default Layout;