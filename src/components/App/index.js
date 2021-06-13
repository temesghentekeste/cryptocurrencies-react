import React from 'react';
import Crytptocurrencies from '../../containers/Cryptocurrencies';
import styles from './App.module.css';

const App = () => (
  <section className={styles.app}>
    <h1>App component</h1>
    <Crytptocurrencies />
  </section>
);

export default App;
