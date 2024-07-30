import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Event.css";
import Modal from "react-bootstrap/Modal";
import Button from "@mui/material/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import {
  EventdeleteApi,
  addEventApi,
  getAllEventsApi,
} from "../Services/Allapis";

function Event() {
  const [preview, setPreview] = useState("");
  const [addEvent, setAddEvent] = useState({
    title: "",
    venue: "",
    date: "",
    due_date:"",
    description: "",
    image: "",
  });
  const [show, setShow] = useState(false);
  const [token, setToken] = useState("");
  const [listEvents, setListEvents] = useState(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const setInputs = (e) => {
    const { value, name } = e.target;
    setAddEvent({ ...addEvent, [name]: value });
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
      setListEvents(messages);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    } else {
      setToken("");
    }
  }, []);

  useEffect(() => {
    getListEvents();
  }, []);

  useEffect(() => {
    if (addEvent.image) {
      setPreview(URL.createObjectURL(addEvent.image));
    } else {
      setPreview("");
    }
  }, [addEvent.image]);

  const handleAdd = async (e) => {
    e.preventDefault();
    const { title, venue, date, due_date, description, image } = addEvent;
    if (!title || !venue || !date || !due_date || !description || !image) {
      alert("Please fill all fields");
    } else {
      try {
        const reqBody = new FormData();
        reqBody.append("title", title);
        reqBody.append("venue", venue);
        reqBody.append("date", date);
        reqBody.append("due_date", due_date);
        reqBody.append("description", description);
        reqBody.append("image", image);
        await addEventApi(reqBody);
        getListEvents();
        alert("Event added Successfully")
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleDelete = async (eid) => {
    const token = localStorage.getItem("token");
    const reqHeader = { Authorization: `Token ${token}` };
    await EventdeleteApi(eid, reqHeader);
    getListEvents();
  };

  const handleSearch = () => {
    getListEvents(startDate, endDate);
  };

  if (listEvents === null) return <></>;

  return (
    <div className="event1">
      <Link to="/admin-home" style={{ textDecoration: "none", color: "white" }}>
        <i className="fa-solid fa-backward fa-beat mx-2"></i>Back
      </Link>
      <Container className="m-2 p-4">
        <div>
          <h1 className="text-center">Events</h1>
          <div className="text-center">
            <Button variant="contained" onClick={handleShow} className="e1 mt-5">
              Add Events
            </Button>
          </div>
        </div>
       
        <div>
          {listEvents?.map((i) => (
            <div className="event2 mt-5 ms-5" key={i.id}>
              <Row className="m-2 p-3">
                <Col>
                  <div className="text-white mt-5">
                    <h1>{i.title}</h1>
                    Event Id: {i.id} <br />
                    Date:
                    <i className="fa-solid fa-calendar-day ms-3 mt-2 mx-2"></i>
                    {i.date.slice(0, 10)}
                    <br /> 
                    Due Date:
                    <i className="fa-solid fa-calendar-day ms-3 mt-2 mx-2"></i>
                    {i.due_date}
                    <br />
                    <a href={i.venue}>
                      <i className="fa-solid fa-location-dot ms-3 mt-2 mx-3"></i>
                      {i.venue}
                    </a>
                    <br />

                    <p className="mt-2">{i.description}</p>
                    <button onClick={() => handleDelete(i.id)} className="btn">
                      <i style={{ color: "red", fontSize: "xx-large" }} className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </Col>
                <Col>
                  <img
                    className="ms-3"
                    style={{ width: "100%", height: "100%" }}
                    src={`http://127.0.0.1:8000` + i?.image}
                    alt=""
                  />
                </Col>
              </Row>
            </div>
          ))}
        </div>
      </Container>
      <div className="text-center">
        <Modal show={show} onHide={handleClose} className="mt-5">
          <Modal.Header closeButton>
            <Modal.Title style={{ width: "100%", textAlign: "center" }}>
              Add Events
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col>
                <div>
                  <label htmlFor="img1">
                    <input
                      type="file"
                      onChange={(e) =>
                        setAddEvent({
                          ...addEvent,
                          image: e.target.files[0],
                        })
                      }
                      id="img1"
                      style={{ display: "none" }}
                    />
                    <img
                      className="text-center w-100 mt-3"
                      src={
                        preview
                          ? preview
                          : "https://i.postimg.cc/vBb9w7gn/no-photo-or-blank-image-icon-loading-images-vector-37375020.jpg"
                      }
                      alt=""
                    />
                  </label>
                </div>
              </Col>
              <Col>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Title"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    onChange={setInputs}
                    name="title"
                  />
                </FloatingLabel>

                <FloatingLabel controlId="floatingPassword">
                  <Form.Control
                    type="datetime-local"
                    onChange={setInputs}
                    name="date"
                  />
                </FloatingLabel>

                <FloatingLabel controlId="floatingPassword">
                  

                  <Form.Control
                  label="due_date"
                    type="datetime-local"
                    onChange={setInputs}
                    name="due_date"
                  />
                </FloatingLabel>

                <FloatingLabel
                  controlId="floatingInput"
                  label="Venue"
                  className="mb-3 mt-3"
                >
                  <Form.Control
                    type="text"
                    onChange={setInputs}
                    name="venue"
                  />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Description">
                  <Form.Control
                    type="text"
                    onChange={setInputs}
                    name="description"
                  />
                </FloatingLabel>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={(e) => handleAdd(e)}>
              Add
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default Event;
