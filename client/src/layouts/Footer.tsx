import footerShape1_1 from "../assets/img/shape/footerShape1_1.png"
import footerShape1_2 from "../assets/img/shape/footerShape1_2.png"
import footerShape1_3 from "../assets/img/shape/footerShape1_3.png"
import footerShape1_4 from "../assets/img/shape/footerShape1_4.png"
import logoWhite from "../assets/img/logo/logoWhite.svg"

export default function Footer() {
    return (
        <>
            <footer className="footer-section bg-title fix">
                <div className="footer-widgets-wrapper">
                    <div className="shape1 float-bob-y d-none d-xxl-block"><img src={footerShape1_1}
                        alt="shape" /></div>
                    <div className="shape2 d-none d-xxl-block"><img src={footerShape1_2} alt="shape" /></div>
                    <div className="shape3 d-none d-xxl-block"><img src={footerShape1_3} alt="shape" /></div>
                    <div className="shape4  d-none d-xxl-block"><img src={footerShape1_4} alt="shape" /></div>
                    <div className="container">
                        <div className="footer-top">
                            <div className="row gy-4">
                                <div className="col-lg-4">
                                    <div className="fancy-box">
                                        <div className="item1"><i className="fa-solid fa-location-dot"></i></div>
                                        <div className="item2">
                                            <h6>address</h6>
                                            <p>We are located all over the world </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 d-flex justify-content-start justify-content-lg-end">
                                    <div className="fancy-box">
                                        <div className="item1"><i className="fa-solid fa-envelope"></i></div>
                                        <div className="item2">
                                            <h6>send email</h6>
                                            <p>betis-support@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 d-flex justify-content-start justify-content-lg-end">
                                    <div className="fancy-box">
                                        <div className="item1"><i className="fa-regular fa-phone-volume"></i></div>
                                        <div className="item2">
                                            <h6>call emergency</h6>
                                            <p>+00000000000</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                                <div className="single-footer-widget">
                                    <div className="widget-head">
                                        <a href="index.html">
                                            <img src={logoWhite} alt="logo-img" />
                                        </a>
                                    </div>
                                    <div className="footer-content">
                                        <p>
                                            Phasellus ultricies aliquam volutpat ullamcorper laoreet neque, a lacinia
                                            curabitur
                                            lacinia mollis
                                        </p>
                                        <div className="social-icon d-flex align-items-center">
                                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#"><i className="fab fa-twitter"></i></a>
                                            <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                                            <a href="#"><i className="fa-brands fa-youtube"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 ps-xl-5 wow fadeInUp" data-wow-delay=".4s">
                                <div className="single-footer-widget">
                                    <div className="widget-head">
                                        <h3>Quick Links</h3>
                                    </div>
                                    <ul className="list-area">
                                        <li>
                                            <a href="about.html">
                                                <i className="fa-solid fa-chevrons-right"></i>
                                                About Us
                                            </a>
                                        </li>
                                        <li>
                                            <a href="gallery.html">
                                                <i className="fa-solid fa-chevrons-right"></i>
                                                Our Gallery
                                            </a>
                                        </li>
                                        <li>
                                            <a href="blog.html">
                                                <i className="fa-solid fa-chevrons-right"></i>
                                                Our Blogs
                                            </a>
                                        </li>
                                        <li>
                                            <a href="faq.html">
                                                <i className="fa-solid fa-chevrons-right"></i>
                                                FAQ’S
                                            </a>
                                        </li>
                                        <li>
                                            <a href="contact.html">
                                                <i className="fa-solid fa-chevrons-right"></i>
                                                Contact Us
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 ps-xl-5 wow fadeInUp" data-wow-delay=".4s">
                                <div className="single-footer-widget">
                                    <div className="widget-head">
                                        <h3>Our Menu</h3>
                                    </div>
                                    <ul className="list-area">
                                        <li>
                                            <a href="menu.html">
                                                <i className="fa-solid fa-chevrons-right"></i>
                                                Burger King
                                            </a>
                                        </li>
                                        <li>
                                            <a href="menu.html">
                                                <i className="fa-solid fa-chevrons-right"></i>
                                                Pizza king
                                            </a>
                                        </li>
                                        <li>
                                            <a href="menu.html">
                                                <i className="fa-solid fa-chevrons-right"></i>
                                                Fresh Food
                                            </a>
                                        </li>
                                        <li>
                                            <a href="menu.html">
                                                <i className="fa-solid fa-chevrons-right"></i>
                                                Vegetable
                                            </a>
                                        </li>
                                        <li>
                                            <a href="menu.html">
                                                <i className="fa-solid fa-chevrons-right"></i>
                                                Desserts
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 ps-xl-5 wow fadeInUp" data-wow-delay=".4s">
                                <div className="single-footer-widget">
                                    <div className="widget-head">
                                        <h3>Contact Us</h3>
                                    </div>
                                    <ul className="list-area">
                                        <li className="mb-2">
                                            Monday – Friday: <span className="text-theme-color2"> 8am – 4pm </span>
                                        </li>
                                        <li>
                                            Saturday: <span className="text-theme-color2"> 8am – 12am </span>
                                        </li>
                                    </ul>
                                    <form action="#" className="mt-4">
                                        <div className="form-control">
                                            <input className="email" type="email" placeholder="Your email address" />
                                            <button type="submit" className="submit-btn"><i
                                                className="fa-solid fa-arrow-right-long"></i></button>
                                        </div>
                                        <div className="form-control style2 mt-3">
                                            <input id="checkbox" name="checkbox" type="checkbox" />
                                            <label htmlFor="checkbox">I agree to the <a href="contact.html">Privacy Policy.
                                            </a></label>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="footer-wrapper d-flex align-items-center justify-content-between">
                            <p className="wow fadeInLeft" data-wow-delay=".3s">
                                © All Copyright 2024 by <a href="index.html">Betis Team</a>
                            </p>
                            <ul className="brand-logo wow fadeInRight" data-wow-delay=".5s">
                                <li>
                                    <a className="text-white" href="contact.html">
                                        Terms & Condition
                                    </a>
                                </li>
                                <li>
                                    <a className="text-white" href="contact.html">
                                        Privacy Policy
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}