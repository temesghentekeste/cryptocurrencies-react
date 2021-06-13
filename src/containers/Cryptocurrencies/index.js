import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { WaveLoading } from 'react-loadingg';

import { getCryptocurrenciesAsync } from '../../redux/cryptocurrenciesSlice';
import styles from './Cryptocurrencies.module.css';

import CryptoCurrency from '../../components/CryotoCurrency';

const Cryptocurrencies = () => {
  const dispatch = useDispatch();
  const { loading, cryptoCurrencies, filter } = useSelector(
    (state) => state.cryptocurrencies,
  );

  let filteredCryptoCurrencies;
  console.log('Filter:', filter);

  useEffect(() => {
    dispatch(getCryptocurrenciesAsync());
  }, [dispatch]);

  if (!filter) {
    filteredCryptoCurrencies = cryptoCurrencies;
  } else {
    filteredCryptoCurrencies = cryptoCurrencies.filter(
      (crypto) => crypto.name.toLowerCase().includes(filter.toLowerCase())
        || crypto.symbol.toLowerCase().includes(filter.toLowerCase()),
    );
  }

  if (loading || loading === null || loading === undefined) {
    return <WaveLoading />;
  }

  return (
    <div
      className={styles.availableCryptocurrencies}
      data-testid="cryptocurrencies"
    >
      {filteredCryptoCurrencies
        && filteredCryptoCurrencies.map((crypto) => {
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
