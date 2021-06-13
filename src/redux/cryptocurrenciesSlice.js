/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable comma-dangle */

import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { allCryptosURL } from '../constants/APIEndPoints';

const initialState = {
  loading: false,
  cryptoCurrencies: [],
};

export const getCryptocurrenciesAsync = createAsyncThunk(
  'cryptocurrencies/getCryptocurrenciesAsync',
  async () => {
    const response = await axios.get(allCryptosURL);
    const cryptos = await response.data;
    return cryptos;
  }
);

const cryptocurrenciesSlice = createSlice({
  name: 'cryptocurrencies',
  initialState,
  extraReducers: {
    [getCryptocurrenciesAsync.pending]: (state, action) => {
      state.loading = true;
      state.cryptoCurrencies = [];
    },
    [getCryptocurrenciesAsync.fulfilled]: (state, action) => {
      state.loading = false;
      state.cryptoCurrencies = action.payload;
    },
  },
});

export default cryptocurrenciesSlice.reducer;
