import AboutUs from "@/components/Home/AboutUs";
import Herosection from "../components/Home/Herosection"
import SomeOrders from "../components/Home/someOrders";
import PopularDishes from "../components/Home/popularDishes"
import CallToAction from "../components/Home/callToAction";
import BestRestaurant from "../components/Home/bestRestaurant"
import DownloadApp from "../components/Home/DownloadApp"

const Home = () => {
  return (
    <>
    <Herosection/>
    <SomeOrders/>
    <AboutUs/>
    <PopularDishes/>
    <CallToAction />
    <BestRestaurant/>
    <DownloadApp/>


    </>
  );
};

export default Home;
