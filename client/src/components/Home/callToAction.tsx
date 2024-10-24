import ctaShape2_1 from "../../assets/img/shape/ctaShape2_1.png"
import ctaShape2_2 from "../../assets/img/shape/ctaShape2_2.png"
import ctaShape2_3 from "../../assets/img/shape/ctaShape2_3.png"
import ctaShape2_4 from "../../assets/img/shape/ctaShape2_4.png"
import ctaShape2_5 from "../../assets/img/shape/ctaShape2_5.png"
import ctaShape2_6 from "../../assets/img/shape/ctaShape2_6.png";
import ctaShape2_7 from "../../assets/img/shape/ctaShape2_7.png";
import ctaThumb2_1 from "../../assets/img/cta/ctaThumb2_1.png";
export default function CallToAction() {
    return (
        <>
            <section className="cta-section fix">
                <div className="cta-wrapper  section-padding pt-xl-0 pb-xl-0 style2">
                    <div className="shape1 float-bob-x d-none d-xxl-block"><img src={ctaShape2_1} alt="shape"/>
                    </div>
                    <div className="shape2 float-bob-y d-none d-xxl-block"><img src={ctaShape2_2} alt="shape"/>
                    </div>
                    <div className="shape3 float-bob-y d-none d-xxl-block"><img src={ctaShape2_3} alt="shape"/>
                    </div>
                    <div className="shape4   d-none d-xxl-block"><img src={ctaShape2_4} alt="shape"/></div>
                    <div className="shape5   d-none d-xxl-block"><img src={ctaShape2_5} alt="shape"/></div>
                    <div className="shape6   d-none d-xxl-block"><img src={ctaShape2_6} alt="shape"/></div>
                    <div className="shape7   d-none d-xxl-block"><img className="cir36" src={ctaShape2_7}
                        alt="shape"/></div>
                    <div className="container">
                        <div className="cta-wrap style2">
                            <div className="row">
                                <div className="col-xl-6  d-flex align-items-center  order-2 order-xl-1">
                                    <div className="cta-content">
                                        <h6 className="wow fadeInUp" data-wow-delay="0.5s">WELCOME FRESHEAT</h6>
                                        <h3 className="wow fadeInUp" data-wow-delay="0.7s">TODAY SPACIAL FOOD</h3>
                                        <p className="wow fadeInUp" data-wow-delay="0.8s">limits Time Offer</p>
                                        <a className="theme-btn wow fadeInUp" data-wow-delay="0.9s" href="menu.html">ORDER NOW <i
                                            className="fa-sharp fa-regular fa-arrow-right"></i></a>
                                    </div>
                                </div>
                                <div
                                    className="col-xl-6 d-flex align-items-center justify-content-center justify-content-xl-end order-1 order-xl-2">
                                    <div className="cta-thumb">
                                        <img className="img-fluid float-bob-x" src={ctaThumb2_1} alt="thumb"/>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}