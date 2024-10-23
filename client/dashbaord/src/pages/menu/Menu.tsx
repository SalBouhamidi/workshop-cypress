import { useState } from 'react';

const Menu = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isAllChecked, setIsAllChecked] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
        console.log('toggled');
    };
    const handleSelectAll = (e) => {
        const checked = e.target.checked;
        setIsAllChecked(checked);

        const checkboxes = document.querySelectorAll('.table-checkbox');
        checkboxes.forEach((checkbox) => {
            checkbox.checked = checked;
        });
    };
    return (
        <section className="bg-gray-50 dark:bg-gray-900 py-3 sm:py-5">
            <div className="px-4 mx-auto max-w-screen-2xl lg:px-12">
                <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
                    <div className="flex flex-col px-4 py-3 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4">
                        <div className="flex items-center flex-1 space-x-4">
                            <h5>
                                <span className="text-gray-500">All Manus:</span>
                                <span className="dark:text-white pl-1.5">5</span>
                            </h5>
                        </div>
                        <div className="flex flex-col flex-shrink-0 space-y-3 md:flex-row md:items-center lg:justify-end md:space-y-0 md:space-x-3">
                            <button
                                onClick={toggleModal}
                                type="button"
                                className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-table_primany-700 hover:bg-table_primany-800 focus:ring-4 focus:ring-table_primany-300 dark:bg-table_primany-600 dark:hover:bg-table_primany-700 focus:outline-none dark:focus:ring-table_primany-800"
                            >
                                <svg className="h-3.5 w-3.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path clip-rule="evenodd" fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                                </svg>
                                Add new menu
                            </button>
                            <button
                                type="button"
                                className="flex items-center justify-center flex-shrink-0 px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-table_primany-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                            >
                                <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                                    />
                                </svg>
                                Update stocks 1/250
                            </button>
                            <button
                                type="button"
                                className="flex items-center justify-center flex-shrink-0 px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-table_primany-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                            >
                                <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                                </svg>
                                Export
                            </button>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="p-4">
                                        <div className="flex items-center">
                                            <input
                                                id="checkbox-all"
                                                type="checkbox"
                                                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-table_primany-600 focus:ring-table_primany-500 dark:focus:ring-table_primany-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                onChange={handleSelectAll}
                                            />
                                            <label htmlFor="checkbox-all" className="sr-only">
                                                Select all
                                            </label>
                                        </div>
                                    </th>
                                    <th scope="col" className="px-4 py-3">
                                        Menu Item
                                    </th>
                                    <th scope="col" className="px-4 py-3">
                                        Category
                                    </th>
                                    <th scope="col" className="px-4 py-3">
                                        Availability
                                    </th>
                                    <th scope="col" className="px-4 py-3">
                                        Price
                                    </th>
                                    <th scope="col" className="px-4 py-3">
                                        Restaurant
                                    </th>
                                    <th scope="col" className="px-4 py-3">
                                        Last Update
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <td className="w-4 px-4 py-3">
                                        <div className="flex items-center">
                                            <input
                                                id="checkbox-table-search-1"
                                                type="checkbox"
                                                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-table_primany-600 focus:ring-table_primany-500 dark:focus:ring-table_primany-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 table-checkbox"
                                            />
                                            <label htmlFor="checkbox-table-search-1" className="sr-only">
                                                Select
                                            </label>
                                        </div>
                                    </td>
                                    <th scope="row" className="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png" alt="iMac Front Image" className="w-auto h-8 mr-3" />
                                        Apple iMac 27&#34;
                                    </th>
                                    <td className="px-4 py-2">
                                        <span className="bg-table_primany-100 text-table_primany-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-table_primany-900 dark:text-table_primany-300">
                                            Italian
                                        </span>
                                    </td>
                                    <td className="px-4 py-2">
                                        <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-red-900 dark:text-red-300">Not Available</span>
                                    </td>
                                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">1.47</td>
                                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">Pizza Palace</td>
                                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">Just now</td>
                                </tr>
                                <tr className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <td className="w-4 px-4 py-3">
                                        <div className="flex items-center">
                                            <input
                                                id="checkbox-table-search-1"
                                                type="checkbox"
                                                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-table_primany-600 focus:ring-table_primany-500 dark:focus:ring-table_primany-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 table-checkbox"
                                            />
                                            <label htmlFor="checkbox-table-search-1" className="sr-only">
                                                Select
                                            </label>
                                        </div>
                                    </td>
                                    <th scope="row" className="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png" alt="iMac Front Image" className="w-auto h-8 mr-3" />
                                        Apple iMac 20&#34;
                                    </th>
                                    <td className="px-4 py-2">
                                        <span className="bg-table_primany-100 text-table_primany-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-table_primany-900 dark:text-table_primany-300">
                                            Italian
                                        </span>
                                    </td>
                                    <td className="px-4 py-2">
                                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Available</span>
                                    </td>
                                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">1.15</td>
                                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">Pizza Palace</td>
                                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">This week</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <nav className="flex flex-col items-start justify-between p-4 space-y-3 md:flex-row md:items-center md:space-y-0" aria-label="Table navigation">
                        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                            Showing
                            <span className="font-semibold text-gray-900 dark:text-white">1-10</span>
                            of
                            <span className="font-semibold text-gray-900 dark:text-white">1000</span>
                        </span>
                        <ul className="inline-flex items-stretch -space-x-px">
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    <span className="sr-only">Previous</span>
                                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fill-rule="evenodd"
                                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    1
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    2
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    aria-current="page"
                                    className="z-10 flex items-center justify-center px-3 py-2 text-sm leading-tight border text-table_primany-600 bg-table_primany-50 border-table_primany-300 hover:bg-table_primany-100 hover:text-table_primany-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                                >
                                    3
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    ...
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    100
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    <span className="sr-only">Next</span>
                                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fill-rule="evenodd"
                                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            {isModalOpen && (
                <div id="defaultModal" tabIndex="-1" aria-hidden="true" className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50 backdrop-blur-sm">
                    <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
                        <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                            <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Add menu</h3>
                                <button
                                    type="button"
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    onClick={toggleModal}
                                >
                                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            <form action="#">
                                <div className="grid gap-4 mb-4 sm:grid-cols-2">
                                    <div>
                                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder="Type menu item name"
                                            required=""
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="available" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Availability
                                        </label>
                                        <select
                                            id="available"
                                            name="available"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        >
                                            <option selected="#">Select availability</option>
                                            <option value="true">Available</option>
                                            <option value="false">Not Available</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Price
                                        </label>
                                        <input
                                            type="number"
                                            name="price"
                                            id="price"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder="$29"
                                            required=""
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="restaurant" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Restaurant
                                        </label>
                                        <select
                                            id="restaurant"
                                            name="restaurantId"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        >
                                            <option selected="#">Select restaurant</option>
                                            <option value="#"></option>
                                        </select>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Description
                                        </label>
                                        <textarea
                                            id="description"
                                            rows="4"
                                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder="Write menu item description here"
                                        ></textarea>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">
                                            Upload your images
                                        </label>
                                        <input
                                            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                            aria-describedby="file_input_help"
                                            id="file_input"
                                            type="file"
                                            name="images"
                                            accept="image/png, image/jpg, image/jpeg"
                                            multiple
                                        />
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="text-white inline-flex items-center bg-table_primany-700 hover:bg-table_primany-800 focus:ring-4 focus:outline-none focus:ring-table_primany-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-table_primany-600 dark:hover:bg-table_primany-700 dark:focus:ring-table_primany-800"
                                >
                                    <svg className="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path>
                                    </svg>
                                    Add new menu
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Menu;
