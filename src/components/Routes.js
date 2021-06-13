import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CryptoQuote from '../containers/CryptoQuote/CryptoQuote';
import App from './App';
import Navbar from './Navbar';

const Routes = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/coins/:id" component={CryptoQuote} exact />
    </Switch>
  </Router>
);

export default Routes;
