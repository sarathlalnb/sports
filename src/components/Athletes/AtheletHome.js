import React from 'react'
import Aside from "../Common Components/Aside/Aside";
import {
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
  } from "mdb-react-ui-kit";
  import { Col, Row } from "react-bootstrap";

function AtheletHome() {
    const fetchAsideItems = () => {
        const asideObj = [
          { text: "User Profile", link: "/user-profile", icon: "th-large" },
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
    <div className="p">
      <div className="text-start event-head mb-6 sticky-top">
        <h3>
          <b>Available Events</b>
        </h3>
      </div>
      <Row className='p-4'>
        <Col>
          <MDBCard style={{ height: "300px" }} className="mt-3 ">
            <MDBRow className="g-0">
              <MDBCol md="5">
                <MDBCardImage
                  style={{ height: "200px", width: "110%" }}
                  src="https://i.postimg.cc/SRvqfnZn/running-crowd-marathon-many-runners-260nw-1157429986.webp"
                  alt="..."
                  
                />    <i class="fa-solid fa-calendar-day ms-3 mt-2 mx-1"></i>20/05/2024 10:00AM <br />
                <i class="fa-solid fa-location-dot ms-3 mt-2 mx-1 "></i>Kaloor Stadium

              </MDBCol>
              <MDBCol md="7" >
                <MDBCardBody>
                  <MDBCardTitle>Kochi Marathon 2024</MDBCardTitle>
                  <MDBCardText>
               
            
                    This is a wider card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </MDBCardText> <br /><br /><br /> <br />
                  <MDBCardText>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </Col>
        <Col>
          <MDBCard style={{ height: "300px" }} className="mt-3">
            <MDBRow className="g-0">
              <MDBCol md="5">
                <MDBCardImage
                  style={{ height: "200px", width: "110%" }}
                  src="https://static.toiimg.com/thumb/msid-89223698,width-400,resizemode-4/89223698.jpg"
                  alt="..."
                /> <i class="fa-solid fa-calendar-day ms-3 mt-2 mx-1"></i>20/05/2024 10:00AM <br />
                <i class="fa-solid fa-location-dot ms-3 mt-2 mx-1 "></i>Kaloor Stadium
              </MDBCol>
              <MDBCol md="7">
                <MDBCardBody>
                  <MDBCardTitle>Badminton</MDBCardTitle>
                  <MDBCardText>
                  This is a wider card with supporting text below as a
                  natural lead-in to additional content. This content is a
                  little bit longer.
                  </MDBCardText>
                  <MDBCardText> <br /><br /><br /> <br />
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </Col>
      </Row>
      <Row className='p-4'>
        <Col>
          <MDBCard style={{ height: "300px" }} className="mt-3">
            <MDBRow className="g-0">
              <MDBCol md="5">
                <MDBCardImage
                  style={{ height: "200px", width: "110%" }}
                  src="https://cdn.pixabay.com/photo/2023/11/07/20/24/cristiano-ronaldo-8373364_640.jpg"
                  alt="..."
                  
                />    <i class="fa-solid fa-calendar-day ms-3 mt-2 mx-1"></i>20/05/2024 10:00AM <br />
                <i class="fa-solid fa-location-dot ms-3 mt-2 mx-1 "></i>Kaloor Stadium

              </MDBCol>
              <MDBCol md="7" >
                <MDBCardBody>
                  <MDBCardTitle>Football</MDBCardTitle>
                  <MDBCardText>
                    This is a wider card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </MDBCardText> <br /><br /><br /> <br />
                  <MDBCardText>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </Col>
        <Col>
          <MDBCard style={{ height: "300px" }} className="mt-3">
            <MDBRow className="g-0">
              <MDBCol md="5">
                <MDBCardImage
                  style={{ height: "200px", width: "110%" }}
                  src="https://cdn.britannica.com/63/211663-050-A674D74C/Jonny-Bairstow-batting-semifinal-match-England-Australia-2019.jpg"
                  alt="..."
                /> <i class="fa-solid fa-calendar-day ms-3 mt-2 mx-1"></i>20/05/2024 10:00AM <br />
                <i class="fa-solid fa-location-dot ms-3 mt-2 mx-1 "></i>Kaloor Stadium
              </MDBCol>
              <MDBCol md="7">
                <MDBCardBody>
                  <MDBCardTitle>Cricket Match</MDBCardTitle>
                  <MDBCardText>
                    This is a wider card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </MDBCardText>
                  <MDBCardText> <br /><br /><br /> <br />
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </Col>
      </Row>
    </div>
  </div>
  )
}

export default AtheletHome



