import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "react-js-loader";

const AddHostel = () => {
  const collegeId = localStorage.getItem("college_id");
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFiles] = useState();
  const [data, setData] = useState({
    boys: false,
    girls: false,
    hostel_name: "",
    manager_name: "",
    helpline_no: null,
    latitude: null,
    longitude: null,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
    kms: null,
    rooms_available: null,
    room_price: null,
    location: "",
  });

  const handleData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFiles(e.target.files[0]);
  };

  const handleCheckbox = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.checked,
    });
  };

  const submitData = (e) => {
    setIsLoading(true)
    e.preventDefault();
    const formData = new FormData();
    formData.append("girls", data.girls);
    formData.append("boys", data.boys);
    formData.append("hostel_name", data.hostel_name);
    formData.append("manager_name", data.manager_name);
    formData.append("helpline_no", data.helpline_no);
    formData.append("latitude", data.latitude);
    formData.append("longitude", data.longitude);
    formData.append("latitudeDelta", data.latitudeDelta);
    formData.append("longitudeDelta", data.longitudeDelta);
    formData.append("kms", data.kms);
    formData.append("rooms_available", data.rooms_available);
    formData.append("room_price", data.room_price);
    formData.append("location", data.location);
    formData.append("hostel_image", file);

    axios
      .post(`/hostel/addHostel/${collegeId}`, formData)
      .then(() => {
        toast.success("Your Hostel is Live now", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
        setIsLoading(false);
        history.push("/");
      })
      .catch(() => {
        toast.error("Something went wrong. Please try again later.");
        setIsLoading(false);
      });
  };

  return (
    <>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Add Hostel</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Hostel</a>
              </li>
              <li className="breadcrumb-item active">Add Hostel</li>
            </ol>
          </nav>
        </div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Post Hostel</h5>

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
                  value={data.hostel_name}
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
                  value={data.manager_name}
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
                  value={data.helpline_no}
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
                  value={data.location}
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
                  value={data.kms}
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
                  value={data.rooms_available}
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
                  value={data.room_price}
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
                  value={data.longitude}
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
                  value={data.latitude}
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
                    value={data.girls}
                    name="girls"
                    onChange={handleCheckbox}
                    id="girls"
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
                    value={data.boys}
                    name="boys"
                    onChange={handleCheckbox}
                    id="boys"
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
                    Post Hostel
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
export default AddHostel;
