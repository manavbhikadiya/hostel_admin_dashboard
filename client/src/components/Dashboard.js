import Navbar from './Navbar';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './Home';
import AddHostel from './AddHostel';
import College from './AddCollege';

const Dashboard = () => {

  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/college">
          <College />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/addHostel">
          <AddHostel />
        </Route>
      </Switch>
    </>
  );
}

export default Dashboard;
