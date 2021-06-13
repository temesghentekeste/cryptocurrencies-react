import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';

import { getCryptocurrenciesAsync } from './redux/cryptocurrenciesSlice';

const App = () => {
  const dispatch = useDispatch();
  const { loading, cryptoCurrencies } = useSelector(
    (state) => state.cryptocurrencies,
  );

  useEffect(() => {
    dispatch(getCryptocurrenciesAsync());
  }, [dispatch]);

  if (loading || loading === null || loading === undefined) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="App">
      <h2>
        Cryptocurrencies catalog:
        {' '}
        {cryptoCurrencies.length}
        {' '}
        crypto coins
        fetched!
      </h2>
    </div>
  );
};

export default App;
