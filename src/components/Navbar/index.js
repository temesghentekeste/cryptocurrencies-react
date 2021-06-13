import { Link } from 'react-router-dom';

import styles from './Navbar.module.css';

const Navbar = () => {
  console.log('Navbar...');
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
