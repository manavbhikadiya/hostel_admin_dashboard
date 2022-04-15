import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';


const RootScreen = () => {

  return (
    <>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </>
  );
}

export default RootScreen;
