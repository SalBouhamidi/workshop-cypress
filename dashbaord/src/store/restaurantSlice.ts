import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../api/api';
import { toast } from 'react-toastify';

export interface Location {
    city: string;
    address: string;
}

export interface Restaurant {
    _id?: string;
    name: string;
    location: Location;
    categoryIds: string[];
    menuId: string | null;
    managerId: string;
    createdAt?: Date;
}

interface PaginationState {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
}

interface RestaurantState {
    restaurants: Restaurant[];
    loading: boolean;
    error: string | null;
    pagination: PaginationState;
}

const initialState: RestaurantState = {
    restaurants: [],
    loading: false,
    error: null,
    pagination: {
        currentPage: 1,
        totalPages: 0,
        totalItems: 0,
        itemsPerPage: 10,
    },
};

// Async Thunks
export const fetchRestaurants = createAsyncThunk('restaurants/fetchAll', async ({ page, limit }: { page: number; limit: number }) => {
    const response = await api.get(`/restaurants?page=${page}&limit=${limit}`);
    return response.data;
});

export const createRestaurant = createAsyncThunk('restaurants/create', async (restaurantData: Omit<Restaurant, '_id' | 'createdAt'>) => {
    console.log('restaurantData: ' + restaurantData);
    const response = await api.post('/restaurants', restaurantData);

    return response.data;
});

export const updateRestaurant = createAsyncThunk('restaurants/update', async ({ id, data }: { id: string; data: Partial<Restaurant> }) => {
    const response = await api.put(`/restaurants/${id}`, data);
    return response.data;
});

export const deleteRestaurant = createAsyncThunk('restaurants/delete', async (id: string) => {
    await api.delete(`/restaurants/${id}`);
    return id;
});

const restaurantSlice = createSlice({
    name: 'restaurants',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRestaurants.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchRestaurants.fulfilled, (state, action) => {
                state.loading = false;
                state.restaurants = action.payload.data;
                state.pagination = action.payload.pagination;
            })
            .addCase(fetchRestaurants.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch restaurants';
            })
            .addCase(createRestaurant.fulfilled, (state, action) => {
                state.restaurants.push(action.payload);
            })
            .addCase(createRestaurant.rejected, (state, action) => {
                console.log('Failed to create restaurant: ' + action.error.message);
            })
            .addCase(updateRestaurant.fulfilled, (state, action) => {
                const index = state.restaurants.findIndex((r) => r._id === action.payload._id);
                if (index !== -1) {
                    state.restaurants[index] = action.payload;
                }
            })
            .addCase(deleteRestaurant.fulfilled, (state, action) => {
                state.restaurants = state.restaurants.filter((r) => r._id !== action.payload);
            });
    },
});

export default restaurantSlice.reducer;
