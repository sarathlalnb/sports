import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { userListApi } from '../Services/Allapis';
import { useParams } from 'react-router-dom'

function CollegeStudents() {

    const {id} = useParams()
    const [Studentlist, setStudentlist] = useState([]);
    console.log(Studentlist)

    const getStudentlist = async () => { 
       
          const result = await userListApi(id);
          setStudentlist(result.data);
        }
     

      useEffect(() => {
        getStudentlist();
      }, []);

  return (
    <div>

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
  )
}

export default CollegeStudents