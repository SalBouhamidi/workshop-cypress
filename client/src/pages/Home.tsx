import AboutUs from "@/components/Home/AboutUs";
import Herosection from "../components/Home/Herosection"
import SomeOrders from "../components/Home/someOrders";
import PopularDishes from "../components/Home/popularDishes"
import CallToAction from "../components/Home/callToAction";
import BestRestaurant from "../components/Home/bestRestaurant"
import DownloadApp from "../components/Home/DownloadApp"
import Searchbar from "@/components/Home/SearchBar";
const Home = () => {
  return (
    <>
    <Herosection/>
    <Searchbar/>
    <SomeOrders/>
    <AboutUs/>
    <PopularDishes/>
    <CallToAction />
    <BestRestaurant/>
    <DownloadApp/>

    <BestRestaurant/>
    <DownloadApp/>


    </>
  );
};

export default Home;
