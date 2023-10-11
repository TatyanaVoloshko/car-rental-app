import { createSlice } from "@reduxjs/toolkit";
import { fetchCatalogs } from "./operations";

const catalogsSlise = createSlice({
    name: "catalogs",
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },

    extraReducers: {
        [fetchCatalogs.pending] (state) {
            state.isLoading = true;
        },

        [fetchCatalogs.fulfilled](state, action) {
            state.items = action.payload;
            state.isLoading = false;
        },

        [fetchCatalogs.rejected](state, action) {
            state.error = action.payload;
            state.isLoading = false;
        }
    }
})

export const catalogsReducer = catalogsSlise.reducer;