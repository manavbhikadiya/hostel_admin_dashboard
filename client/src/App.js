import "./App.css";
import Navbar from "./components/Navbar";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import AddHostel from "./components/AddHostel";
import Login from "./components/Login";
import Register from "./components/Register";
import College from "./components/AddCollege";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UpdateHostel from "./components/UpdateHostel";
import AuthGaurd from "./components/AuthGaurd";
const App = () => {
  return (
    <>
      <ToastContainer />
      <Switch>
        <Route path="/login">
          <AuthGaurd>
            <Login />
          </AuthGaurd>
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/addCollege">
          <College />
        </Route>
        <Route exact path="/">
          <AuthGaurd>
            <Navbar />
            <Home />
          </AuthGaurd>
        </Route>
        <Route path="/addHostel">
          <AuthGaurd>
            <Navbar />
            <AddHostel />
          </AuthGaurd>
        </Route>
        <Route path="/updateHostel">
          <AuthGaurd>
            <Navbar />
            <UpdateHostel />
          </AuthGaurd>
        </Route>
      </Switch>
    </>
  );
};

export default App;
