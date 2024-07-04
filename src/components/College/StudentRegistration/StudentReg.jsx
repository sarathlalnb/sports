import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import "./student.css";
import { studentregApi } from '../../Services/Allapis';

function StudentReg() {
  const [validated, setValidated] = useState(false);
  const [userdata, setUserdata] = useState({
    first_name: "",
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    const { first_name, username, email, password } = userdata;

    if (!first_name || !username || !email || !password) {
      alert("Please fill the details completely");
      return;
    }
    const pId = localStorage.getItem("uId");
    const payload = {
      first_name: userdata.first_name,
      username: userdata.username,
      email: userdata.email,
      password: userdata.password,
      college_id: pId

    }

    console.log("Submitting data:", userdata);

    try {
      const result = await studentregApi(payload);
      console.log("API response:", result);
      if (result.status >= 200 && result.status <= 300) {
        alert("Registration success");
        setUserdata({
          first_name: "",
          username: "",
          email: "",
          password: "",
        });
      } else {
        console.log("API error:", result.data);
        alert(result.data);
      }
    } catch (error) {
      console.log("API call failed:", error);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div id='studentmain'>
      <div className='row'>
        <div className="mx-5 mt-5 col-4">
          <div className='text-center'>
            <h3 className='text-white'>Student Registration</h3>
          </div>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationCustom03">
                <Form.Label className='text-white '>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="First Name"
                  value={userdata.first_name}
                  onChange={(e) => setUserdata({ ...userdata, first_name: e.target.value })}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid First name.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationCustom03">
                <Form.Label className='text-white'>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  value={userdata.username}
                  onChange={(e) => setUserdata({ ...userdata, username: e.target.value })}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid Username
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationCustom03">
                <Form.Label className='text-white'>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={userdata.password}
                  onChange={(e) => setUserdata({ ...userdata, password: e.target.value })}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid Password.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationCustom03">
                <Form.Label className='text-white '>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  value={userdata.email}
                  onChange={(e) => setUserdata({ ...userdata, email: e.target.value })}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid email address
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Form.Group className="mb-3">
              <Form.Check
                className='text-white'
                required
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />
            </Form.Group>
            <Button type="submit">Submit form</Button>
          </Form>
        </div>
        <div className="col-6"></div>
      </div>
    </div>
  );
}

export default StudentReg;
