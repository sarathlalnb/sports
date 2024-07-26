import React, { useEffect, useState } from "react";
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
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { getEventListApi } from "../../Services/Allapis";

export const SponsorHome = () => {
  const fetchAsideItems = () => {
    const asideObj = [
      { text: "Dashboard", link: "/college-home", icon: "th-large" },
      {
        text: "Available Athletes",
        link: "/sponsor/available-athletes",
        icon: "sticky-note",
      },
      {
        text: "Sponsered Students",
        link: "/sponsor/sponsered-student",
        icon: "sticky-note",
      },
      {
        text: "Winners",
        link: "/sponsor/winner",
        icon: "sticky-note",
      },
    ];

    return <Aside asideObj={asideObj} />;
  };

  const [eventList, setEventList] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 3;

  const getEventList = async () => {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      const reqHeader = { Authorization: `Token ${token}` };
      const result = await getEventListApi(reqHeader);
      setEventList(result.data);
      console.log(eventList);
    }
  };

  useEffect(() => {
    getEventList();
  }, []);

  if (eventList === null) return <></>;

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = eventList.slice(indexOfFirstEvent, indexOfLastEvent);

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
            {currentEvents.map((i) => (
              <MDBCard style={{ height: "200px" }} className="mt-3" key={i.id}>
                <MDBRow className="g-0">
                  <MDBCol md="5">
                    <MDBCardImage
                      style={{ height: "200px", width: "100%" }}
                      src={`http://127.0.0.1:8000`+i.image}
                      alt="..."
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
            count={Math.ceil(eventList.length / eventsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
          />
        </Stack>
      </div>
    </div>
  );
};
