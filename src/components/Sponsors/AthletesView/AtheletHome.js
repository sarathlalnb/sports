import React from 'react'
import Aside from "../../Common Components/Aside/Aside";
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
    <div className="p-5">
      <div className="text-start event-head mb-4 sticky-top">
        <h3>
          <b>Available Events</b>
        </h3>
      </div>
      <Row>
        <Col>
          <MDBCard style={{ height: "300px" }} className="mt-3">
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
                  src="https://i.postimg.cc/59Yxf3jv/soccer-player-dribbles-soccer-ball-field-football-background-football-match-ai-generated-755721-8270.avif"
                  alt="..."
                /> <i class="fa-solid fa-calendar-day ms-3 mt-2 mx-1"></i>20/05/2024 10:00AM <br />
                <i class="fa-solid fa-location-dot ms-3 mt-2 mx-1 "></i>Kaloor Stadium
              </MDBCol>
              <MDBCol md="7">
                <MDBCardBody>
                  <MDBCardTitle>Football Match</MDBCardTitle>
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



