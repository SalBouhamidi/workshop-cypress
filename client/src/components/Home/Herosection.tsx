import bannerShape2_1 from "../../assets/img/shape/bannerShape2_1.svg";
import bannerThumb2_1 from "../../assets/img/banner/bannerThumb2_1.png";
export default function Herosection() {
  return (
    <>
      <section className="banner-section fix">
        <div className="slider-area">
          <div className="swiper banner2-slider">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="banner-wrapper style2 bg-img">
                  <div
                    className="shape1_1 d-none d-xxl-block float-bob-x"
                    data-animation="slideInLeft"
                    data-duration="2s"
                    data-delay=".3s"
                  >
                    <img src={bannerShape2_1} alt="shape" />
                  </div>

                  <div
                    className="shape1_3 d-none d-xxl-block"
                    data-animation="slideInLeft"
                    data-duration="3s"
                    data-delay="2s"
                  ></div>
                  <div
                    className="shape1_4 d-none d-xxl-block float-bob-x"
                    data-animation="slideInLeft"
                    data-duration="2s"
                    data-delay=".3s"
                  ></div>
                  <div className="shape1_6 d-none d-xxl-block cir36"></div>
                  <div className="overlay"></div>
                  <div className="banner-container">
                    <div className="container">
                      <div className="row">
                        <div className="col-12 col-xxl-6">
                          <div className="banner-title-area">
                            <div className="banner-style1">
                              <div className="section-title">
                                <h6
                                  className="sub-title"
                                  data-animation="slideInRight"
                                  data-duration="2s"
                                  data-delay=".3s"
                                >
                                  {" "}
                                  WELCOME To Allo delivery{" "}
                                </h6>
                                <h1
                                  className="title"
                                  data-animation="slideInRight"
                                  data-duration="2s"
                                  data-delay=".5s"
                                >
                                  Pick your Favorite
                                </h1>
                                <a
                                  className="theme-btn"
                                  href="menu.html"
                                  data-animation="slideInRight"
                                  data-duration="2s"
                                  data-delay=".7s"
                                >
                                  Food
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-xl-6 d-none d-xxl-block">
                          <div
                            className="banner-thumb-area"
                            data-tilt
                            data-animation="slideInRight"
                            data-duration="2s"
                            data-delay=".9s"
                          >
                            <img src={bannerThumb2_1} alt="shape" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
