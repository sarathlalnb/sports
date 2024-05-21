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
          <Card.Title>Virat Kohli</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Post;
