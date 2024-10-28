import ctaShape3_1 from "../../assets/img/shape/ctaShape3_1.png"
import ctaShape3_2 from "../../assets/img/shape/ctaShape3_2.png"
import ctaShape3_3 from "../../assets/img/shape/ctaShape3_3.png"
import ctaShape3_4 from "../../assets/img/shape/ctaShape3_4.png"
import ctaShape3_5 from "../../assets/img/shape/ctaShape3_5.png"
import ctaShape3_6 from "../../assets/img/shape/ctaShape3_6.png"
import ctaShape3_7 from "../../assets/img/shape/ctaShape3_7.png" 
import titleIconWhite from "../../assets/img/icon/titleIconWhite.svg"
import appleStore from "../../assets/img/icon/appleStore.svg"
import ctaThumb3_1 from "../../assets/img/cta/ctaThumb3_1.png"
import playStore from "../../assets/img/icon/playStore.svg"
export default function DownloadApp(){
    return(
        <>
            <section className="cta-section style-white fix">
        <div className="cta-wrapper style3">
            <div className="container">
                <div className="cta-wrap  section-padding pt-xl-0 pb-xl-0 style3">
                    <div className="shape1 float-bob-x d-none d-xxl-block"><img src={ctaShape3_1}
                            alt="shape"/></div>
                    <div className="shape2 float-bob-y d-none d-xxl-block"><img src={ctaShape3_2}
                            alt="shape"/></div>
                    <div className="shape3 float-bob-y d-none d-xxl-block"><img src={ctaShape3_3}
                            alt="shape"/></div>
                    <div className="shape4 d-none d-xxl-block"><img src={ctaShape3_4} alt="shape"/>
                    </div>
                    <div className="shape5 d-none d-xxl-block"><img src={ctaShape3_5} alt="shape"/>
                    </div>
                    <div className="shape6 d-none d-xxl-block"><img className="cir36" src={ctaShape3_6}
                            alt="shape"/></div>
                    <div className="shape7 d-none d-xxl-block"><img src={ctaShape3_7} alt="shape"/>
                    </div>
                    <div className="row g-5">
                        <div className="col-xl-6  d-flex align-items-center justify-content-center order-2 order-xl-1">
                            <div className="cta-content">
                                <h6 className="text-white wow fadeInUp flex" data-wow-delay="0.5s"><img className="me-1"
                                        src={titleIconWhite} alt="icon"/>DOWNLOAD APP<img
                                        className="ms-1" src={titleIconWhite} alt="icon"/></h6>
                                <h3 className="wow fadeInUp" data-wow-delay="0.7s">Download food app Order today!</h3>
                                <div className="btn-wrapper d-md-flex align-items-center gap-2">
                                    <div className="btns">
                                        <a className="apple-btn wow fadeInUp" data-wow-delay="0.9s"
                                            href="https://www.apple.com/store">
                                            <div className="d-flex align-items-center   gap-2">
                                                <img src={appleStore} alt="icon"/>
                                                <div>
                                                    <span>Get it on</span>
                                                    <h6>App store</h6>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="btns">
                                        <a className="google-btn wow fadeInUp" data-wow-delay="0.9s"
                                            href="https://play.google.com/store/">
                                            <div className="d-flex align-items-center  gap-2">
                                                <img src={playStore} alt="icon"/>
                                                <div>
                                                    <span>Get it on</span>
                                                    <h6>Google play</h6>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div
                            className="col-xl-6 d-flex align-items-center justify-content-center justify-content-xl-start order-1 order-xl-2">
                            <div className="cta-thumb">
                                <img className="img-fluid float-bob-x" src={ctaThumb3_1}alt="thumb"/>
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