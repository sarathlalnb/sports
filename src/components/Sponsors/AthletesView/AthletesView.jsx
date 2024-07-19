import React from "react";
import Aside from "../../Common Components/Aside/Aside";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import { getStudentListApi, studsponAPI } from "../../Services/Allapis";
import Modal from 'react-bootstrap/Modal';

export const AthletesView = () => {
  const [show, setShow] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [Studentlist, setStudentlist] = useState([]);
  const [userdata, setUserdata] = useState({
    payment: "",
    note: ""
  });

  const handleClose = () => setShow(false);
  const handleShow = (student) => {
    setSelectedStudent(student);
    setShow(true);
  };

  const getStudentlist = async () => {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      const reqHeader = {
        Authorization: `Token ${token}`,
      };
      const result = await getStudentListApi(reqHeader);
      setStudentlist(result.data);
    }
  };

  const handleSponsor = async () => {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      const reqHeader = {
        Authorization: `Token ${token}`,
      };
      const payload = {
        note: userdata.note,
        payment: userdata.payment,
      };
      if (selectedStudent) {
        const sid = selectedStudent.id;
        console.log(sid);
        
        const result = await studsponAPI(sid, payload, reqHeader);
        console.log(result);
      }
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
        text: "Sponsered Students",
        link: "/sponsor/sponsered-student",
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
        <div>
          <Row className="m-5">
            {Studentlist.map((student, index) => (
              <Col key={index} className="m-2">
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title>{student.first_name}</Card.Title>
                    <Card.Text>ID: {student.id}</Card.Text>
                    <Card.Text>Email: {student.email}</Card.Text>
                    <Card.Text>Username: {student.username}</Card.Text>
                    <button
                      onClick={() => handleShow(student)}
                      className="btn btn-outline-primary"
                    >
                      Sponsor
                    </button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      {selectedStudent && (
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Sponsor {selectedStudent.first_name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <label htmlFor="">{selectedStudent.id}</label>
            <input
              onChange={(e) => setUserdata({ ...userdata, payment: e.target.value })}
              placeholder="Amount"
              className="form-control m-2"
              type="text"
            />
            <input
              onChange={(e) => setUserdata({ ...userdata, note: e.target.value })}
              placeholder="Note"
              className="form-control m-2"
              type="text"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleSponsor}>Sponsor Now</Button>
            <Button variant="secondary" onClick={handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};
