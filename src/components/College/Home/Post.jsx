import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Post = () => {
  return (
    <div>
      <div className="text-start event-head mb-4 mt-4">
        <h3>
          <b>Available Athletes</b>
        </h3>
      </div>

      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" style={{height:'250px'}} src="https://i.postimg.cc/NG3Mt722/images-1.jpg" />
        <Card.Body>
          <Card.Title>Sidharth Suresh</Card.Title>
          <Card.Text>
            Good athlete seen so far and have a great knowledge of whats coming next.
          </Card.Text>
          <Button variant="primary">View more</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Post;
