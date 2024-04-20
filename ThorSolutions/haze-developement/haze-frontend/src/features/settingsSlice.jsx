import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    tabName: "general",
    brandMegaMenu: "",
    subButton: ""
};

const settingsSlice = createSlice({
    name: "settingsTab",
    initialState,
    reducers: {

        setTabName: (state, action) => {
            state.tabName = action.payload;
        },
        setBrandMegaMenu: (state, action) => {
            state.brandMegaMenu = action.payload;
        },
        setSubButton: (state, action) => {
            state.subButton = action.payload;
        },
        resetState: () => initialState,
    }
});

export const {
    setTabName,
    setBrandMegaMenu,
    setSubButton,
    resetState
} = settingsSlice.actions;
export const settingsTab = (state) => state.settingsTab;

export default settingsSlice.reducer;
