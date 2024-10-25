import popularDishesShape1_1 from "../../assets/img/shape/popularDishesShape1_1.png"
import popularDishesShape1_2 from "../../assets/img/shape/popularDishesShape1_2.png"
import titleIcon from "../../assets/img/icon/titleIcon.svg"
import dishes2_1 from "../../assets/img/dishes/dishes2_1.png"
import circleShape from "../../assets/img/food-items/circleShape.png"
import star2 from "../../assets/img/icon/star2.svg"
import dishes2_2 from "../../assets/img/dishes/dishes2_2.png"
import dishes2_3 from "../../assets/img/dishes/dishes2_3.png" 
import dishes2_4 from "../../assets/img/dishes/dishes2_4.png"
import dishes2_5 from "../../assets/img/dishes/dishes2_5.png"

export default function PopularDishes() {
    return (
        <>
            <section className="popular-dishes-section fix section-padding pt-0">
                <div className="popular-dishes-wrapper-container">
                    <div className="container">
                        <div className="popular-dishes-wrapper style2 section-padding bg-white ">
                            <div className="shape1 float-bob-x d-none d-xxl-block"><img
                                src={popularDishesShape1_1} alt="shape"/></div>
                            <div className="shape2 float-bob-x d-none d-xxl-block"><img
                                src={popularDishesShape1_2} alt="shape"/></div>
                            <div className="container">
                                <div className="title-area">
                                    <div className="sub-title text-center wow fadeInUp flex justify-center" data-wow-delay="0.5s">
                                        <img className="me-1" src={titleIcon} alt="icon"/>POPULAR DISHES
                                        <img className="ms-1" src={titleIcon} alt="icon"/>
                                    </div>
                                            <h2 className="title wow fadeInUp" data-wow-delay="0.7s">
                                                Our Most Popular Deals
                                            </h2>
                                    </div>
                                    <div className="dishes-card-wrap style1 mb-60">
                                        <div className="dishes-card style2 wow fadeInUp" data-wow-delay="0.2s">
                                            <div className="dishes-thumb flex !justify-center !items-center">
                                                <img src={dishes2_1} alt="thumb"/>
                                                    <div className="circle-shape flex !justify-center !items-center"><img className="cir36"
                                                        src={circleShape} alt="shape"/></div>
                                            </div>
                                            <div className="dishes-content">
                                                <a href="menu.html">
                                                    <h3>Chicken Pizza</h3>
                                                </a>
                                                <div className="star"><img src={star2} alt="icon"/></div>
                                                <div className="text">The registration fee</div>
                                                <h6>$24.00</h6>
                                                <a href="menu.html" className="theme-btn style6"> Order Now <i
                                                    className="fa-regular fa-basket-shopping"></i></a>
                                            </div>
                                        </div>
                                        <div className="dishes-card style2 wow fadeInUp " data-wow-delay="0.4s">
                                            <div className="dishes-thumb flex !justify-center !items-center">
                                                <img src={dishes2_2} alt="thumb"/>
                                                    <div className="circle-shape flex !justify-center !items-center"><img className="cir36"
                                                        src={circleShape} alt="shape"/></div>
                                            </div>
                                            <div className="dishes-content">
                                                <a href="menu.html">
                                                    <h3>Egg and Cucumber</h3>
                                                </a>
                                                <div className="star"><img src={star2} alt="icon"/></div>
                                                <div className="text">The registration fee</div>
                                                <h6>$28.00</h6>
                                                <a href="menu.html" className="theme-btn style6"> Order Now <i
                                                    className="fa-regular fa-basket-shopping"></i></a>
                                            </div>
                                        </div>
                                        <div className="dishes-card style2 wow fadeInUp" data-wow-delay="0.6s">
                                            <div className="dishes-thumb flex !justify-center !items-center">
                                                <img src={dishes2_3} alt="thumb"/>
                                                    <div className="circle-shape flex !justify-center !items-center"><img className="cir36"
                                                        src={circleShape} alt="shape"/></div>
                                            </div>
                                            <div className="dishes-content">
                                                <a href="menu.html">
                                                    <h3>Chicken Fried Rice</h3>
                                                </a>
                                                <div className="star"><img src={star2} alt="icon"/></div>
                                                <div className="text">The registration fee</div>
                                                <h6>$20.00</h6>
                                                <a href="menu.html" className="theme-btn style6"> Order Now <i
                                                    className="fa-regular fa-basket-shopping"></i></a>
                                            </div>
                                        </div>
                                        <div className="dishes-card style2 wow fadeInUp" data-wow-delay="0.8s">
                                            <div className="dishes-thumb flex !justify-center !items-center">
                                                <img src={dishes2_4} alt="thumb"/>
                                                    <div className="circle-shape flex !justify-center !items-center"><img className="cir36"
                                                        src={circleShape} alt="shape"/></div>
                                            </div>
                                            <div className="dishes-content">
                                                <a href="menu.html">
                                                    <h3>Chicken Leg Piece</h3>
                                                </a>
                                                <div className="star"><img src={star2} alt="icon"/></div>
                                                <div className="text">The registration fee</div>
                                                <h6>$58.00</h6>
                                                <a href="menu.html" className="theme-btn style6"> Order Now <i
                                                    className="fa-regular fa-basket-shopping"></i></a>
                                            </div>
                                        </div>
                                        <div className="dishes-card style2 wow fadeInUp" data-wow-delay="0.9s">
                                            <div className="dishes-thumb flex !justify-center !items-center">
                                                <img src={dishes2_5} alt="thumb"/>
                                                    <div className="circle-shape flex !justify-center !items-center"><img className="cir36"
                                                        src={circleShape} alt="shape"/></div>
                                            </div>
                                            <div className="dishes-content">
                                                <a href="menu.html">
                                                    <h3>Chinese Pasta</h3>
                                                </a>
                                                <div className="star"><img src={star2} alt="icon"/></div>
                                                <div className="text">The registration fee</div>
                                                <h6>$70.00</h6>
                                                <a href="menu.html" className="theme-btn style6"> Order Now <i
                                                    className="fa-regular fa-basket-shopping"></i></a>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="btn-wrapper">
                                        <a className="theme-btn" href="menu.html"> VIEW ALL ITEM <i
                                            className="fa-sharp fa-regular fa-arrow-right"></i></a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

            </section>

        </>
    )
}