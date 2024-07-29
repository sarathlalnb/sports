import React from "react";
import Aside from "../../Common Components/Aside/Aside";
import { Button, Card, Col, Row, Table } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import { sponsorcollegeListApi } from "../../Services/Allapis";
import Modal from 'react-bootstrap/Modal';
import { Link, useNavigate } from "react-router-dom";


export const AthletesView = () => {
  // const [show, setShow] = useState(false);
  // const [selectedStudent, setSelectedStudent] = useState(null);
  // const [Studentlist, setStudentlist] = useState([]);
  // const [userdata, setUserdata] = useState({
  //   payment: "",
  //   note: ""
  // });

  // const handleClose = () => setShow(false);
  // const handleShow = (student) => {
  //   setSelectedStudent(student);
  //   setShow(true);
  // };

  const navigate = useNavigate()

  const [colleges, setColleges] = useState([]);

  const Studentspage = async (id) => {
      navigate(`/sponsor/students/${id}`)
  }

  const getCollegeList = async () => {

      const result = await sponsorcollegeListApi();
      console.log(result.data);
      setColleges(result.data);
  }

  useEffect(() => {
      getCollegeList()
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
      
      {/* <div className="p-5">
      <Link to="/athletes-home" style={{ textDecoration: "none", color: "black"}} >
      <i class="fa-solid fa-backward fa-beat mx-2"></i>Back</Link>
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
      </div> */}
      <Row className="justify-content-center mt-4">
            <Col md={6}>
              <div className='text-center ' style={{ backgroundColor: "#000000", borderRadius: "40px" }}>
                
                <div className='pt-3' style={{marginLeft:"-350px",backgroundColor:"white",width:"1000px", borderRadius: "40px" }}>
                  <h4 style={{fontSize:"38px", color:"black"}}>College List</h4>
                  <Table style={{backgroundColor:"",width:"1000px" }}  className='text-center mt-3 '>

                <thead>
                    <tr  >
                        <th>Id</th>
                        <th>College Name</th>
                        <th>Students</th>

                    </tr>
                </thead>
                <tbody>
                    {colleges.map((college, index) => (
                        <tr key={index}>
                            <td>{college.id}</td>
                            <td>{college.username}</td>
                            <td ><button onClick={()=>{
                                Studentspage(college.id)
                            }} className='btn btn-outline-primary  ' style={{width:"400px"}}>View Students</button></td>


                        </tr>
                    ))}
  
                </tbody>
            </Table>
               
                </div>
              </div>
            </Col>
          </Row>




      {/* {selectedStudent && (
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
      )} */}
    </div>
  );
};
