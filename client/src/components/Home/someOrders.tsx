import offerBG2 from "../../assets/img/bg/offerBG2_1.jpg"
import offerBG2_2 from "../../assets/img/bg/offerBG2_2.jpg"
import offerBG2_3 from "../../assets/img/bg/offerBG2_3.jpg"
import offerThumb1_2 from "../../assets/img/offer/offerThumb1_2.png"
import offerShape1_4 from"../../assets/img/shape/offerShape1_4.png"
import offerThumb1_3 from "../../assets/img/offer/offerThumb1_3.png"
import offerThumb1_1 from "../../assets/img/offer/offerThumb1_1.png"
export default function SomeOrders() {
    return (
        <>
            <div className="offer-section fix bg-color2 mt-5">
                <div className="offer-wrapper">
                    <div className="container">
                        <div className="row gy-4">
                            <div className="col-lg-6 col-xl-4">
                                <div className="offer-card style1 wow fadeInUp" data-wow-delay="0.2s" style={{backgroundImage:`url(${offerBG2})`}}>
                                    <div className="offer-content">
                                        <h6 className="text-white">start price $25</h6>
                                        <h3>TODAY SPACIAL FOOD</h3>
                                        <p className="text-white">limits Time Offer</p>
                                        <a href="menu.html" className="theme-btn style5">
                                            ORDER NOW <i className="fa-sharp fa-regular fa-arrow-right"></i>
                                        </a>
                                    </div>
                                    <div className="offer-thumb">
                                        <img className="thumbImg" src={offerThumb1_2} alt="thumb"/>
                                            <div className="shape float-bob-x"><img src={offerShape1_4} alt="shape"/></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-xl-4">
                                <div className="offer-card style1 wow fadeInUp" data-wow-delay="0.5s"
                                    style={{backgroundImage: `url(${offerBG2_2})`}}>
                                    <div className="offer-content">
                                        <h6>start price $28</h6>
                                        <h3>special chicken roll</h3>
                                        <p>limits Time Offer</p>
                                        <a href="menu.html" className="theme-btn style4">
                                            ORDER NOW <i className="fa-sharp fa-regular fa-arrow-right"></i>
                                        </a>
                                    </div>
                                    <div className="offer-thumb">
                                        <img className="thumbImg" src={offerThumb1_3} alt="thumb"/>
                                            <div className="shape float-bob-x"><img src={offerShape1_4}
                                                alt="shape"/></div>
                                    </div>
                                </div>
                            </div>       
                            <div className="col-lg-6 col-xl-4">
                                <div className="offer-card style1  wow fadeInUp" data-wow-delay="0.7s"
                                    style={{backgroundImage: `url(${offerBG2_3})`}}>
                                    <div className="offer-content">
                                        <h6 className="text-white">start price $55</h6>
                                        <h3>SPICY FRIED CHICKEN</h3>
                                        <p className="text-white">limits Time Offer</p>
                                        <a href="menu.html" className="theme-btn style4">
                                            ORDER NOW <i className="fa-sharp fa-regular fa-arrow-right"></i>
                                        </a>
                                    </div>
                                    <div className="offer-thumb">
                                        <img className="thumbImg" src={offerThumb1_1} alt="thumb"/>
                                            <div className="shape float-bob-x"><img src={offerShape1_4}
                                                alt="shape"/></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}