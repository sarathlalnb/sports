import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { Badge, Container } from "react-bootstrap";

function Header({ navObj }) {
 
  return (
    <Navbar
      expand="md"
      className="bg-body-light header shadow-sm sticky-top"
      style={{ minHeight: "80px", backgroundColor: "white" }}
    >
      <Container fluid className="">
        <Link to={"/"} style={{ textDecoration: "none" ,color:'black'}}>
          <Navbar.Brand className="ms-lg-4 ms-md-3 d-flex">
            <img className="logo-img"  alt="" />{" "}
            <h2 className="mt-2 ms-3">
             SPORTS MANAGER
            </h2>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle className="me-3" />
        <Navbar.Collapse>
          <Nav className="mx-auto my-2 my-lg-0 text-end">
            {navObj?.map((i, index) => (
              <Link to={i.link} style={{ textDecoration: "none",color:'black' }} key={index}>
                <h6
                  className={
                    i.active
                      ? "me-lg-5 me-3 active navlink"
                      : "me-lg-5 me-3 navlink"
                  }
                >
                  {i.text}
                  {i.badge && (
                    <sup>
                      <Badge>{i.badge}</Badge>
                    </sup>
                  )}
                </h6>
              </Link>
            ))}
          </Nav>
    
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
