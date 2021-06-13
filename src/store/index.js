import { configureStore } from '@reduxjs/toolkit';
import cryptocurrenciesReducer from '../redux/cryptocurrenciesSlice';

export default configureStore({
  reducer: {
    cryptocurrencies: cryptocurrenciesReducer,
  },
});
