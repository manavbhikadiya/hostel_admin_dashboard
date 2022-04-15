import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";
import Cookies from "universal-cookie";

const Register = () => {
  const history = useHistory();
  const cookies = new Cookies();
  const [registerData, setRegister] = useState({
    name: "",
    username: "",
    password: "",
    email: "",
  });

  const changeHandler = (e) => {
    setRegister({
      ...registerData,
      [e.target.name]: e.target.value,
    });
  };
  const submitEvent = (e) => {
    e.preventDefault();
    axios
      .post("/admin/registerAdmin", registerData)
      .then((res) => {
        cookies.set('adminId', res.data._id, { path: '/' });
        toast.success("Your data Registered", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
        history.push(`/addCollege?admin_id=${res.data._id}`);
      })
      .catch((e) => {
        toast.error(e.response.data.message, {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
        setRegister({
          name: "",
          username: "",
          password: "",
          email: "",
        });
      });
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
                          Create an Account
                        </h5>
                        <p class="text-center small">
                          Enter your personal details to create account
                        </p>
                      </div>
                      <form
                        class="row g-3 needs-validation"
                        novalidate
                        onSubmit={submitEvent}
                      >
                        <div class="col-12">
                          <label for="yourName" class="form-label">
                            Your Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            id="yourName"
                            required
                            value={registerData.name}
                            onChange={changeHandler}
                          />
                          <div class="invalid-feedback">
                            Please, enter your name!
                          </div>
                        </div>
                        <div class="col-12">
                          <label for="yourEmail" class="form-label">
                            Your Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            class="form-control"
                            id="yourEmail"
                            required
                            value={registerData.email}
                            onChange={changeHandler}
                          />
                          <div class="invalid-feedback">
                            Please enter a valid Email adddress!
                          </div>
                        </div>
                        <div class="col-12">
                          <label for="yourUsername" class="form-label">
                            Username
                          </label>
                          <div class="input-group has-validation">
                            <input
                              type="text"
                              name="username"
                              class="form-control"
                              id="yourUsername"
                              required
                              value={registerData.username}
                              onChange={changeHandler}
                            />
                            <div class="invalid-feedback">
                              Please choose a username.
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
                            id="yourPassword"
                            required
                            value={registerData.password}
                            onChange={changeHandler}
                          />
                          <div class="invalid-feedback">
                            Please enter your password!
                          </div>
                        </div>

                        <div class="col-12">
                          <a
                            href="/login"
                            class="logo d-flex align-items-center w-auto"
                          >
                            <button class="btn btn-primary w-100" type="submit">
                              Next
                            </button>
                          </a>
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

export default Register;
