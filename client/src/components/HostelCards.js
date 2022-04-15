import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HostelCards = (props) => {
  const history = useHistory();

  const deleteHostel = (hostel_id) => {
    axios
      .post(`/hostel/delete/${hostel_id}`)
      .then(() => {
        toast.error("Your Hostel is Deleted", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
        history.push("/");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        alert("Data Not Delete");
      });
  };
  console.log(props);
  return (
    <>
      <div className="col-sm-4 col-xs-12">
        <div className="card">
          <div className="card-body">
            <div className="headerContainer">
              <img
                src={props.hostel_image}
                className="hostelImage"
                alt="hostelimage"
              />
              <div className="hostelNameContainer">
                <h4 className="hostelName">{props.hostelName}</h4>
                <div className="boysGirlsContainer">
                  <div className="boysgirlsText">
                    <span>
                      <i className="fa fa-users" style={{ marginRight: 8 }} />
                      Boys
                      {props.boys ? (
                        <i
                          className="fa fa-check"
                          style={{ marginLeft: 10, color: "green" }}
                        />
                      ) : (
                        <i
                          className="fa fa-close"
                          style={{ marginLeft: 10, color: "red" }}
                        />
                      )}
                    </span>
                  </div>
                  <div className="boysgirlsText">
                    <span>
                      <i className="fa fa-users" style={{ marginRight: 8 }} />
                      Girls
                      {props.girls ? (
                        <i
                          className="fa fa-check"
                          style={{ marginLeft: 10, color: "green" }}
                        />
                      ) : (
                        <i
                          className="fa fa-close"
                          style={{ marginLeft: 10, color: "red" }}
                        />
                      )}
                    </span>
                  </div>
                </div>
                <div className="managerNameContainer">
                  <h4 className="managerNameHeadingText">
                    <i
                      className="fa fa-user"
                      style={{ marginRight: 8, color: "#012970" }}
                    />
                    Manager Name
                  </h4>
                  <h4 className="managerName">{props.managerName}</h4>
                </div>
              </div>
            </div>
            <div className="priceroomContainer">
              <div className="managerNameContainer" style={{ marginTop: 25 }}>
                <h4 className="managerNameHeadingText">
                  <i
                    className="fa fa-money"
                    style={{ marginRight: 8, color: "green" }}
                  />
                  Room Price
                </h4>
                <h4 className="managerName">{props.room_price}/year</h4>
              </div>
              <div className="managerNameContainer" style={{ marginTop: 25 }}>
                <h4 className="managerNameHeadingText">
                  <i
                    className="fa fa-road"
                    style={{ marginRight: 8, color: "black" }}
                  />
                  Location
                </h4>
                <h4 className="managerName">{props.location}</h4>
              </div>
              <div className="managerNameContainer" style={{ marginTop: 25 }}>
                <h4 className="managerNameHeadingText">
                  <i
                    className="fa fa-car"
                    style={{ marginRight: 8, color: "orange" }}
                  />
                  Kms
                </h4>
                <h4 className="managerName">{props.kms}</h4>
              </div>
            </div>
            <div className="contactContainer">
              <div>
                <h4 className="contactHeading">
                  <i
                    className="fa fa-address-book"
                    style={{ marginRight: 8, color: "green" }}
                  />{" "}
                  Contact
                </h4>
                <h4 className="mobilenumber">
                  <i
                    className="fa fa-phone"
                    style={{ marginRight: 8, color: "green" }}
                  />
                  +91 {props.helpline_no}
                </h4>
              </div>
              <div className="deleteUpdateContainer">
                <span onClick={() => deleteHostel(props.hostel_id)}>
                  <i
                    class="fa fa-trash"
                    style={{ color: "red", cursor: "pointer", fontSize: 30 }}
                  ></i>
                </span>
                <NavLink
                  to={`/updateHostel?college_id=${props.college_id}&hostel_id=${props.hostel_id}`}
                >
                  <i
                    class="fa fa-edit"
                    style={{ marginLeft: "20px", color: "black", fontSize: 30 }}
                  ></i>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HostelCards;
