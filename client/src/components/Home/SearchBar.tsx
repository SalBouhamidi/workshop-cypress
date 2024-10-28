import { useState, useEffect, useRef } from "react";
import axios from "axios"
import offerBG2_2 from "../../assets/img/bg/offerBG2_2.jpg"
import offerShape1_4 from "../../assets/img/shape/offerShape1_4.png"
import offerThumb1_3 from "../../assets/img/offer/offerThumb1_3.png"
import {toast} from "sonner"



export default function Searchbar() {
    const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);
    const usedCategoriesRef = useRef([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedRestau, setSelectedRestau] = useState('');
    const [searchResult, setSearchResult] = useState(null);



    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    useEffect(() => {
        async function categories() {
            try {
                const categories = await axios.get('http://localhost:3000/api/categories');
                usedCategoriesRef.current = categories.data.categories
            } catch (e) {
                console.log('something bad happend', e);
            }
        }
        categories();
    }, []);

    function handleSearchByCategory(categoryName: string) {
        setSelectedCategory(categoryName);
        setIsDropdownVisible(false);
    }

    async function handleSearch(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        try {
            if (selectedCategory !== '' && selectedRestau !== '') {
                try {
                    const result = await axios.get(`http://localhost:3000/api/search?category=${encodeURIComponent(selectedCategory)}&name=${encodeURIComponent(selectedRestau)}`);
                    // console.log(result.data);
                    if (result.data && Object.keys(result.data).length > 0) {
                        setSearchResult(result.data);
                    } else {
                        setSearchResult(null);
                    }
                } catch (error) {
                    toast.error(error.response.data.message)
                    console.log(error.response.data.message);
                    setSearchResult(null);
                }

            }
            if (selectedCategory !== '' && selectedRestau == '') {
                try {
                    const result = await axios.get(`http://localhost:3000/api/search?category=${encodeURIComponent(selectedCategory)}`);
                    console.log(result.data);
                    if (result.data && Object.keys(result.data).length > 0) {
                        setSearchResult(result.data);
                    } else {
                        setSearchResult(null);
                    }

                } catch (err) {
                    toast.error(err.response.data)
                    console.log(err.response.data);
                    setSearchResult(null);
                }
            }
            if (selectedCategory == '' && selectedRestau !== '') {
                try {
                    const result = await axios.get(`http://localhost:3000/api/search?name=${encodeURIComponent(selectedRestau)}`);
                    console.log(result.data);
                    if (result.data && Object.keys(result.data).length > 0) {
                        setSearchResult(result.data);
                    } else {
                        setSearchResult(null);
                    }

                } catch (err) {
                    toast.error(err.response.data.message);
                    console.log(err.response.data.message);
                    setSearchResult(null);
                }
            }
            if (selectedCategory == '' && selectedRestau == '') {
                toast.error('please choose category or name of restaurant');
                console.log('please choose category or name of restaurant')
            }
        } catch (e) {
            console.log('somthing went wrong', e)
        }

    }

    return (
        <>
            <div>
                <div className="mt-8 h-[15vh] flex justify-center items-center">
                    <form className="mx-auto h-full w-[80vw] flex justify-center items-center">
                        <div className="flex w-full relative">
                            <button
                                onClick={toggleDropdown}
                                id="dropdown-button"
                                style={{ backgroundColor: "#ed012a" }}
                                className="bg-red-400 flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 border border-red-500 rounded-s-lg hover:bg-red-200 focus:ring-4 focus:outline-none focus:ring-red-100 dark:bg-red-700 dark:hover:bg-red-600 dark:focus:ring-red-700 dark:text-white dark:border-red-600"
                                type="button">
                                {selectedCategory || "All Categories"}

                                <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </button>

                            {isDropdownVisible && (
                                <div id="dropdown" className="absolute top-16  z-10 mt-1 rounded-lg shadow-lg w-44 bg-white border border-gray-300">
                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                                        {usedCategoriesRef.current.map((Category) => (
                                            <li key={Category._id}>
                                                <button onClick={() => handleSearchByCategory(Category.name)} type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                    {Category.name}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            <div className="relative w-full">
                                <input
                                    type="search"
                                    id="search-dropdown"
                                    value={selectedRestau}
                                    onChange={(e) => setSelectedRestau(e.target.value)}
                                    className="block p-4 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-s-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-red-500"
                                    placeholder="Search your restaurant by Name or by category ...." />
                                <button onClick={handleSearch} type="submit" className="absolute top-0 end-0 p-2.5 px-5 text-sm font-medium h-full text-white bg-red-600 rounded-e-lg border border-red-700 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                    <span className="sr-only">Search</span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                {searchResult &&(
                    <div className="offer-section fix mt-5">
                        <div className="offer-wrapper">
                            <div className="container">
                                <div className="row gy-4">
                                    {searchResult.map((restaurant: object)=>(
                                    <div className="col-lg-6 col-xl-4">
                                    <div key={restaurant._id} className="offer-card style1 wow fadeInUp" data-wow-delay="0.5s"
                                        style={{ backgroundImage: `url(${offerBG2_2})` }}>
                                        <div className="offer-content">
                                            <h6>{restaurant.location.city}</h6>
                                            <h3>{restaurant.name}</h3>
                                            <p>Check up our Menu</p>
                                            <a href="menu.html" className="theme-btn style4">
                                                Check Our Menu
                                            </a>
                                        </div>
                                        <div className="offer-thumb">
                                            <img className="thumbImg" src={offerThumb1_3} alt="thumb" />
                                            <div className="shape float-bob-x"><img src={offerShape1_4}
                                                alt="shape" /></div>
                                        </div>
                                    </div>
                                </div>
                                    ))}

                                </div>
                            </div>
                        </div>
                    </div>

                )};

            </div>
        </>


    );
}
