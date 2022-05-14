import React, { useEffect } from 'react';
import heroSectionBackground from '../../assets/images/banner/banner-1.jpg'
import museumBgBackground from '../../assets/images/backgrounds/museum-bg.jpg'
import benefitsBgBackground from '../../assets/images/backgrounds/benefits-bg.jpg'
import worksBgBackground from '../../assets/images/backgrounds/works-bg.jpg'
const Home = () => {

    useEffect(() => {
        document.title = 'My Favorites';
    });
    return (
        <div>
            {/* <!-- /hero slider --> */}
            {/* <section class="hero-section overlay bg-cover" style={{ backgroundImage: `url(${heroSectionBackground})` }}>
                <div class="container">
                    <div class="hero-slider">
                        
                        <div class="hero-slider-item">
                            <div class="row">
                                <div class="col-md-8">
                                    <p class="text-white slide-tophd" data-animation-out="fadeOutRight" data-delay-out="5" data-duration-in=".3" data-animation-in="fadeInLeft" data-delay-in=".1">FOSSIL <img src="../../assets//images/banner/slide-tophd.png" alt="slide-tophd" /></p>
                                    <h1 class="text-white slide-head" data-animation-out="fadeOutRight" data-delay-out="5" data-duration-in=".3" data-animation-in="fadeInLeft" data-delay-in=".1">Earth's hidden extinctions</h1>
                                    <p class="text-white mb-4 slide-subhd" data-animation-out="fadeOutRight" data-delay-out="5" data-duration-in=".3" data-animation-in="fadeInLeft" data-delay-in=".4">Fossil record during the mass extinction</p>
                                    <a href="#" class="my-btn hero-section-btn" data-animation-out="fadeOutRight" data-delay-out="5" data-duration-in=".3" data-animation-in="fadeInLeft" data-delay-in=".7">EXPLORE MORE <img class="img-fluid ml-15 mt-4" src="../../assets/images/icons/arr-right.png" alt="arrow" /></a>
                                </div>
                            </div>
                        </div>
                        
                        <div class="hero-slider-item">
                            <div class="row">
                                <div class="col-md-8">
                                    <p class="text-white slide-tophd" data-animation-out="fadeOutRight" data-delay-out="5" data-duration-in=".3" data-animation-in="fadeInLeft" data-delay-in=".1"><span>FOSSIL</span> <img src="../../assets/images/banner/slide-tophd.png" alt="slide-tophd" /></p>
                                    <h1 class="text-white slide-head" data-animation-out="fadeOutRight" data-delay-out="5" data-duration-in=".3" data-animation-in="fadeInLeft" data-delay-in=".1">Earth's hidden extinctions</h1>
                                    <p class="text-white mb-4 slide-subhd" data-animation-out="fadeOutRight" data-delay-out="5" data-duration-in=".3" data-animation-in="fadeInLeft" data-delay-in=".4">Fossil record during the mass extinction</p>
                                    <a href="#" class="my-btn hero-section-btn" data-animation-out="fadeOutRight" data-delay-out="5" data-duration-in=".3" data-animation-in="fadeInLeft" data-delay-in=".7">EXPLORE MORE <img class="img-fluid ml-15 mt-4" src="../../assets/images/icons/arr-right.png" alt="arrow" /></a>
                                </div>
                            </div>
                        </div>
                        
                        <div class="hero-slider-item">
                            <div class="row">
                                <div class="col-md-8">
                                    <p class="text-white slide-tophd" data-animation-out="fadeOutRight" data-delay-out="5" data-duration-in=".3" data-animation-in="fadeInLeft" data-delay-in=".1">FOSSIL <img src="../../assets/images/banner/slide-tophd.png" alt="slide-tophd" /></p>
                                    <h1 class="text-white slide-head" data-animation-out="fadeOutRight" data-delay-out="5" data-duration-in=".3" data-animation-in="fadeInLeft" data-delay-in=".1">Earth's hidden extinctions</h1>
                                    <p class="text-white mb-4 slide-subhd" data-animation-out="fadeOutRight" data-delay-out="5" data-duration-in=".3" data-animation-in="fadeInLeft" data-delay-in=".4">Fossil record during the mass extinction</p>
                                    <a href="#" class="my-btn hero-section-btn" data-animation-out="fadeOutRight" data-delay-out="5" data-duration-in=".3" data-animation-in="fadeInLeft" data-delay-in=".7">EXPLORE MORE <img class="img-fluid ml-15 mt-4" src="../../assets/images/icons/arr-right.png" alt="arrow" /></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="text-white play-btn-box">
                        <a class="play-btn venobox" href="https://youtu.be/nA1Aqp0sPQo" data-vbtype="video">
                            PLAY VIDEO
                            <img class="img-fluid ml-15" src="../../assets/images/icons/play-btn.png" alt="play" />
                        </a>
                    </div>

                </div>
            </section>

            <br /><br /> */}

            <section class="hero-section overlay bg-cover">
                {/* <div class="container"> */}
                <div class="hero-slider">
                    {/* <!-- slider item --> */}
                    {/* <div class="hero-slider-item" style={{ backgroundImage: `url("/assets/images/banner/banner-1.jpg")` }}>
                        <div class="container">
                            <div class="row">
                                <div class="col-md-8">
                                    <p class="text-white slide-tophd" data-animation-out="fadeOutRight" data-delay-out="5" data-duration-in=".3" data-animation-in="fadeInLeft" data-delay-in=".1">FOSSIL <img src="../../assets//images/banner/slide-tophd.png" alt="slide-tophd" /></p>
                                    <h1 class="text-white slide-head" data-animation-out="fadeOutRight" data-delay-out="5" data-duration-in=".3" data-animation-in="fadeInLeft" data-delay-in=".1">Earth's hidden extinctions</h1>
                                    <p class="text-white mb-4 slide-subhd" data-animation-out="fadeOutRight" data-delay-out="5" data-duration-in=".3" data-animation-in="fadeInLeft" data-delay-in=".4">Fossil record during the mass extinction</p>
                                    <a href="#" class="my-btn hero-section-btn" data-animation-out="fadeOutRight" data-delay-out="5" data-duration-in=".3" data-animation-in="fadeInLeft" data-delay-in=".7">EXPLORE MORE <img class="img-fluid ml-15 mt-4" src="../../assets/images/icons/arr-right.png" alt="arrow" /></a>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* <!-- slider item --> */}
                    <div class="hero-slider-item" style={{ backgroundImage: `url("/assets/images/museums/cristina-gottardi-GeKoZualPmA-unsplash.jpg")` }}>
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <p class="text-white slide-tophd" data-animation-out="fadeOutRight" data-delay-out="5" data-duration-in=".3" data-animation-in="fadeInLeft" data-delay-in=".1"><span>Experience</span> <img src="../../assets/images/banner/slide-tophd.png" alt="slide-tophd" /></p>
                                    <h1 class="text-white slide-head" data-animation-out="fadeOutRight" data-delay-out="5" data-duration-in=".3" data-animation-in="fadeInLeft" data-delay-in=".1">Museums in amazing new ways</h1>
                                    <p class="text-white mb-4 slide-subhd" data-animation-out="fadeOutRight" data-delay-out="5" data-duration-in=".3" data-animation-in="fadeInLeft" data-delay-in=".4">Fossil record during the mass extinction</p>
                                    <a href="#" class="my-btn hero-section-btn" data-animation-out="fadeOutRight" data-delay-out="5" data-duration-in=".3" data-animation-in="fadeInLeft" data-delay-in=".7">EXPLORE MORE <img class="img-fluid ml-15 mt-4" src="../../assets/images/icons/arr-right.png" alt="arrow" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- slider item --> */}
                    <div class="hero-slider-item" style={{ backgroundImage: `url("/assets/images/museums/andrea-contieri-MsfiDM9Onfg-unsplash.jpg")` }}>
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <p class="text-white slide-tophd" data-animation-out="fadeOutRight" data-delay-out="5" data-duration-in=".3" data-animation-in="fadeInLeft" data-delay-in=".1">Collect <img src="../../assets/images/banner/slide-tophd.png" alt="slide-tophd" /></p>
                                    <h1 class="text-white slide-head" data-animation-out="fadeOutRight" data-delay-out="5" data-duration-in=".3" data-animation-in="fadeInLeft" data-delay-in=".1">The rarest art and artifacts on the planet</h1>
                                    <p class="text-white mb-4 slide-subhd" data-animation-out="fadeOutRight" data-delay-out="5" data-duration-in=".3" data-animation-in="fadeInLeft" data-delay-in=".4">Fossil record during the mass extinction</p>
                                    <a href="#" class="my-btn hero-section-btn" data-animation-out="fadeOutRight" data-delay-out="5" data-duration-in=".3" data-animation-in="fadeInLeft" data-delay-in=".7">EXPLORE MORE <img class="img-fluid ml-15 mt-4" src="../../assets/images/icons/arr-right.png" alt="arrow" /></a>
                                </div>
                            </div>
                        </div> 
                    </div>
                    {/* <!-- slider item --> */}
                    <div class="hero-slider-item" style={{ backgroundImage: `url("/assets/images/museums/francisco-ghisletti-Wf2tCunxqQU-unsplash.jpg")` }}>
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <p class="text-white slide-tophd" data-animation-out="fadeOutRight" data-delay-out="5" data-duration-in=".3" data-animation-in="fadeInLeft" data-delay-in=".1">Experience <img src="../../assets/images/banner/slide-tophd.png" alt="slide-tophd" /></p>
                                    <h1 class="text-white slide-head" data-animation-out="fadeOutRight" data-delay-out="5" data-duration-in=".3" data-animation-in="fadeInLeft" data-delay-in=".1">Museums in amazing new ways</h1>
                                    <p class="text-white mb-4 slide-subhd" data-animation-out="fadeOutRight" data-delay-out="5" data-duration-in=".3" data-animation-in="fadeInLeft" data-delay-in=".4">Fossil record during the mass extinction</p>
                                    <a href="#" class="my-btn hero-section-btn" data-animation-out="fadeOutRight" data-delay-out="5" data-duration-in=".3" data-animation-in="fadeInLeft" data-delay-in=".7">EXPLORE MORE <img class="img-fluid ml-15 mt-4" src="../../assets/images/icons/arr-right.png" alt="arrow" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- slider item --> */}
                    <div class="hero-slider-item" style={{ backgroundImage: `url("/assets/images/museums/manoj-kumar-kasirajan-fAZEw6xPhz8-unsplash.jpg")` }}>
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <p class="text-white slide-tophd" data-animation-out="fadeOutRight" data-delay-out="5" data-duration-in=".3" data-animation-in="fadeInLeft" data-delay-in=".1">Collect <img src="../../assets/images/banner/slide-tophd.png" alt="slide-tophd" /></p>
                                    <h1 class="text-white slide-head" data-animation-out="fadeOutRight" data-delay-out="5" data-duration-in=".3" data-animation-in="fadeInLeft" data-delay-in=".1">The rarest art and artifacts on the planet</h1>
                                    <p class="text-white mb-4 slide-subhd" data-animation-out="fadeOutRight" data-delay-out="5" data-duration-in=".3" data-animation-in="fadeInLeft" data-delay-in=".4">Fossil record during the mass extinction</p>
                                    <a href="#" class="my-btn hero-section-btn" data-animation-out="fadeOutRight" data-delay-out="5" data-duration-in=".3" data-animation-in="fadeInLeft" data-delay-in=".7">EXPLORE MORE <img class="img-fluid ml-15 mt-4" src="../../assets/images/icons/arr-right.png" alt="arrow" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div class="text-white play-btn-box">
                        <a class="play-btn venobox" href="https://youtu.be/nA1Aqp0sPQo" data-vbtype="video">
                            PLAY VIDEO
                            <img class="img-fluid ml-15" src="../../assets/images/icons/play-btn.png" alt="play" />
                        </a>
                    </div> */}

                {/* </div> */}
            </section>
            {/* <!-- /hero slider --> */}

            {/* <!-- Creation-section --> */}
            <section class="section creation-section">
                <div class="container">
                    <div class="row">
                        <div class="creation-box col-lg-4 text-center">
                            <img class="img-fluid mb-4 mi" src="../../assets/images/icons/creation.png" alt="experience" />
                            <h2 class="creation-section-title text-white">EXPERIENCE</h2>
                            <p class="creation-section-detail text-white">Lorem consectetur adipiscing elit,</p>
                            <img class="img-fluid addicn" src="../../assets/images/icons/add.png" alt="addicn" />
                        </div>
                        <div class="creation-box col-lg-4 text-center">
                            <img class="img-fluid mb-4 mi" src="../../assets/images/icons/innovation.png" alt="collect" />
                            <h2 class="creation-section-title text-white">COLLECT</h2>
                            <p class="creation-section-detail text-white">Lorem consectetur adipiscing elit,</p>
                            <img class="img-fluid addicn" src="../../assets/images/icons/add.png" alt="addicn" />
                        </div>
                        <div class="creation-box col-lg-4 text-center">
                            <img class="img-fluid mb-4 mi" src="../../assets/images/icons/collaberation.png" alt="support" />
                            <h2 class="creation-section-title text-white">SUPPORT</h2>
                            <p class="creation-section-detail text-white">Lorem consectetur adipiscing elit,</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- /Creation-section --> */}

            {/* <!-- About our Mission --> */}
            {/* <section class="section mission-section bg-cover" style={{ backgroundImage: `url(${museumBgBackground})` }}></section> */}
            <section class="section mission-section parallax-window" data-parallax="scroll" data-image-src="../../assets/images/backgrounds/museum-bg.jpg">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-sm-4 position-relative success-video hidden-mobile">
                            <img class="museum-img img-fluid mb-4" src="../../assets/images/backgrounds/museum.png" alt="museum" />
                        </div>
                        <div class="col-lg-6 col-sm-8">
                            <div class="abt-box">
                                <img class="img-fluid mb-4 head-line ml-auto" src="../../assets/images/icons/head-line.png" alt="head-line" />
                                <h2 class="mission-section-title text-dark">EXPERIENCE</h2>
                                <p class="mission-section-detail text-muted mb-4">
                                    Experience the planets most amazing art and artifacts now <br/>
                                    Discover the future thru the portal to the metaverse<br/>
                                    Your curiosity is the ticket to mankind’s greatest treasures
                                </p>
                                <a href="#" class="my-btn mission-section-btn ml-auto">EXPLORE MORE <img class="img-fluid ml-15 mt-4" src="../../assets/images/icons/arr-right.png" alt="arrow" /></a>
                            </div>
                            <img class="museum-img-mob img-fluid hidden-laptop" src="../../assets/images/backgrounds/museum.png" alt="museum" />
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- /About our Mission --> */}

            {/* <!-- bg4-section --> */}
            <section class="section bg4-section">
                <div class="container">
                    <div class="row">
                        <div class="col-12 text-center">
                            {/* <!-- <h2 class="think-section-title text-white">Tell us what you think.</h2>
                                    <p class="think-section-detail text-white mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing amonsectetur aelit</p>
                                    <a href="#" class="my-btn-outline text-white">TALK TO US NOW <i class="ti-arrow-right"></i></a> --> */}
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- /bg4-section --> */}

            {/* <!-- Museum &  Patron benefits --> */}
            {/* <section class="section benefits-section bg-cover" style={{ backgroundImage: `url(${benefitsBgBackground})` }} > */}
            <section class="section benefits-section parallax-window" data-parallax="scroll" data-image-src="../../assets/images/backgrounds/benefits-bg.jpg">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-sm-8">
                            <div class="benefits-box">
                                <img class="img-fluid mb-4 head-line" src="../../assets/images/icons/head-line.png" alt="head-line" />
                                <h2 class="benefits-section-title text-dark">COLLECT</h2>
                                <p class="benefits-section-detail text-muted mb-4">
                                     We’re transforming the rarest art and artifacts on the planet into museum authorized NFTs <br/>
                                     Now you can collect and display mankind’s most amazing treasures !
                                </p>
                                <a href="/current-auctions" class="my-btn benefits-section-btn">GO TO COLLECT <img class="img-fluid ml-15 mt-4" src="../../assets/images/icons/arr-right.png" alt="arrow" /></a>
                            </div>
                        </div>
                        <div class="col-lg-6 col-sm-4 position-relative success-video">
                            <img class="eagle-img img-fluid mb-4" src="../../assets/images/backgrounds/eagle.png" alt="eagle" />
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- /Museum &  Patron benefits --> */}

            {/* <!-- bg3-section --> */}
            <section class="section bg3-section">
                <div class="container">
                    <div class="row">
                        <div class="col-12 text-center">
                            {/* <!-- <h2 class="think-section-title text-white">Tell us what you think.</h2>
                                    <p class="think-section-detail text-white mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing amonsectetur aelit</p>
                                    <a href="#" class="my-btn-outline text-white">TALK TO US NOW <i class="ti-arrow-right"></i></a> --> */}
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- /bg3-section --> */}

            {/* <!-- How it works --> */}
            {/* <section class="section works-section bg-cover" style={{ backgroundImage: `url(${worksBgBackground})` }}> */}
            <section class="section works-section parallax-window" data-parallax="scroll" data-image-src="../../assets/images/backgrounds/works-bg.jpg">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-sm-4 position-relative success-video hidden-mobile"></div>
                        <div class="col-lg-9 col-sm-8">
                            <div class="works-box">
                                <img class="img-fluid mb-4 head-line ml-auto" src="../../assets/images/icons/head-line.png" alt="head-line" />
                                <h2 class="works-section-title text-dark">SUPPORT</h2>
                                <p class="works-section-detail text-muted mb-4">
                                Your support and attendance sustains museums now , and for the next generation<br/>
                                Use the directories to explore museums , virtual exhibits and more !<br/>
                                Visit the Help Center to answer all your questions  about the site , NFTs , and how to collect<br/>
                                <span className='text-bold'>If you’d like to be updated with our weekly newsletter please subscribe now</span>    
                                </p>
                                <a href="#" class="my-btn works-section-btn ml-auto">Subscribe for free now ! <img class="img-fluid ml-15 mt-4" src="../../assets/images/icons/arr-right.png" alt="arrow" /></a>
                            </div>
                        </div>
                        <div class="col-lg-6 col-sm-4 position-relative success-video hidden-laptop"></div>
                    </div>
                </div>
            </section>
            {/* <!-- /How it works --> */}

            {/* <!-- bg2-section --> */}
            <section class="section bg2-section">
                <div class="container">
                    <div class="row">
                        <div class="col-12 text-center">
                            {/* <!-- <h2 class="think-section-title text-white">Tell us what you think.</h2> */}
                            {/* <p class="think-section-detail text-white mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing amonsectetur aelit</p> */}
                            {/* <a href="#" class="my-btn-outline text-white">TALK TO US NOW <i class="ti-arrow-right"></i></a> --> */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default Home;