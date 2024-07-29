import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import { getAthletesApi } from "../../Services/Allapis";
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Post = () => {
  const [athletes, setAthletes] = useState(null);

  const getAthletes = async () => {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      const reqHeader = {
        Authorization: `Token ${token}`,
      };
      const result = await getAthletesApi(reqHeader);
      setAthletes(result.data);
    }
  };

  useEffect(() => {
    getAthletes();
  }, []);
  console.log(athletes);

  if (athletes === null) return <></>;

  return (
    <Container>
      <div className="text-center mt-5 mb-5">
      <Link to="/college-home" style={{ textDecoration: "none", color: "black",marginLeft:"-1200px" }} >
      <i class="fa-solid fa-backward fa-beat mx-2"></i>Back</Link>
        <h3>
          <b style={{color:"brown"}} >Available Athletes</b>
        </h3>
      </div>
      <Row>
        {athletes?.map((i) => (
          <Col md={4} className="d-flex align-items-stretch mb-4" key={i.id}>
            <Card style={{ width: "25rem" }}>
              <Card.Img variant="top" style={{ height: '150px' }} src={`http://127.0.0.1:8000`+i?.profile_picture} />
              <Card.Body>
              <Card.Title><b>ID:</b> {i.id}</Card.Title>
                <Card.Title><b>Name:</b> {i.first_name}</Card.Title>
                <Card.Title><b>E-mail:</b> {i.email}</Card.Title>
               
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Post;
