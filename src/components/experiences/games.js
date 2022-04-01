import React, { useEffect, useState } from 'react';

const Games = () => {
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
            <section class="breadcrumb-section section top-section">
                <div class="container">
                    <ul>
                        <li class="bread-parent">EXPERIENCES</li>
                        <li class="bread-seperator"> <img class="img-fluid" src="../../assets/images/icons/breadcrumb-arrow.png" alt="breadcrumb" /> </li>
                        <li class="bread-child">GAMES</li>
                    </ul>
                </div>
            </section>
            {/* <!-- page title --> */}
            <section class="page-title-section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8">
                            <h1 class="page-title list-inline-item">Games</h1>
                            <p class="page-details">Lorem consectetur adipis</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- /page title --> */}


            {/* <!-- games-bg-section --> */}
            <section class="section games-bg-section">
                <div class="container">
                    <div class="game-content text-center">
                        <h2 class="games-section-title text-white">Comming Soon!</h2>
                        <p class="games-section-detail text-white mb-5">Lorem ipsum dolor sit amet, consectetur orem ipsum dolor sit amet</p>
                    </div>
                </div>
            </section>





        </>
    );
};
export default Games;