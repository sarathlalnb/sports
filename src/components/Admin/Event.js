import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Event.css';
import Modal from 'react-bootstrap/Modal';
import Button from '@mui/material/Button';
import Image from 'react-bootstrap/Image';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


function Event() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className='event1'>
      <Container className='m-2 p-4'>
<div> 
<h1 className='text-center'>Events</h1>

<div className='text-center '>
<Button variant="contained" onClick={handleShow}   className='e1 mt-5' >
       Add Events
      </Button>
</div>
 </div>
<div>

<div  className='event2 mt-5 ms-5'>
  <Row className='m-2 p-3'>
  <Col>
  
  </Col>
  <Col>
  <img className='ms-3' style={{width:"100%",height:"100%"}} src="https://i.postimg.cc/wMV35n04/running-poster-design-runners-realism-260nw-2345202327.webp" alt="" />
  </Col>
  </Row>
</div>
<div  className='event2 mt-5 ms-5'>
 <Row className='m-2 p-3 text-white' >
  <Col>

  <div className='text-white'>
  <i class="fa-regular fa-calendar"></i>  </div>
   </Col>
  <Col>
  <img className='ms-3' style={{width:"100%",height:"100%"}} src="https://i.postimg.cc/wMV35n04/running-poster-design-runners-realism-260nw-2345202327.webp" alt="" />
  </Col>
  </Row>
</div>

</div>
      </Container> <div className='text-center'> 
      <Modal show={show} onHide={handleClose} className='mt-5'>
        <Modal.Header closeButton>
          <Modal.Title  style={{ width: '100%', textAlign: 'center' }}>Add Events</Modal.Title>
        </Modal.Header>
        <Modal.Body>
<Row  >
<Col>

<div>
<img className='text-center mt-3' style={{width:"100%",height:"100%"}} src="https://i.postimg.cc/vBb9w7gn/no-photo-or-blank-image-icon-loading-images-vector-37375020.jpg" alt="" />

</div>
        

</Col>
<Col>
<FloatingLabel
        controlId="floatingInput"
        label="Title"
        className="mb-3"
      >
        <Form.Control type="text"  />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword">
        <Form.Control  type="datetime-local"
               
                  />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Venue"
        className="mb-3 mt-3"
      >
        <Form.Control type="text" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Description">
        <Form.Control type="text" />
      </FloatingLabel>
</Col>


</Row>




        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
          Add
          </Button>
        </Modal.Footer>
      </Modal></div>
    </div>
  )
}

export default Event

