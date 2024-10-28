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
import { useEffect, useState } from "react"
import axios from "axios";
import {toast} from "sonner"

export default function PopularDishes() {
    const [menu, setMenu] = useState<any[]>([]);

    useEffect(() => {
        async function getDishes(restaurantId: string) {
            try {
                const result = await axios.get(`http://localhost:3000/api/restaurant/${restaurantId}`);
                setMenu(result.data.menu[0].items)
                // console.log('heeeeeeeeeeeeere',menu);
            } catch (e) {
                console.log('something bad happend', e);
            }
        }
        getDishes('671a5fc278924d448ac45394');
    },[]);

            const addToCart = (dish) => {
                const cart = JSON.parse(localStorage.getItem('cart')) || [];
                cart.push(dish);
                localStorage.setItem('cart', JSON.stringify(cart)); 
                toast.success(`${dish.name} has been added to cart!`)
            };
            
    return (
        <>
            <section className="popular-dishes-section fix section-padding pt-0">
                <div className="popular-dishes-wrapper-container">
                    <div className="container">
                        <div className="popular-dishes-wrapper style2 section-padding bg-white ">
                            <div className="shape1 float-bob-x d-none d-xxl-block"><img
                                src={popularDishesShape1_1} alt="shape" /></div>
                            <div className="shape2 float-bob-x d-none d-xxl-block"><img
                                src={popularDishesShape1_2} alt="shape" /></div>
                            <div className="container">
                                <div className="title-area">
                                    <div className="sub-title text-center wow fadeInUp flex justify-center" data-wow-delay="0.5s">
                                        <img className="me-1" src={titleIcon} alt="icon" />POPULAR DISHES
                                        <img className="ms-1" src={titleIcon} alt="icon" />
                                    </div>
                                    <h2 className="title wow fadeInUp" data-wow-delay="0.7s">
                                        Our Most Popular Deals
                                    </h2>
                                </div>
                                <div className="dishes-card-wrap style1 mb-60">
                                    {menu.length > 0  && menu.map((Dishe) =>(
                                        <div className="dishes-card style2 wow fadeInUp" data-wow-delay="0.2s">
                                            <div className="dishes-thumb flex !justify-center !items-center">
                                                <img src={dishes2_1} alt="thumb" />
                                                <div className="circle-shape flex !justify-center !items-center"><img className="cir36"
                                                    src={circleShape} alt="shape" /></div>
                                            </div>
                                            <div className="dishes-content">
                                                <a href="menu.html">
                                                    <h3>{Dishe.name}</h3>
                                                </a>
                                                <div className="star"><img src={star2} alt="icon" /></div>
                                                <div className="text">The registration fee</div>
                                                <h6>{Dishe.price}</h6>
                                                <a href="#" className="theme-btn style6"> Order Now </a>
                                                <a onClick={() => addToCart(Dishe)} className="theme-btn style6"> Add to card</a>

                                            </div>
                                        </div>
                                    ))}

                                    <div className="dishes-card style2 wow fadeInUp " data-wow-delay="0.4s">
                                        <div className="dishes-thumb flex !justify-center !items-center">
                                            <img src={dishes2_2} alt="thumb" />
                                            <div className="circle-shape flex !justify-center !items-center"><img className="cir36"
                                                src={circleShape} alt="shape" /></div>
                                        </div>
                                        <div className="dishes-content">
                                            <a href="menu.html">
                                                <h3>Egg and Cucumber</h3>
                                            </a>
                                            <div className="star"><img src={star2} alt="icon" /></div>
                                            <div className="text">The registration fee</div>
                                            <h6>$28.00</h6>
                                            <a href="menu.html" className="theme-btn style6"> Order Now </a>
                                            <a href="#" className="theme-btn style6"> Add to card</a>

                                        </div>
                                    </div>
                                    <div className="dishes-card style2 wow fadeInUp" data-wow-delay="0.6s">
                                        <div className="dishes-thumb flex !justify-center !items-center">
                                            <img src={dishes2_3} alt="thumb" />
                                            <div className="circle-shape flex !justify-center !items-center"><img className="cir36"
                                                src={circleShape} alt="shape" /></div>
                                        </div>
                                        <div className="dishes-content">
                                            <a href="menu.html">
                                                <h3>Chicken Fried Rice</h3>
                                            </a>
                                            <div className="star"><img src={star2} alt="icon" /></div>
                                            <div className="text">The registration fee</div>
                                            <h6>$20.00</h6>
                                            <a href="menu.html" className="theme-btn style6"> Order Now </a>
                                            <a href="#" className="theme-btn style6"> Add to card</a>
                                        </div>
                                    </div>
                                    <div className="dishes-card style2 wow fadeInUp" data-wow-delay="0.8s">
                                        <div className="dishes-thumb flex !justify-center !items-center">
                                            <img src={dishes2_4} alt="thumb" />
                                            <div className="circle-shape flex !justify-center !items-center"><img className="cir36"
                                                src={circleShape} alt="shape" /></div>
                                        </div>
                                        <div className="dishes-content">
                                            <a href="menu.html">
                                                <h3>Chicken Leg Piece</h3>
                                            </a>
                                            <div className="star"><img src={star2} alt="icon" /></div>
                                            <div className="text">The registration fee</div>
                                            <h6>$58.00</h6>
                                            <a href="menu.html" className="theme-btn style6"> Order Now </a>
                                            <a href="#" className="theme-btn style6"> Add to card</a>
                                        </div>
                                    </div>
                                    <div className="dishes-card style2 wow fadeInUp" data-wow-delay="0.9s">
                                        <div className="dishes-thumb flex !justify-center !items-center">
                                            <img src={dishes2_5} alt="thumb" />
                                            <div className="circle-shape flex !justify-center !items-center"><img className="cir36"
                                                src={circleShape} alt="shape" /></div>
                                        </div>
                                        <div className="dishes-content">
                                            <a href="menu.html">
                                                <h3>Chinese Pasta</h3>
                                            </a>
                                            <div className="star"><img src={star2} alt="icon" /></div>
                                            <div className="text">The registration fee</div>
                                            <h6>$70.00</h6>
                                            <a href="menu.html" className="theme-btn style6"> Order Now </a>
                                            <a href="#" className="theme-btn style6"> Add to card</a>
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