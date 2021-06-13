import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getCryptocurrenciesAsync } from '../../redux/cryptocurrenciesSlice';
import styles from './Cryptocurrencies.module.css';

import CryptoCurrency from '../../components/CryotoCurrency';

const Cryptocurrencies = () => {
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
    <div
      className={styles.availableCryptocurrencies}
      data-testid="cryptocurrencies"
    >
      {cryptoCurrencies
        && cryptoCurrencies.map((crypto) => {
          const {
            id, symbol, name, current_price: price, image,
          } = crypto;
          return (
            <CryptoCurrency
              key={id}
              id={id}
              symbol={symbol}
              name={name}
              price={price}
              image={image}
            />
          );
        })}
    </div>
  );
};

export default Cryptocurrencies;
