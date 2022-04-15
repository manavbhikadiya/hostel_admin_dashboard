import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory,useLocation } from "react-router-dom";
import Cookies from "universal-cookie";

const College = () => {
  const cookies = new Cookies();
  const history = useHistory();
  const search = useLocation().search;
  const admin_id = new URLSearchParams(search).get("admin_id");
  const [collegeData, setCollegeData] = useState({
    college_name: "",
    district: "",
    location: "",
  });

  const handleData = (e) => {
    setCollegeData({
      ...collegeData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(()=>{
  },[])

  const submitData = (e) => {
    e.preventDefault();
    axios
      .post(`/college/addCollege/${admin_id}`, collegeData)
      .then((res) => {
        cookies.set('collegeId', res.data._id, { path: '/' });
        toast.success("College Details Added", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
        history.push("/login");
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
        setCollegeData({
          college_name: "",
          district: "",
          location: "",
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
                          Add College Details
                        </h5>
                        <p class="text-center small">
                          Enter College details that you want to register
                        </p>
                      </div>
                      <form
                        class="row g-3 needs-validation"
                        novalidate
                        onSubmit={submitData}
                      >
                        <div class="col-12">
                          <label for="yourUsername" class="form-label">
                            College Name
                          </label>
                          <div class="input-group has-validation">
                            <input
                              type="text"
                              name="college_name"
                              class="form-control"
                              value={collegeData.college_name}
                              onChange={handleData}
                              id="collegename"
                              required
                            />
                            <div class="invalid-feedback">
                              Please enter your college Name.
                            </div>
                          </div>
                        </div>
                        <div class="col-12">
                          <label for="collegedistrict" class="form-label">
                            District
                          </label>
                          <input
                            type="text"
                            name="district"
                            class="form-control"
                            value={collegeData.district}
                            onChange={handleData}
                            id="collegedistrict"
                            required
                          />
                          <div class="invalid-feedback">
                            Please enter your District!
                          </div>
                        </div>
                        <div class="col-12">
                          <label for="collegeLocation" class="form-label">
                            Location
                          </label>
                          <input
                            type="text"
                            name="location"
                            class="form-control"
                            value={collegeData.location}
                            onChange={handleData}
                            id="collegeLocation"
                            required
                          />
                          <div class="invalid-feedback">
                            Please enter your Location!
                          </div>
                        </div>
                        <div class="col-12">
                          <button class="btn btn-primary w-100" type="submit">
                            Add College
                          </button>
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
export default College;
