import React from "react";
import Aside from "../../Common Components/Aside/Aside";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import { getStudentListApi } from "../../Services/Allapis";


export const AthletesView = () => {

  const [Studentlist, setStudentlist] = useState([]);
  
  const getStudentlist = async () => {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      const reqHeader = {
        Authorization: `Token ${token}`,
      };
      const result = await  getStudentListApi(reqHeader); 
     
      setStudentlist(result.data);
     
    }
  };

  useEffect(() => {
    getStudentlist();
  }, []);
  const fetchAsideItems = () => {
    const asideObj = [
      { text: "Dashboard", link: "/sponsor/home", icon: "th-large" },
      {
        text: "Available Athletes",
        link: "/sponsor/available-athletes",
        icon: "sticky-note",
      },
      {
        text: "Available College",
        link: "/sponsor/available-college",
        icon: "sticky-note",
      },
    ];

    return <Aside asideObj={asideObj} />;


  };
  return (
    <div className="main-grid">
      <div>{fetchAsideItems()}</div>
      <div className="p-5">
        <div className="text-start event-head mb-4 mt-4">
          <h3>
            <b>Available Athletes</b>
          </h3>
        </div>
<div > <Row className="m-5" >
          {Studentlist.map((student, index) => (
            <Col key={index} className="m-2">
              <Card style={{ width: "18rem" }}>
               
                <Card.Body>
                  <Card.Title>{student.first_name}</Card.Title>
                  <Card.Text>ID: {student.id}</Card.Text>
                  <Card.Text>Email: {student.email}</Card.Text>
                  <Card.Text>Username: {student.username}</Card.Text>
                 
                 <button className="btn btn-outline-primary">Sponsor</button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row></div>
       
      </div>
    </div>
  );
};
