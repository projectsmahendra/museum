import React, { useEffect, useState } from 'react';

const SocialComingSoon = () => {
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
            
            {/* <!-- social-coming-soon-bg-section --> */}
            <section class="section social-coming-soon-bg-section top-section">
                <div class="current-overlay"></div>
                <div class="container">
                    <div class="coming-soon-content text-center">
                        <h2 class="coming-soon-section-title">Coming Soon!</h2>
                        <p class="coming-soon-section-detail mb-5">Lorem ipsum dolor sit amet, consectetur orem ipsum dolor sit amet</p>
                    </div>
                </div>
            </section>

        </>
    );
};
export default SocialComingSoon;
