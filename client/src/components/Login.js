import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { login, adminData, isLoggedIn } from "../actions/action";
import { getInitialData } from "../services/getInitialData.service";
const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleData = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const submitData = async (e) => {
    e.preventDefault();
    const res = await fetch("/admin/loginAdmin", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(loginData),
    });
    const data = await res.json();
    if (data) {
      toast.success("Logged in successfully", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
      const storeData = await getInitialData();
      if (storeData) {
        localStorage.setItem('college_id',data.college_id)
        localStorage.setItem('loginToken',true)
        dispatch(login(data.college_id));
        dispatch(adminData(data));
        dispatch(isLoggedIn(true));
      } else {
        dispatch(isLoggedIn(false));
      }
      history.push("/");
      window.location.reload();
    } else {
      toast.error("Having trouble. Please try again later.", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
      setLoginData({
        username: "",
        password: "",
      });
    }
  };

  return (
    <>
      <main>
        <div class="container">
          <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                  <div class="card mb-3">
                    <div class="card-body">
                      <div class="pt-4 pb-2">
                        <h5 class="card-title text-center pb-0 fs-4">
                          Login to Your Account
                        </h5>
                        <p class="text-center small">
                          Enter your username & password to login
                        </p>
                      </div>
                      <form
                        class="row g-3 needs-validation"
                        novalidate
                        onSubmit={submitData}
                      >
                        <div class="col-12">
                          <label for="yourUsername" class="form-label">
                            Username
                          </label>
                          <div class="input-group has-validation">
                            <input
                              type="text"
                              name="username"
                              class="form-control"
                              value={loginData.username}
                              onChange={handleData}
                              id="yourUsername"
                              required
                            />
                            <div class="invalid-feedback">
                              Please enter your username.
                            </div>
                          </div>
                        </div>
                        <div class="col-12">
                          <label for="yourPassword" class="form-label">
                            Password
                          </label>
                          <input
                            type="password"
                            name="password"
                            class="form-control"
                            value={loginData.password}
                            onChange={handleData}
                            id="yourPassword"
                            required
                          />
                          <div class="invalid-feedback">
                            Please enter your password!
                          </div>
                        </div>
                        <div class="col-12">
                          <button class="btn btn-primary w-100" type="submit">
                            Login
                          </button>
                        </div>
                        <div class="col-12">
                          <p class="small mb-0">
                            Don't have account?{" "}
                            <NavLink to="/register">Creat an Account</NavLink>
                          </p>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};
export default Login;
