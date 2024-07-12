import React from 'react'
import Aside from "../Common Components/Aside/Aside";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
  import { Col, Row } from "react-bootstrap";

function UserProfile() {
    const fetchAsideItems = () => {
        const asideObj = [
          { text: "All Events", link: "/athletes-home", icon: "th-large" },
          {
            text: "Sponsors",
            link: "",
            icon: "sticky-note",
          },
         
        ];
    
        return <Aside asideObj={asideObj} />;
      };
  return (
    <div className="main-grid">
       <div>{fetchAsideItems()}</div>
<div className='m-5 p-5 '   >

<Row>
<Col>
<div className='text-center'>
<img style={{borderRadius:"50%",width:"100px,",height:"100px"}} src="https://i.postimg.cc/9Qb0nHmV/social-media-news-2022-08-17-T091907-918.webp" alt="round" />
<h3 className='mt-3'>Anitha Thomas <i style={{color:"green",fontSize:"15px"}} class="fa-solid fa-1x fa-pen-to-square"></i> </h3>
</div>

</Col>
</Row> 
<Row className='m-3 p-3'>
    <Col>
    <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
    </Col>
    <Col>
    
    <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
      <FloatingLabel className='mt-3' controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
    </Col>
</Row>
</div>
       
    </div>
  )
}

export default UserProfile
