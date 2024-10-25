
import chefShape2_1 from "../../assets/img/shape/chefeShape2_1.png"
import chefShape2_2 from "../../assets/img/shape/chefeShape2_2.png"
import chefeThumb2_1 from "../../assets/img/chefe/chefeThumb2_1.jpg"
import titleIcon from "../../assets/img/icon/titleIcon.svg"
import chefeThumb2_2 from "../../assets/img/chefe/chefeThumb2_2.jpg"
import chefeThumb2_3 from "../../assets/img/chefe/chefeThumb2_3.jpg"
export default function BestRestaurant(){
    return(
        <>
    <section className="chefe-section fix section-padding pt-0 mt-5">
        <div className="chefe-wrapper style1">
            <div className="shape1 d-none d-xxl-block"><img className="float-bob-y" src={chefShape2_1}
                    alt="shape"/></div>
            <div className="shape2 d-none d-xxl-block"><img className="float-bob-x" src={chefShape2_2}
                    alt="shape"/></div>
            <div className="container">
                <div className="title-area flex !justify-center items-center flex-col">
                    <div className="sub-title text-center wow fadeInUp flex " data-wow-delay="0.5s">
                        <img className="me-1" src={titleIcon} alt="icon"/>OUR CHEFE<img className="ms-1"
                            src={titleIcon} alt="icon"/>
                    </div>
                    <h2 className="title  wow fadeInUp" data-wow-delay="0.7s">
                        Meet Our Expert Chefe
                    </h2>
                </div>
                <div className="chefe-card-wrap style1 pb-5">
                    <div className="row gy-5 gx-80">
                        <div className="col-md-6 col-xl-4">
                            <div className="chefe-card style2 wow fadeInUp" data-wow-delay="0.2s">
                                <div className="chefe-thumb">
                                    <img src={chefeThumb2_1} alt="thumb"/>
                                </div>

                                <div className="icon">
                                    <span>Share</span>
                                    <a href="https://www.facebook.com/"><i className="fa-brands fa-facebook-f"></i></a>
                                    <a href="https://www.youtube.com/"><i className="fa-brands fa-youtube"></i></a>
                                    <a href="https://www.linkedin.com/"><i className="fa-brands fa-linkedin-in"></i></a>
                                </div>
                                <div className="chefe-content">
                                    <a href="chef-details.html">
                                        <h3>Devon Lane</h3>
                                    </a>
                                    <p>President of Sales</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-4">
                            <div className="chefe-card style2 wow fadeInUp" data-wow-delay="0.2s">
                                <div className="chefe-thumb">
                                    <img src={chefeThumb2_2} alt="thumb"/>
                                </div>

                                <div className="icon">
                                    <span>Share</span>
                                    <a href="https://www.facebook.com/"><i className="fa-brands fa-facebook-f"></i></a>
                                    <a href="https://www.youtube.com/"><i className="fa-brands fa-youtube"></i></a>
                                    <a href="https://www.linkedin.com/"><i className="fa-brands fa-linkedin-in"></i></a>

                                </div>
                                <div className="chefe-content">
                                    <a href="chef-details.html">
                                        <h3>Ralph Edwards</h3>
                                    </a>
                                    <p>Chefe Manager</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-4">
                            <div className="chefe-card style2 wow fadeInUp" data-wow-delay="0.2s">
                                <div className="chefe-thumb">
                                    <img src={chefeThumb2_3} alt="thumb"/>
                                </div>

                                <div className="icon">
                                    <span>Share</span>
                                    <a href="https://www.facebook.com/"><i className="fa-brands fa-facebook-f"></i></a>
                                    <a href="https://www.youtube.com/"><i className="fa-brands fa-youtube"></i></a>
                                    <a href="https://www.linkedin.com/"><i className="fa-brands fa-linkedin-in"></i></a>

                                </div>
                                <div className="chefe-content">
                                    <a href="chef-details.html">
                                        <h3>Marvin McKinney</h3>
                                    </a>
                                    <p>Main Chefe</p>
                                </div>
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