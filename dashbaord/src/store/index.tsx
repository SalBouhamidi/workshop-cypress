// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import themeConfigReducer from './themeConfigSlice';
import restaurantReducer from './restaurantSlice';
import userReducer from './userSlice';

const store = configureStore({
    reducer: {
        themeConfig: themeConfigReducer,
        restaurants: restaurantReducer,
        users: userReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
