import React, { useEffect } from 'react';

const Footer = () => {
    useEffect(() => {

    });
    return (
        <React.Fragment>
            {/* <!-- think-section --> */}
            <section class="section think-section">
                <div class="container">
                    <div class="row">
                        <div class="col-12 text-center">
                            <h2 class="think-section-title text-white">Tell us what you think.</h2>
                            <p class="think-section-detail text-white mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing amonsectetur aelit</p>
                            <a href="#" class="my-btn-outline text-white">TALK TO US NOW <img class="img-fluid ml-15 mb-4" src="../../assets/images/icons/arr-right.png" alt="arrow" /></a>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- /think-section --> */}

            {/* <!-- footer --> */}
            <footer>
                {/* <!-- footer content --> */}
                <div class="footer bg-footer section">
                    <div class="container">
                        <div class="row">
                            {/* <!-- Quick Links --> */}
                            <div class="col-lg-3 col-md-3 col-sm-4 col-6 mb-5 mb-md-0 mob-center">
                                <h4 class="foot-head text-white mb-3">Quick Links</h4>
                                <ul class="foot-links list-unstyled">
                                    <li class="mb-2"><a class="text-white" href="museum">Museums</a></li>
                                    <li class="mb-2"><a class="text-white" href="openings">Openings</a></li>
                                    <li class="mb-2"><a class="text-white" href="virtual-exhibits">Experiences</a></li>
                                    <li class="mb-2"><a class="text-white" href="#">Community</a></li>
                                    <li class="mb-2"><a class="text-white" href="#">Roadmap</a></li>
                                </ul>
                            </div>
                            {/* <!-- Museum --> */}
                            <div class="col-lg-3 col-md-3 col-sm-4 col-6 mb-5 mb-md-0 mob-center">
                                <h4 class="foot-head text-white mb-3">Museum</h4>
                                <ul class="foot-links list-unstyled">
                                    <li class="mb-2"><a class="text-white" href="#">About us</a></li>
                                    <li class="mb-2"><a class="text-white" href="#">Our Mission</a></li>
                                    <li class="mb-2"><a class="text-white" href="#">Subscribe</a></li>
                                    <li class="mb-2"><a class="text-white" href="#">Careers</a></li>
                                    <li class="mb-2"><a class="text-white" href="#">Helpcenter</a></li>
                                </ul>
                            </div>
                            {/* <!-- Legal --> */}
                            <div class="col-lg-3 col-md-3 col-sm-4 col-6 mb-5 mb-md-0 mob-center">
                                <h4 class="foot-head text-white mb-3">Legal</h4>
                                <ul class="foot-links list-unstyled">
                                    <li class="mb-2"><a class="text-white" href="#">Privacy Policy</a></li>
                                    <li class="mb-2"><a class="text-white" href="#">Terms and Conditions</a></li>
                                    <li class="mb-2"><a class="text-white" href="#">Whitepaper</a></li>
                                </ul>
                            </div>
                            {/* <!-- Contact --> */}
                            <div class="col-lg-3 col-md-3 col-sm-4 col-6 mb-5 mb-md-0 mob-center">
                                <h4 class="foot-head text-white mb-3">Contact</h4>
                                <ul class="foot-links foot-icons list-unstyled">
                                    <li class="mb-3"><a class="text-dark" href="https://www.instagram.com/museums_org" target="_blank"><i class="ti-instagram"></i></a></li>
                                    <li class="mb-3"><a class="text-dark" href="https://www.linkedin.com/in/museums-org/" target="_blank"><i class="ti-linkedin"></i></a></li>
                                    <li class="mb-3"><a class="text-dark" href="https://twitter.com/museums_org" target="_blank"><i class="ti-twitter"></i></a></li>

                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
                {/* <!-- copyright --> */}
                <div class="copyright bg-footer">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-7 text-sm-left">
                                <p class="copy-head mb-1">Copyright © 2021 museum.org</p>
                                <p class="copy-dtl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolorena aliqua. Ut enim ad minim veniam, quis nostrud exercit ation ullamco laboris amet, consectetur ad.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* <!-- /footer --> */}

        </React.Fragment>
    );
};
export default Footer;