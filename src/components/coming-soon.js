import React, { useEffect, useState } from 'react';

const ComingSoon = () => {
    // const [museums, setMuseums] = useState([]);
    const [topMuseums, setTopMuseums] = useState([]);

    useEffect(() => {
        document.title = 'My Favorites';
        // setMuseums(getMuseums());
        setTopMuseums(getCarItems());

    });
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


    return (

        <>
            
            {/* <!-- coming-soon-bg-section --> */}
            <section class="section coming-soon-bg-section top-section">
                <div class="current-overlay"></div>
                <div class="container">
                    <div class="coming-soon-content text-center">
                        <h2 class="coming-soon-section-title">Coming Soon!</h2>
                        <p class="coming-soon-section-detail mb-5">Our team is working on the new pages of <span className='text-bold'>About, Museums, Patrons, <br/>Collectors, Auction Partner, The Future, News, Subscribe.</span></p>
                    </div>
                </div>
            </section>

        </>
    );
};
export default ComingSoon;
