import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import { getAthletesApi } from "../../Services/Allapis";
import { Container, Row, Col } from 'react-bootstrap';

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

  if (athletes === null) return <></>;

  return (
    <Container>
      <div className="text-center mt-5 mb-5">
        <h3>
          <b style={{color:"brown"}} >Available Athletes</b>
        </h3>
      </div>
      <Row>
        {athletes?.map((i) => (
          <Col md={4} className="d-flex align-items-stretch mb-4" key={i.id}>
            <Card style={{ width: "25rem" }}>
              <Card.Img variant="top" style={{ height: '150px' }} src={i.profile_picture} />
              <Card.Body>
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
