import React, { useEffect, useState } from 'react';
import Aside from "../Common Components/Aside/Aside";
import "./AtheletHome.css";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { Container, Row } from "react-bootstrap";
import { EventregApi, getAllEventsApi
 } from '../Services/Allapis';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "@mui/material/Button";

function AtheletHome() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [athletesEvents, setAthletesEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 4;

  const fetchAsideItems = () => {
    const asideObj = [
      { text: "User Profile", link: "/user-profile", icon: "th-large" },
      { text: "Sponsors", link: "/mysponsorslist", icon: "sticky-note" },
      { text: "My Wins", link: "/Winnerslist", icon: "sticky-note" },
      { text: "Events Registered", link: "/myEvents", icon: "sticky-note" },
      { text: "Notification", link: "/notification", icon: "sticky-note" }
    ];

    return <Aside asideObj={asideObj} />;
  };

  const getListEvents = async (start, end) => {
    if (localStorage.getItem("token")) {
      const token = localStorage.getItem("token");
      const reqHeader = { Authorization: `Token ${token}` };
      let query = "";
      if (start && end) {
        query = `search/?start_date=${start}&end_date=${end}`;
      }
      const result = await getAllEventsApi(reqHeader, query);
      console.log(result);
      const messages = result.data.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
      setAthletesEvents(messages);
    }
  };

  const handleSearch = () => {
    getListEvents(startDate, endDate);
  };

  useEffect(() => {
    getListEvents();
  }, []);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = athletesEvents.slice(indexOfFirstEvent, indexOfLastEvent);

  const handleRegister = async (uId) => {
    try {
      const token = localStorage.getItem('token');
      const reqHeader = { Authorization: `Token ${token}` };
      const result = await EventregApi(uId, reqHeader);
      console.log(result);
      alert("Registration Successful");
    } catch (error) {
      console.error("Error registering for event:", error);
      alert("Error during registration");
    }
  };

  return (
    <div className="main-grid">
      <div>{fetchAsideItems()}</div>

      <div className="search-section mt-5">
      
      <Container className="mt-4 home-body">
        
          <div className="text-start event-head mb-4 sticky-top">
            <h3><b>Event List</b></h3>
          </div>
          <FloatingLabel controlId="floatingStartDate" label="Start Date" className="mb-3">
          <Form.Control
            type="date"
            onChange={(e) => setStartDate(e.target.value)}
            name="start_date"
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingEndDate" label="End Date" className="mb-3">
          <Form.Control
            type="date"
            onChange={(e) => setEndDate(e.target.value)}
            name="end_date"
          />
        </FloatingLabel>
        <Button variant="contained" onClick={handleSearch}>
          Search
        </Button>
     
          <div>
          <Row>
            {currentEvents.length ? currentEvents.map((i) => (
              <div className="col-6" key={i.id}>
                <MDBCard style={{ height: "300px" }} className="mt-3">
                  <MDBRow className="g-0">
                    <MDBCol md="5">
                      <MDBCardImage
                        style={{ height: "200px", width: "100%" }}
                        src={`http://127.0.0.1:8000` + i.image}
                        alt="Event"
                      />
                    </MDBCol>
                    <MDBCol md="7">
                      <MDBCardBody>
                        <MDBCardTitle>{i.title}</MDBCardTitle>
                        <MDBCardText>{i.description}</MDBCardText>
                        <MDBCardText>
                          <a href={i.venue}><i className="fa-solid fa-location-dot fa-bounce"></i> Click here for Location</a>
                        </MDBCardText>
                        <MDBCardText>
                          Date:<small className="text-muted">{i.date.slice(0, 10)}</small> <br />
                          Due date:<small className="text-muted">{i.due_date}</small>
                        </MDBCardText>
                        <Button variant="contained" onClick={() => handleRegister(i.id)}>
                          Register
                        </Button>
                      </MDBCardBody>
                    </MDBCol>
                  </MDBRow>
                </MDBCard>
              </div>
            )) : (
              <div className="text-center mt-4">No events available</div>
            )}
          </Row>
          <Stack spacing={2} className="mt-4 d-flex justify-content-center">
            <Pagination
              count={Math.ceil(athletesEvents.length / eventsPerPage)}
              page={currentPage}
              onChange={handlePageChange}
            />
          </Stack>
        </div>
      </Container>
    </div>
    </div>
  );
}

export default AtheletHome;
