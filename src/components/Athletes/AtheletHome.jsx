import React, { useEffect, useState } from 'react'
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
import { Col, Container, Row } from "react-bootstrap";
import { EventregApi, athletesEventApi } from '../Services/Allapis';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


function AtheletHome() {
  const fetchAsideItems = () => {
    const asideObj = [
      { text: "User Profile", link: "/user-profile", icon: "th-large" },
      {
        text: "Sponsors", link: "",icon: "sticky-note",
      },
      { text: "My Wins", link: "/Winnerslist", icon: "sticky-note" },
      { text: "Events Registered", link: "/myEvents", icon: "sticky-note" }

    ];

    return <Aside asideObj={asideObj} />;
  };

  const [athletesEvents, setAthletesEvents] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 4;

  const getEvents = async () => {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      const reqHeader = { Authorization: `Token ${token}` };
      const result = await athletesEventApi(reqHeader);
      setAthletesEvents(result.data);
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  if (athletesEvents === null) return <></>;

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = athletesEvents.slice(indexOfFirstEvent, indexOfLastEvent);

  
  
  const  handleRegister = async (uId) => {
    const payload = {event:uId};
    try{
      const token = localStorage.getItem('token');
      const reqHeader = { Authorization: `Token ${token}` };
      const result = await EventregApi(uId,reqHeader);
      console.log(result);
    }catch(error){
      console.log(error);
    } 
  }


  return (
    <div className="main-grid">
      <div>{fetchAsideItems()}</div>
      <Container className="mt-4 home-body">
        <div>
          <div className="text-start event-head mb-4 sticky-top">
            <h3><b>Event List</b></h3>
          </div>
          <Row>

            {currentEvents.map((i) => (
              <div className="col-6">
                <MDBCard key={i.id} style={{ height: "200px" }} className="mt-3">
                  <MDBRow className="g-0">
                    <MDBCol md="5">
                      <MDBCardImage
                        style={{ height: "200px", width: "100%" }}
                        src={`http://127.0.0.1:8000` + i.image}
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
                        <button onClick={() => handleRegister(i.id)} className='btn btn-primary'>Register</button>
                      </MDBCardBody>
                    </MDBCol>
                  </MDBRow>
                </MDBCard>
              </div>
            ))}

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
  )
}

export default AtheletHome



