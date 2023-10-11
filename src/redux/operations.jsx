import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://64affb77c60b8f941af501f9.mockapi.io/";

export const fetchCatalogs = createAsyncThunk(
    'advert/fetchAll', async (_, thunkAPI) => {
        try {
            const { data } = await axios.get('/advert');
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)