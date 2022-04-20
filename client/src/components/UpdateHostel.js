import axios from "axios";
import React, { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Loader from "react-js-loader";

const UpdateHostel = () => {
  const search = useLocation().search;
  var college_id = new URLSearchParams(search).get("college_id");
  var hostel_id = new URLSearchParams(search).get("hostel_id");

  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFiles] = useState();
  const [initialData, setInitialData] = useState([]);

  const getIntialHostelData = (college_id, hostel_id) => {
    axios
      .get(
        `/hostel/getHostelDetails/${college_id}/${hostel_id}`
      )
      .then((res) => {
        setInitialData(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    college_id = new URLSearchParams(search).get("college_id");
    hostel_id = new URLSearchParams(search).get("hostel_id");
    getIntialHostelData(college_id, hostel_id);
  }, []);

  const handleData = (e) => {
    setInitialData({
      ...initialData,
      [e.target.name]: e.target.value,

    });
  };

  const handleFileChange = (e) => {
    setFiles(e.target.files[0]);
  };

  const handleCheckbox = (e) => {
    setInitialData({
      ...initialData,
      [e.target.name]: e.target.checked,
    });
  };

  const submitData = (e) => {
    e.preventDefault();
    setIsLoading(true)
    const formData = new FormData();
    formData.append("girls", initialData.girls);
    formData.append("boys", initialData.boys);
    formData.append("hostel_name", initialData.hostel_name);
    formData.append("manager_name", initialData.manager_name);
    formData.append("helpline_no", initialData.helpline_no);
    formData.append("latitude", initialData.latitude);
    formData.append("longitude", initialData.longitude);
    formData.append("latitudeDelta", initialData.latitudeDelta);
    formData.append("longitudeDelta", initialData.longitudeDelta);
    formData.append("kms", initialData.kms);
    formData.append("rooms_available", initialData.rooms_available);
    formData.append("room_price", initialData.room_price);
    formData.append("location", initialData.location);
    formData.append("hostel_image", file);

    axios
      .post(`/hostel/update/${hostel_id}`, formData)
      .then((res) => {

        toast.success("Your Hostel Data Updated", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
        setIsLoading(false)
        history.push("/");
      })
      .catch(() => {
        toast.error("Something went wrong. Please try again later.");
        setIsLoading(false)
      });
  };

  return (
    <>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Update Hostel</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Hostel</a>
              </li>
              <li className="breadcrumb-item active">Update Hostel</li>
            </ol>
          </nav>
        </div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Update Hostel</h5>

            <form
              class="row g-3"
              method="post"
              onSubmit={submitData}
              encType="multipart/form-data"
            >
              <div class="col-md-12">
                <label for="inputName5" class="form-label">
                  Hostel Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  defaultValue={initialData.hostel_name}
                  name="hostel_name"
                  onChange={handleData}
                  id="inputName5"
                />
              </div>
              <div class="col-md-6">
                <label for="inputEmail5" class="form-label">
                  Manager Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  defaultValue={initialData.manager_name}
                  name="manager_name"
                  onChange={handleData}
                  id="inputEmail5"
                />
              </div>
              <div class="col-md-6">
                <label for="inputPassword5" class="form-label">
                  Helpline Number
                </label>
                <input
                  type="number"
                  class="form-control"
                  defaultValue={initialData.helpline_no}
                  name="helpline_no"
                  onChange={handleData}
                  id="inputPassword5"
                />
              </div>
              <div class="col-md-6">
                <label for="inputCity" class="form-label">
                  Location
                </label>
                <input
                  type="text"
                  class="form-control"
                  defaultValue={initialData.location}
                  name="location"
                  onChange={handleData}
                  id="inputCity"
                />
              </div>
              <div class="col-md-2">
                <label for="inputZip" class="form-label">
                  Kms from College
                </label>
                <input
                  type="number"
                  class="form-control"
                  defaultValue={initialData.kms}
                  name="kms"
                  onChange={handleData}
                  id="inputZip"
                />
              </div>
              <div class="col-md-2">
                <label for="inputZip" class="form-label">
                  Rooms Available
                </label>
                <input
                  type="number"
                  class="form-control"
                  defaultValue={initialData.rooms_available}
                  name="rooms_available"
                  onChange={handleData}
                  id="inputZip"
                />
              </div>
              <div class="col-md-2">
                <label for="inputZip" class="form-label">
                  Room price / year
                </label>
                <input
                  type="number"
                  class="form-control"
                  defaultValue={initialData.room_price}
                  name="room_price"
                  onChange={handleData}
                  id="inputZip"
                />
              </div>
              <div class="col-md-2">
                <label for="inputZip" class="form-label">
                  Longitude
                </label>
                <input
                  type="number"
                  class="form-control"
                  defaultValue={initialData.longitude}
                  name="longitude"
                  onChange={handleData}
                  id="inputZip"
                />
              </div>
              <div class="col-md-2">
                <label for="inputZip" class="form-label">
                  Latitude
                </label>
                <input
                  type="number"
                  class="form-control"
                  defaultValue={initialData.latitude}
                  name="latitude"
                  onChange={handleData}
                  id="inputZip"
                />
              </div>
              <div class="col-md-8">
                <label for="file" class="form-label">
                  Upload Hostel Image (Less than 200 KB)
                </label>
                <input
                  class="form-control"
                  type="file"
                  name="hostel_image"
                  onChange={handleFileChange}
                  id="file"
                />
              </div>
              <div class="col-12">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    defaultValue={initialData.girls}
                    name="girls"
                    onChange={handleCheckbox}
                    id="girls"
                    checked={initialData.girls}
                  />
                  <label class="form-check-label" for="girls">
                    Girls
                  </label>
                </div>
              </div>
              <div class="col-12">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    defaultValue={initialData.boys}
                    name="boys"
                    onChange={handleCheckbox}
                    id="boys"
                    checked={initialData.boys}
                  />
                  <label class="form-check-label" for="boys">
                    Boys
                  </label>
                </div>
              </div>
              {isLoading ? (
                <div class="text-center">
                  <Loader
                    type="bubble-scale"
                    bgColor={"#012970"}
                    color={"#012970"}
                    size={25}
                  />
                </div>
              ) : (
                <div class="text-center">
                  <button type="submit" class="btn btn-primary">
                    Update Hostel
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </main>
    </>
  );
};
export default UpdateHostel;
