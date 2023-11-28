import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://65665f5d64fcff8d730ebca0.mockapi.io/';

export const fetchContacts = createAsyncThunk(
  'contacts/f etchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(`${BASE_URL}contacts`);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const { name, phone } = contact;
      const { data } = await axios.post(`${BASE_URL}contacts`, { name, phone });
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`${BASE_URL}contacts/${id}`);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
