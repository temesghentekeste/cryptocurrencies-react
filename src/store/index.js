import { configureStore } from '@reduxjs/toolkit';
import cryptocurrenciesReducer from '../redux/cryptocurrenciesSlice';
import cryptoQuoteReducer from '../redux/cryptoQuotesSlice';

export default configureStore({
  reducer: {
    cryptocurrencies: cryptocurrenciesReducer,
    cryptocurrencyquote: cryptoQuoteReducer,
  },
});
