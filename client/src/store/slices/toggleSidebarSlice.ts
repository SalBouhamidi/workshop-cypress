import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

interface SidebarState {
    isSidebarOpen: boolean;
}

const initialState: SidebarState = {
    isSidebarOpen: false,
};

const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState, // Corrected here
    reducers: {
        toggleSidebar: (state) => {
            state.isSidebarOpen = !state.isSidebarOpen;
        },
    },
});

export const { toggleSidebar } = sidebarSlice.actions;
export const selectSidebarOpen = (state: RootState) => state.sidebar.isSidebarOpen;
export default sidebarSlice.reducer;
