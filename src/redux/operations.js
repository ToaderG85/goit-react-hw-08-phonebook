import { createAsyncThunk } from "@reduxjs/toolkit";
import { contactsApi } from "api/api";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchContacts",
    async (_,thunkAPI) => {
        try {
            const response = await contactsApi.getAll();
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);            
        }
    }
);

export const addContact = createAsyncThunk(
    "contacts/addCity",
    async ({name,number},thunkAPI) => {
        try {
            const response = await contactsApi.create({ name, number });
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    "contacts/deleteCity",
    async (id,thunkAPI) => {
        try {
            const response = await contactsApi.delete(id);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

