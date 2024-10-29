import offerBG2 from "../../assets/img/bg/offerBG2_1.jpg"
import offerThumb1_2 from "../../assets/img/offer/offerThumb1_2.png"
import offerShape1_4 from "../../assets/img/shape/offerShape1_4.png"
import titleIcon from "../../assets/img/icon/titleIcon.svg"
import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"



export default function SomeOrders() {
    const [restaurant, setRestaurant] = useState([]);
    useEffect(() => {
        async function GetRestaurant() {
            try {
                const result = await axios.get('http://localhost:3000/api/restaurant&theirmenu');
                if (result) {
                    setRestaurant(result.data);
                    console.log('our resultss', result.data)
                }
            } catch (e) {
                console.log('Ops smth bad happend', e)
            }
        }
        GetRestaurant()
    }, [restaurant])
    return (
        <>
            <div className="offer-section fix  mt-5">
                <div className="offer-wrapper">
                    <div className="container">
                        <div className="text-lg text-center wow fadeInUp flex justify-center" data-wow-delay="0.5s">
                            <img className="me-1" src={titleIcon} alt="icon" />Restaurant and Their menus<img
                                className="ms-1" src={titleIcon} alt="icon" />
                        </div>
                        <div className="row gy-4">
                            {restaurant && restaurant.length >0 &&(
                                restaurant.map((item,index)=>(
                                    <div className="col-lg-6 col-xl-4"  key={index}>
                                    <div className="offer-card style1 wow fadeInUp" data-wow-delay="0.2s" style={{ backgroundImage: `url(${offerBG2})` }}>
                                        <div className="offer-content">
                                            <h6 className="text-white">{item.restaurantDetails[0].location.city}</h6>
                                            <h3>{item.restaurantDetails.length > 0 ? item.restaurantDetails[0].name : "Unknown Restaurant"}</h3>
                                            <p className="text-white">limits Time Offer</p>
                                            <Link to={`/menu/${item.restaurantDetails[0]._id}`}  className="theme-btn style5">
                                                Our Menu 
                                            </Link>
                                        </div>
                                        <div className="offer-thumb">
                                            <img className="thumbImg" src={offerThumb1_2} alt="thumb" />
                                            <div className="shape float-bob-x"><img src={offerShape1_4} alt="shape" /></div>
                                        </div>
                                    </div>
                                </div>

                                ))

                            )

                            }



                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}