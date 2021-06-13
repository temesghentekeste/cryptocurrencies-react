import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './App';
import Navbar from './Navbar';

const Routes = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route path="/" component={App} exact />
    </Switch>
  </Router>
);

export default Routes;
