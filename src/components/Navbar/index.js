/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from './Navbar.module.css';
import { CHANGE_FILTER } from '../../redux/cryptocurrenciesSlice';

const Navbar = () => {
  console.log('Navbar...');

  const [input, setinput] = useState('All');
  const { filter } = useSelector((state) => state.cryptocurrencies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(CHANGE_FILTER(input));
  }, [dispatch, input]);

  return (
    <header className={styles.header} data-testid="header">
      <div className={styles.header__right}>
        <Link to="/">
          <h1>Cryptocurrencies</h1>
        </Link>
      </div>
      <div className={styles.header__search}>
        <input
          type="text"
          name="keyword"
          value={input}
          onChange={(e) => setinput(e.target.value)}
          placeholder="Search for something. Ex. iExec, Bitcoin, DOGEUSD..."
        />
        <form>
          <input type="submit" value="Search" className={styles.btnSubmit} />
        </form>
      </div>
    </header>
  );
};

export default Navbar;
