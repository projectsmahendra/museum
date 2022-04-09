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
                    <div class="hero-slider-item" style={{ backgroundImage: `url("/assets/images/banner/banner-1.jpg")` }}>
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
                    </div>
                    {/* <!-- slider item --> */}
                    <div class="hero-slider-item" style={{ backgroundImage: `url("/assets/images/banner/banner-2.jpg")` }}>
                        <div class="container">
                            <div class="row">
                                <div class="col-md-8">
                                    <p class="text-white slide-tophd" data-animation-out="fadeOutRight" data-delay-out="5" data-duration-in=".3" data-animation-in="fadeInLeft" data-delay-in=".1"><span>FOSSIL</span> <img src="../../assets/images/banner/slide-tophd.png" alt="slide-tophd" /></p>
                                    <h1 class="text-white slide-head" data-animation-out="fadeOutRight" data-delay-out="5" data-duration-in=".3" data-animation-in="fadeInLeft" data-delay-in=".1">Earth's hidden extinctions</h1>
                                    <p class="text-white mb-4 slide-subhd" data-animation-out="fadeOutRight" data-delay-out="5" data-duration-in=".3" data-animation-in="fadeInLeft" data-delay-in=".4">Fossil record during the mass extinction</p>
                                    <a href="#" class="my-btn hero-section-btn" data-animation-out="fadeOutRight" data-delay-out="5" data-duration-in=".3" data-animation-in="fadeInLeft" data-delay-in=".7">EXPLORE MORE <img class="img-fluid ml-15 mt-4" src="../../assets/images/icons/arr-right.png" alt="arrow" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- slider item --> */}
                    <div class="hero-slider-item" style={{ backgroundImage: `url("/assets/images/banner/banner-3.jpg")` }}>
                        <div class="container">
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
                    <div class="hero-slider-item" style={{ backgroundImage: `url("/assets/images/banner/banner-4.jpg")` }}>
                        <div class="container">
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
                            <img class="img-fluid mb-4 mi" src="../../assets/images/icons/creation.png" alt="creation" />
                            <h2 class="creation-section-title text-white">Creation</h2>
                            <p class="creation-section-detail text-white">Lorem consectetur adipiscing elit,</p>
                            <img class="img-fluid addicn" src="../../assets/images/icons/add.png" alt="addicn" />
                        </div>
                        <div class="creation-box col-lg-4 text-center">
                            <img class="img-fluid mb-4 mi" src="../../assets/images/icons/innovation.png" alt="innovation" />
                            <h2 class="creation-section-title text-white">Innovation</h2>
                            <p class="creation-section-detail text-white">Lorem consectetur adipiscing elit,</p>
                            <img class="img-fluid addicn" src="../../assets/images/icons/add.png" alt="addicn" />
                        </div>
                        <div class="creation-box col-lg-4 text-center">
                            <img class="img-fluid mb-4 mi" src="../../assets/images/icons/collaberation.png" alt="collaberation" />
                            <h2 class="creation-section-title text-white">Collaberation</h2>
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
                                <h2 class="mission-section-title text-dark">About our Mission</h2>
                                <p class="mission-section-detail text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris amet, consectetur</p>
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
            <section class="section mission-section parallax-window" data-parallax="scroll" data-image-src="../../assets/images/backgrounds/benefits-bg.jpg">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-sm-8">
                            <div class="benefits-box">
                                <img class="img-fluid mb-4 head-line" src="../../assets/images/icons/head-line.png" alt="head-line" />
                                <h2 class="benefits-section-title text-dark">Museum &  Patron benefits</h2>
                                <p class="benefits-section-detail text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris amet, consectetur</p>
                                <a href="#" class="my-btn benefits-section-btn">EXPLORE MORE <img class="img-fluid ml-15 mt-4" src="../../assets/images/icons/arr-right.png" alt="arrow" /></a>
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
            <section class="section mission-section parallax-window" data-parallax="scroll" data-image-src="../../assets/images/backgrounds/works-bg.jpg">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-sm-4 position-relative success-video hidden-mobile"></div>
                        <div class="col-lg-6 col-sm-8">
                            <div class="works-box">
                                <img class="img-fluid mb-4 head-line ml-auto" src="../../assets/images/icons/head-line.png" alt="head-line" />
                                <h2 class="works-section-title text-dark">How it works</h2>
                                <p class="works-section-detail text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris amet, consectetur</p>
                                <a href="#" class="my-btn works-section-btn ml-auto">EXPLORE MORE <img class="img-fluid ml-15 mt-4" src="../../assets/images/icons/arr-right.png" alt="arrow" /></a>
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