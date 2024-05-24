import React from "react";
import "./lpage.css";
import { Link } from "react-router-dom";
import Gallery from "./Gallery";
import Footer from "../Footer/Footer";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Aboutus } from "./Aboutus";

function Landingpage() {
  return (
    <>
      <Row className="home-page">
        <Col lg={9} className=" text-start home-text">
          <h1 className="home-head ">
            <b>
              Your Ultimate <br /> <span style={{ color: "red" }}>Sports</span>{" "}
              Destination.
            </b>
          </h1>
          <p className="text-light">
            Dive into the heart of sports with Sports Manager , your go-to
            source for all things sports! From live scores and in-depth analysis
            to breaking news and exclusive interviews, we’ve got you covered.
          </p>
          <div className="text-end">
            <div className=" mt-5 pt-5 line">
              {" "}
              <Link to={"/auth"}>
                <button className="home-btn">
                  <b>Get Start</b>
                </button>
              </Link>
            </div>
          </div>
        </Col>

        <Col className="text-end">
          <img
            className="home-page-image"
            src="https://i.postimg.cc/ryfKFbcH/pngtree-male-athlete-running-on-a-running-track-picture-image-2469765.jpg"
            alt=""
          />
        </Col>
      </Row>
      <Gallery />
      <Footer />
    </>
  );
}

export default Landingpage;
