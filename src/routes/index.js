import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from '../views/NotFound';
import Home from '../views/Home';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}
