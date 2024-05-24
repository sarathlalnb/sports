import React from "react";
import Aside from "../../Common Components/Aside/Aside";
import { Button, Card, Col, Row } from "react-bootstrap";

export const AthletesView = () => {
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

        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                style={{ height: "250px" }}
                src="https://i.postimg.cc/NG3Mt722/images-1.jpg"
              />
              <Card.Body>
                <Card.Title>Virat Kohli</Card.Title>
                <Card.Text>
                  Good athlete seen so far and have a great knowledge of whats
                  coming next.
                </Card.Text>
                <Button variant="primary">View more</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                style={{ height: "250px" }}
                src="https://i.postimg.cc/NG3Mt722/images-1.jpg"
              />
              <Card.Body>
                <Card.Title>Virat Kohli</Card.Title>
                <Card.Text>
                  Good athlete seen so far and have a great knowledge of whats
                  coming next.
                </Card.Text>
                <Button variant="primary">View more</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                style={{ height: "250px" }}
                src="https://i.postimg.cc/NG3Mt722/images-1.jpg"
              />
              <Card.Body>
                <Card.Title>Virat Kohli</Card.Title>
                <Card.Text>
                  Good athlete seen so far and have a great knowledge of whats
                  coming next.
                </Card.Text>
                <Button variant="primary">View more</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                style={{ height: "250px" }}
                src="https://i.postimg.cc/NG3Mt722/images-1.jpg"
              />
              <Card.Body>
                <Card.Title>Virat Kohli</Card.Title>
                <Card.Text>
                  Good athlete seen so far and have a great knowledge of whats
                  coming next.
                </Card.Text>
                <Button variant="primary">View more</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};
