import AboutUs from "@/components/Home/AboutUs";
import Herosection from "../components/Home/Herosection";
import SomeOrders from "../components/Home/someOrders";
import PopularDishes from "../components/Home/popularDishes";
import CallToAction from "../components/Home/callToAction";

const Home = () => {
  return (
    <>
      <Herosection />
      <SomeOrders />
      <AboutUs />
      <PopularDishes />
      <CallToAction />
    </>
  );
};

export default Home;
