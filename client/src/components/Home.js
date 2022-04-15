import React, { useEffect, useState } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import Loader from "react-js-loader";
import HostelCards from "./HostelCards";
import { NavLink } from "react-router-dom";
const Home = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const collegeId = localStorage.getItem("college_id");

  useEffect(() => {
    getHostelData();
  }, []);

  const getHostelData = () => {
    axios
      .get(`/hostel/getAllHostelsOfCollege/${collegeId}`)
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((e) => {
        return (
          <div className="noDataFoundContainer">
            <h3>No Hostels found.</h3>
            <NavLink classNa to="/addHostel">
              Add Hostel from here.
            </NavLink>
          </div>
        );
      });
  };

  const hostel = data?.map((college, index) =>
    college.hostels.map((hostels, index) => {
      return (
        <HostelCards
          hostel_id={hostels._id}
          college_id={collegeId}
          hostelName={hostels.hostel_name}
          managerName={hostels.manager_name}
          helpline_no={hostels.helpline_no}
          kms={hostels.kms}
          rooms_available={hostels.rooms_available}
          room_price={hostels.room_price}
          location={hostels.location}
          hostel_image={hostels.hostel_image}
          boys={hostels.boys}
          girls={hostels.girls}
        />
      );
    })
  );

  return (
    <main id="main" className="main">
      <div className="pagetitle">
        <h1>Dashboard</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item active">Dashboard</li>
          </ol>
        </nav>
      </div>
      {isLoading ? (
        <Loader
          type="bubble-scale"
          bgColor={"#012970"}
          title={"Loading..."}
          color={"#012970"}
          size={50}
        />
      ) : (
        ""
      )}
      <div className="row">
        {(hostel[0].length != 0) ? (
          hostel
        ) : (
          <div className="noDataFoundContainer">
            <h3>No Hostels found.</h3>
            <NavLink classNa to="/addHostel">
              Add Hostel from here.
            </NavLink>
          </div>
        )}
      </div>
    </main>
  );
};
export default Home;
