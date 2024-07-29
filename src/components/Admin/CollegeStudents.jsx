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
                <Card style={{ width: "18rem" ,boxShadow:"2px 3px 5px black"}}>
                  <Card.Body>
                    <Card.Title>{student.user}</Card.Title>
                    <Card.Text>ID: {student.id}</Card.Text>
                    <Card.Text>Ph no:{student.ph_no}</Card.Text>
                    <Card.Text>Age:{student.age}</Card.Text>
                    <Card.Text>Admission no:{student.adm_no}</Card.Text>
                    <Card.Text>dob:{student.dob}</Card.Text>
                   
                   
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