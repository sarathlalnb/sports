import React, { useEffect, useState } from 'react';
import { getsponsorStudentListApi, studsponAPI } from '../../Services/Allapis';
import { Button, Card, Col, Row, Modal } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

function Clgstdspn() {
    const {id} = useParams()
    
    const [show, setShow] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [sponsorStudentList, setSponsorStudentList] = useState([]);
    console.log(sponsorStudentList);
    const [userdata, setUserdata] = useState({
        payment: "",
        note: ""
    });

    const handleClose = () => setShow(false);
    const handleShow = (student) => {
        setSelectedStudent(student);
        setShow(true);
    };

    const handleSponsor = async () => {
        if (localStorage.getItem('token') && selectedStudent) {
            const token = localStorage.getItem('token');
            const reqHeader = {
                Authorization: `Token ${token}`,
            };
            const payload = {
                note: userdata.note,
                payment: userdata.payment,
            };
            const sid = selectedStudent.id;
            try {
                const results = await studsponAPI(sid, payload, reqHeader);
                console.log(results);
                alert("Sponsoring successfull")
                // Optionally, you could refresh the list of students here
                getStudentlist();
            } catch (error) {
                console.error('Error sponsoring student:', error);
                alert("'Error sponsoring student:', error")
            }
        }
    };

    const getStudentlist = async () => {
        if (localStorage.getItem('token')) {
            const token = localStorage.getItem('token');
            const reqHeader = {
                Authorization: `Token ${token}`,
            };
            try {
                const result = await getsponsorStudentListApi(id,reqHeader);
                console.log(result);
                setSponsorStudentList(result.data);
            } catch (error) {
                console.error('Error fetching student list:', error);
            }
        }
    };

    useEffect(() => {
        getStudentlist();
    }, []);
    const photoUrl = sponsorStudentList.photo ? `http://127.0.0.1:8000/${sponsorStudentList.photo}` : "default-image-url";

    return (
        <div>
            <div className="p-5">
                <Link to="/sponsor/home" style={{ textDecoration: "none", color: "black" }}>
                    <i className="fa-solid fa-backward fa-beat mx-2"></i>Back
                </Link>
                <div className="text-start event-head mb-4 mt-4">
                    <h3>
                        <b>Available Athletes</b>
                    </h3>
                </div>
                <div>
                    <Row className="m-5">
                        {sponsorStudentList.map((student, index) => (
                            <Col key={index} className="m-2">
                                <Card style={{ width: "18rem",boxShadow:"1px 5px 8px 1px black" }}>
                                    <Card.Body>

                                        <Card.Title>Name:{student.name}</Card.Title>
                                        <img
                style={{
                  borderRadius: "50%",
                  width: "100px",
                  height: "100px",
                }}
                src={`http://127.0.0.1:8000/${student.photo}`}
                alt="Profile"
              />
                                        <Card.Text>Username: {student.user}</Card.Text>
                                        <Card.Text>ID: {student.id}</Card.Text>
                                        <Card.Text>Email: {student.email_name}</Card.Text>
                                        <Card.Text>Phn: {student.ph_no}</Card.Text>
                                        <Card.Text>Achivements: {student.achivements}</Card.Text>
                                        <Card.Text>Interest: {student.interest}</Card.Text>
                                        <Button
                                            onClick={() => handleShow(student)}
                                            variant="outline-primary"
                                        >
                                            Sponsor
                                        </Button>
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
                        <p>Bank Details:{selectedStudent.bankname} <br />AccountNo:{selectedStudent.accno}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleSponsor}>Sponsor Now</Button>
                        <Button variant="secondary" onClick={handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            )}
        </div>
    );
}

export default Clgstdspn;
