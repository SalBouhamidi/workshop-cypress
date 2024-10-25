import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../api/api';

export interface User {
    _id?: string;
    firstName: string;
    lastName: string;
    role: string;
}

interface UserState {
    users: User[];
    loading: boolean;
    error: string | null;
}

const initialState: UserState = {
    users: [],
    loading: false,
    error: null,
};

export const fetchUsers = createAsyncThunk('users/fetchAll', async () => {
    const response = await api.get(`/users`);
    console.log('response: ' + response);
    return response.data;
});

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload.data;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch users';
            });
    },
});

export default userSlice.reducer;
