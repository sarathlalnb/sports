import React, { useContext, useEffect, useState } from "react";
import Aside from "../Common Components/Aside/Aside";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";
import { profileApi } from "../Services/Allapis";
import Editprofile from "./Editprofile";
import {
  addprofileResponseContext,
  updateprofileResponseContext,
} from "../../ContextAPI/ContextShare";
import { Link } from "react-router-dom";

function UserProfile() {
  const fetchAsideItems = () => {
    const asideObj = [
      { text: "All Events", link: "/athletes-home", icon: "th-large" },
      { text: "Sponsors", link: "", icon: "sticky-note" },
    ];
    return <Aside asideObj={asideObj} />;
  };

  const { UpdateProfileResponse, setUpdateProfileResponse } = useContext(
    updateprofileResponseContext
  );

  const [athletesprofile, setAthletesprofile] = useState({});

  const getProfile = async () => {
    if (localStorage.getItem("token")) {
      const token = localStorage.getItem("token");
      const reqHeader = { Authorization: `Token ${token}` };
      const result = await profileApi(reqHeader);
      setAthletesprofile(result.data);
    }
  };

  useEffect(() => {
    getProfile();
  }, [UpdateProfileResponse]);
  const photoUrl = athletesprofile.photo ? `http://127.0.0.1:8000/${athletesprofile.photo}` : "default-image-url";
  return (
    <div className="main-grid">
      <div>{fetchAsideItems()}</div>
      <div className="m-5 p-5">
        <Row>
          <Col>
            <div className="text-center">
              <div>
                <Link
                  to="/athletes-home"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    marginLeft: "-1200px",
                  }}
                >
                  <i className="fa-solid fa-backward fa-beat mx-2"></i>Back
                </Link>
              </div>
              <img
                style={{
                  borderRadius: "50%",
                  width: "100px",
                  height: "100px",
                }}
                src={photoUrl}
                alt="Profile"
              />
              <h3 className="mt-3">
                {athletesprofile.name} <Editprofile profile={athletesprofile} />
              </h3>
            </div>
          </Col>
        </Row>
        <Row className="m-3 p-3" style={{ color: "black" }}>
          <Col>
            <label htmlFor="name">Name</label>
            <FloatingLabel
              controlId="floatingName"
              label={athletesprofile.name}
            >
              <Form.Control type="text" placeholder="Name" readOnly />
            </FloatingLabel>
            <label htmlFor="age">Age</label>
            <FloatingLabel
              className="mt-3"
              controlId="floatingAge"
              label={athletesprofile.age}
            >
              <Form.Control type="text" placeholder="Age" readOnly />
            </FloatingLabel>
            <label htmlFor="dob">DOB</label>
            <FloatingLabel
              className="mt-3"
              controlId="floatingDob"
              label={athletesprofile.dob}
            >
              <Form.Control type="text" placeholder="DOB" readOnly />
            </FloatingLabel>
            <label htmlFor="admissionNo">Admission No</label>
            <FloatingLabel
              className="mt-4"
              controlId="floatingAdmissionNo"
              label={athletesprofile.adm_no}
            >
              <Form.Control type="text" placeholder="Admission No" readOnly />
            </FloatingLabel>
          </Col>
          <Col>
            <label htmlFor="phoneNo">Phone No</label>
            <FloatingLabel
              controlId="floatingPhoneNo"
              label={athletesprofile.ph_no}
            >
              <Form.Control type="text" placeholder="Phone No" readOnly />
            </FloatingLabel>
            <label htmlFor="bank">Bank</label>
            <FloatingLabel
              className="mt-3"
              controlId="floatingBank"
              label={athletesprofile.bankname}
            >
              <Form.Control type="text" placeholder="Bank" readOnly />
            </FloatingLabel>
            <label htmlFor="accNo">Account No</label>
            <FloatingLabel
              className="mt-3"
              controlId="floatingAccNo"
              label={athletesprofile.accno}
            >
              <Form.Control type="text" placeholder="Account No" readOnly />
            </FloatingLabel>
            <label htmlFor="ifsc">IFSC</label>
            <FloatingLabel
              className="mt-3"
              controlId="floatingIfsc"
              label={athletesprofile.ifsc_code}
            >
              <Form.Control type="text" placeholder="IFSC Code" readOnly />
            </FloatingLabel>
          </Col>
        </Row>
        <Row className="m-3 p-3">
          <Col>
            <label htmlFor="achievements">Achievements</label>
            <FloatingLabel
              controlId="floatingAchievements"
              label={athletesprofile.achivements}
            >
              <Form.Control type="text" placeholder="Achievements" readOnly />
            </FloatingLabel>
          </Col>
          <Col>
            <label htmlFor="interest">Interest</label>
            <FloatingLabel
              controlId="floatingInterest"
              label={athletesprofile.interest}
            >
              <Form.Control type="text" placeholder="Interest" readOnly />
            </FloatingLabel>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default UserProfile;
