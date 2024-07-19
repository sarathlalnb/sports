import React, { useEffect, useState } from "react";
import "./Home.css";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { Col, Container, Row } from "react-bootstrap";
import Aside from "../../Common Components/Aside/Aside";
import { collegeEventApi } from "../../Services/Allapis";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Home = () => {
  const fetchAsideItems = () => {
    const asideObj = [
      { text: "Dashboard", link: "/college-home", icon: "th-large" },
      { text: "Requests", link: "/college/request", icon: "sticky-note" },
      { text: "Athletes", link: "/post", icon: "sticky-note" },
      { text: "Student Registration", link: "/college/studentreg", icon: "sticky-note" },
      { text: "Student list", link: "/college/studentlist", icon: "sticky-note" },
      { text: "Sponsors List", link: "/college/sponsorview", icon: "sticky-note" },
      { text: "Sponser Approve", link: "/college-request", icon: "sticky-note" },
    ];
    return <Aside asideObj={asideObj} />;
  };

  const [collegeEvents, setCollegeEvents] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 3;

  const getEvents = async () => {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      const reqHeader = { Authorization: `Token ${token}` };
      const result = await collegeEventApi(reqHeader);
      console.log(result.data);
      setCollegeEvents(result.data);
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  if (collegeEvents === null) return <></>;

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = collegeEvents.slice(indexOfFirstEvent, indexOfLastEvent);

  return (
    <div className="main-grid">
      <div>{fetchAsideItems()}</div>
      <Container className="mt-4 home-body">
        <div>
          <div className="text-start event-head mb-4 sticky-top">
            <h3><b>Available Events</b></h3>
          </div>
          <Row>
            <Col>
              {currentEvents.map((i) => (
                <MDBCard key={i.id} style={{ height: "200px" }} className="mt-3">
                  <MDBRow className="g-0">
                    <MDBCol md="5">
                      <MDBCardImage
                        style={{ height: "200px", width: "100%" }}
                        src={`http://127.0.0.1:8000`+i.image}
                        alt=" "
                      />
                    </MDBCol>
                    <MDBCol md="7">
                      <MDBCardBody>
                        <MDBCardTitle>{i.title}</MDBCardTitle>
                        <MDBCardText>{i.description}</MDBCardText>
                        <MDBCardText>
                          <small className="text-muted">{i.date.slice(0, 10)}</small>
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCol>
                  </MDBRow>
                </MDBCard>
              ))}
            </Col>
          </Row>
          <Stack spacing={2} className="mt-4 d-flex justify-content-center">
            <Pagination
              count={Math.ceil(collegeEvents.length / eventsPerPage)}
              page={currentPage}
              onChange={handlePageChange}
            />
          </Stack>
        </div>
      </Container>
    </div>
  );
};

export default Home;
