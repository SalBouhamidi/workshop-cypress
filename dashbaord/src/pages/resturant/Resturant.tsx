// src/pages/restaurant/Restaurant.tsx
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import { AppDispatch, RootState } from '../../store';
import { fetchRestaurants, createRestaurant, updateRestaurant, deleteRestaurant, Restaurant } from '../../store/restaurantSlice';
import { fetchUsers } from '../../store/userSlice';
import 'react-toastify/dist/ReactToastify.css';

const RestaurantComponent = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { restaurants, loading, error, pagination } = useSelector((state: RootState) => state.restaurants);
    const { users } = useSelector((state: RootState) => state.users);

    console.log('users: ' + users);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [selectedRestaurant, setSelectedRestaurant] = useState<string | null>(null);
    const [formData, setFormData] = useState<Omit<Restaurant, '_id' | 'createdAt'>>({
        name: '',
        location: {
            city: '',
            address: '',
        },
        categoryIds: [],
        menuId: null,
        managerId: '',
    });

    useEffect(() => {
        dispatch(
            fetchRestaurants({
                page: pagination.currentPage,
                limit: pagination.itemsPerPage,
            })
        );
        dispatch(fetchUsers());
    }, [dispatch, pagination.currentPage]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name.includes('.')) {
            const [parent, child] = name.split('.');
            setFormData((prev) => ({
                ...prev,
                [parent]: {
                    ...prev[parent as keyof typeof prev],
                    [child]: value,
                },
            }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (isEditMode && selectedRestaurant) {
                await dispatch(
                    updateRestaurant({
                        id: selectedRestaurant,
                        data: formData,
                    })
                ).unwrap();
                toast.success('Restaurant updated successfully!');
            } else {
                await dispatch(createRestaurant(formData)).unwrap();
                toast.success('Restaurant created successfully!');
            }
            handleCloseModal();
        } catch (error) {
            toast.error(isEditMode ? 'Failed to update restaurant' : 'Failed to create restaurant');
        }
    };

    const handleEdit = (restaurant: Restaurant) => {
        setIsEditMode(true);
        setSelectedRestaurant(restaurant._id);
        setFormData({
            name: restaurant.name,
            location: restaurant.location,
            categoryIds: restaurant.categoryIds,
            menuId: restaurant.menuId,
            managerId: restaurant.managerId,
        });
        setIsModalOpen(true);
    };

    const handleDelete = async (id: string) => {
        if (window.confirm('Are you sure you want to delete this restaurant?')) {
            try {
                await dispatch(deleteRestaurant(id)).unwrap();
                toast.success('Restaurant deleted successfully!');
            } catch (error) {
                toast.error('Failed to delete restaurant');
            }
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setIsEditMode(false);
        setSelectedRestaurant(null);
        setFormData({
            name: '',
            location: { city: '', address: '' },
            categoryIds: [],
            menuId: null,
            managerId: '',
        });
    };

    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= pagination.totalPages) {
            dispatch(
                fetchRestaurants({
                    page: newPage,
                    limit: pagination.itemsPerPage,
                })
            );
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <section className="bg-gray-50 dark:bg-gray-900 py-3 sm:py-5">
            <div className="px-4 mx-auto max-w-screen-2xl lg:px-12">
                <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
                    {/* Header */}
                    <div className="flex justify-between items-center p-4">
                        <h2 className="text-xl font-semibold">Restaurants</h2>
                        <button onClick={() => setIsModalOpen(true)} className="px-4 py-2 bg-blue-500 text-white rounded-lg">
                            Add Restaurant
                        </button>
                    </div>

                    {/* Table */}
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th className="px-6 py-3">Name</th>
                                <th className="px-6 py-3">Manager</th>
                                <th className="px-6 py-3">City</th>
                                <th className="px-6 py-3">Address</th>
                                <th className="px-6 py-3">Created At</th>
                                <th className="px-6 py-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {restaurants.map((restaurant) => (
                                <tr key={restaurant._id} className="border-b">
                                    <td className="px-6 py-4">{restaurant.name}</td>
                                    <td className="px-6 py-4">
                                        {restaurant.managerId.firstName} {restaurant.managerId.lastName}
                                    </td>
                                    <td className="px-6 py-4">{restaurant.location.city}</td>
                                    <td className="px-6 py-4">{restaurant.location.address}</td>
                                    <td className="px-6 py-4">{new Date(restaurant.createdAt!).toLocaleDateString()}</td>
                                    <td className="px-6 py-4">
                                        <button
                                            onClick={() => handleEdit(restaurant)}
                                            className="text-blue-500 hover:text-white mr-2 bg-blue-100 px-3 py-1 rounded border border-blue-400 hover:bg-blue-400 transition"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDelete(restaurant._id!)}
                                            className="text-red-500 hover:text-white bg-red-100 px-3 py-1 rounded border border-red-400 hover:bg-red-400 transition"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Pagination */}
                    <div className="flex justify-between items-center p-4">
                        <span>
                            Showing {(pagination.currentPage - 1) * pagination.itemsPerPage + 1} to {Math.min(pagination.currentPage * pagination.itemsPerPage, pagination.totalItems)} of{' '}
                            {pagination.totalItems} entries
                        </span>
                        <div className="flex gap-2">
                            <button onClick={() => handlePageChange(pagination.currentPage - 1)} disabled={pagination.currentPage === 1} className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50">
                                Previous
                            </button>
                            <button
                                onClick={() => handlePageChange(pagination.currentPage + 1)}
                                disabled={pagination.currentPage === pagination.totalPages}
                                className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg w-full max-w-md">
                        <h3 className="text-lg font-semibold mb-4">{isEditMode ? 'Edit Restaurant' : 'Add Restaurant'}</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block mb-1">Name</label>
                                <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="w-full border rounded p-2" required />
                            </div>
                            <div>
                                <label className="block mb-1">City</label>
                                <input type="text" name="location.city" value={formData.location.city} onChange={handleInputChange} className="w-full border rounded p-2" required />
                            </div>
                            <div>
                                <label className="block mb-1">Address</label>
                                <input type="text" name="location.address" value={formData.location.address} onChange={handleInputChange} className="w-full border rounded p-2" required />
                            </div>
                            <div>
                                <label htmlFor="Manager" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Manager
                                </label>
                                <select
                                    id="Manager"
                                    name="Manager"
                                    onChange={(e) => {
                                        setFormData({
                                            ...formData,
                                            managerId: e.target.value,
                                        });
                                        console.log(formData);
                                    }}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                >
                                    {users.map((user) => (
                                        <option value={user._id} className="capitalize">
                                            {user.firstName} {user.lastName}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex justify-end gap-2">
                                <button type="button" onClick={handleCloseModal} className="px-4 py-2 bg-gray-200 rounded">
                                    Cancel
                                </button>
                                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
                                    {isEditMode ? 'Update' : 'Create'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <ToastContainer />
        </section>
    );
};

export default RestaurantComponent;
