import { createAsyncThunk } from "@reduxjs/toolkit";
import { contactsApi } from "api/api";


import { auth } from "../firebase";

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
  } from "firebase/auth";

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

export const register = createAsyncThunk(
    "user/register",
    async (user, thunkAPI) => {
      try {
        const response = await createUserWithEmailAndPassword(
          auth,
          user.email,
          user.password
        );
       
        return response.user;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  
  export const login = createAsyncThunk("user/login", async (user, thunkAPI) => {
    try {
      const response = await signInWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );
  
      return response.user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  });
  
  export const logout = createAsyncThunk("user/logout", async (_, thunkAPI) => {
    try {
      await signOut(auth);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  });

